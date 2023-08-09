const value = [1, true, 'keven', '3ff', new Date()];

const name = 'keven';
const lastname = 'leone';

const name2 = 'debora';
const lastname2 = 'leone';

const age = 27;

const defaultState = {
  name: 'Pernambuco',
  city: 'Recife',
  population: 1_600_000,
};

const users = [
  {
    name: 'Keven',
    lastname: 'Leone',
    age: 10,
    movies: ['Interestelar', 'Batman'],
    state: defaultState,
  },
  {
    name: 'Debora',
    lastname: 'Taise',
    age: 29,
    movies: ['Barbie', 'Batman'],
    state: defaultState,
  },
];

console.log(users[0].state);
