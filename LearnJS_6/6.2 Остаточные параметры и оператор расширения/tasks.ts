/*
  Задача 1: Сложение чисел
  Напишите функцию sum, которая принимает любое количество чисел в качестве аргументов и возвращает их сумму.
*/

// Кстати ...rest должен иметь тип массива
let sumNumbers = (...nums: number[]): number => {
  return nums.reduce((acc, num) => (acc += num), 0);
};

console.log(sumNumbers(1, 2, 3)); // 6
console.log(sumNumbers(10, 2)); // 12
console.log(sumNumbers(1, 1, 10, 20, 500)); // 532

/*
  Задача 2: Найти наибольшее число
  Напишите функцию maxNumber, которая принимает любое количество чисел в качестве аргументов и возвращает наибольшее из них.
*/
// Сначала собрали в массив - затем его развернули для Math.max()
let maxNumber = (...nums: number[]): number => Math.max(...nums);

console.log(maxNumber(10, 1, 22, 40)); // 40

/*
  Задача 3: Объединение массивов
  Напишите функцию mergeArrays, которая принимает несколько массивов в качестве аргументов 
  и возвращает новый массив, содержащий все элементы из всех переданных массивов.
*/

let mergeArrays = (...arrays: number[][]): number[] => {
  let result: number[] = [];

  arrays.forEach((array) => result.push(...array));

  return result;
};

console.log(mergeArrays([1, 2, 3], [1, 2, 3], [5, 6, 7, 8]));
