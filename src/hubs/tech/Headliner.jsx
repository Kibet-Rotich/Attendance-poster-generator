import { PosterFrame, Photo, InfoRow } from './shared';
import { assets, colors, fonts, hashtags } from './theme';

// Headliner — follows the version of the official poster with the two models:
// title and details on the left, and the attendee standing where the models were.

const shadow = '0 0.3cqw 1.2cqw rgba(0,0,0,0.85)';

const Headliner = ({ attendeeData, eventData }) => (
  <PosterFrame
    style={{
      backgroundColor: colors.ink,
      backgroundImage: `url(${assets.dinnerBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div
      className="absolute inset-0"
      style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.85) 100%)' }}
    />

    {/* Left column: logo, headline, title art, details */}
    <div className="absolute flex flex-col" style={{ left: '4.5cqw', width: '55cqw', top: '4cqw' }}>
      <img src={assets.logoWhite} alt="ELP Tech Hub" style={{ height: '8.5cqw', width: 'auto', alignSelf: 'center' }} />

      <p
        style={{
          fontFamily: fonts.script,
          color: colors.gold,
          fontSize: '6.4cqw',
          whiteSpace: 'nowrap',
          lineHeight: 1,
          marginTop: '2cqw',
          marginLeft: '2cqw',
          textShadow: '0 0.4cqw 1.2cqw rgba(0,0,0,0.7)',
        }}
      >
        I Will Be Attending
      </p>

      <img src={assets.dinnerTitle} alt="8 Years On Dinner" style={{ width: '55cqw', maxWidth: 'none', height: 'auto', marginLeft: '-2cqw' }} />

      <div style={{ marginTop: '3.5cqw' }}>
        <InfoRow label="DATE" value={eventData.date} scale={1.05} />
        <InfoRow label="VENUE" value={eventData.venue} scale={1.05} />
        <InfoRow label="TIME" value={eventData.time} scale={1.05} />
      </div>

      <p style={{ color: '#fff', fontWeight: 700, fontSize: '3.1cqw', marginTop: '2.5cqw', letterSpacing: '0.03em' }}>
        THEME: <span style={{ color: colors.gold }}>8 YEARS ON</span>
      </p>
    </div>

    {/* Right: the attendee, where the models stood */}
    <div
      className="absolute"
      style={{
        right: '3.5cqw',
        top: '15cqw',
        width: '34.5cqw',
        height: '50cqw',
        padding: '0.8cqw',
        background: colors.goldGradient,
        borderRadius: '18cqw 18cqw 1.5cqw 1.5cqw',
        boxShadow: '0 0 5cqw rgba(246,199,104,0.3), 0 1.5cqw 4cqw rgba(0,0,0,0.7)',
      }}
    >
      <Photo photo={attendeeData.photo} style={{ width: '100%', height: '100%', borderRadius: '17.2cqw 17.2cqw 1cqw 1cqw' }} />
    </div>

    {/* Name plate under the photo */}
    <div className="absolute text-center" style={{ right: '1.5cqw', width: '38.5cqw', top: '68cqw' }}>
      <p style={{ color: colors.gold, fontWeight: 700, fontSize: '4.4cqw', lineHeight: 1.15, textShadow: shadow, overflowWrap: 'anywhere' }}>
        {attendeeData.name}
      </p>
      <p style={{ color: '#fff', fontWeight: 500, fontSize: '2.6cqw', lineHeight: 1.3, marginTop: '0.6cqw', textShadow: shadow }}>
        {attendeeData.title}
      </p>
    </div>

    {/* Footer */}
    <div className="absolute left-0 right-0 flex justify-center" style={{ bottom: '5cqw' }}>
      <div style={{ background: colors.maroonGlass, color: '#fff', fontWeight: 600, fontSize: '3cqw', padding: '1.2cqw 3.5cqw', letterSpacing: '0.04em' }}>
        SEE YOU THERE! <span style={{ color: colors.gold }}>{hashtags}</span>
      </div>
    </div>
  </PosterFrame>
);

export default Headliner;
