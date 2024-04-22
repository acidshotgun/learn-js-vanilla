function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Выполнилось через ${ms / 1000} секунды`);
    }, ms);
  });
}

delay(5000).then((res) => console.log(res));
