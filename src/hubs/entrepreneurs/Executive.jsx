import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { PosterFrame, Photo } from './shared';
import { assets, colors, fonts } from './theme';

// Executive — a light, boardroom-style card: full-height photo panel on the
// left, serif headline on cream, badge overlapping the photo.

const iconStyle = { width: '3.4cqw', height: '3.4cqw', color: colors.burgundy, flexShrink: 0 };

const Line = ({ icon, children }) => (
  <div className="flex items-center" style={{ gap: '2cqw', marginTop: '1.8cqw' }}>
    {icon}
    <span style={{ color: colors.ink, fontSize: '3.1cqw', fontWeight: 500, whiteSpace: 'nowrap' }}>{children}</span>
  </div>
);

const Executive = ({ attendeeData, eventData, role }) => (
  <PosterFrame style={{ background: colors.cream }}>
    {/* Photo panel */}
    <div className="absolute" style={{ left: 0, top: 0, bottom: 0, width: '42cqw', background: colors.burgundy }}>
      <Photo photo={attendeeData.photo} style={{ position: 'absolute', inset: '4cqw 4cqw 18cqw 4cqw', borderRadius: '1.5cqw' }} />
    </div>

    {/* Badge overlapping the photo's lower edge */}
    <img src={assets.badge} alt="ELP Entrepreneurs Hub Networking Dinner" className="absolute" style={{ left: '8cqw', bottom: '2.5cqw', width: '26cqw', height: 'auto', filter: 'drop-shadow(0 1cqw 1.5cqw rgba(0,0,0,0.25))' }} />

    {/* Text column */}
    <div className="absolute flex flex-col" style={{ left: '49cqw', right: '5cqw', top: '7cqw' }}>
      <p style={{ color: colors.burgundy, fontFamily: fonts.condensed, fontWeight: 700, whiteSpace: 'nowrap', ...(role.atThe.length > 18 ? { fontSize: '2.6cqw', letterSpacing: '0.14em' } : { fontSize: '3cqw', letterSpacing: '0.3em' }) }}>{role.atThe.toUpperCase()}</p>
      <p style={{ fontFamily: fonts.serif, color: colors.ink, fontSize: '7.4cqw', fontWeight: 700, lineHeight: 1.02, marginTop: '1.5cqw' }}>
        Networking Dinner
      </p>
      <p style={{ fontFamily: fonts.condensed, color: '#c2703d', fontSize: '3.6cqw', fontWeight: 700, letterSpacing: '0.08em', marginTop: '1.5cqw' }}>
        ELP ENTREPRENEURS HUB
      </p>

      <div style={{ width: '10cqw', height: '0.5cqw', background: colors.burgundy, margin: '4cqw 0 3cqw' }} />

      <p style={{ fontFamily: fonts.serif, color: colors.burgundy, fontSize: '5cqw', fontWeight: 700, lineHeight: 1.1, overflowWrap: 'anywhere' }}>
        {attendeeData.name}
      </p>
      <p style={{ color: '#6b5650', fontSize: '2.8cqw', marginTop: '0.8cqw' }}>{attendeeData.title}</p>

      <div style={{ marginTop: '3cqw' }}>
        <Line icon={<CalendarDays style={iconStyle} />}>{eventData.date}</Line>
        <Line icon={<Clock style={iconStyle} />}>{eventData.time}</Line>
        <Line icon={<MapPin style={iconStyle} />}>{eventData.venue}</Line>
      </div>
    </div>
  </PosterFrame>
);

export default Executive;
