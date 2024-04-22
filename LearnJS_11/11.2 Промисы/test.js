const showMessage = (message) => {
  /*
    Ф-я возвращает промис
    Внутри исполнитель (executor)
    В зависимости от условия вызывает resolve|reject
  */
  return new Promise((resolve, reject) => {
    if (message.length < 10) {
      setTimeout(() => {
        reject(new Error("Ошибка! Короткое сообщение!"));
      }, 500);
    } else {
      setTimeout(() => {
        resolve(message);
      }, 2000);
    }
  });
};

/*
  Вызов showMessage() вернет промис, который нужно обработать
  Используется then|catch (finally - опционально)
*/
showMessage("Привет! Теперь это длинное сообщение")
  .then((res) => console.log(res))
  .catch((error) => console.log(error))
  .finally(() => console.log("Промис завершен."));

////
////
////
///

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Выполнилось через ${ms / 1000} секунды`);
    }, ms);
  });
}

delay(5000).then((res) => console.log(res));

///
///
//\

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1

    return new Promise((resolve, reject) => {
      // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    // (**)

    console.log(result); // 2

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log(result); // 4
  });
