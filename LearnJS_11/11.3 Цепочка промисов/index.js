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
  })
  .then((res) => {
    console.log(res);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(res * 2);
      }, 2000);
    });
  });
