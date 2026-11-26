import { PosterFrame, Photo } from './shared';
import { assets, colors, fonts } from './theme';

// Minimal — near-black, thin gold frame, lots of space, typography-led.

const Detail = ({ label, value }) => (
  <div style={{ flex: 1 }}>
    <p style={{ color: colors.gold, fontSize: '1.9cqw', letterSpacing: '0.3em', fontWeight: 500 }}>{label}</p>
    <p style={{ color: '#fff', fontSize: '2.9cqw', fontWeight: 500, marginTop: '0.6cqw', whiteSpace: 'nowrap' }}>{value}</p>
  </div>
);

const Minimal = ({ attendeeData, eventData, role }) => (
  <PosterFrame style={{ background: colors.ink }}>
    {/* Thin inset frame */}
    <div className="absolute" style={{ inset: '3.5cqw', border: `0.25cqw solid ${colors.gold}`, opacity: 0.55 }} />

    <div className="relative h-full flex flex-col" style={{ padding: '9cqw 10cqw' }}>
      {/* Top row: logo + label */}
      <div className="flex items-center justify-between">
        <img src={assets.logoWhite} alt="ELP Tech Hub" style={{ height: '7cqw', width: 'auto' }} />
        <p style={{ color: colors.gold, fontSize: '2cqw', letterSpacing: '0.35em' }}>04 · 12 · 2026</p>
      </div>

      {/* Middle: name and photo */}
      <div className="flex-1 flex items-center" style={{ gap: '6cqw' }}>
        <div className="flex-1 min-w-0">
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '2.3cqw', letterSpacing: '0.35em' }}>{role.phrase.toUpperCase()}</p>
          <p
            style={{
              fontFamily: fonts.serif,
              color: '#fff',
              fontSize: '7cqw',
              fontWeight: 600,
              lineHeight: 1.05,
              marginTop: '2cqw',
              overflowWrap: 'anywhere',
            }}
          >
            {attendeeData.name}
          </p>
          <p style={{ color: colors.gold, fontSize: '2.7cqw', marginTop: '1.5cqw' }}>{attendeeData.title}</p>

          <div style={{ width: '10cqw', height: '0.3cqw', background: colors.gold, margin: '4cqw 0 3cqw' }} />

          <p style={{ fontFamily: fonts.serif, fontStyle: 'italic', color: '#fff', fontSize: '4.4cqw', lineHeight: 1.1 }}>
            8 Years On Dinner
          </p>
        </div>

        <Photo
          photo={attendeeData.photo}
          style={{ flexShrink: 0, width: '30cqw', height: '38cqw', borderRadius: '15cqw 15cqw 1cqw 1cqw' }}
        />
      </div>

      {/* Bottom: details */}
      <div className="flex" style={{ gap: '3cqw', borderTop: '0.2cqw solid rgba(246,199,104,0.35)', paddingTop: '3cqw' }}>
        <Detail label="DATE" value={eventData.date} />
        <Detail label="VENUE" value={eventData.venue} />
        <Detail label="TIME" value={eventData.time} />
      </div>
    </div>
  </PosterFrame>
);

export default Minimal;
