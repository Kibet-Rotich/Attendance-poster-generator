import Classic from './Classic';
import Minimal from './Minimal';
import Ticket from './Ticket';
import Spotlight from './Spotlight';
import Ivory from './Ivory';
import Headliner from './Headliner';

export default {
  id: 'tech',
  name: 'ELP Tech Hub',
  tab: 'Tech Hub',
  event: '8 Years On Dinner',
  accent: '#9B2A26',
  eventData: {
    date: '4th Dec 2026',
    venue: 'DoubleTree by Hilton',
    time: '5-9PM',
  },
  designs: [
    { name: 'Classic', label: 'Event Poster', Component: Classic },
    { name: 'Minimal', label: 'Clean & Dark', Component: Minimal },
    { name: 'Golden Ticket', label: 'Admit One', Component: Ticket },
    { name: 'Spotlight', label: 'Photo Focus', Component: Spotlight },
    { name: 'Ivory', label: 'Light Invitation', Component: Ivory },
    { name: 'Headliner', label: 'You on the Poster', Component: Headliner },
  ],
};
