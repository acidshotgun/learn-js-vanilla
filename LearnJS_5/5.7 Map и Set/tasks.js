// 1) Фильтрация уникальных элементов массива

function unique(arr) {
  // return [...new Set(arr)]; // деструктуризация
  return Array.from(new Set(arr)); // или сделать массив из сета
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare,Krishna,:-O

// 2) Отфильтруйте анаграммы
/*
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

  alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
*/

function aclean(arr) {
  let map = new Map(); // создаем Map

  for (let word of arr) {
    // разбиваем слово на буквы, сортируем и объединяем снова в строку
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)

    map.set(sorted, word); // ключ - сортированная строка, зн-е - само слово
  }

  return Array.from(map.values()); // Возвращаем массив зн-й нашего Map'a
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // [ 'PAN', 'hectares', 'era' ]

// 3) Перебираемые ключи - найти ошибку и исправить ее

let map = new Map();

map.set("name", "John");

// Ошибка тут, тк map.keys() - возвращает перебираемый объект ключей а не массив
// let keys = map.keys();
let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

console.log(keys);

/////

let obj = {
  0: "hello",
  1: "world",
  2: "hello",
  length: 3,
};

let set = new Set(Array.from(obj));

console.log(set);
