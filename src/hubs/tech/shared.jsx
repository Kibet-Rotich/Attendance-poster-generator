import { PosterFrame as BaseFrame, Photo as BasePhoto } from '../common';
import { colors, fonts } from './theme';

// Tech Hub wrappers around the common poster pieces, plus the maroon info row.

export const PosterFrame = (props) => <BaseFrame font={fonts.sans} {...props} />;

export const Photo = (props) => <BasePhoto placeholderColor={colors.gold} placeholderBg="#2a1414" {...props} />;

// Maroon label | value row, as on the official poster. `scale` enlarges it.
export const InfoRow = ({ label, value, scale = 1 }) => (
  <div
    style={{
      display: 'flex',
      background: colors.maroonGlass,
      marginBottom: `${scale}cqw`,
      boxShadow: '0 0.6cqw 1.5cqw rgba(0,0,0,0.45)',
    }}
  >
    <div
      style={{
        width: `${17 * scale}cqw`,
        flexShrink: 0,
        padding: `${scale}cqw 0 ${scale}cqw 2.2cqw`,
        color: '#f3e6e0',
        fontWeight: 600,
        fontSize: `${2.7 * scale}cqw`,
        letterSpacing: '0.05em',
        borderRight: '0.35cqw solid rgba(255,255,255,0.55)',
      }}
    >
      {label}
    </div>
    <div style={{ flex: 1, padding: `${scale}cqw 2.2cqw`, color: colors.gold, fontWeight: 600, fontSize: `${2.9 * scale}cqw`, whiteSpace: 'nowrap' }}>
      {value}
    </div>
  </div>
);
