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
