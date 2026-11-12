import { PosterFrame as BaseFrame, Photo as BasePhoto } from '../common';
import { colors, fonts } from './theme';

export const PosterFrame = (props) => <BaseFrame font={fonts.sans} {...props} />;

export const Photo = (props) => <BasePhoto placeholderColor={colors.peach} placeholderBg="#3a2024" {...props} />;

// "LABEL: value" in the style of the official poster's details bar.
export const Detail = ({ label, value, valueColor = colors.peach, labelColor = '#fff', size = 3.2 }) => (
  <span style={{ fontFamily: fonts.sans, fontSize: `${size}cqw`, fontWeight: 500, color: labelColor, whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
    {label}: <span style={{ color: valueColor }}>{value}</span>
  </span>
);
