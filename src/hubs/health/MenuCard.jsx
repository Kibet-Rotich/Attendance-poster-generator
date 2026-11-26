import { PosterFrame, Photo } from './shared';
import { assets, colors, fonts, theme } from './theme';

// Menu Card — an elegant dinner menu on a midnight tablecloth. The event
// details are set like courses, with dotted leaders.

const Course = ({ label, value }) => (
  <div className="flex items-end" style={{ gap: '1.2cqw', marginTop: '1.3cqw' }}>
    <span style={{ color: colors.maroon, fontFamily: fonts.condensed, fontSize: '2.7cqw', fontWeight: 700, letterSpacing: '0.18em' }}>{label}</span>
    <span style={{ flex: 1, borderBottom: `0.3cqw dotted ${colors.goldDeep}`, marginBottom: '0.8cqw' }} />
    <span style={{ color: colors.navy, fontFamily: fonts.serif, fontSize: '2.9cqw', fontStyle: 'italic', whiteSpace: 'nowrap' }}>{value}</span>
  </div>
);

// Small gold heartbeat used as the menu's flourish.
const Flourish = () => (
  <svg viewBox="0 0 60 8" style={{ width: '24cqw', height: '3.2cqw', margin: '0 auto', display: 'block' }}>
    <polyline
      points="0,4 22,4 24,2.5 26,4 27.5,4 28.8,6 30.5,0.5 32.2,7 33.6,4 36,4 38,2.5 40,4 60,4"
      fill="none"
      stroke={colors.goldDeep}
      strokeWidth="0.6"
      strokeLinejoin="round"
    />
  </svg>
);

const MenuCard = ({ attendeeData, eventData, role }) => (
  <PosterFrame
    style={{
      backgroundColor: colors.midnight,
      backgroundImage: `url(${assets.candlelight})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* The card */}
    <div
      className="absolute flex flex-col items-center text-center"
      style={{
        inset: '5cqw 12cqw',
        background: colors.cream,
        borderRadius: '1cqw',
        boxShadow: '0 2.5cqw 6cqw rgba(0,0,0,0.6)',
        padding: '4.5cqw 7cqw 0',
      }}
    >
      {/* Gold double border */}
      <div className="absolute" style={{ inset: '1.6cqw', border: `0.35cqw solid ${colors.gold}`, borderRadius: '0.6cqw', pointerEvents: 'none' }} />
      <div className="absolute" style={{ inset: '2.5cqw', border: `0.15cqw solid ${colors.gold}`, borderRadius: '0.4cqw', pointerEvents: 'none' }} />

      <p style={{ color: colors.maroon, fontFamily: fonts.condensed, fontSize: '2.6cqw', fontWeight: 700, letterSpacing: '0.35em' }}>ELP HEALTH HUB</p>
      <p style={{ color: colors.navy, fontFamily: fonts.serif, fontSize: '5.8cqw', fontWeight: 700, fontStyle: 'italic', lineHeight: 1.1 }}>Networking Dinner</p>
      <Flourish />

      <div style={{ marginTop: '1.5cqw', width: '23cqw', height: '23cqw', borderRadius: '50%', padding: '0.6cqw', background: colors.goldGradient, flexShrink: 0 }}>
        <Photo photo={attendeeData.photo} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
      </div>

      <p style={{ color: colors.maroon, fontFamily: fonts.script, fontSize: '6.2cqw', lineHeight: 1.1, marginTop: '1.2cqw' }}>{role.phrase}</p>
      <p style={{ color: colors.navy, fontFamily: fonts.serif, fontSize: '4.4cqw', fontWeight: 700, lineHeight: 1.1, overflowWrap: 'anywhere' }}>{attendeeData.name}</p>
      <p style={{ color: '#6a6458', fontSize: '2.4cqw', marginTop: '0.4cqw' }}>{attendeeData.title}</p>

      <div style={{ width: '100%', marginTop: '1.6cqw' }}>
        <Course label="DATE" value={eventData.date} />
        <Course label="TIME" value={eventData.time} />
        <Course label="VENUE" value={eventData.venue} />
        <Course label="THEME" value={theme.title} />
      </div>
    </div>
  </PosterFrame>
);

export default MenuCard;
