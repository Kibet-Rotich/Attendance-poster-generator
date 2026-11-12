import Welcome from './Welcome';
import Executive from './Executive';
import Bold from './Bold';

export default {
  id: 'entrepreneurs',
  name: 'ELP Entrepreneurs Hub',
  tab: 'Entrepreneurs Hub',
  event: 'Networking Dinner',
  accent: '#8a1c32',
  eventData: {
    date: '28th November',
    time: 'From 5:00 PM',
    venue: 'DoubleTree by Hilton',
  },
  designs: [
    { name: 'Welcome', label: 'Event Poster', Component: Welcome },
    { name: 'Executive', label: 'Light & Classy', Component: Executive },
    { name: 'Bold', label: "I'll Be There", Component: Bold },
  ],
};
