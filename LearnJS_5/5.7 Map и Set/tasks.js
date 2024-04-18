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

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

let aclean = (arr) => {
  let map = new Map();

  arr.forEach((item) => {
    map.set(item.split("").sort().join("").toLowerCase(), item);
  });

  return Array.from(map.values());
};

console.log(aclean(arr));

/*
  3) Перебираемые ключи - найти ошибку и исправить ее
*/

let map = new Map();

map.set("name", "John");

// Ошибка тут, тк map.keys() - возвращает перебираемый объект ключей а не массив
// let keys = map.keys();
let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

console.log(keys);

///////
///////
///////
// ЗАДАЧИ ОТ CHATH GPT
///////
///////
///////

/*
  1) Напишите функцию, которая принимает строку и возвращает Map, 
  где ключами являются уникальные символы из строки, а значениями - количество их появлений в строке.
*/

let str = "aaaaaaaaagtyyterwf";

let letterCounter = (str) => {
  let map = new Map();

  for (let letter of str) {
    !map.has(letter)
      ? map.set(letter, 1)
      : map.set(letter, map.get(letter) + 1);
  }

  return map;
};

console.log(letterCounter(str));

/*
  2) Напишите функцию, которая принимает два Set и возвращает новый Set, 
  содержащий только элементы, которые присутствуют в обоих исходных множествах.
*/

let obj = { a: 15 };

let set1 = new Set([1, 2, 3, 4, 5, 15, "aboba", "hello", obj]);
let set2 = new Set([1, "hello", 2, 3, 10, 15, obj]);

let doubles = (set1, set2) => {
  let arrayFromSet1 = [...set1];
  let arrayFromSet2 = [...set2];
  let resultSet = new Set();

  for (let value of arrayFromSet1) {
    if (arrayFromSet2.includes(value)) {
      resultSet.add(value);
    }
  }

  return resultSet;
};

console.log(doubles(set1, set2));

/*
  3) Создайте функцию, которая принимает объект и возвращает Map, 
  где ключами являются ключи исходного объекта, а значениями - значения соответствующих ключей.
*/

let obj2 = {
  name: "sasha",
  age: 15,
  isAdmin: true,
};

let mapFromObject = (obj) => new Map(Object.entries(obj));

console.log(mapFromObject(obj2));

/*
  4) Напишите функцию, которая принимает массив объектов и возвращает Set, 
  содержащий уникальные значения определенного свойства объектов из массива.
*/

let objArray = [
  {
    name: "vika",
    age: 16,
  },
  {
    name: "sasha",
    age: 18,
  },
  {
    name: "nastya",
    age: 21,
  },
  {
    name: "nastya",
    age: 31,
  },
];

let someFunc = (objArray, value) => {
  let set = new Set();

  for (let obj of objArray) {
    set.add(obj[value]);
  }

  return set;
};

console.log(someFunc(objArray, "name"));
