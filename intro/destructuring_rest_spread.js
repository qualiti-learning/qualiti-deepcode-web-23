const collegeDefault = {
  city: 'Caruaru',
  course: 'ADS',
  name: 'FAFICA',
};

function getUser() {
  return {
    city: 'Recife',
    college: {
      ...college,
      city: 'Recife',
    },
    name: 'Keven',
  };
}

// Destructuring & Rest

const {
  college: { course: collegeCourse },
  ...user
} = getUser();

const users = ['Keven', 'Leone', 'Pablo'];
const [userA, userB, userC] = ['Keven', 'Leone', 'Pablo'];

const email = 'keven.leone@qwe.com';

const [login, domain] = email.split('@');

const matrix = [
  [1, 2, 3, 4],
  [1, 2, 3, 3],
];

// Destructuring & Rest

const [
  [firstItemMatrizA, ...itemsMatrizA],
  [firstItemMatrizB, ...itemsMatrizB],
] = matrix;

const approvedUsers = ['Keven', 'Pablo', 'Murilo'];

const allUsers = [...approvedUsers];

approvedUsers.push('José');

//const pendingUsers = ['Maria', 'Jacob', 'Rodrigo'];

// const allUsers = [...approvedUsers, ...pendingUsers];

console.log(approvedUsers);
console.log(allUsers);
