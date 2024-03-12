# Остаточные параметры и оператор расширения

- [ ] Многие встроенные функции JavaScript поддерживают `произвольное количество аргументов`.
- [ ] Т.е их может быть разное кол-во.

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/7d1e43d3-7a27-42e6-ad01-d3f4470d4c2e)

<hr>
<br>
<br>

<h2>Остаточные параметры (...rest parameters)</h2>

- [ ] Вызывать функцию можно с любым количеством аргументов независимо от того, как она была определена.

  ```javascript
    function sum(a, b) {
      return a + b;
    }
    
    console.log( sum(1, 2, 3, 4, 5) );
  ```
    + Лишние аргументы не вызовут ошибку `(в TS вызовут)`, но посчитаются лишь первые два.
     
<br>

- [ ] `Остаточные параметры` обозначаются как три точки `(...arg)` и собирают оставшиеся аргументы в `массив`.
- [x] Это важно - `...rest` - собирает оставшиеся аргументы в `МАССИВ`! 

  ```javascript
    function sumAll(...args) { // args — имя массива
      let sum = 0;
    
      for (let arg of args) sum += arg;
    
      return sum;
    }
    
    console.log(sumAll(1)); // 1
    console.log(sumAll(1, 2)); // 3
    console.log(sumAll(1, 2, 3)); // 6

    // Иной пример

    function sum(...args) {
      return args.reduce((acc, val) => acc + val, 0);
    }
    
    console.log(sum(1, 2, 3, 4)); // Выведет 10
    console.log(sum(5, 10, 15));    // Выведет 30
  ```

  <br>

  + Можно положить первые несколько параметров в переменные, а остальные – собрать в массив.
     
  ```javascript
    function showName(firstName, lastName, ...titles) {
      console.log(`${firstName} ${lastName}`); // Юлий Цезарь
    
      // Оставшиеся параметры пойдут в массив
      // titles = ["Консул", "Император"]
      console.log(titles[0]); // Консул
      console.log(titles[1]); // Император
      console.log(titles.length); // 2
    }
    
    showName("Юлий", "Цезарь", "Консул", "Император");
  ```

<br>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/a538a6b0-0eac-4b7f-a1e1-1fa341fe72c1)

<hr>
<br>
<br>

<h2>Оператор расширения (...spread operator)</h2>

- [ ] `Оператор расширения` `(spread operator)` позволяет развернуть элементы и объекты в местах, где ожидается несколько аргументов (для функций) или элементов (для массивов).
- [ ] Он удобен для создания `копий объектов`, `объединения массивов или объектов`, `передачи аргументов функциям` и других подобных операций.

<br>

  <h3>+ Расширение массивов:</h3>

  ```javascript
    let arr1 = [1, 2, 3];
    let arr2 = [...arr1, 4, 5, 6]; // Разворачиваем arr1 в arr2
    
    console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]
  ```

<br>

  <h3>+ Передача аргументов в функции:</h3>

  ```javascript
    let arr1 = [40, 300, 60, 70, 1];
    let arr2 = [100, 200, 60, 5, 80];

    console.log(Math.max(arr1, arr2)); // NaN
    // В ф-ю Math.max(развернули два массива и нашли max число)
    console.log(Math.max(...arr1, ...arr2));
    
    
    /*
      В этом примере сначала собрали все числа в массива (остаточные параметры)
      Затем развернули этот массив в ф-ю Math.max() и нашли намбольшее
    */
    function findMaxValue(...numbers) {
      return Math.max(...numbers);
    }
    
    console.log(findMaxValue(40, 300, 60, 70, 1, 111, 222, 333, 777));
  ```

<br>

  <h3>+ Копирование массивов:</h3>

  ```javascript
    const arr = ["hello", "world", "aboba"];

    const arrCopy = [...arr]; // Рапзворачиваем arr в arrCopy тем самым копируя.
    arrCopy.push("это копия");
    
    console.log(arr); // [ 'hello', 'world', 'aboba' ]
    console.log(arrCopy); // [ 'hello', 'world', 'aboba', 'это копия' ]
  ```

<br>

  <h3>+ Объединение объектов:</h3>

  + Если ключи будут одинаковы - они перезапишутся.

  ```javascript
    let obj = {
      name: "sasha",
      age: 15,
    };
    
    let obj2 = {
      nickName: "aboba",
      isAdmin: true,
    };
    
    let object3 = { ...obj, ...obj2 };
    
    console.log(object3); // { name: 'sasha', age: 15, nickName: 'aboba', isAdmin: true }
  ```

<br>

  <h3>+ Работает с Set:</h3>

  + Может развернуть `Set` в массив.

  ```javascript
    let set = new Set([1, 2, 2, 3, 3, 4, 4, "hello", "hello"]);

    console.log(...set); // Развернули Set
    
    let arrayFromSet = [...set]; // Можно развернуть set в новый массив
    console.log(arrayFromSet); // [ 1, 2, 3, 4, 'hello' ]
  ```
