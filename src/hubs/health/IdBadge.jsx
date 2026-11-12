import { CalendarDays, Clock, MapPin, HeartPulse } from 'lucide-react';
import { PosterFrame, Photo } from './shared';
import { assets, colors, fonts, theme, navyBackground } from './theme';

// ID Badge — a play on "Beyond the Badge": the attendee's own staff-style ID
// card on a lanyard, with the event theme alongside.

const iconStyle = { width: '3.2cqw', height: '3.2cqw', color: colors.cyan, flexShrink: 0 };

const Line = ({ icon, children }) => (
  <div className="flex items-center" style={{ gap: '1.8cqw', marginTop: '1.6cqw' }}>
    {icon}
    <span style={{ color: '#fff', fontSize: '3cqw', fontWeight: 500, whiteSpace: 'nowrap' }}>{children}</span>
  </div>
);

// Card geometry (cqw)
const CARD = { left: 7, top: 19, width: 42, height: 77 };
const clipX = CARD.left + CARD.width / 2;

const IdBadge = ({ attendeeData, eventData }) => (
  <PosterFrame style={navyBackground}>
    {/* Lanyard straps */}
    <svg className="absolute inset-0" viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
      <line x1={clipX - 20} y1="-2" x2={clipX - 1.5} y2={CARD.top - 2} stroke={colors.blue} strokeWidth="4.2" />
      <line x1={clipX + 20} y1="-2" x2={clipX + 1.5} y2={CARD.top - 2} stroke={colors.blue} strokeWidth="4.2" />
      <line x1={clipX - 20} y1="-2" x2={clipX - 1.5} y2={CARD.top - 2} stroke={colors.cyan} strokeWidth="0.35" strokeDasharray="1.2 1" />
      <line x1={clipX + 20} y1="-2" x2={clipX + 1.5} y2={CARD.top - 2} stroke={colors.cyan} strokeWidth="0.35" strokeDasharray="1.2 1" />
      <rect x={clipX - 3} y={CARD.top - 4} width="6" height="4.5" rx="1" fill="#cfd8e6" stroke="#8a97ad" strokeWidth="0.3" />
    </svg>

    {/* The card */}
    <div
      className="absolute flex flex-col items-center overflow-hidden"
      style={{
        left: `${CARD.left}cqw`,
        top: `${CARD.top}cqw`,
        width: `${CARD.width}cqw`,
        height: `${CARD.height}cqw`,
        background: '#fff',
        borderRadius: '2.5cqw',
        boxShadow: '0 2cqw 5cqw rgba(0,0,0,0.55)',
      }}
    >
      <div className="w-full flex items-center justify-center" style={{ height: '10cqw', background: `linear-gradient(90deg, ${colors.blue}, ${colors.navy})`, gap: '1.5cqw' }}>
        <HeartPulse color="#fff" style={{ width: '4cqw', height: '4cqw' }} />
        <span style={{ color: '#fff', fontFamily: fonts.condensed, fontSize: '3.6cqw', fontWeight: 700, letterSpacing: '0.12em' }}>ELP HEALTH HUB</span>
      </div>

      <Photo
        photo={attendeeData.photo}
        style={{ width: '25cqw', height: '29cqw', marginTop: '3cqw', borderRadius: '1.5cqw', border: `0.6cqw solid ${colors.blue}` }}
      />

      <p
        className="text-center"
        style={{ color: colors.navy, fontFamily: fonts.condensed, fontSize: '4.6cqw', fontWeight: 800, lineHeight: 1.05, textTransform: 'uppercase', marginTop: '2.5cqw', padding: '0 3cqw', overflowWrap: 'anywhere' }}
      >
        {attendeeData.name}
      </p>
      <p className="text-center" style={{ color: '#55627a', fontSize: '2.4cqw', marginTop: '0.6cqw', padding: '0 3cqw' }}>{attendeeData.title}</p>

      <div style={{ marginTop: '2cqw', background: colors.maroon, color: '#fff', fontFamily: fonts.condensed, fontSize: '2.6cqw', fontWeight: 700, letterSpacing: '0.25em', padding: '0.6cqw 3cqw', borderRadius: '5cqw' }}>
        ATTENDEE
      </div>

      {/* Barcode */}
      <div
        style={{
          marginTop: 'auto',
          marginBottom: '3cqw',
          width: '26cqw',
          height: '4cqw',
          backgroundImage: 'repeating-linear-gradient(90deg, #0b1f4d 0 0.3cqw, transparent 0.3cqw 0.6cqw, #0b1f4d 0.6cqw 1.1cqw, transparent 1.1cqw 1.4cqw, #0b1f4d 1.4cqw 1.6cqw, transparent 1.6cqw 2.2cqw)',
        }}
      />
    </div>

    {/* Theme and details */}
    <div className="absolute" style={{ left: '55cqw', right: '4cqw', top: '9cqw' }}>
      <p style={{ color: colors.cyan, fontFamily: fonts.condensed, fontSize: '3cqw', fontWeight: 700, letterSpacing: '0.25em' }}>I WILL BE AT</p>
      <p style={{ color: '#fff', fontFamily: fonts.condensed, fontSize: '9cqw', fontWeight: 800, lineHeight: 0.92, marginTop: '1.5cqw' }}>BEYOND</p>
      <p style={{ color: '#fff', fontFamily: fonts.condensed, fontSize: '9cqw', fontWeight: 800, lineHeight: 0.92 }}>THE BADGE</p>
      <p style={{ color: '#c9d8f5', fontSize: '2.5cqw', lineHeight: 1.4, marginTop: '2cqw' }}>{theme.subtitle}</p>

      <div style={{ display: 'inline-block', marginTop: '2.5cqw', background: colors.maroon, color: '#fff', fontFamily: fonts.condensed, fontSize: '2.6cqw', fontWeight: 700, letterSpacing: '0.08em', padding: '0.8cqw 2cqw', borderRadius: '1cqw' }}>
        NETWORKING DINNER
      </div>

      <div style={{ marginTop: '1.5cqw' }}>
        <Line icon={<CalendarDays style={iconStyle} />}>{eventData.date}</Line>
        <Line icon={<Clock style={iconStyle} />}>{eventData.time}</Line>
        <Line icon={<MapPin style={iconStyle} />}>{eventData.venue}</Line>
      </div>
    </div>

    <img src={assets.badge} alt="ELP Health Hub Networking Dinner" className="absolute" style={{ right: '4cqw', bottom: '3cqw', width: '19cqw', height: 'auto' }} />
  </PosterFrame>
);

export default IdBadge;
