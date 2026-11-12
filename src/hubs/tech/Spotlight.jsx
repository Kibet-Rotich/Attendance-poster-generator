import { CalendarDays, MapPin, Clock } from 'lucide-react';
import { PosterFrame, Photo } from './shared';
import { assets, colors, fonts, hashtags } from './theme';

// Spotlight — the attendee's photo fills the left half and fades into the
// dinner hall; event details stack on the right.

const iconStyle = { width: '3.2cqw', height: '3.2cqw', color: colors.gold, flexShrink: 0 };

const Detail = ({ icon, value }) => (
  <div className="flex items-center" style={{ gap: '1.8cqw', marginTop: '1.6cqw' }}>
    {icon}
    <span style={{ color: '#fff', fontSize: '2.8cqw', fontWeight: 500, whiteSpace: 'nowrap' }}>{value}</span>
  </div>
);

const Spotlight = ({ attendeeData, eventData }) => (
  <PosterFrame
    style={{
      backgroundColor: colors.ink,
      backgroundImage: `url(${assets.dinnerBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'right center',
    }}
  >
    {/* Photo, left 55% */}
    <Photo
      photo={attendeeData.photo}
      placeholderBg="rgba(42,20,20,0.6)"
      style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '55cqw' }}
    />
    {/* Fade from photo into background */}
    <div
      className="absolute inset-0"
      style={{ background: 'linear-gradient(to right, rgba(18,12,12,0) 22%, rgba(18,12,12,0.7) 40%, rgba(18,12,12,1) 54%, rgba(18,12,12,0.92) 75%)' }}
    />
    <div className="absolute inset-x-0 bottom-0" style={{ height: '35cqw', background: 'linear-gradient(to top, rgba(18,12,12,0.95), rgba(18,12,12,0))' }} />

    {/* Gold vertical accent */}
    <div className="absolute" style={{ left: '50cqw', top: '8cqw', bottom: '8cqw', width: '0.3cqw', background: colors.goldGradient, opacity: 0.8 }} />

    {/* Right column */}
    <div className="absolute flex flex-col" style={{ left: '54cqw', right: '5cqw', top: '5cqw', bottom: '5cqw' }}>
      <img src={assets.logoWhite} alt="ELP Tech Hub" style={{ height: '7cqw', width: 'auto', alignSelf: 'flex-start' }} />

      <p style={{ fontFamily: fonts.script, color: colors.gold, fontSize: '7cqw', lineHeight: 1, marginTop: '5cqw' }}>I Will Be</p>
      <p style={{ fontFamily: fonts.script, color: colors.gold, fontSize: '7cqw', lineHeight: 1 }}>Attending</p>

      <img src={assets.dinnerTitle} alt="8 Years On Dinner" style={{ width: '41cqw', height: 'auto', marginTop: '1.5cqw', marginLeft: '-1cqw' }} />

      <Detail icon={<CalendarDays style={iconStyle} strokeWidth={2} />} value={eventData.date} />
      <Detail icon={<MapPin style={iconStyle} strokeWidth={2} />} value={eventData.venue} />
      <Detail icon={<Clock style={iconStyle} strokeWidth={2} />} value={eventData.time} />
    </div>

    {/* Name plate, bottom left over the photo */}
    <div className="absolute" style={{ left: '5cqw', right: '52cqw', bottom: '5cqw' }}>
      <div style={{ width: '8cqw', height: '0.5cqw', background: colors.gold, marginBottom: '1.5cqw' }} />
      <p style={{ color: '#fff', fontWeight: 700, fontSize: '4.6cqw', lineHeight: 1.1, textShadow: '0 0.3cqw 1.2cqw rgba(0,0,0,0.9)', overflowWrap: 'anywhere' }}>
        {attendeeData.name}
      </p>
      <p style={{ color: colors.gold, fontSize: '2.5cqw', marginTop: '0.6cqw', textShadow: '0 0.3cqw 1cqw rgba(0,0,0,0.9)' }}>
        {attendeeData.title}
      </p>
    </div>

    <p className="absolute" style={{ right: '5cqw', bottom: '5cqw', color: 'rgba(255,255,255,0.75)', fontSize: '2.2cqw', fontWeight: 500 }}>
      {hashtags}
    </p>
  </PosterFrame>
);

export default Spotlight;
