// Задачи от CHAT GPT

/*
  1) Объясните, что будет выведено в консоль и почему.
*/

function showThis() {
  console.log(this);
}
showThis(); // window | global
/*
  Ответ: 
  this внутри фнкции ссылается на глобальный объект (без use strict)
*/

const person = {
  name: "Alice",
  showName: function () {
    console.log(this.name);
  },
};
person.showName(); // Alice
/*
  Ответ: 
    this как метод объекта ссылается на сам объект
*/

const person1 = {
  name: "Bob",
  showName: () => {
    console.log(this.name);
  },
};
person1.showName(); // " " - пустая строка
/*
  Ответ: 
    this как метод объекта всегда будет ссылаться на window|global
    по правилам стрелочная ф-я в global
    
  Прим. у window есть св-во name и оно равно " "
*/

const course111 = {
  title: "JavaScript",
  duration: "3 months",
  getInfo() {
    const foo = () => {
      const bar = () => {
        const dodo = () => {
          console.log(this);
        };

        dodo();
      };

      bar();
    };

    foo();
  },
};

course111.getInfo(); // сам объект
/*
  Ответ: 
    Стрелка всегда берет контекст вышестоящей обычной ф-ии
    Вложенность значения не имеет.
*/

function Person(name) {
  this.name = name;
}
const john = new Person("John");
console.log(john.name); // John
/*
  Ответ: 
    контекст this в конструкторе всегда равен экземпляру созданного объекта
*/

///
///
///
///
/*
  2) Потеря контекста.
*/

const person2 = {
  name: "Carol",
  showName: function () {
    console.log(this.name);
  },
};
const show = person2.showName;
show(); // " " - пустая строка
/*
  Ответ: 
    Контекст this в обычно ф-ии определяется в момент вызова ф-ии, а не объявления.
    В примере  show имеет ссылку на метод.
    Вызывав show() - мы вызываем метод showName() вне объекта

    Тут будет работаь правило this внутри обычной функции => ссылаемся на window (без use strict)
    Прим. у window есть св-во name и оно равно " "
*/

const calculator = {
  value: 100,
  increment() {
    return this.value + 1;
  },
};
const incrementValue = calculator.increment;
console.log(incrementValue()); // NaN
/*
  Ответ: 
  Аналогично прошлой задаче теряем контекст и вызывая метод вне объекта имеем window
  тут window.value = undefined

  undefined + 1 = NaN
*/

const library = {
  name: "City Library",
  books: ["Book1", "Book2"],

  showBooksDelayed() {
    setTimeout(() => {
      this.books.forEach(function (book) {
        console.log(`${book} is available at ${this.name}`);
      });
    }, 1000);
  },
};
library.showBooksDelayed(); // Book1 is available at " ", Book2 is available at " "
/*
  Ответ: 
    Для showBooksDelayed() - контекст === library
    Для setTimeout() - контест === showBooksDelayed() => library

    Для колбэка в forEach - контекст равен window => тк он по сути находится внутри showBooksDelayed() (видит чере стрелочный seTimeout)
    те стрелка берет контекст showBooksDelayed(), а колюэк внутри стрелки так же смотрит на showBooksDelayed()

    Как итог - имеем правило ф-я внутри ф-ии === window

    Прим. у window есть св-во name и оно равно " "
*/

// Передача метода объекта как коллбэка
const manager = {
  employees: ["Alice", "Bob"],
  getEmployeeList() {
    return this.employees.map((employee) => `${employee} works here.`);
  },
};

function printEmployeeList(getListFn) {
  console.log(getListFn());
}

printEmployeeList(manager.getEmployeeList); // TypeError. У undefined нет метода map()
/*
  Ответ: 
    Суть - мы вызываем метод getEmployeeList() внутри другой ф-ии (printEmployeeList()) и теряем контекст.
    Правило ф-я внутри ф-ии === window.

    Будем иметь window.employees.map(), что равно undefined.map() === TypeError
*/

// Передача метода объекта как коллбэка с привязкой контекста.
const course = {
  title: "JavaScript",
  duration: "3 months",
  getInfo() {
    console.log(`Course: ${this.title}, Duration: ${this.duration}`);
  },
};

function executeCallback(callback) {
  callback();
}

executeCallback(course.getInfo.call(course)); // Получим callback is not a function
executeCallback(course.getInfo.bind(course)); // Так правильно
/*
  Ответ: 
    call() и apply() привязывают контекст и сразу же вызываются. Тут мы вызываем два раза - 
    при вызове executeCallback() и callback().

    bind() привязывает контекст но не вызывается сразу. Тут это сработает.
*/

///
///
///
///
///
// Потеря контекста 2

const someObject = {
  title: "ЭКНЦИКЛОПЕДИЯ",
  outerMethod: function () {
    const innerArrowFunction = () => {
      console.log("title:", this.title);
    };

    innerArrowFunction();
  },
};

someObject.outerMethod(); // title: ЭКНЦИКЛОПЕДИЯ

const newOuterMethod = someObject.outerMethod;
newOuterMethod(); // title: undefined
/*
  Ответ: 
      Немотря на то что стрелка фиксирует контекст в момент объявления =>
      Внутри методов это не работает и при потере контекста - стрелка тоже его теряет как и ее родительская ф-я
*/

function Person(name) {
  this.name = name;

  this.arrowFunction = () => {
    console.log("name:", this.name);
  };
}

const john1 = new Person("John");
john1.arrowFunction(); // Вызов метода объекта => name: John

// Пытаемся "потерять" контекст
const extractedArrow = john1.arrowFunction;

extractedArrow(); // Вызов вне контекста => name: John
