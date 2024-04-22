new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
})
  .then((res) => {
    console.log(res);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(res * 2);
      }, 2000);
    });
  })
  // Этот пусть выполнится сразу ))
  .then((res) => {
    console.log(res);
    return res * 10;
  })
  .then((res) => {
    console.log(res);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(res * 2);
      }, 2000);
    });
  })
  .then((res) => {
    console.log(res);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(res * 2);
      }, 2000);
    });
  });
