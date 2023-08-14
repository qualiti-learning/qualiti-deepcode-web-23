console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.isNaN(10 + undefined));
console.log(Number.isNaN(NaN));
console.log(Number('10'));
console.log(Number('dez'));
console.log(Array.isArray(10));
console.log(Array.isArray([]));
console.log(Array.isArray({}));
console.log(Math.PI);
console.log(Math.random());
console.log(Math.floor(100.12));

const user = [
  {
    age: 27,
    name: 'Keven',
  },
];

const userString = '[{"age":27,"name":"Keven"}]';

console.log(user);
console.log(JSON.stringify(user));
console.log(JSON.parse(userString));
