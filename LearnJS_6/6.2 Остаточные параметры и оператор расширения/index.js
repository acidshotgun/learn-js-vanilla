let set = new Set([1, 2, 2, 3, 3, 4, 4, "hello", "hello"]);

console.log(...set); // Развернули Set

let arrayFromSet = [...set]; // Можно развернуть set в новый массив
console.log(arrayFromSet); // [ 1, 2, 3, 4, 'hello' ]
