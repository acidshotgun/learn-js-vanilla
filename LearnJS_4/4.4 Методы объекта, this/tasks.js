/* 
  1) Здесь функция makeUser возвращает объект.

  Каким будет результат при обращении к свойству объекта ref? Почему?
*/

/* 
  ОТВЕТ: undefined
  В примере this - это window, тк контекст this будет подвязан к объекту тогда,
  когда будет вызван метод этого объекта. До тех пор он всегда будет = window.

  В этом примере в св-вк ref будет лежать ссылка на объект window.
  И мы будем пытать вывести в консоль window.name, чего нет и получим undefined
*/

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

console.log(user.ref.name); // Каким будет результат?

/* 
  2) Создайте объект calculator (калькулятор) с тремя методами:

    read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
    sum() (суммировать) возвращает сумму сохранённых значений.
    mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/

const calculator = {
  a: 0,
  b: 0,
  read(num1, num2) {
    this.a = num1;
    this.b = num2;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read(6, 5);
console.log(calculator.sum());
console.log(calculator.mul());

/* 
  3) У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

  Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

    ladder.up();
    ladder.up();
    ladder.down();
    ladder.showStep(); // 1
    ladder.down();
    ladder.showStep(); // 0

  Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

  ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
