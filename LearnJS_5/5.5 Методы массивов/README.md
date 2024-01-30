# Методы массивов

<h2>Добавление/удаление элементов</h2>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/9b63fb5a-e614-48ac-8312-b2a371709550)

<br>

<h3>+ splice</h3>

  + Мы можем удалять элементы массива при помощи `delete`, тк это объекты. Но на месте удаленного элемента останется пустой символ (пробел) и этот вариант не подходит.

  - [x] Метод `arr.splice` – это универсальный «швейцарский нож» для работы с массивами. Умеет всё: `добавлять`, `удалять` и `заменять элементы`.

    ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/797adf55-2e0c-40de-bf6a-c09ef9eb7428)

    <br>
       
      ```javascript
        // Удаление
        const array = ["banana", "apple", "orange", "pineapple"];
        
        array.splice(1, 2); // Удаление с 1-й позицыы, 2 элемента.
        
        console.log(array); // [ 'banana', 'pineapple' ]
        
        
        // Удалить + заменить
        let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
        
        arr.splice(0, 3, "Давай", "танцевать"); // Удалили первые 3 элемента и заменили двумя другими
        
        console.log(arr); // [ 'Давай', 'танцевать', 'прямо', 'сейчас' ]
        
        
        // Splice - возвращает массив удаленных элементов
        let arr1 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
        
        let removedItems = arr1.splice(0, 2); // Удалили первые два элемента - (они возвращаются в переменныю)
        
        console.log(removedItems); // [ 'Я', 'изучаю' ]
      ```

      <br>
      
      + Метод `splice` также может `вставлять элементы без удаления`, для этого достаточно установить `deleteCount в 0`:
         
      ```javascript
        let arr = ["Я", "изучаю", "JavaScript"];

        // с индекса 2
        // удалить 0 элементов
        // вставить "сложный", "язык"
        arr.splice(2, 0, "сложный", "язык");
        
        alert( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"
      ```

<br>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/6a2a012b-f2b5-486f-acdb-7acb4739c119)

<br>
  
  <h3>+ slice</h3>
  
  - [x] Возвращает новый массив, в который копирует все элементы с индекса `start` до `end` (не включая end). start и end могут быть отрицательными, в этом случае отсчёт позиции будет вестись с конца массива.

  <br>

  ```javascript
    // Копирование
    const array = ["banana", "apple", "orange", "pineapple"];
    
    const arrayCopy = array.slice(1, 3); // Копируем, начиная с 1-элемб до 3 (не включая 3)
    
    console.log(arrayCopy); // [ 'apple', 'orange' ]
  ```

  + Можно вызвать `slice` без аргументов: `arr.slice() создаёт копию arr`. Это часто используют, чтобы создать копию массива для дальнейших преобразований, которые не должны менять исходный массив.

  ```javascript
    // Копирование
    const array = ["banana", "apple", "orange", "pineapple"];
    
    const arrayCopy = array.slice(); // Без аргументов - полное копирование
    
    console.log(arrayCopy); // [ 'banana', 'apple', 'orange', 'pineapple' ]
  ```
  
<br>
  
  <h3>+ concat</h3>

  - [x] Метод `arr.concat` создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/bb6ec8e4-bb11-4b96-a7c1-c9e72a9a732a)

  ```javascript
    let arr = [1, 2];

    // создать массив из: arr и [3,4]
    console.log(arr.concat([3, 4])); // 1,2,3,4
    
    // создать массив из: arr и [3,4] и [5,6]
    console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
    
    // создать массив из: arr и [3,4], потом добавить значения 5 и 6
    console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
  ```

<br>
<br>

  - [ ] Обычно он копирует только элементы из массивов. Другие объекты, даже если они выглядят как массивы, добавляются как есть:
  - [ ] …Но если массивоподобный объект имеет специальное свойство `Symbol.isConcatSpreadable`, то он обрабатывается как массив, с помощью `concat`: вместо него добавляются его элементы:

  ```javascript
    let arr = [1, 2];
    
    let arrayLike = {
      0: "что-то",
      length: 1,
    };
    
    console.log(arr.concat(arrayLike)); // [ 1, 2, { '0': 'что-то', length: 1 } ]


  // Symbol.isConcatSpreadable

  /*
      1) Но ключи должны быть в кач-ве порядкового числа
      2) Необходимо указать длину массива в св-ве length
      3) Пробелы между ключами образуют пустые символы, тк длина
      4) Если длина массива больше содержимого = куча пустых символов
    */
  let arr = [1, 2];
  
  let arrayLike = {
    10: "Десятая позиция", // Встанет на 10 позицию
    name: "sasha", // Проигнорируется
    0: "что-то",
    1: "ещё",
    [Symbol.isConcatSpreadable]: true,
    length: 110, // Указание длины массива
  };
  
  console.log(arr.concat(arrayLike)); // [ 1, 2, 'что-то', 'ещё', <8 empty items>, 'Десятая позиция', <99 empty items> ]

  ```

