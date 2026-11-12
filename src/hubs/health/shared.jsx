import { createElement } from 'react';
import { PosterFrame as BaseFrame, Photo as BasePhoto } from '../common';
import { colors, fonts } from './theme';

export const PosterFrame = (props) => <BaseFrame font={fonts.sans} {...props} />;

export const Photo = (props) => <BasePhoto placeholderColor={colors.cyan} placeholderBg="#13285e" {...props} />;

// Glowing icon circle, as in the arc of medical icons on the poster.
// `icon` is a lucide component; `size` and `x`/`y` (centre) are in cqw.
export const IconOrb = ({ icon, x, y, size = 13 }) => (
  <div
    className="absolute flex items-center justify-center"
    style={{
      left: `${x - size / 2}cqw`,
      top: `${y - size / 2}cqw`,
      width: `${size}cqw`,
      height: `${size}cqw`,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 50% 40%, #1d4fb8 0%, #0a1d4f 75%)',
      border: '0.4cqw solid rgba(220,245,255,0.9)',
      boxShadow: `0 0 2.5cqw ${colors.cyan}, 0 1.2cqw 2.5cqw rgba(255,181,71,0.55), inset 0 0 1.5cqw rgba(95,212,255,0.5)`,
    }}
  >
    {createElement(icon, { color: '#fff', strokeWidth: 1.8, style: { width: `${size * 0.48}cqw`, height: `${size * 0.48}cqw` } })}
  </div>
);
