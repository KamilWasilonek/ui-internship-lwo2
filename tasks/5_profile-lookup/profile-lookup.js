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
  let message = 'No such contact';
  const person = profiles.find((person) => {
    return person.firstName === firstName;
  });

  if (person && !person.hasOwnProperty(prop)) {
    message = 'No such property';
  } else if (person) {
    message = person[prop];
  }
  return message;
}