<hr>
<br>
<br>

<h2>Перебор: forEach</h2>

- [ ] Метод `arr.forEach` позволяет запускать функцию для каждого элемента массива.
![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/2fdbebf8-106d-477d-848b-6120b4931faa)

<br>

```javascript
  let array = ["Бильбо", "Гэндальф", "Назгул"];
  
  // Вызов для каждого элемента
  array.forEach((item, index, array) => {
    console.log(`У ${item} индекс ${index} в ${array}`);
  });
```

- [x] Результат функции (если она что-то возвращает) отбрасывается и игнорируется.

<hr>
<br>
<br>

<h2>Поиск в массиве</h2>

<br>

  <h3>+ indexOf/lastIndexOf и includes</h3>

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/0632d98b-1650-47e1-8246-63448a9209f7)

  ```javascript
    let array = ["Бильбо", "Гэндальф", "Назгул", null, false, 556];

    // Поиск индекса элемента
    console.log(array.indexOf("Гэндальф")); // 1 (1-я позиция)
    console.log(array.indexOf(false)); // 4 (4-я позиция)
    
    console.log(array.indexOf(null)); // 3 (3-я позиция)
    console.log(array.lastIndexOf(null)); // 3 (справа налево, но возвращает ориг. индекс элемента)
    
    // Есть или нет элемент
    console.log(array.includes(1)); // fasle (1 - нет)
    console.log(array.includes("Гэндальф")); // true (Гэндальф - есть)
  ```

  <br>

  <h3>+ find и findIndex/findLastIndex</h3>

  - [x] `array.find()` - находит элемент, соответствующий опр. условию.
  - [x] `findIndex()/findLastIndex()` - находит элемент и возвращает его индекс

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/388e2ab3-4f46-43f7-b862-08d9e72dfff2)

  <br>

  ```javascript
    let users = [
      { id: "id_1e34a", name: "Вася" },
      { id: "id_4512b", name: "Петя" },
      { id: "id_ab24t", name: "Маша" },
    ];
    
    // Находим пользователя по id
    let foundedUser = users.find((item) => item.id == "id_4512b"); // Ищем пользователя с опр. id
    
    // Находим индекс пользователя по id
    let foundedUserIndex = users.findIndex((item) => item.id == "id_4512b"); // Ищем индекс пользователя с опр. id
    
    console.log(foundedUser); // { id: 'id_4512b', name: 'Петя' }
    console.log(foundedUserIndex); // 1
  ```

  <br>

  <h3>+ filter</h3>

  - [ ] Метод find ищет один (первый) элемент, который заставит функцию вернуть true.

  - [x] Если найденных элементов может быть много, можно использовать `arr.filter(fn)`.

  - [x] Синтаксис схож с `find`, но `filter` возвращает `массив из всех подходящих элементов`:

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/b5540482-2f97-44f7-aa1f-662368497e0a)

  <br>

  ```javascript
    let users = [
      { name: "Вася", age: 24 },
      { name: "Петя", age: 12 },
      { name: "Маша", age: 19 },
      { name: "Елена", age: 22 },
      { name: "Екатерина", age: 21 },
    ];
    
    /*
      1) Ищем пользователей, чей возраст >= 20
      2) Массив найденых пользователей помещается в переменную
    */
    let foundedUser = users.filter((item) => item.age >= 20); //
    
    console.log(foundedUser); /*
                                [
                                  { name: 'Вася', age: 24 },
                                  { name: 'Елена', age: 22 },
                                  { name: 'Екатерина', age: 21 }
                                ]
                              */
  ```

<hr>
<br>
<br>

<h2>Преобразование массива</h2>

<br>

  <h3>+ map</h3>

  - [x] `map` вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.
  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/15ecaf51-944e-4d87-9ec6-0b0e20da34db)

  <br>

  ```javascript
    let numbers = [1, 2, 3, 4, 5, 6, 7];

    // Перебираем элементы и возводим их в квадрат
    // Новый массив помещаем в переменну.
    let result = numbers.map((item) => item ** 2);
    
    console.log(result); // [ 1, 4, 9, 16, 25, 36, 49 ]
  ```

<br>

  <h3>+ sort(fn)</h3>

  - [x] Вызов `arr.sort()` сортирует массив на месте, меняя в нём порядок элементов.

  - [x] Он также возвращает отсортированный массив, но обычно возвращаемое значение игнорируется, так как `изменяется сам arr`.

  - [ ] 
