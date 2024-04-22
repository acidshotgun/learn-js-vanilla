const showMessage = (message) => {
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

showMessage("Привет! Теперь это длинное сообщение")
  .then((res) => console.log(res))
  .catch((error) => console.log(error))
  .finally(() => console.log("Промис завершен."));
