function getUsersPromise() {
  return new Promise((resolve) => {
    resolve([
      { id: 1, name: 'Keven' },
      { id: 2, name: 'Leone' },
    ]);
  });
}

async function getUsersPromise2() {
  return [
    { id: 1, name: 'Keven' },
    { id: 2, name: 'Leone' },
  ];
}

function getUserByIdPromise(id) {
  console.log('Buscando usuários...');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('busca completa...');

      const users = [
        { id: 1, name: 'Keven' },
        { id: 2, name: 'Leone' },
      ];

      function findUserById(user) {
        return user.id === id;
      }

      const user = users.find(findUserById);

      if (user) {
        resolve(user);
      } else {
        reject(new Error('Usuário não existe.'));
      }
    }, 2500);
  });
}

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

    callback(user);
  }, 1000);
}

async function main() {
  const [userA, userB] = await Promise.all([
    getUserByIdPromise(1),
    getUserByIdPromise(2),
  ]);

  console.log(userA, userB);
}

getUserByIdPromise(1)
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error(error);
  });

main();
