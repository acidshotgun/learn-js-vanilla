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
  
  - [ ] Возвращает новый массив, в который копирует все элементы с индекса `start` до `end` (не включая end). start и end могут быть отрицательными, в этом случае отсчёт позиции будет вестись с конца массива.

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
  

  
  
