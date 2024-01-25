/*
  1) Что выведет следующий код?
*/

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert(fruits.length); // 4, тк массив не скопирован, а просто создана новая ссылка как у объекта.

/*
  2) Давайте произведём 5 операций с массивом.

  Создайте массив styles с элементами «Джаз» и «Блюз».
  Добавьте «Рок-н-ролл» в конец.
  Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
  Удалите первый элемент массива и покажите его.
  Вставьте Рэп и Регги в начало массива.
*/

const styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");
console.log(styles); // [ 'Джаз', 'Блюз', 'Рок-н-ролл' ]

styles[Math.floor(styles.length / 2)] = "Классика";
console.log(styles); // [ 'Джаз', 'Классика', 'Рок-н-ролл' ]

console.log(styles.shift());
console.log(styles); // [ 'Классика', 'Рок-н-ролл' ]

styles.unshift("Рэп", "Регги");
console.log(styles); // [ 'Рэп', 'Регги', 'Классика', 'Рок-н-ролл' ]

/*
  3) Каков результат? Почему?
*/

let arrNew = ["a", "b"];

arrNew.push(function () {
  console.log(this);
});

arrNew[2](); // Этот массив. Тк массив = объект и контекст this внутри метода => сам объект (массив)

// ///////Свои задачки

/*
  Ф-я для сравнения двух массивов
*/

const arr = ["zhopa", "aboba", "elda", "dick"];
const arr1 = ["zhopaaaaaa", "aboba", "elda", "dick"];

function arrayСomparison(array1, array2) {
  if (array1.length != array2.length) {
    return "Массивы не равны";
  }

  for (let i = 0; i <= array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return "Массивы не равны";
    }
  }

  return "Массивы равны";
}

console.log(arrayСomparison(arr, arr1));

/*
  Ф-я для копировния массива массива
*/

const arr10 = ["zhopa", "aboba", "elda", "dick"];

function copyArray(array) {
  const newArray = [];

  for (let key of array) {
    newArray.push(key);
  }

  return newArray;
}

const arr10Copy = copyArray(arr10);

arr10Copy.unshift("ЭТО КОПИЯ");

console.log(arr10);
console.log(arr10Copy);
