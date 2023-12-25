/*
  1) Возможно ли создать функции A и B, чтобы new A() == new B()?

  function A() { ... }
  function B() { ... }

  let a = new A();
  let b = new B();

  alert( a == b ); // true
*/

/*
  Чтобы два объекта созданные при помощи конструкторов были равны друг другу
  Нужно, чтобы эти конструкторы записывали в переменную ссылку на один и тот же объект.
  
  **При вызове return с объектом, вместо this вернётся объект.**

  Таким образом в переменных a и b будут ссылки на объект ob
  Соотв. они будут равны друг-другу
*/

const obj = {
  name: "Pedik",
};

function A() {
  return obj;
}
function B() {
  return obj;
}

const a = new A();
const b = new B();

console.log(a == b);

/*
  2) Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

    read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
    sum() возвращает сумму этих свойств.
    mul() возвращает произведение этих свойств.
*/

function Calculator() {
  this.read = function () {
    this.num1 = +prompt("Введите первое число");
    this.num2 = +prompt("Введите второе число");
    // this.num1 = 5;
    // this.num2 = 5;
  };
  this.sum = function () {
    return this.num1 + this.num2;
  };
  this.mul = function () {
    return this.num1 * this.num2;
  };
}

const test = new Calculator();

test.read();
console.log(`Сумма равна:${test.sum()}`);
console.log(`Произведение равно:${test.mul()}`);

console.log(test);

/*
  3) Создайте функцию-конструктор Accumulator(startingValue).

  Объект, который она создаёт, должен уметь следующее:

    Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
    Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
    Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.
*/

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("Какое число прибавить?");
  };
}

const accumulator = new Accumulator(1);

console.log(accumulator);
