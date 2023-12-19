/* 
  1) Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
*/

const user = {};

user.name = "John";
user.surname = "Smith";

user.name = "Pete";

delete user.name;

/* 
  2) Напишите функцию isEmpty(obj), которая возвращает false, если у объекта нет свойств, иначе true.
*/

const newObj = {
  name: "Tom",
};

function isEmpty(object) {
  for (let key in object) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return true;
  }

  return false;
}

console.log(isEmpty(newObj));

/* 
  3) Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
*/

const user = {
  name: "John",
};

// это будет работать?
user.name = "Pete";

/*
  Ответ: так сделать можно, тк const позволяет изменять св-ва объекта.
  user - это ссылка на объект
*/

/* 
  4) У нас есть объект, в котором хранятся зарплаты нашей команды:
  Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

  Если объект salaries пуст, то результат должен быть 0.
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sumOfSalaries = (obj) => {
  let counter = 0;

  for (let key in obj) {
    counter += obj[key];
  }

  return counter;
};

console.log(sumOfSalaries(salaries));

/* 
  5) Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
*/

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

console.log(menu); // { width: 200, height: 300, title: 'My menu' }

multiplyNumeric(menu);

console.log(menu); // { width: 400, height: 600, title: 'My menu' }
