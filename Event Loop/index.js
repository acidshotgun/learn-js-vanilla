function fetchData(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      message.length <= 10
        ? resolve(message)
        : reject("Error! Слишком длинное сообщение.");
    }, 2000);
  });
}

fetchData("ГОВОРИТ МОСКВА!")
  .then((result) => {
    console.log("Результат:", result);
  })
  .catch((error) => {
    console.log("Ошибка:", error);
  })
  .finally(() => console.log("Конец промиса"));
