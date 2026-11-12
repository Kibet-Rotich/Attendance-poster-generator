import { Stethoscope, Microscope, HeartPulse, Pill, Cross } from 'lucide-react';
import { PosterFrame, Photo, IconOrb } from './shared';
import { assets, colors, fonts, theme, palettes } from './theme';

// Connected — the poster's arc of glowing medical icons, with the attendee
// at its centre where the globe was. Name on a maroon banner, details in the
// dark bar with the badge, as on the official poster.
// `palette` picks the colour scheme ('blue' or 'gold', see theme.js).

// Arc centre and radius (cqw); orbs sit on it at these angles.
const CX = 50;
const CY = 45;
const R = 36;
const orbs = [
  { icon: Stethoscope, deg: 160 },
  { icon: Microscope, deg: 125 },
  { icon: HeartPulse, deg: 90 },
  { icon: Pill, deg: 55 },
  { icon: Cross, deg: 20 },
].map(({ icon, deg }) => ({
  icon,
  x: CX + R * Math.cos((deg * Math.PI) / 180),
  y: CY - R * Math.sin((deg * Math.PI) / 180),
}));

const Connected = ({ attendeeData, eventData, palette = 'blue' }) => {
  const p = palettes[palette];
  return (
  <PosterFrame style={p.background}>
    {/* Glowing arc */}
    <svg className="absolute inset-0" viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
      <path
        d={`M ${CX - R * 0.94} ${CY - R * 0.34} A ${R} ${R} 0 0 1 ${CX + R * 0.94} ${CY - R * 0.34}`}
        fill="none"
        stroke={p.highlight}
        strokeWidth="0.9"
        opacity="0.9"
        style={{ filter: `drop-shadow(0 0 1.2px ${p.highlight})` }}
      />
      <circle cx={CX} cy={CY - 3} r="21" fill="none" stroke={p.accent} strokeWidth="0.3" opacity="0.6" />
      <circle cx={CX} cy={CY - 3} r="24" fill="none" stroke={p.accent} strokeWidth="0.15" opacity="0.35" />
    </svg>

    {orbs.map(({ icon, x, y }) => (
      <IconOrb key={y + x} icon={icon} x={x} y={y} size={12} palette={p} />
    ))}

    {/* Photo at the centre */}
    <div
      className="absolute"
      style={{
        left: `${CX - 17}cqw`,
        top: `${CY - 20}cqw`,
        width: '34cqw',
        height: '34cqw',
        borderRadius: '50%',
        padding: '0.8cqw',
        background: p.ring,
        boxShadow: `0 0 5cqw ${p.ringGlow}`,
      }}
    >
      <Photo photo={attendeeData.photo} placeholderColor={p.accent} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
    </div>

    {/* Name banner */}
    <div
      className="absolute text-center"
      style={{
        left: '14cqw',
        right: '14cqw',
        top: '57cqw',
        padding: '1.4cqw 3cqw 1.6cqw',
        background: 'linear-gradient(180deg, rgba(142,36,48,0.95), rgba(110,24,36,0.95))',
        borderRadius: '2.5cqw',
        boxShadow: '0 1cqw 3cqw rgba(0,0,0,0.5)',
      }}
    >
      <p style={{ color: p.accent, fontFamily: fonts.condensed, fontSize: '2.8cqw', fontWeight: 700, letterSpacing: '0.3em' }}>I WILL BE ATTENDING</p>
      <p style={{ color: '#fff', fontFamily: fonts.condensed, fontSize: '6.2cqw', fontWeight: 800, lineHeight: 1.05, textTransform: 'uppercase', overflowWrap: 'anywhere' }}>
        {attendeeData.name}
      </p>
      <p style={{ color: '#f2dede', fontSize: '2.6cqw', fontWeight: 500 }}>{attendeeData.title}</p>
    </div>

    {/* Details bar */}
    <div
      className="absolute flex flex-col justify-center"
      style={{ left: '7cqw', right: '3cqw', bottom: '3cqw', height: '19cqw', background: colors.bar, borderRadius: '2cqw', paddingLeft: '22cqw', gap: '1.3cqw' }}
    >
      <div className="flex" style={{ gap: '4cqw', fontSize: '3cqw', color: '#fff', fontWeight: 500, whiteSpace: 'nowrap' }}>
        <span>DATE: <span style={{ color: p.highlight }}>{eventData.date.toUpperCase()}</span></span>
        <span>TIME: <span style={{ color: p.highlight }}>{eventData.time.toUpperCase()}</span></span>
      </div>
      <p style={{ fontSize: '3cqw', color: '#fff', fontWeight: 500, whiteSpace: 'nowrap' }}>
        VENUE: <span style={{ color: p.highlight }}>{eventData.venue.toUpperCase()}</span>
      </p>
      <div style={{ height: '0.2cqw', background: 'rgba(255,255,255,0.75)', width: '92%' }} />
      <p style={{ fontFamily: fonts.condensed, fontSize: '3.4cqw', color: p.themeText, fontWeight: 800, letterSpacing: '0.04em' }}>
        {theme.title.toUpperCase()}
      </p>
    </div>

    <img src={assets.badge} alt="ELP Health Hub Networking Dinner" className="absolute" style={{ left: '1.5cqw', bottom: '1.5cqw', width: '25cqw', height: 'auto' }} />
  </PosterFrame>
  );
};

export default Connected;
