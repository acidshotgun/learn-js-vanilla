let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

let newArr = Array.from(range); // Делаем массив из итеррируемого объекта

newArr.push("НОВЫЙ ЭЛЕМЕНТ"); // помещаем элемент в конец

console.log(newArr); // [ 1, 2, 3, 4, 5, 'НОВЫЙ ЭЛЕМЕНТ' ]

for (let key of newArr) {
  console.log(key); // 1, 2, 3, 4, 5, 'НОВЫЙ ЭЛЕМЕНТ'
}

// Можно отдельно
// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,

//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };

for (let key of range) {
  console.log(key);
}

/////

const obj = {
  0: "Hello",
  1: "World",
  2: "Debili",
  length: 3,
};

const arr = Array.from(obj); // делаем массив из псевдомассива

arr.push("ZHOPA"); // Можем юзать метод массиво

console.log(arr);

for (let key of arr) {
  console.log(key); // Hello World Debili ZHOPA
}

///////

let str = "Hello world";

let newArray = Array.from(str);

console.log(newArray);

///

let test = {
  0: "привет",
  1: "мир",
};

let newArray2 = Array.from(test);

console.log(newArray2); // []
