const users = [
  { id: 1, hobby: 'Games', name: 'Keven' },
  { id: 2, hobby: 'Games', name: 'Leone' },
];

const usersQuality = users.concat([
  { id: 3, hobby: 'RPG', name: 'Pablo' },
  { id: 4, hobby: 'RPG', name: 'Murilo' },
  { id: 5, hobby: 'Dorama', name: 'Débora' },
]);

const usersQuality2 = [...usersQuality];

usersQuality2.push({ id: 6, hobby: 'Arqueologia', name: 'Maria Beatriz' });

const userId1 = usersQuality.find((user) => user.id === 1);

const usersByHobby = usersQuality.filter((user) =>
  ['Dorama', 'RPG'].includes(user.hobby)
);

const usersQualityWithSkills = usersQuality.map((user, index) => ({
  ...user,
  skills: ['Backend', 'Frontend', 'Algorítmo', 'Banco de Dados'].slice(
    0,
    index + 1
  ),
}));

const allUsersHobbyIsRPG = usersQualityWithSkills.every(
  (user) => user.hobby === 'RPG'
);

const someUsersHobbyIsRPG = usersQualityWithSkills.some(
  (user) => user.hobby === 'RPG'
);

const sum = (...values) =>
  values.reduce((prevValue, currValue) => prevValue + currValue);

usersQualityWithSkills.forEach((user) => {
  console.log(user.name, user.hobby);
});

console.log(userId1);
console.log(usersByHobby);
console.log(usersQualityWithSkills);
console.log(allUsersHobbyIsRPG);
console.log(someUsersHobbyIsRPG);

const map = new Map();

map.set('keven', { name: 'Keven', money: '10101010' });
map.set('keven', { name: 'Keven2', money: '10101010' });

const numbers = [1, 2, 3, 3, 3, 4];

const set = new Set(numbers);

console.log(numbers, set);
