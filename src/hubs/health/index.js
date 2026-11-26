import GalaNight from './GalaNight';
import MenuCard from './MenuCard';
import Connected from './Connected';
import IdBadge from './IdBadge';
import VitalSigns from './VitalSigns';

export default {
  id: 'health',
  name: 'ELP Health Hub',
  tab: 'Health Hub',
  event: 'Beyond the Badge',
  accent: '#1e4fd8',
  eventData: {
    date: '5th December',
    time: 'From 5:00 PM',
    // As printed on the official poster.
    venue: 'Mecure by Pullmans',
  },
  // Connected, ID Badge and Vital Signs come in two colour schemes (see
  // palettes in theme.js); `props` is passed to the design.
  designs: [
    { name: 'Gala Night', label: 'Candlelit Dinner', Component: GalaNight },
    { name: 'Menu Card', label: 'Dinner Menu', Component: MenuCard },
    { name: 'Connected', label: 'Evening Gold', Component: Connected, props: { palette: 'gold' } },
    { name: 'ID Badge', label: 'Evening Gold', Component: IdBadge, props: { palette: 'gold' } },
    { name: 'Vital Signs', label: 'Evening Gold', Component: VitalSigns, props: { palette: 'gold' } },
    { name: 'Connected', label: 'Original Blue', Component: Connected, props: { palette: 'blue' } },
    { name: 'ID Badge', label: 'Original Blue', Component: IdBadge, props: { palette: 'blue' } },
    { name: 'Vital Signs', label: 'Original Blue', Component: VitalSigns, props: { palette: 'blue' } },
  ],
};
