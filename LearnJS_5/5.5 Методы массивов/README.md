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

  - [ ] `**По умолчанию элементы сортируются как строки.**` 

  ```javascript
    const array = [90, 56, 2, 6, 4, 7, 34];

    /*
      По умолчанию элементы сортируются как строки.
      И по первому символу (ексикографический порядок)
    */
    console.log(array.sort()); // [ 2, 34,  4, 56, 6,  7, 90 ]
    
    /*
      По умолчанию элементы сортируются как строки.
      И по первому символу
      Для верной сортировки чисел нужна ф-я
    */
    const sortedArray = array.sort((a, b) => {
      if (a > b) return 1;
      if (a == b) return 0;
      if (a < b) return -1;
    });
    
    console.log(sortedArray); // [ 2, 4, 6, 7, 34, 56, 90 ]


  // Короткий вариант
  const sortedArray = array.sort((a, b) => {
    return a - b;
  });
  
  console.log(sortedArray); // [ 2, 4, 6, 7, 34, 56, 90 ]
  ```

  + Чтобы использовать наш собственный порядок сортировки, нам нужно предоставить функцию в качестве аргумента `arr.sort()`.

  + [x] Сортировка массива, в котором есть объекты - подставит объект в конец, если приведение к типу неявное.
  + [x] Используя методы `toString() / valueOf()` или `[Symbol.toPrimitive]` - приведет к примитиву и дальнейшая сортировка будет как с примитивами.

    ```javascript
      const object = {
        name: "Debil",
        age: 15,
      
        toString() {
          console.log("string");
          return this.age;
        },
      
        valueOf() {
          console.log("default");
          return this.age;
        },
      };
      
      const array = [90, 56, 6, object, 34];
      
      const sortedArray = array.sort((a, b) => {
        return a - b;
      });
      
      console.log(sortedArray); 
      /*[6, { name: 'Debil', age: 15, toString: [Function: toString] }, 34, 56, 90]*/
    ``` 

<br>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/dd18e11d-cb3b-420b-8865-9ee30176d43e)

<br>

  <h3>+ reverse</h3>

  - [x] Метод `arr.reverse` меняет порядок элементов в arr на обратный.
  - [x] Он также возвращает `массив arr` с изменённым порядком элементов.

  ```javascript
    let arr = [1, 2, 3, 4, 5];
    arr.reverse();
    
    alert( arr ); // 5,4,3,2,1
  ```

<br>

  <h3>+ split и join</h3>

  - [x] Метод `str.split(delim)` - разбивает строку на массив по заданному разделителю `delim`.

  <br>

  ```javascript
    let array = "Привет, я пришел, что дальше?";
    
    let newArr = array.split(", "); // Разделите - точка и пробел
    
    console.log(newArr); // [ 'Привет', 'я пришел', 'что дальше?' ]


    // Без аргументов
    let newArrTwo = array.split(""); // Пустой аргумент просто разобъет на массив букв

    console.log(newArrTwo); // ['П', 'р', 'и', 'в', 'е', 'т', ',', ' ', 'я', ........]
  ```

<br>

  - [x] Метод `str.join(glue)` - cоздаёт строку из элементов arr, вставляя `glue` между ними.

  ```javascript
    let array = ["Вова", "Петя", "Дебил"];

    let newArray = array.join("==="); // Разделитель между элементами
    
    console.log(newArray); // Вова===Петя===Дебил
  ```

<br>

  <h3>+ reduce/reduceRight</h3>

  + Когда нам нужно перебрать массив – мы можем использовать `forEach`, `for` или `for..of`.

  + Когда нам нужно перебрать массив и вернуть данные для каждого элемента – мы можем использовать `map`.
  
  - [x] Методы `arr.reduce` и `arr.reduceRight` похожи на методы выше, но они немного сложнее. Они используются для вычисления единого значения на основе всего массива.

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/9edf9758-bb66-4361-8544-c9888dcdf76c)

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/146c9761-a926-4294-a5ad-fcda69c6f36d)

  <br>

  ```javascript
    let arr = [1, 2, 3, 4, 5];

    let result = arr.reduce((sum, current) => sum + current, 0);
    
    alert(result); // 15
  ```

<br>

  + Если массив пуст == ошибка

<hr>
<br>
<br>

<h2>Array.isArray</h2>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/eac9ab83-871a-4fbb-9994-a6072dc5f438)

<hr>
<br>
<br>

<h2>ИТОГОГ / ШПОРА</h2>

- [ ] Шпаргалка по методам массива:

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/31b7956f-9b3b-4b33-829e-4e1cc8bec98f)

  <br>

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/87e4ca9d-072a-4573-913f-bde3e8b6d77f)

  <br>

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/119197e4-f373-4bd6-8329-174a30ffd295)

  <br>

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/310d81a1-6be0-4b21-a32e-d0a7784d3638)

  <br>

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/cd30172d-4733-4920-861d-9a0f4c0f7390)

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/03849bca-69bb-4381-b2b3-1a37b8492aef)
