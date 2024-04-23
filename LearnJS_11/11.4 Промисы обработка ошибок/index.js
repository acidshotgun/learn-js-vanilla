new Promise((resolve, reject) => {
  resolve("hello");
})
  .then(() => {
    throw new Error("Ошибкааааааа");
  })
  .catch((error) => console.log(error));
