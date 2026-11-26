import { PosterFrame, Photo, InfoRow } from './shared';
import { assets, colors, fonts, hashtags } from './theme';

// Classic — closest match to the official event poster.

const shadow = '0 0.3cqw 1cqw rgba(0,0,0,0.8)';

const Classic = ({ attendeeData, eventData, role }) => (
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
      style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.8) 100%)' }}
    />

    <div className="relative h-full flex flex-col items-center" style={{ padding: '3.5cqw 5cqw 0' }}>
      <img src={assets.logoWhite} alt="ELP Tech Hub" style={{ height: '8.5cqw', width: 'auto' }} />

      <p style={{ fontFamily: fonts.script, fontSize: '7cqw', lineHeight: 1, marginTop: '0.8cqw', color: colors.gold, textShadow: '0 0.4cqw 1.2cqw rgba(0,0,0,0.7)' }}>
        {role.title}
      </p>

      <img src={assets.dinnerTitle} alt="8 Years On Dinner" style={{ width: '52cqw', height: 'auto', marginTop: '0.3cqw' }} />

      <p style={{ color: '#fff', fontWeight: 700, fontSize: '3.1cqw', marginTop: '0.4cqw', letterSpacing: '0.03em' }}>
        THEME: <span style={{ color: colors.gold }}>8 YEARS ON</span>
      </p>

      <div className="w-full flex items-center" style={{ gap: '4cqw', marginTop: '2.5cqw' }}>
        <div
          style={{
            flexShrink: 0,
            width: '31cqw',
            height: '31cqw',
            borderRadius: '50%',
            padding: '1cqw',
            background: colors.goldGradient,
            boxShadow: '0 0 4cqw rgba(246,199,104,0.35), 0 1cqw 3cqw rgba(0,0,0,0.6)',
          }}
        >
          <Photo photo={attendeeData.photo} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
        </div>

        <div className="flex-1 min-w-0">
          <p style={{ color: colors.gold, fontWeight: 700, fontSize: '4.6cqw', lineHeight: 1.15, textShadow: shadow, overflowWrap: 'anywhere' }}>
            {attendeeData.name}
          </p>
          <p style={{ color: '#fff', fontWeight: 500, fontSize: '2.7cqw', lineHeight: 1.3, marginTop: '0.6cqw', marginBottom: '1.6cqw', textShadow: shadow }}>
            {attendeeData.title}
          </p>
          <InfoRow label="DATE" value={eventData.date} />
          <InfoRow label="VENUE" value={eventData.venue} />
          <InfoRow label="TIME" value={eventData.time} />
        </div>
      </div>

      <div className="absolute left-0 right-0 flex justify-center" style={{ bottom: '3cqw' }}>
        <div style={{ background: colors.maroonGlass, color: '#fff', fontWeight: 600, fontSize: '2.8cqw', padding: '1cqw 3cqw', letterSpacing: '0.04em' }}>
          SEE YOU THERE! <span style={{ color: colors.gold }}>{hashtags}</span>
        </div>
      </div>
    </div>
  </PosterFrame>
);

export default Classic;
