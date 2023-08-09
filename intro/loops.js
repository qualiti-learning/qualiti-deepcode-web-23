const users = ['Keven', 'Leone', 'Jose', 'Mario'];

const languages = {
  en_US: 'English',
  pt_BR: 'Portuguese (Brazil)',
  pt_PT: 'Portuguese (Portugal)',
};

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

console.log('----------------------------');

let i = 0;

for (const user of users) {
  console.log(i, user);

  i++;
}

console.log('----------------------------');

for (const key in languages) {
  console.log(key, languages[key]);
}

console.log('----------------------------');

users.forEach(function (user, index, array) {
  console.log(user, index, array);
});

while (true) {
  console.warn(new Date());

  if (i > 100) {
    break;
  }

  i++;
}
