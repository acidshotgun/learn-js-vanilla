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
