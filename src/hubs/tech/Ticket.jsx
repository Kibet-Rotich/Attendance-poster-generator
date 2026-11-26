import { PosterFrame, Photo } from './shared';
import { assets, colors, fonts, hashtags } from './theme';

// Golden Ticket — the attendee's own admission ticket, styled like the
// ticket stubs on the official poster.

const BG = colors.maroonDeep;

const Notch = ({ style }) => (
  <div className="absolute" style={{ width: '5cqw', height: '5cqw', borderRadius: '50%', background: BG, ...style }} />
);

const Field = ({ label, value }) => (
  <div>
    <p style={{ color: colors.goldDeep, fontSize: '1.8cqw', fontWeight: 600, letterSpacing: '0.2em' }}>{label}</p>
    <p style={{ color: colors.maroon, fontSize: '2.8cqw', fontWeight: 700, whiteSpace: 'nowrap' }}>{value}</p>
  </div>
);

const Ticket = ({ attendeeData, eventData, role }) => (
  <PosterFrame
    style={{
      background: `radial-gradient(circle at 50% 30%, #6a1616 0%, ${BG} 65%)`,
    }}
  >
    <div className="relative h-full flex flex-col items-center" style={{ padding: '5cqw 6cqw' }}>
      <img src={assets.logoWhite} alt="ELP Tech Hub" style={{ height: '7.5cqw', width: 'auto' }} />
      <p style={{ fontFamily: fonts.script, color: colors.gold, fontSize: '7.5cqw', lineHeight: 1, marginTop: '1cqw' }}>
        {role.title}
      </p>
      <img src={assets.dinnerTitle} alt="8 Years On Dinner" style={{ width: '46cqw', height: 'auto', marginTop: '0.5cqw' }} />

      {/* The ticket */}
      <div
        className="relative w-full flex"
        style={{
          marginTop: '3.5cqw',
          height: '40cqw',
          background: colors.cream,
          borderRadius: '2cqw',
          border: `0.6cqw solid ${colors.gold}`,
          boxShadow: '0 1.5cqw 4cqw rgba(0,0,0,0.55)',
        }}
      >
        {/* Notches */}
        <Notch style={{ left: '-3cqw', top: '50%', marginTop: '-2.5cqw' }} />
        <Notch style={{ right: '-3cqw', top: '50%', marginTop: '-2.5cqw' }} />
        <Notch style={{ left: '29cqw', top: '-3cqw' }} />
        <Notch style={{ left: '29cqw', bottom: '-3cqw' }} />

        {/* Stub with photo */}
        <div
          className="flex flex-col items-center justify-center"
          style={{ width: '31.5cqw', borderRight: `0.4cqw dashed ${colors.goldDeep}` }}
        >
          <Photo
            photo={attendeeData.photo}
            placeholderColor={colors.maroon}
            placeholderBg="#efe2c8"
            style={{ width: '22cqw', height: '22cqw', borderRadius: '50%', border: `0.6cqw solid ${colors.maroon}` }}
          />
          <p style={{ color: colors.maroon, fontWeight: 700, fontSize: '2.2cqw', letterSpacing: '0.25em', marginTop: '2cqw' }}>
            {role.pass.toUpperCase()}
          </p>
        </div>

        {/* Main ticket body */}
        <div className="flex-1 min-w-0 flex flex-col justify-center" style={{ padding: '3cqw 4cqw 3cqw 4.5cqw' }}>
          <p style={{ color: colors.goldDeep, fontSize: '1.8cqw', fontWeight: 600, letterSpacing: '0.2em' }}>{role.guest.toUpperCase()}</p>
          <p style={{ fontFamily: fonts.serif, color: colors.ink, fontWeight: 700, fontSize: '5cqw', lineHeight: 1.1, overflowWrap: 'anywhere' }}>
            {attendeeData.name}
          </p>
          <p style={{ color: '#5b4a40', fontSize: '2.4cqw', marginTop: '0.5cqw' }}>{attendeeData.title}</p>

          <div style={{ height: '0.25cqw', background: colors.gold, margin: '2.5cqw 0' }} />

          <div className="flex" style={{ gap: '4cqw' }}>
            <Field label="DATE" value={eventData.date} />
            <Field label="TIME" value={eventData.time} />
          </div>
          <div style={{ marginTop: '1.5cqw' }}>
            <Field label="VENUE" value={eventData.venue} />
          </div>
        </div>
      </div>

      <p style={{ color: colors.gold, fontSize: '2.6cqw', fontWeight: 600, letterSpacing: '0.08em', marginTop: 'auto' }}>
        {hashtags}
      </p>
    </div>
  </PosterFrame>
);

export default Ticket;
