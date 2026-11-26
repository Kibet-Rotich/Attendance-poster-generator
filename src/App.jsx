import React, { useState, useEffect } from 'react';
import { Upload, Download } from 'lucide-react';
import { HUBS } from './hubs';
import { ROLES } from './hubs/roles';
// 2025 designs are kept in src/components/archive/2025 for reference.

// Hub and role come from the URL hash (#tech, #health/speaking, …) so each hub
// can share a direct link to its own attending or speaking page.
const parseHash = () => {
  const [hubId, roleId] = window.location.hash.slice(1).split('/');
  return {
    hub: HUBS.find(({ id }) => id === hubId) ?? HUBS[0],
    role: ROLES.find(({ id }) => id === roleId) ?? ROLES[0],
  };
};
const hashFor = (hub, role) => `#${hub.id}${role === ROLES[0] ? '' : `/${role.id}`}`;

export default function AttendingPosterGenerator() {
  const [attendeeData, setAttendeeData] = useState({
    name: 'Your Name Here',
    title: 'Your Title/Position',
    photo: null
  });

  const [hub, setHub] = useState(() => parseHash().hub);
  const [role, setRole] = useState(() => parseHash().role);
  const [selectedDesign, setSelectedDesign] = useState(0);
  const [mobileScale, setMobileScale] = useState(1);
  const selected = hub.designs[selectedDesign] ?? hub.designs[0];
  const SelectedPoster = selected.Component;
  const { eventData } = hub;

  const selectHub = (next) => {
    setHub(next);
    setSelectedDesign(0);
    window.history.replaceState(null, '', hashFor(next, role));
  };

  // Switching role keeps the current design so the two versions can be compared.
  const selectRole = (next) => {
    setRole(next);
    window.history.replaceState(null, '', hashFor(hub, next));
  };

  // Follow the hash if someone edits the URL or uses back/forward.
  useEffect(() => {
    const onHashChange = () => {
      const parsed = parseHash();
      setHub(parsed.hub);
      setRole(parsed.role);
      setSelectedDesign(0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.title = `${role.title} · ${hub.name}`;
  }, [hub, role]);

  // Calculate scale factor based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setMobileScale(0.9); // Slight shrink on mobile
      } else if (width < 768) {
        setMobileScale(0.95); // Minor shrink on tablet
      } else {
        setMobileScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAttendeeData({ ...attendeeData, photo: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadPoster = async () => {
    const posterElement = document.getElementById('poster-preview');
    if (!posterElement) {
      alert('Poster not found. Please try again.');
      return;
    }

    try {
      const htmlToImage = await import('https://cdn.skypack.dev/html-to-image@1.11.11');

      const toDataURL = (url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.crossOrigin = 'Anonymous';
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL('image/png'));
          };
          img.onerror = () => resolve(url);
          img.src = url;
        });
      };

      const originalStyles = [];
      const images = [];
      const nodes = posterElement.querySelectorAll('*');

      nodes.forEach((node) => {
        const computedStyle = window.getComputedStyle(node);

        originalStyles.push({
          node,
          backgroundImage: node.style.backgroundImage,
          background: node.style.background,
          filter: node.style.filter,
          webkitFilter: node.style.webkitFilter,
          backdropFilter: node.style.backdropFilter,
          webkitBackdropFilter: node.style.webkitBackdropFilter
        });

        if (computedStyle.backgroundImage && computedStyle.backgroundImage !== 'none') {
          const match = computedStyle.backgroundImage.match(/url\(["']?(.*?)["']?\)/);
          if (match && match[1]) {
            const imgUrl = match[1].replace(/["']/g, '');
            if (!imgUrl.startsWith('data:')) {
              images.push({ node, imgUrl, isBackground: true });
            }
          }
        }

        if (node.tagName === 'IMG' && node.src && !node.src.startsWith('data:')) {
          images.push({ node, imgUrl: node.src, isBackground: false });
        }
      });

      await Promise.all(images.map(async ({ node, imgUrl, isBackground }) => {
        try {
          const dataUrl = await toDataURL(imgUrl);
          if (isBackground) {
            const currentBg = node.style.backgroundImage;
            node.style.backgroundImage = currentBg.replace(/url\([^)]+\)/, `url(${dataUrl})`);
          } else {
            node.src = dataUrl;
          }
        } catch (e) {
          console.warn('Failed to process image:', imgUrl, e);
        }
      }));

      await new Promise(resolve => setTimeout(resolve, 500));

      const dataUrl = await htmlToImage.toPng(posterElement, {
        cacheBust: true,
        pixelRatio: 3,
        // Use the poster's own background; forcing a colour here overrides solid backgrounds.
        backgroundColor: window.getComputedStyle(posterElement).backgroundColor,
        style: {
          transform: 'none',
          opacity: 1,
        },
        filter: (node) => {
          if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') {
            return false;
          }
          return true;
        },
      });

      originalStyles.forEach(({ node, ...styles }) => {
        Object.entries(styles).forEach(([key, value]) => {
          node.style[key] = value || '';
        });
      });

      images.forEach(({ node, imgUrl, isBackground }) => {
        if (isBackground) {
          const currentBg = node.style.backgroundImage;
          node.style.backgroundImage = currentBg.replace(/url\([^)]+\)/, `url(${imgUrl})`);
        } else {
          node.src = imgUrl;
        }
      });

      const link = document.createElement('a');
      link.download = `${role.id}-poster-${hub.id}-${attendeeData.name.replace(/\s+/g, '-').toLowerCase()}-${`${selected.name} ${selected.props?.palette ?? ''}`.trim().replace(/\s+/g, '-').toLowerCase()}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to generate poster. Please try again or take a screenshot instead.');
    }
  };

  return (
    <div className="min-h-screen p-3 sm:p-4" style={{background: `linear-gradient(to bottom right, #1f2937, ${hub.accent}, #1f2937)`}}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{role.title}</h1>
          <p className="text-base sm:text-lg text-orange-300">{hub.name} · {hub.event}</p>
        </div>

        {/* Role switch: attending or speaking, for every hub and design */}
        <div className="flex justify-center mb-2 sm:mb-3">
          <div className="inline-flex gap-1 p-1 rounded-full bg-black/25 border border-white/10">
            {ROLES.map((r) => (
              <button
                key={r.id}
                onClick={() => selectRole(r)}
                className={`px-4 sm:px-6 py-1.5 rounded-full text-xs sm:text-sm font-bold transition ${
                  r.id === role.id ? 'bg-orange-500 text-white shadow-lg' : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {r.title}
              </button>
            ))}
          </div>
        </div>

        {/* Hub tabs */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="inline-flex flex-wrap justify-center gap-1 p-1 rounded-xl bg-black/25 border border-white/10">
            {HUBS.map((h) => (
              <button
                key={h.id}
                onClick={() => selectHub(h)}
                className={`px-3 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition ${
                  h.id === hub.id ? 'bg-white text-gray-900 shadow-lg' : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {h.tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 items-start">
          {/* Editor Panel */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Your Details</h2>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-white text-sm sm:text-base mb-1.5 sm:mb-2 font-semibold">Upload Your Photo</label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full p-2.5 sm:p-4 rounded-lg sm:rounded-xl bg-white/10 text-white text-sm sm:text-base border-2 border-orange-500/50 hover:border-orange-500 transition file:mr-3 sm:file:mr-4 file:py-1.5 sm:file:py-2 file:px-3 sm:file:px-4 file:rounded-full file:border-0 file:bg-orange-500 file:text-white file:text-xs sm:file:text-sm file:cursor-pointer"
                  />
                </div>
                <p className="text-orange-200 text-xs sm:text-sm mt-1.5 sm:mt-2">Upload a clear, professional photo</p>
              </div>

              <div>
                <label className="block text-white text-sm sm:text-base mb-1.5 sm:mb-2 font-semibold">Your Full Name</label>
                <input
                  type="text"
                  value={attendeeData.name}
                  onChange={(e) => setAttendeeData({ ...attendeeData, name: e.target.value })}
                  className="w-full p-2.5 sm:p-3 rounded-lg bg-white/10 text-white text-sm sm:text-base border-2 border-orange-500/50 focus:border-orange-500 outline-none transition"
                  placeholder="e.g., Eminent Augusta Ihezuo"
                />
              </div>

              <div>
                <label className="block text-white text-sm sm:text-base mb-1.5 sm:mb-2 font-semibold">Your Title/Position</label>
                <input
                  type="text"
                  value={attendeeData.title}
                  onChange={(e) => setAttendeeData({ ...attendeeData, title: e.target.value })}
                  className="w-full p-2.5 sm:p-3 rounded-lg bg-white/10 text-white text-sm sm:text-base border-2 border-orange-500/50 focus:border-orange-500 outline-none transition"
                  placeholder="e.g., Managing Director, Tech Solutions Ltd"
                />
              </div>

              <div>
                <label className="block text-white text-sm sm:text-base mb-1.5 sm:mb-2 font-semibold">Select Design Style</label>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                  {hub.designs.map(({ name, label }, id) => (
                    <button
                      key={`${name}-${label}`}
                      onClick={() => setSelectedDesign(id)}
                      className={`p-2.5 sm:p-4 rounded-lg font-bold text-xs sm:text-base transition transform hover:scale-105 ${
                        selectedDesign === id
                          ? 'text-white shadow-2xl'
                          : 'bg-white/10 text-white border-2 border-white/20 hover:border-orange-500'
                      }`}
                      style={selectedDesign === id ? {background: 'linear-gradient(to bottom right, #f97316, #9B2A26)'} : {}}
                    >
                      {name}<br/>
                      <span className="text-[10px] sm:text-sm font-normal">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={downloadPoster}
                className="w-full text-white py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:shadow-2xl transition transform hover:scale-105"
                style={{background: 'linear-gradient(to right, #f97316, #9B2A26, #f97316)'}}
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
                Download Your Poster
              </button>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Live Preview</h2>

            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{
                transform: `scale(${mobileScale})`,
                transformOrigin: 'top center',
                width: '100%',
                height: '100%',
                maxWidth: '600px',
                maxHeight: '600px',
                overflow: 'hidden'
              }}
            >
              <SelectedPoster attendeeData={attendeeData} eventData={eventData} role={role} {...selected.props} />
            </div>

            <div className="mt-4 sm:mt-6 bg-orange-500/10 border border-orange-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <p className="text-orange-200 text-xs sm:text-sm text-center font-semibold">
                💡 Click the "Download Your Poster" button to save your poster as a high-quality PNG image
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-4 sm:mt-6 bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">📋 Quick Guide</h3>
          <div className="grid md:grid-cols-2 gap-3 sm:gap-4 text-white">
            <div>
              <h4 className="font-bold text-orange-400 mb-1.5 sm:mb-2 text-xs sm:text-sm">How to Create:</h4>
              <ol className="space-y-0.5 sm:space-y-1 list-decimal list-inside text-[11px] sm:text-xs">
                <li>Upload a clear, professional headshot photo</li>
                <li>Enter your full name</li>
                <li>Add your job title or position</li>
                <li>Choose your preferred design style</li>
                <li>Click "Download Your Poster" to save the image</li>
              </ol>
            </div>
            <div>
              <h4 className="font-bold text-orange-400 mb-1.5 sm:mb-2 text-xs sm:text-sm">Tips for Best Results:</h4>
              <ul className="space-y-0.5 sm:space-y-1 list-disc list-inside text-[11px] sm:text-xs">
                <li>Use a high-quality photo with good lighting</li>
                <li>Plain or professional background works best</li>
                <li>Face should be clearly visible</li>
                <li>Keep title concise but descriptive</li>
                <li>Share on social media to {role.id === 'speaking' ? 'let people know you’re speaking!' : 'announce attendance!'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}