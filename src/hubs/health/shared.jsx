import { createElement } from 'react';
import { PosterFrame as BaseFrame, Photo as BasePhoto } from '../common';
import { colors, fonts } from './theme';

export const PosterFrame = (props) => <BaseFrame font={fonts.sans} {...props} />;

export const Photo = (props) => <BasePhoto placeholderColor={colors.cyan} placeholderBg="#13285e" {...props} />;

// Glowing icon circle, as in the arc of medical icons on the poster.
// `icon` is a lucide component; `size` and `x`/`y` (centre) are in cqw.
export const IconOrb = ({ icon, x, y, size = 13, palette }) => (
  <div
    className="absolute flex items-center justify-center"
    style={{
      left: `${x - size / 2}cqw`,
      top: `${y - size / 2}cqw`,
      width: `${size}cqw`,
      height: `${size}cqw`,
      borderRadius: '50%',
      background: palette.orbFill,
      border: `0.4cqw solid ${palette.orbBorder}`,
      boxShadow: palette.orbShadow,
    }}
  >
    {createElement(icon, { color: palette.orbIcon, strokeWidth: 1.8, style: { width: `${size * 0.48}cqw`, height: `${size * 0.48}cqw` } })}
  </div>
);
