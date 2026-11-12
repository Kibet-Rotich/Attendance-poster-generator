import { PosterFrame, Photo, Detail } from './shared';
import { assets, colors, fonts, hashtags } from './theme';

// Welcome — follows the official poster: warm evening bokeh, a dark details
// bar with the "You are welcome" badge overlapping it, white sponsor strip.

const shadow = '0 0.3cqw 1.2cqw rgba(0,0,0,0.7)';

const Welcome = ({ attendeeData, eventData }) => (
  <PosterFrame
    style={{
      backgroundColor: colors.burgundyDeep,
      backgroundImage: `url(${assets.bokeh})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(30,10,14,0.75) 0%, rgba(30,10,14,0.2) 70%)' }} />

    {/* Headline */}
    <div className="absolute" style={{ left: '6cqw', top: '5cqw', width: '50cqw' }}>
      <p style={{ fontFamily: fonts.script, color: colors.peachSoft, fontSize: '7cqw', lineHeight: 1, textShadow: shadow }}>I will be attending</p>
      <p style={{ fontFamily: fonts.condensed, color: '#fff', fontSize: '3.4cqw', fontWeight: 600, letterSpacing: '0.18em', marginTop: '2cqw' }}>
        ELP ENTREPRENEURS HUB
      </p>
      <p style={{ fontFamily: fonts.condensed, color: colors.peach, fontSize: '7.6cqw', fontWeight: 800, lineHeight: 0.95, textShadow: shadow }}>
        NETWORKING DINNER
      </p>

      <div style={{ width: '12cqw', height: '0.6cqw', background: colors.peach, margin: '3cqw 0 2cqw' }} />

      <p style={{ fontFamily: fonts.serif, color: '#fff', fontSize: '4.6cqw', fontWeight: 700, lineHeight: 1.1, textShadow: shadow, overflowWrap: 'anywhere' }}>
        {attendeeData.name}
      </p>
      <p style={{ color: colors.peachSoft, fontSize: '2.6cqw', fontWeight: 500, marginTop: '0.6cqw', textShadow: shadow }}>{attendeeData.title}</p>
    </div>

    {/* Photo */}
    <div
      className="absolute"
      style={{
        right: '5cqw',
        top: '5cqw',
        width: '38cqw',
        height: '50cqw',
        padding: '0.8cqw',
        background: colors.cream,
        borderRadius: '2.5cqw',
        boxShadow: '0 1.5cqw 4cqw rgba(0,0,0,0.5)',
      }}
    >
      <Photo photo={attendeeData.photo} style={{ width: '100%', height: '100%', borderRadius: '1.8cqw' }} />
    </div>

    {/* Details bar */}
    <div
      className="absolute flex flex-col justify-center"
      style={{
        left: '8cqw',
        right: '4cqw',
        top: '61cqw',
        height: '23cqw',
        background: colors.bar,
        borderRadius: '2.5cqw',
        paddingLeft: '27cqw',
        gap: '1.8cqw',
      }}
    >
      <div className="flex" style={{ gap: '3cqw' }}>
        <Detail label="Date" value={eventData.date} size={2.8} />
        <Detail label="Time" value={eventData.time} size={2.8} />
      </div>
      <Detail label="Venue" value={eventData.venue} size={2.8} />
      <div style={{ height: '0.25cqw', background: 'rgba(255,255,255,0.7)', width: '90%' }} />
      <p style={{ color: colors.peach, fontFamily: fonts.condensed, fontSize: '3cqw', fontWeight: 700, letterSpacing: '0.08em' }}>SEE YOU THERE!</p>
    </div>

    {/* Badge overlapping the bar */}
    <img src={assets.badge} alt="ELP Entrepreneurs Hub Networking Dinner" className="absolute" style={{ left: '3cqw', top: '58cqw', width: '29cqw', height: 'auto' }} />

    {/* Sponsor strip */}
    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between" style={{ height: '11cqw', background: '#fff', padding: '0 5cqw' }}>
      <p style={{ color: colors.burgundy, fontSize: '2.6cqw', fontWeight: 600 }}>{hashtags}</p>
      <img src={assets.equity} alt="Equity" style={{ height: '7.5cqw', width: 'auto' }} />
    </div>
  </PosterFrame>
);

export default Welcome;
