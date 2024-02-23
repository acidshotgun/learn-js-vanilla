/*
  1) Сумма свойств объекта
  Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
  Или reduce
*/

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

// При помощи reduce
function sumSalaries(arg) {
  return Object.values(arg).reduce((acc, item) => (acc += item), 0);
}

console.log(sumSalaries(salaries));

// for of (тк получили массив значений)
// function sumSalaries(arg) {
//   let result = 0;

//   for (let value of Object.values(arg)) {
//     result += value;
//   }

//   return result;
// }

/*
  2) Подсчёт количества свойств объекта
  Напишите функцию count(obj), которая возвращает количество свойств объекта:
*/

let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

// 1) Получили массив пар ключ/значение
// 2) Получили длину этого массива = получили кол-во св-в объекта
const count = (obj) => Object.entries(obj).length;

console.log(count(user)); // 3

/////
////
////
/// ЗАДАЧИ ОТ ЧАТ ЖПТ ///

// 1) Создайте функцию, которая принимает объект и возвращает массив его ключей в верхнем регистре.

let obj1 = {
  name: "John",
  age: 30,
  isAdmin: true,
};

const keysToUpperCase = (arg) => {
  return Object.keys(arg).map((item) => item.toUpperCase());
};

console.log(keysToUpperCase(obj1)); // [ 'NAME', 'AGE', 'ISADMIN' ]

// 2) Реализуйте функцию, которая принимает объект и возвращает новый объект, в котором ключи и значения поменяны местами.

let obj2 = {
  name: "John",
  age: 30,
  isAdmin: true,
};

const reverceValues = (arg) => {
  return Object.fromEntries(
    Object.entries(arg).map((value) => value.reverse())
  );
};

console.log(reverceValues(obj2)); // { '30': 'age', John: 'name', true: 'isAdmin' }

// 3) Напишите функцию, которая принимает объект и возвращает сумму всех числовых значений в объекте.

let obj3 = {
  name: "John",
  age: 30,
  isAdmin: true,
  friends: 5,
  50: "sasha",
};

const sumOfDigitProperties = (arg) => {
  let result = 0;

  for (let property of Object.entries(arg)) {
    property.forEach((item) => {
      if (isFinite(item) === true && typeof item !== "boolean") {
        result += +item;
      }
    });
  }

  return result;
};

console.log(sumOfDigitProperties(obj3)); // 85
