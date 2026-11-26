import { HeartPulse } from 'lucide-react';
import { PosterFrame, Photo } from './shared';
import { assets, colors, fonts, theme, hashtags } from './theme';

// Gala Night — the dinner take on the Health Hub: midnight navy, candlelight,
// gold. The attendee's photo is the plate, set between a fork and a knife.

// Gold line-art cutlery. Each SVG is drawn in its own 10 x 100 box.
const stroke = { fill: 'none', stroke: colors.gold, strokeWidth: 1.2, strokeLinecap: 'round', strokeLinejoin: 'round' };

const Fork = ({ style }) => (
  <svg viewBox="0 0 10 100" className="absolute" style={style}>
    <path d="M1.5 2 V22 Q1.5 30 5 31 Q8.5 30 8.5 22 V2" {...stroke} />
    <path d="M3.7 2 V20 M6.3 2 V20" {...stroke} />
    <path d="M5 31 V96" {...stroke} strokeWidth={2} />
  </svg>
);

const Knife = ({ style }) => (
  <svg viewBox="0 0 10 100" className="absolute" style={style}>
    <path d="M4 2 Q9 12 8.5 44 L4 46 Z" {...stroke} />
    <path d="M5 46 V96" {...stroke} strokeWidth={2} />
  </svg>
);

const Rule = () => <div style={{ flex: 1, height: '0.2cqw', background: colors.goldDeep, opacity: 0.8 }} />;

// Plate geometry (cqw)
const PLATE = { cx: 50, cy: 45.5, d: 43 };

const GalaNight = ({ attendeeData, eventData, role }) => (
  <PosterFrame
    style={{
      backgroundColor: colors.midnight,
      backgroundImage: `url(${assets.candlelight})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Header */}
    <div className="absolute inset-x-0 text-center" style={{ top: '5cqw' }}>
      <p style={{ color: colors.gold, fontFamily: fonts.condensed, fontSize: '2.8cqw', fontWeight: 600, letterSpacing: '0.35em' }}>
        ELP HEALTH HUB · NETWORKING DINNER
      </p>
      <p style={{ color: colors.gold, fontFamily: fonts.script, fontSize: '8.5cqw', lineHeight: 1.1, marginTop: '1cqw', textShadow: '0 0.4cqw 1.5cqw rgba(0,0,0,0.6)' }}>
        {role.phrase}
      </p>
    </div>

    {/* Place setting: fork, plate (photo), knife */}
    <Fork style={{ left: `${PLATE.cx - PLATE.d / 2 - 11}cqw`, top: `${PLATE.cy - 19}cqw`, width: '4cqw', height: '38cqw' }} />
    <Knife style={{ left: `${PLATE.cx + PLATE.d / 2 + 7}cqw`, top: `${PLATE.cy - 19}cqw`, width: '4cqw', height: '38cqw' }} />

    <div
      className="absolute"
      style={{
        left: `${PLATE.cx - PLATE.d / 2}cqw`,
        top: `${PLATE.cy - PLATE.d / 2}cqw`,
        width: `${PLATE.d}cqw`,
        height: `${PLATE.d}cqw`,
        borderRadius: '50%',
        padding: '0.7cqw',
        background: colors.goldGradient,
        boxShadow: '0 0 6cqw rgba(227,187,106,0.35), 0 2cqw 4cqw rgba(0,0,0,0.55)',
      }}
    >
      {/* Plate rim */}
      <div style={{ width: '100%', height: '100%', borderRadius: '50%', padding: '4cqw', background: 'radial-gradient(circle, #f8f1e2 60%, #e6d7b8 100%)' }}>
        <div style={{ width: '100%', height: '100%', borderRadius: '50%', padding: '0.4cqw', background: colors.goldGradient }}>
          <Photo photo={attendeeData.photo} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
        </div>
      </div>
    </div>

    {/* Name */}
    <div className="absolute inset-x-0 text-center" style={{ top: '67.5cqw', padding: '0 8cqw' }}>
      <p style={{ color: '#fff', fontFamily: fonts.serif, fontSize: '5.2cqw', fontWeight: 700, lineHeight: 1.1, overflowWrap: 'anywhere' }}>{attendeeData.name}</p>
      <p style={{ color: colors.gold, fontSize: '2.7cqw', fontWeight: 500, marginTop: '0.6cqw' }}>{attendeeData.title}</p>
    </div>

    {/* Details */}
    <div className="absolute" style={{ left: '8cqw', right: '8cqw', bottom: '3cqw' }}>
      <div className="flex items-center" style={{ gap: '2cqw' }}>
        <Rule />
        <HeartPulse color={colors.gold} strokeWidth={1.8} style={{ width: '3.4cqw', height: '3.4cqw' }} />
        <Rule />
      </div>
      <p className="text-center" style={{ color: '#f3ead8', fontSize: '2.8cqw', fontWeight: 500, marginTop: '1.4cqw', whiteSpace: 'nowrap' }}>
        {eventData.date} <span style={{ color: colors.gold }}>·</span> {eventData.time} <span style={{ color: colors.gold }}>·</span> {eventData.venue}
      </p>
      <p className="text-center" style={{ color: colors.gold, fontFamily: fonts.serif, fontStyle: 'italic', fontSize: '3cqw', marginTop: '0.6cqw' }}>
        {theme.title}
      </p>
      <p className="text-center" style={{ color: 'rgba(243,234,216,0.7)', fontSize: '2.3cqw', fontWeight: 500, letterSpacing: '0.04em', marginTop: '0.4cqw' }}>
        {hashtags}
      </p>
    </div>
  </PosterFrame>
);

export default GalaNight;
