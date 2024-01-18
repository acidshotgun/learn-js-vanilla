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

<hr>
<br>
<br>

<h2>Изменение регистра</h2>

- [ ] Методы `toLowerCase()` и `toUpperCase()` меняют регистр символов:

  ```javascript
    alert( 'Interface'.toUpperCase() ); // INTERFACE
    alert( 'Interface'.toLowerCase() ); // interface
  ```

  + Если мы захотим перевести в нижний регистр какой-то конкретный символ:
     
    ```javascript
      alert( 'Interface'[0].toLowerCase() ); // 'i'
    ```

<hr>
<br>
<br>

<h2>Поиск подстроки</h2>

- [ ] Существует несколько способов поиска подстроки.

  <h3>str.indexOf</h3>

  + Он ищет подстроку `substr` в строке `str`, начиная с позиции `pos`, и возвращает позицию, на которой располагается совпадение, либо `-1` при отсутствии совпадений.
     
    ```javascript
      let str = "Widget with id";

      console.log(str.indexOf("Widget")); // 0, потому что подстрока 'Widget' найдена в начале
      console.log(str.indexOf("widget")); // -1, совпадений нет, поиск чувствителен к регистру
      
      console.log(str.indexOf("id")); // 1, подстрока "id" найдена на позиции 1 (..idget with id)
    ```

  + Необязательный второй аргумент позволяет начать поиск с определённой позиции.
     
    ```javascript
      let str = "Widget with id";

      console.log(str.indexOf("id", 2)); // 12
    ```

    ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/e0f068fa-4ab5-4d38-b6f1-64916036447b)

    ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/4a8eeab3-d707-4bc8-93b6-73af4eb94d8f)

  <h3>includes, startsWith, endsWith</h3>

  
