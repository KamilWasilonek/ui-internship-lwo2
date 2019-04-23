export const profiles = [
  {
    firstName: 'Kristian',
    lastName: 'Vos',
  },
  {
    firstName: 'Sherlock',
    likes: [
      'Intriguing Cases',
      'Violin',
    ],
  },
  {
    firstName: 'Harry',
    likes: [
      'Pizza',
      'Pasta',
    ],
  },
  {
    firstName: 'Akira',
  },
];


export function lookupProfile(firstName, prop) {
  let message = '';
  for (let profile of profiles) {
    if (profile.firstName === firstName) {
      if (profile.hasOwnProperty(prop)) {
        message = profile[prop];
        break;
      } message = 'No such property';
      break;
    }
    message = 'No such contact';
  }
  return message;
}

