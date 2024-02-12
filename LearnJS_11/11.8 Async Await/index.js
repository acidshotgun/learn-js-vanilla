// const fetchData = () => {
//   return Promise.resolve({
//     data: [
//       { name: "Sasha", age: 15 },
//       { name: "Tiffany", age: 16 },
//       { name: "Bob", age: 14 },
//       { name: "Jessica", age: 15 },
//     ],
//   });
// };

// Все ок
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         data: [
//           { name: "Sasha", age: 15 },
//           { name: "Tiffany", age: 16 },
//           { name: "Bob", age: 14 },
//           { name: "Jessica", age: 15 },
//         ],
//       });
//     }, 2000);
//   });
// };

// Типа ошибка
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("ОШИБКА");
    }, 2000);
  });
};

const getUsersData = () => {
  fetchData()
    .then((data) => {
      console.log(data.data);
      return "done";
    })
    .catch((data) => console.log(data));
};

const getUsersData2 = async () => {
  try {
    let result = await fetchData();
    console.log(result.data);
  } catch (error) {
    console.log(error);
  }
};

getUsersData();
getUsersData2();

console.log("старт");

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

// 1
// 7
// 3
// 5
// 2
// 6
// 4
//

setTimeout(function timeout() {
  console.log("Таймаут");
}, 0);

let p = new Promise(function (resolve, reject) {
  console.log("Создание промиса");
  resolve();
});

p.then(function () {
  console.log("Обработка промиса");
});

console.log("Конец скрипта");

// Создание промиса
// Конец скрипта
// Обработка промиса
// Таймаут
