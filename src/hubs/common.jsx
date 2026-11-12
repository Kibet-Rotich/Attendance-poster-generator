import { Upload } from 'lucide-react';

// Building blocks shared by every hub's posters.
// Every size is in cqw (percent of poster width), so a poster looks the same
// in the mobile preview and in the 600px download.

// Square poster root. The id is what the download button captures.
export const PosterFrame = ({ font, style, children }) => (
  <div
    id="poster-preview"
    className="relative w-full overflow-hidden shadow-2xl mx-auto"
    style={{
      aspectRatio: '1/1',
      maxWidth: '600px',
      containerType: 'inline-size',
      fontFamily: font,
      ...style,
    }}
  >
    {children}
  </div>
);

// Attendee photo, or an upload placeholder. Size and shape come from `style`.
export const Photo = ({ photo, style, placeholderColor = '#ffffff', placeholderBg = '#333333' }) => (
  <div className="overflow-hidden" style={{ background: placeholderBg, ...style }}>
    {photo ? (
      <img src={photo} alt="Attendee" className="w-full h-full object-cover" />
    ) : (
      <div className="w-full h-full flex flex-col items-center justify-center" style={{ color: placeholderColor }}>
        <Upload style={{ width: '7cqw', height: '7cqw' }} />
        <p style={{ fontSize: '2.4cqw', marginTop: '1cqw' }}>Upload Photo</p>
      </div>
    )}
  </div>
);
