# Строки

- [ ] Внутренний формат для строк — всегда `UTF-16`, вне зависимости от кодировки страницы.

<hr>
<br>
<br>

<h2>Кавычки</h2>

- [ ] Три типа ковычек:

```javascript
  let single = 'single-quoted';
  let double = "double-quoted";
  
  let backticks = `backticks`;
```

  + `Двойные` / `одинарные` работают одинаково.
  + `Бэктики` - могут занимать более одной строчки и могут применять `интерполяцию` `${}`

<hr>
<br>
<br>

<h2>Спецсимволы</h2>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/c31d3be6-ea2f-4a25-9e08-5301a54dd78b)

<hr>
<br>
<br>

<h2>length - Длина строки</h2>

- [ ] Свойство `length` содержит длину строки:

  ```javascript
    alert( `My\n`.length ); // 3
  ```

    + Спецсимволы так же считаются за символ и учитываются в длине.
     
![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/72ade195-0892-4bc5-b605-685a51019e4c)

<hr>
<br>
<br>

<h2>Доступ к символам</h2>

- [ ] Получить символ, который занимает позицию `pos`, можно с помощью квадратных скобок: `[pos]`. Также можно использовать метод `str.at(pos)`. Первый символ занимает нулевую позицию:

  ```javascript
    let str = `Hello`;
    
    // получаем первый символ
    alert( str[0] ); // H
    alert( str.at(0) ); // H
    
    // получаем последний символ
    alert( str[str.length - 1] ); // o
    alert( str.at(-1) ); // o
  ```

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/2787e412-a659-4d64-b787-c4fe4e3e1694)

<br>

- [ ] Также можно перебрать строку посимвольно, используя `for..of` или цикл `for`:

  ```javascript
    let str = "Hello world!";

    for (let i = 0; i < str.length; i++) {
      console.log(str[i]);
      // Или
      console.log(str.at(i));
    }
    
    for (let key of str) {
      console.log(key);
    }
  ```

<hr>
<br>
<br>

<h2>Строки неизменяемы</h2>

- [ ] Содержимое строки в JavaScript нельзя изменить. Нельзя взять символ посередине и заменить его. Как только строка создана — она такая навсегда.

  ```javascript
    let str = "Hello world!";

    str[0] = "З";
    
    console.log(str); // "Hello world!"
  ```

    + Можно создать новую строку и записать её в ту же самую переменную вместо старой.
     
    ```javascript
      let str = 'Hi';

      str = 'h' + str[1]; // заменяем строку
      
      alert( str ); // hi
    ```
