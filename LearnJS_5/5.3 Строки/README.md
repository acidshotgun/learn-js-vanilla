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

  <h3>+ str.indexOf</h3>

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

  <h3>+ includes, startsWith, endsWith</h3>

  + Более современный метод `str.includes(substr, pos)` возвращает `true`, если в строке `str` есть подстрока `substr`, либо `false`, если нет.

  + Это — правильный выбор, если нам необходимо проверить, есть ли совпадение, но позиция не нужна:
  
    ```javascript
      console.log("Widget with id".includes("Widget")); // true

      console.log("Hello".includes("Bye")); // false

      // Необязательный второй аргумент str.includes позволяет начать поиск с определённой позиции:
      console.log("Midget".includes("id")); // true
      console.log("Midget".includes("id", 3)); // false, поиск начат с позиции 3
    ```

  + Методы `str.startsWith` и `str.endsWith` проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой:
     
    ```javascript
      console.log("Widget".startsWith("Wid")); // true, "Wid" — начало "Widget"
      console.log("Widget".endsWith("get")); // true, "get" — окончание "Widget"
    ```

<hr>
<br>
<br>

<h2>Получение подстроки</h2>

- [ ] В JavaScript есть 3 метода для получения подстроки: `substring`, `substr` и `slice`.

    <h3>+ str.slice(start [, end])</h3>

  + Возвращает часть строки от `start` до `(не включая) end`.

     ```javascript
      let str = "Hello world";

      console.log(str.slice(0, 7)); // Hello w (0 - 7, не включая 7(пробел - считается как символ))
      console.log(str.slice(0, 2)); // He (0 - 2, не включая 2)
      
      /*
        Если второго аргумента нет
        Получаем всю строку начиная с аргумента `start`
      */
      console.log(str.slice(0)); // Hello world
      console.log(str.slice(4)); // o world

       /*
        Также для start/end можно задавать отрицательные значения. 
        Это означает, что позиция определена как заданное количество символов с конца строки:
      */
      
      console.log(str.slice(-4, -1)); // orl (до -1(не включая -1))
      console.log(str.slice(-4)); // orld (от -4 с конца и до конца)
     ```  
      
    <h3>+ str.substring(start [, end])</h3>

  + Возвращает часть строки между `start и end` (не включая) `end`.
     
  + Это — почти то же, что и `slice`, но можно задавать `start` больше `end`.
    Если `start` больше `end`, то метод `substring` сработает так, как если бы аргументы были `поменяны местами`.

    ```javascript
      let str = "stringify";

      // для substring эти два примера — одинаковы
      alert( str.substring(2, 6) ); // "ring"
      alert( str.substring(6, 2) ); // "ring"
      
      // …но не для slice:
      alert( str.slice(2, 6) ); // "ring" (то же самое)
      alert( str.slice(6, 2) ); // "" (пустая строка)

      // Отрицательные зн-я интерпретируются как 0
      let str = "Hello world";
    
      console.log(str.substring(-2, 5)); // Hello (-2 == 0)
    ```

    <h3>+ str.substr(start [, length])</h3>

  + Возвращает часть строки от `start` длины `length`.

  + В противоположность предыдущим методам, этот позволяет указать `длину вместо конечной позиции`:
     
    ```javascript
      let str = "Hello world";

      console.log(str.substr(2, 7)); // llo wor (со 2 на длину 7)
      
      /*
        Значение первого аргумента может быть отрицательным, тогда позиция определяется с конца:
      */
      
      console.log(str.substr(-5, 2)); // wo (-5 символ и длина 2)
    ```

  + Этот метод находится в Annex B спецификации языка. Это означает, что его должны поддерживать только браузерные движки JavaScript, и использовать его не рекомендуется. Но на практике он поддерживается везде.
     
  <br>

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/64b0090a-a7ce-42e8-a2af-92c97667ed74)

<hr>
<br>
<br>

<h2>Сравнение строк</h2>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/95a11eec-7934-4474-9af5-9193ce5cec09)

<h3>+ str.codePointAt(pos)</h3>

  + Возвращает код для символа, находящегося на позиции pos:

    ```javascript
      // одна и та же буква в нижнем и верхнем регистре
      // будет иметь разные коды
      alert( "z".codePointAt(0) ); // 122
      alert( "Z".codePointAt(0) ); // 90
    ```

<h3>+ String.fromCodePoint(code)</h3>

  + Создаёт символ по его коду `code`

    ```javascript
      alert( String.fromCodePoint(90) ); // Z
    ```

    ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/daf031f2-50e0-41a7-9cfb-a300ab900e8f)

    ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/127ec12d-312d-4a9f-9d41-4414686cdc96)

<hr>
<br>
<br>

<h2>ИТОГО</h2>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/99beb711-b87b-4d41-a144-43dd4da47f3b)


