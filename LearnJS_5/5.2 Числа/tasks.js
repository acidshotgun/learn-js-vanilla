/*
  1) Сумма пользовательских чисел

  Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
*/

function alertSumNumbers() {
  const a = +prompt("Введи первое число");
  const b = +prompt("Введи второе число");

  return a + b;
}

alert(alertSumNumbers());

/*
  2) Ввод числового значения

  Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

  Функция должна возвращать числовое значение.

  Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». 
  В этом случае функция должна вернуть null.
*/

function readNumber() {
  let num;

  while (!isFinite(num)) {
    num = +prompt("Введи число");

    if (num == null || num == "") return null;
  }

  return +num;
}

alert(readNumber());

/*
  3) Случайное число от min до max

  Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

  Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
*/

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandom(1, 50));

/*
  4) Случайное целое число от min до max

  Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

  Любое число из интервала min..max должно появляться с одинаковой вероятностью.
*/

function getRandom1(min, max) {
  return Math.round(Math.random() * (max + 1 - min) + min);
}

console.log(getRandom1(1, 20));

// CHAT GPT

/*
  1) Проверка на четность:
  Напишите функцию, которая принимает число в качестве аргумента и возвращает true, если число четное, и false в противном случае.
*/

const checkEvenNum = (num) => {
  return num % 2 == 0 ? true : false;
};

console.log(checkEvenNum(3));

/*
  2) Сумма цифр:
  Напишите функцию, которая принимает число и возвращает сумму его цифр.
*/

const sumOfDigits = (num) => {
  let stringNum = String(num);
  let counter = 0;

  for (let key of stringNum) {
    counter += Number(key);
  }

  return counter;
};

console.log(sumOfDigits(55510));

/*
  3) Максимальная цифра:
  Напишите функцию, которая принимает число и возвращает самую большую цифру в этом числе.
*/

const maxDigit = (num) => {
  let stringNum = String(num);
  let maxDigit = 0;

  for (let key of stringNum) {
    if (+key > maxDigit) {
      maxDigit = +key;
    }
  }

  return maxDigit;
};

console.log(maxDigit(1234111119));

/*
  4) Обратное число:
  Напишите функцию, которая принимает число и возвращает его обратное число. Например, для входа 123 функция должна вернуть 321.
*/

const reverseNumber = (num) => Number(String(num).split("").reverse().join(""));

console.log(reverseNumber(123456789101));

/*
  5) Факториал:
  Напишите функцию, которая принимает число и возвращает его факториал.
*/

const factorial = (num) => {
  if (num < 0) {
    return "Для отрицательного числа нет факториала";
  }

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};

console.log(factorial(6));
