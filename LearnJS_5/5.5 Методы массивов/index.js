let numbers = [1, 2, 3, 4, 5, 6, 7];

// Перебираем элементы и возводим их в квадрат
// Новый массив помещаем в переменну.
let result = numbers.map((item) => item ** 2);

console.log(result); // [ 1, 4, 9, 16, 25, 36, 49 ]

///////////

function smallerNumbersThanCurrent(nums) {
  const result = [];

  for (let checkNumber of nums) {
    let counter = 0;

    for (let key of nums) {
      if (checkNumber > key) {
        counter++;
      }
    }

    result.push(counter);
  }

  return result;
}

let task = [8, 1, 2, 2, 3];

console.log(smallerNumbersThanCurrent(task));
