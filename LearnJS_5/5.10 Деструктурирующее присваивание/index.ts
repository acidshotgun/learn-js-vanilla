let users = [
  { name: "Sasha", age: 20, isAdmin: true },
  { name: "Vova", age: 21, isAdmin: false },
  { name: "Kim", age: 20, isAdmin: true },
  { name: "Korntey", age: 24, isAdmin: true },
  { name: "Pete", age: 19, isAdmin: false },
];

let admins = users.filter(({ name, age, isAdmin }) => isAdmin && age === 20);

console.log(admins); // [{ name: 'Sasha', age: 20, isAdmin: true }, { name: 'Kim', age: 20, isAdmin: true }]
