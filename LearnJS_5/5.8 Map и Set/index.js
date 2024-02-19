let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук", 50],
]);

console.log(recipeMap);

const obj = {
  name: "sasha",
  age: 15,
};

console.log(Object.entries(obj));

const array = [
  ["name", "sasha"],
  ["age", 15],
];

console.log(Object.fromEntries(array));
