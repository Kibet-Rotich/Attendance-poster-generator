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
    date: '28th November',
    time: 'From 5:00 PM',
    // As printed on the official poster.
    venue: 'Mecure by Pullmans',
  },
  designs: [
    { name: 'Gala Night', label: 'Candlelit Dinner', Component: GalaNight },
    { name: 'Menu Card', label: 'Dinner Menu', Component: MenuCard },
    { name: 'Connected', label: 'Event Poster', Component: Connected },
    { name: 'ID Badge', label: 'Beyond the Badge', Component: IdBadge },
    { name: 'Vital Signs', label: 'Light & Clinical', Component: VitalSigns },
  ],
};
