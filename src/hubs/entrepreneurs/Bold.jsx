import { PosterFrame, Photo, Detail } from './shared';
import { assets, colors, fonts } from './theme';

// Bold — typographic and confident: a giant "I'LL BE THERE.", an offset-framed
// photo and a peach name band.

const big = { fontFamily: fonts.condensed, fontWeight: 800, fontSize: '17cqw', lineHeight: 0.86, letterSpacing: '-0.01em' };

const Bold = ({ attendeeData, eventData, role }) => (
  <PosterFrame style={{ background: `radial-gradient(circle at 80% 20%, #6e1528 0%, ${colors.burgundyDeep} 60%)` }}>
    {/* Headline */}
    <div className="absolute" style={{ left: '6cqw', top: '7cqw' }}>
      <p style={{ ...big, color: colors.cream }}>{role.bold[0]}</p>
      <p style={{ ...big, color: 'transparent', WebkitTextStroke: `0.45cqw ${colors.peach}` }}>{role.bold[1]}</p>
      <p style={{ ...big, color: colors.peach }}>{role.bold[2]}</p>
      <p style={{ fontFamily: fonts.condensed, color: colors.peachSoft, fontSize: '3.2cqw', fontWeight: 600, letterSpacing: '0.16em', marginTop: '3cqw' }}>
        ELP ENTREPRENEURS HUB
      </p>
      <p style={{ fontFamily: fonts.condensed, color: '#fff', fontSize: '3.2cqw', fontWeight: 600, letterSpacing: '0.16em' }}>
        NETWORKING DINNER
      </p>
    </div>

    {/* Photo with offset frame */}
    <div className="absolute" style={{ right: '7cqw', top: '8cqw', width: '38cqw', height: '46cqw' }}>
      <div className="absolute" style={{ inset: 0, transform: 'translate(2.5cqw, 2.5cqw)', background: colors.peach }} />
      <Photo photo={attendeeData.photo} style={{ position: 'absolute', inset: 0 }} />
    </div>
    <img src={assets.badge} alt="ELP Entrepreneurs Hub Networking Dinner" className="absolute" style={{ right: '1.5cqw', top: '42cqw', width: '19cqw', height: 'auto' }} />

    {/* Name band */}
    <div className="absolute inset-x-0 flex flex-col justify-center" style={{ top: '64cqw', height: '16cqw', background: colors.peach, padding: '0 6cqw' }}>
      <p style={{ fontFamily: fonts.serif, color: colors.burgundyDeep, fontSize: '5.6cqw', fontWeight: 700, lineHeight: 1.05, overflowWrap: 'anywhere' }}>
        {attendeeData.name}
      </p>
      <p style={{ color: colors.burgundy, fontSize: '2.8cqw', fontWeight: 600, marginTop: '0.6cqw' }}>{attendeeData.title}</p>
    </div>

    {/* Details */}
    <div className="absolute flex flex-wrap" style={{ left: '6cqw', right: '6cqw', bottom: '6cqw', columnGap: '5cqw', rowGap: '1.5cqw' }}>
      <Detail label="Date" value={eventData.date} size={2.9} />
      <Detail label="Time" value={eventData.time} size={2.9} />
      <Detail label="Venue" value={eventData.venue} size={2.9} />
    </div>
  </PosterFrame>
);

export default Bold;
