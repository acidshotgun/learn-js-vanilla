// Есть две какие-то функции
let printHello = () => {
  return "Hello world!!!";
};

let randomNumber = () => {
  return +(Math.random() * 100).toFixed(0);
};

// Декоратор, оборачивающий любую функцию (замыкание)
const someDecorator = (wrapableFunc) => {
  return function () {
    console.log("Обернуто в декоратор");

    let result = wrapableFunc();
    return result;
  };
};

// Декоратор (замыкание) возвращает ф-ю внутри
// Так мы обернули ф-ии в декоратор
printHello = someDecorator(printHello);
randomNumber = someDecorator(randomNumber);

console.log(printHello());
console.log(randomNumber());
