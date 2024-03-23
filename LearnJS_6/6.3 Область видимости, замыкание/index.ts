// Задачи с учебника
//  ) Сумма с помощью замыканий
function sum(num: number) {
  return function (num2: number) {
    console.log(num + num2);
  };
}

sum(1)(2); // 3
sum(5)(-1); // 4
// Тут внутренняя ф-я у sum будет искать num во внешнем окружении
// это же окружение и запомнит
// поэтому мы можем вызвать ф-ю как `sum()()`

/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Задачи от Chat GPT
// 1)
let x: number = 10;

function foo(): void {
  console.log(x);
}

function bar(): void {
  let x = 20;
  foo();
}

bar(); // 10
// foo() - запомнит лекс окружение - x = 10
// И где бы она не была вызвана - они будет видеть x = 10

// 2)
function outer() {
  let x: number = 10;

  function inner() {
    console.log(x);
  }

  return inner;
}

let closureFunc = outer();
closureFunc(); // 10
// inner() - запомнила лекс окружение
// Даже в closureFunc (где будет лежать inner после return)
// лекс окружение будет запомнено

// 3)
let name: string = "Lydia";

function getName() {
  console.log(name);
  let name: string = "Some";
}

getName(); // Ошибка
// name внутри инициализирована, но не объявлена на момент вызова console.log(name);
// движок ее видит а значит не будет искать во внешнем окружении.
