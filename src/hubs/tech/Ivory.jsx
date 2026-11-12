import { PosterFrame, Photo } from './shared';
import { assets, colors, fonts, hashtags } from './theme';

// Ivory Invitation — a light, formal card. Typographic title (the gold title
// art is made for dark backgrounds), double gold border, arched photo.

const Corner = ({ style }) => (
  <div className="absolute" style={{ width: '6cqw', height: '6cqw', borderColor: colors.goldDeep, borderStyle: 'solid', borderWidth: 0, ...style }} />
);

const Ivory = ({ attendeeData, eventData }) => (
  <PosterFrame style={{ background: `radial-gradient(circle at 50% 40%, #fffaf0 0%, ${colors.cream} 55%, #f1e3c6 100%)` }}>
    {/* Double border */}
    <div className="absolute" style={{ inset: '3cqw', border: `0.5cqw solid ${colors.goldDeep}` }} />
    <div className="absolute" style={{ inset: '4.6cqw', border: `0.2cqw solid ${colors.goldDeep}`, opacity: 0.6 }} />
    <Corner style={{ top: '6cqw', left: '6cqw', borderTopWidth: '0.5cqw', borderLeftWidth: '0.5cqw' }} />
    <Corner style={{ top: '6cqw', right: '6cqw', borderTopWidth: '0.5cqw', borderRightWidth: '0.5cqw' }} />
    <Corner style={{ bottom: '6cqw', left: '6cqw', borderBottomWidth: '0.5cqw', borderLeftWidth: '0.5cqw' }} />
    <Corner style={{ bottom: '6cqw', right: '6cqw', borderBottomWidth: '0.5cqw', borderRightWidth: '0.5cqw' }} />

    <div className="relative h-full flex flex-col items-center text-center" style={{ padding: '8cqw 10cqw 7cqw' }}>
      <img src={assets.logoMaroon} alt="ELP Tech Hub" style={{ height: '8.5cqw', width: 'auto' }} />

      <p style={{ color: colors.goldDeep, fontSize: '2.2cqw', letterSpacing: '0.4em', fontWeight: 600, marginTop: '2.5cqw' }}>
        I WILL BE ATTENDING
      </p>

      {/* Typographic title */}
      <div className="flex items-center" style={{ marginTop: '0.5cqw' }}>
        <span style={{ fontFamily: fonts.script, color: colors.goldDeep, fontSize: '17cqw', lineHeight: 0.9 }}>8</span>
        <div className="text-left" style={{ marginLeft: '1.5cqw' }}>
          <p style={{ fontFamily: fonts.serif, color: colors.maroon, fontSize: '6cqw', fontWeight: 700, lineHeight: 1 }}>Years On</p>
          <p style={{ fontFamily: fonts.serif, fontStyle: 'italic', color: colors.maroon, fontSize: '5.4cqw', lineHeight: 1.1 }}>Dinner</p>
        </div>
      </div>

      {/* Photo + name */}
      <div className="flex items-center w-full" style={{ gap: '5cqw', marginTop: '3cqw' }}>
        <div style={{ padding: '0.8cqw', background: colors.goldGradient, borderRadius: '14cqw 14cqw 1.5cqw 1.5cqw', flexShrink: 0 }}>
          <Photo
            photo={attendeeData.photo}
            placeholderColor={colors.maroon}
            placeholderBg="#efe2c8"
            style={{ width: '26cqw', height: '32cqw', borderRadius: '13cqw 13cqw 1cqw 1cqw' }}
          />
        </div>

        <div className="flex-1 min-w-0 text-left">
          <p style={{ fontFamily: fonts.serif, color: colors.ink, fontWeight: 700, fontSize: '5cqw', lineHeight: 1.1, overflowWrap: 'anywhere' }}>
            {attendeeData.name}
          </p>
          <p style={{ color: '#6b5747', fontSize: '2.5cqw', marginTop: '0.8cqw' }}>{attendeeData.title}</p>

          <div style={{ marginTop: '3cqw', color: colors.maroon, fontSize: '2.7cqw', fontWeight: 500, lineHeight: 1.7 }}>
            <p><span style={{ color: colors.goldDeep, fontWeight: 700 }}>Date · </span>{eventData.date}</p>
            <p><span style={{ color: colors.goldDeep, fontWeight: 700 }}>Venue · </span>{eventData.venue}</p>
            <p><span style={{ color: colors.goldDeep, fontWeight: 700 }}>Time · </span>{eventData.time}</p>
          </div>
        </div>
      </div>

      <p style={{ marginTop: 'auto', color: colors.maroon, fontSize: '2.3cqw', fontWeight: 600, letterSpacing: '0.1em' }}>
        {hashtags}
      </p>
    </div>
  </PosterFrame>
);

export default Ivory;
