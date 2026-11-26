import { PosterFrame, Photo } from './shared';
import { assets, colors, fonts, theme, palettes, hashtags } from './theme';

// Vital Signs — light and clinical: chart-paper grid, a heartbeat line that
// runs into the attendee's photo, navy details footer.
// `palette` picks the colour scheme ('blue' or 'gold', see theme.js).

// Heartbeat trace (viewBox units = cqw). Flat, a beat, flat into the photo.
const Y = 52;
const ecg = [
  [0, Y], [10, Y], [12, Y - 2], [14, Y], [17, Y], [18.5, Y + 3], [21, Y - 9], [23.5, Y + 8], [25.5, Y], [29, Y],
  [31, Y - 3], [33.5, Y], [42, Y], [43.5, Y + 2], [45.5, Y - 9], [47.5, Y + 4], [49, Y], [56, Y],
  [84, Y], [86, Y - 6], [88, Y + 3], [89.5, Y], [100, Y],
].map((p) => p.join(',')).join(' ');

const footerItem = (label, value, labelColor) => (
  <div style={{ flex: 1 }}>
    <p style={{ color: labelColor, fontFamily: fonts.condensed, fontSize: '2.2cqw', fontWeight: 700, letterSpacing: '0.25em' }}>{label}</p>
    <p style={{ color: '#fff', fontSize: '3cqw', fontWeight: 600, marginTop: '0.4cqw', whiteSpace: 'nowrap' }}>{value}</p>
  </div>
);

const VitalSigns = ({ attendeeData, eventData, role, palette = 'blue' }) => {
  const p = palettes[palette];
  return (
  <PosterFrame
    style={{
      backgroundColor: p.paper,
      backgroundImage: [
        `linear-gradient(${p.grid} 0.15cqw, transparent 0.15cqw)`,
        `linear-gradient(90deg, ${p.grid} 0.15cqw, transparent 0.15cqw)`,
      ].join(', '),
      backgroundSize: '4cqw 4cqw',
    }}
  >
    {/* Header: badge + hub name */}
    <div className="absolute flex items-center" style={{ left: '5cqw', top: '4cqw', gap: '2.5cqw' }}>
      <img src={assets.badge} alt="ELP Health Hub Networking Dinner" style={{ width: '15cqw', height: 'auto' }} />
      <div>
        <p style={{ color: p.ink, fontFamily: fonts.condensed, fontSize: '4.2cqw', fontWeight: 800, letterSpacing: '0.06em', lineHeight: 1 }}>ELP HEALTH HUB</p>
        <p style={{ color: colors.maroon, fontFamily: fonts.condensed, fontSize: '3cqw', fontWeight: 600, letterSpacing: '0.2em' }}>NETWORKING DINNER</p>
      </div>
    </div>

    {/* Headline */}
    <div className="absolute" style={{ left: '6cqw', top: '24cqw', width: '50cqw' }}>
      <p style={{ color: p.ink, fontFamily: fonts.condensed, fontSize: '8.4cqw', fontWeight: 800, lineHeight: 0.95 }}>I WILL BE</p>
      <p style={{ color: p.inkAccent, fontFamily: fonts.condensed, fontSize: '8.4cqw', fontWeight: 800, lineHeight: 0.95 }}>{role.word.toUpperCase()}</p>
    </div>

    {/* Heartbeat line */}
    <svg className="absolute inset-0" viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
      <polyline points={ecg} fill="none" stroke={p.traceGlow} strokeWidth="1.6" strokeLinejoin="round" opacity="0.35" />
      <polyline points={ecg} fill="none" stroke={p.trace} strokeWidth="0.6" strokeLinejoin="round" />
    </svg>

    {/* Photo on the line */}
    <div
      className="absolute"
      style={{
        left: '55cqw',
        top: `${Y - 18}cqw`,
        width: '36cqw',
        height: '36cqw',
        borderRadius: '50%',
        padding: '0.9cqw',
        background: p.ring,
        boxShadow: '0 1.5cqw 4cqw rgba(11,31,77,0.3)',
      }}
    >
      <div style={{ width: '100%', height: '100%', borderRadius: '50%', padding: '0.7cqw', background: '#fff' }}>
        <Photo photo={attendeeData.photo} placeholderColor={p.accent} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
      </div>
    </div>

    {/* Name */}
    <div className="absolute" style={{ left: '6cqw', top: '60cqw', width: '46cqw' }}>
      <p style={{ color: p.ink, fontFamily: fonts.condensed, fontSize: '5.2cqw', fontWeight: 800, lineHeight: 1.02, textTransform: 'uppercase', overflowWrap: 'anywhere' }}>
        {attendeeData.name}
      </p>
      <p style={{ color: '#55627a', fontSize: '2.7cqw', marginTop: '0.6cqw' }}>{attendeeData.title}</p>
    </div>

    {/* Footer */}
    <div className="absolute inset-x-0 bottom-0" style={{ background: p.footer, padding: '2.6cqw 6cqw 3cqw' }}>
      <div className="flex items-baseline justify-between" style={{ marginBottom: '1.4cqw' }}>
        <p style={{ color: p.themeText, fontFamily: fonts.condensed, fontSize: '3.2cqw', fontWeight: 800, letterSpacing: '0.06em' }}>
          {theme.title.toUpperCase()}
        </p>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '2.3cqw', fontWeight: 500 }}>{hashtags}</p>
      </div>
      <div className="flex" style={{ gap: '3cqw' }}>
        {footerItem('DATE', eventData.date, p.accent)}
        {footerItem('TIME', eventData.time, p.accent)}
        {footerItem('VENUE', eventData.venue, p.accent)}
      </div>
    </div>
  </PosterFrame>
  );
};

export default VitalSigns;
