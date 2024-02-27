/*
  1) Деструктурирующее присваивание
    Напишите деструктурирующее присваивание, которое:

    свойство name присвоит в переменную name.
    свойство years присвоит в переменную age.
    свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
*/
let user = {
  name: "John",
  years: 30,
};

const { name, age: years, isAdmin = false } = user;

console.log(name);
console.log(years);
console.log(isAdmin);

/*
  2) Максимальная зарплата
    Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

    Если объект salaries пустой, то нужно вернуть null.
    Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
*/

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
  Sasha: 150250,
};

const topSalary = (salaries) => {
  let max = 0;
  let maxName = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
};

console.log(topSalary(salaries));

// ЗАДАЧИ ОТ CHATGPT

// 1) Задача: Напишите функцию, которая принимает объект user и возвращает строку с приветствием, используя деструктуризацию.
const user1 = {
  name: "Alice",
  age: 25,
};

const greetUser = (user) => {
  const { name, age } = user;

  return `Hello, ${name}! You are ${age} years old.`;
};

console.log(greetUser(user1));

// 2) Задача: Используя деструктурирующее присваивание, извлеките значения свойств nestedObject в переменные x, y и z.
const nestedObject = {
  prop1: {
    prop2: {
      x: 1,
      y: 2,
      z: 10,
    },
  },
};

const {
  prop1: {
    prop2: { x, y, z },
  },
} = nestedObject;

console.log(x, y, z); // 1, 2, 10

// 3) Задача: Напишите функцию, которая принимает массив чисел и возвращает сумму первого и последнего элементов.
const sumFirstAndLast = ([num1, ...rest]) => num1 + rest.at(-1);

console.log(sumFirstAndLast([1, 2, 3, 4, 5])); // 6

// 4) Задача: Обменять значения первого и последнего элементов массива arr без использования дополнительной переменной.
let arr = [1, 2, 3, 4, 5];

[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

console.log(arr); // [5, 2, 3, 4, 1]
