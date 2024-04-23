/*
  1) Создайте функцию, которая возвращает промис, который разрешается через 1 секунду с сообщением "Промис выполнен".
*/

const afterSecond = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Промис выполнен");
    }, 1000);
  });
};

afterSecond().then((message) => console.log(message));

/*
  2) Создайте функцию, которая возвращает промис, который всегда отклоняется с сообщением "Произошла ошибка".
*/

const returnMistake = () => {
  return new Promise((resolve, reject) => {
    reject(new Error("Произошла ошибка"));
  });
};

returnMistake().catch((error) => console.log(error));

// ИЛИ ТАК
// Помним про невидимую обертку try|catch
// И отлавливае всех ошибок в промисе

const returnMistake2 = () => {
  return new Promise(() => {
    throw new Error("Произошла ошибка");
  });
};

returnMistake2().catch((error) => console.log(error));

/*
  3) Создайте цепочку промисов, где каждый следующий промис зависит от результата предыдущего. 
  Например, первый промис должен разрешаться со случайным числом, а следующий промис должен возвести это число в квадрат.

  Доп от себя === последний промис вернёт промис
*/

const randomNumber = () => {
  return (Math.random() * 100).toFixed(0);
};

new Promise((resolve) => {
  resolve(randomNumber());
})
  .then((number) => {
    console.log(number);
    return number ** 2;
  })
  .then((squareNumber) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(squareNumber);
        resolve(squareNumber + 10000);
      }, 1500);
    });
  })
  .then((numPlusTenthousand) => console.log(numPlusTenthousand));

/*
  4) Напишите функцию, которая использует fetch для загрузки данных из внешнего API 
  (например, JSONPlaceholder) и возвращает промис с полученными данными.
*/

const fetchData = (url) => {
  return fetch(url).then((res) => res.json());
};

fetchData("https://jsonplaceholder.typicode.com/users").then((data) =>
  console.log(data)
);

/*
  5) Создайте массив URL-адресов и используйте Promise.all для выполнения нескольких асинхронных запросов к каждому URL-адресу. 
  Обработайте результаты запросов после их завершения.
*/

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const requests = urls.map((url) => fetch(url).then((res) => res.json()));

Promise.all(requests).then((res) =>
  res.forEach((data) => {
    console.log(data);
  })
);
