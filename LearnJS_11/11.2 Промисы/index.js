/*
  resolve - промис завершился успешно
  reject - ошибка, неудачное завершение

  Промис содержит состояния: 
    1) Сначала pending - ожидание
    2) fulfilled - выполнен успешно 
    3) reject - выполнено с ошибкой
  (На основании этих сост вызывается описанная ф-я)
*/
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("promise completed");
    } else {
      reject();
    }
  }, 2000);
});

/*
  Чтобы чтобы работать с промисом - нужно подписаться на его изменения:
    1) then() - вызывается при успешном выполнении
    2) catch() - вызывается в случае невыполнения
*/
promise.then((data) => console.log(data)).catch(() => console.log("error"));

// Пример запроса
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch(() => console.log("error"))
  .finally(() => console.log("Запрос завершен"));
