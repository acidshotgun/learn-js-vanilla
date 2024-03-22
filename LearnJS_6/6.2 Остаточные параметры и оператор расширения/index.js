let set = new Set([1, 2, 2, 3, 3, 4, 4, "hello", "hello"]);

console.log(...set); // Развернули Set

let arrayFromSet = [...set]; // Можно развернуть set в новый массив
console.log(arrayFromSet); // [ 1, 2, 3, 4, 'hello' ]

///

let obj = {
  name: "sasha",
  age: 15,
  friends: [
    { name: "tom", age: 15 },
    { name: "dora", age: 15 },
  ],
};

let obj2 = { ...obj };
obj2.friends[0].name = "CHANGED NAME";

// name меняется у обоих объектов
console.log(obj.friends[0].name); // CHANGED NAME
console.log(obj2.friends[0].name); // CHANGED NAME
