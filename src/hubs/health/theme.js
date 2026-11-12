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

// Midnight navy with candlelight, for the dinner-style designs.
export const candlelightBackground = {
  backgroundColor: colors.midnight,
  backgroundImage: `url(${candlelight})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

// Colour schemes for Connected, ID Badge and Vital Signs. Each design is listed
// once per scheme so the two can be compared side by side.
export const palettes = {
  // The original look: electric blue, cyan glow, orange highlights.
  blue: {
    background: navyBackground,
    accent: colors.cyan, // small labels, icons, thin rings
    strong: colors.blue, // lanyard, photo borders
    highlight: colors.glow, // arc, detail values
    orbFill: 'radial-gradient(circle at 50% 40%, #1d4fb8 0%, #0a1d4f 75%)',
    orbBorder: 'rgba(220,245,255,0.9)',
    orbShadow: `0 0 2.5cqw ${colors.cyan}, 0 1.2cqw 2.5cqw rgba(255,181,71,0.55), inset 0 0 1.5cqw rgba(95,212,255,0.5)`,
    orbIcon: '#fff',
    ring: `linear-gradient(135deg, #e6f8ff, ${colors.cyan} 50%, ${colors.blue})`,
    ringGlow: 'rgba(95,212,255,0.6)',
    themeText: colors.red,
    bodyText: '#c9d8f5',
    lanyard: colors.blue,
    stitch: colors.cyan,
    cardBg: '#ffffff',
    cardHeader: `linear-gradient(90deg, ${colors.blue}, ${colors.navy})`,
    cardHeaderText: '#ffffff',
    // Light design (Vital Signs)
    paper: colors.paper,
    grid: 'rgba(30,79,216,0.07)',
    ink: colors.navy,
    inkAccent: colors.blue,
    trace: colors.blue,
    traceGlow: colors.cyan,
    footer: colors.navy,
  },
  // The evening look: midnight navy, candlelight, gold.
  gold: {
    background: candlelightBackground,
    accent: colors.gold,
    strong: colors.goldDeep,
    highlight: colors.gold,
    orbFill: 'radial-gradient(circle at 50% 40%, #1b2a55 0%, #0a1430 75%)',
    orbBorder: colors.gold,
    orbShadow: '0 0 2.5cqw rgba(227,187,106,0.5), 0 1.2cqw 2.5cqw rgba(0,0,0,0.5), inset 0 0 1.5cqw rgba(227,187,106,0.25)',
    orbIcon: colors.gold,
    ring: colors.goldGradient,
    ringGlow: 'rgba(227,187,106,0.4)',
    themeText: colors.gold,
    bodyText: '#e9dfc9',
    lanyard: colors.maroon,
    stitch: colors.gold,
    cardBg: colors.cream,
    cardHeader: 'linear-gradient(90deg, #1b2a55, #0a1430)',
    cardHeaderText: colors.gold,
    paper: colors.cream,
    grid: 'rgba(184,138,58,0.10)',
    ink: colors.midnight,
    inkAccent: colors.goldDeep,
    trace: colors.goldDeep,
    traceGlow: colors.gold,
    footer: colors.midnight,
  },
};
