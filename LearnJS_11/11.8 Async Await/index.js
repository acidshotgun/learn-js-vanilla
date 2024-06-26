const changeRegister = (str) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(str.toUpperCase());
    }, 1500);
  });
};

//
changeRegister("hello world").then((res) => console.log(res));

//

const fetchToChangeRegister = async (str) => {
  const result = await changeRegister(str);

  console.log(result);
};

fetchToChangeRegister("hello world");

///
///
///
async function foo() {
  const fetchData = new Promise((resolve) => {
    setTimeout(() => {
      resolve("this is date");
    }, 1500);
  });

  // Ожидаем данные из промиса fetchData
  const data = await fetchData;

  // Выводим данные
  console.log(data);
}

foo();
