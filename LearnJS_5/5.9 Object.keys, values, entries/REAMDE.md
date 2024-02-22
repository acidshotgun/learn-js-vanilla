№ Object.keys, values, entries

- [x] По сути все методы из разряда `Object*` представляют св-ва объекта в виде массивов значений.
- [x] Это позволяет совершать разные манипуляции с объектами как с массивами. Например `map()`, `filter()`, `reduce()` и тд 

    + `Object.keys(obj)` – возвращает массив ключей.
    + `Object.values(obj)` – возвращает массив значений.
    + `Object.entries(obj)` – возвращает массив пар [ключ, значение].
    + `Object.fromEntries(obj)` - возвращает объект из массива пар [ключ, значение]

- [ ] Отличия:

  + Первое отличие в том, что мы должны вызвать `Object.keys(obj)`, а не `obj.keys()`.

      ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/4cbbd9c6-645d-4bab-8553-3fd66f958181)

  + Второе отличие в том, что методы вида `Object.*` возвращают `«реальные» массивы`, а не просто итерируемые объекты.
     
```javascript
  let prices = {
    banana: 100,
    apple: 70,
    orange: 56,
  };
  
  console.log(Object.keys(prices)); // [ 'banana', 'apple', 'orange' ]
  console.log(Object.values(prices)); // [ 100, 70, 56 ]
  console.log(Object.entries(prices)); // [ [ 'banana', 100 ], [ 'apple', 70 ], [ 'orange', 56 ] ]
```

<br>

+ Пример перебова ключей св-в в объекте.

  ```javascript
    let prices = {
      banana: 100,
      apple: 70,
      orange: 56,
    };
    
    for (let key of Object.values(prices)) {
      console.log(key);
    }
  ```

  <br>

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/5b0923d7-4357-48cd-b899-7dd57e4ac797)

<hr>
<br>
<br>

<h2>Трансформации объекта</h2>

- [ ] У объектов нет множества методов, которые есть в массивах, например `map`, `filter` и других.

- [ ] Если мы хотели бы их применить, то можно использовать `Object.entries` с последующим вызовом `Object.fromEntries`:

  + Вызов `Object.entries(obj)` возвращает массив пар ключ/значение для obj.
  + На нём вызываем методы массива, например, `map`.
  + Используем `Object.fromEntries(array)` на результате, чтобы преобразовать его обратно в `объект`.
     
  ```javascript
    let prices = {
      banana: 100,
      apple: 70,
      orange: 56,
      potato: 120,
      qiwi: 500,
    };
    
    // Отфильтровали цены
    prices = Object.fromEntries(
      Object.entries(prices).filter((item) => item[1] <= 100)
    );
    
    console.log(prices); // { banana: 100, apple: 70, orange: 56 }
  ```

  ```javascript
    let prices = {
      banana: 100,
      apple: 70,
      orange: 56,
      potato: 120,
      qiwi: 500,
    };
    
    // Умножили цены на два
    prices = Object.fromEntries(
      Object.entries(prices).map(([key, value]) => [key, value * 2])
    );
    
    console.log(prices); // { banana: 200, apple: 140, orange: 112, potato: 240, qiwi: 1000 }
  ```

  - [x] Мы делаем из объекта массив => работаем как с массивом => возвращаем массив обратно 
