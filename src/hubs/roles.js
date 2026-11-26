// What the poster announces. Every design takes a `role` prop and uses these
// words instead of hardcoding "attending", so each design works for both.
// Designs uppercase these where their style needs it.

export const ROLES = [
  {
    id: 'attending',
    tab: 'Attending',
    title: 'I Will Be Attending', // headline, title case
    phrase: 'I will be attending', // headline, sentence case
    word: 'Attending', // second line of a split 'I will be / …' headline
    at: 'I will be at', // "… Beyond the Badge"
    atThe: 'I will be at the', // "… Networking Dinner"
    badge: 'Attendee', // badge/lanyard label
    guest: 'Guest', // label above the name on tickets
    pass: 'Admit one', // ticket stub
    bold: ["I'LL", 'BE', 'THERE.'], // three-line shout (Entrepreneurs: Bold)
  },
  {
    id: 'speaking',
    tab: 'Speaking',
    title: 'I Will Be Speaking',
    phrase: 'I will be speaking',
    word: 'Speaking',
    at: 'Speaking at',
    atThe: 'Speaking at the',
    badge: 'Speaker',
    guest: 'Speaker',
    pass: 'Speaker pass',
    bold: ["I'M", 'ON', 'STAGE.'],
  },
];
