function sum(a, b) {
  return a + b;
}

const sum2 = function (a, b) {
  return a + b;
};

const sum3 = (a, b) => a + b;

const multiply = (a) => a * 100;

function getUserById(id, callback) {
  console.log('Buscando usuários...');

  setTimeout(() => {
    console.log('achei os usuários...');

    const users = [
      { id: 1, name: 'Keven' },
      { id: 2, name: 'Leone' },
    ];

    function findUserById(user) {
      return user.id === id;
    }

    const user = users.find(findUserById);
    const newUser = callback(user);

    console.log({ newUser });
  }, 1000);
}

const printUser = (id) => (user) => {
  console.log(id, user);

  if (user) {
    user.full_name = `${user.name} Santos`;
  }

  return user;
};

getUserById(1, printUser(1));
getUserById(2, printUser(2));
getUserById(3, printUser(3));
