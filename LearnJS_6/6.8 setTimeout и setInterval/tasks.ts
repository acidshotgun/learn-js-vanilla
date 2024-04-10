/*
  1) Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

  Сделайте два варианта решения.

  Используя setInterval.
  Используя рекурсивный setTimeout.
*/

// TIMEOUT
const printNumbers = (from: number, to: number) => {
  let num: number = from;

  setTimeout(function log() {
    console.log(num);
    num++;
    num <= to && setTimeout(() => log(), 1000);
  }, 1000);
};

printNumbers(1, 10);

// INTERVAL
const printNumbers2 = (from: number, to: number) => {
  let num: number = from;

  let timer = setInterval(function log() {
    console.log(num);

    num == to && clearInterval(timer);

    num++;
  }, 1000);
};

printNumbers2(1, 10);

/*
  ////
    ЗАДАЧИ ОТ CHAT GPT
  ////
*/

// 1) Генерация случайного числа в пока не выпадет определенное.
//    Учесть ошибку когда искомое число больше максимального

const generateRandomNumber = (maxNumber: number, stopNumber: number) => {
  if (stopNumber > maxNumber) {
    return console.log("Стоп-число больше максимального числа!");
  }

  let randomNumber: number;

  const interval = setInterval(() => {
    randomNumber = +(Math.random() * maxNumber).toFixed(0);

    if (randomNumber == stopNumber) {
      clearInterval(interval);
      console.log(`СТОП! Выпало число ${stopNumber}.`);
    } else {
      console.log(randomNumber);
    }
  }, 500);
};

generateRandomNumber(50, 10);
