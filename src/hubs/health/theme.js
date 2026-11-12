// Colours, fonts and images for the ELP Health Hub Networking Dinner.
import badge from '../../assets/health/badge.png';
import candlelight from '../../assets/health/candlelight.jpg';
import equity from '../../assets/sponsors/equity.png';

export const assets = { badge, equity, candlelight };

export const colors = {
  navy: '#0b1f4d',
  navyDeep: '#050f2a',
  blue: '#1e4fd8',
  cyan: '#5fd4ff',
  glow: '#ffb547',
  maroon: '#8e2430',
  red: '#e0524a',
  paper: '#f3f8ff',
  // Evening palette for the dinner-style designs
  midnight: '#0a1430',
  gold: '#e3bb6a',
  goldDeep: '#b88a3a',
  goldGradient: 'linear-gradient(135deg, #fff0c4 0%, #e3bb6a 35%, #a87a2c 65%, #f6dc9a 100%)',
  cream: '#fbf6ec',
  bar: 'rgba(4, 9, 24, 0.86)',
};

export const fonts = {
  sans: '"Barlow", system-ui, sans-serif',
  condensed: '"Barlow Condensed", "Barlow", sans-serif',
  serif: '"Playfair Display", Georgia, serif',
  script: '"Great Vibes", cursive',
};

export const theme = {
  title: 'Beyond the Badge',
  subtitle: 'Bridging healthcare cadres, conversations that matter, future possibilities',
};

export const hashtags = '#BeyondTheBadge #ELPHealthHub';

// Deep blue with a faint dot grid, like the digital globe on the poster.
export const navyBackground = {
  backgroundColor: colors.navyDeep,
  backgroundImage: [
    'radial-gradient(rgba(95,212,255,0.16) 0.22cqw, transparent 0.3cqw)',
    `radial-gradient(circle at 50% 35%, #1a3f9e 0%, ${colors.navy} 45%, ${colors.navyDeep} 100%)`,
  ].join(', '),
  backgroundSize: '2.6cqw 2.6cqw, 100% 100%',
};
