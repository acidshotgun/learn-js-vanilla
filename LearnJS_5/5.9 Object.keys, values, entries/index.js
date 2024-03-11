let prices = {
  banana: 100,
  apple: 70,
  orange: 56,
  potato: 120,
  qiwi: 500,
};

// Умножили цены на два
prices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(prices); // { banana: 200, apple: 140, orange: 112, potato: 240, qiwi: 1000 }

// for (let key in prices) {
//   prices[key] *= 2;
// }

// console.log(prices);

console.log();

/////
const arr = [
  ["name", "sasha"],
  ["age", 15],
  ["isAdmin", true],
];

const obj = Object.fromEntries(arr);

console.log(obj);

////

let prices1 = {
  banana: 100,
  apple: 70,
  orange: 56,
  potato: 120,
  qiwi: 500,
};

// Отфильтровали цены
prices1 = Object.fromEntries(
  Object.entries(prices1).filter(([_, price]) => price <= 100)
);

console.log(prices1); // { banana: 100, apple: 70, orange: 56 }
