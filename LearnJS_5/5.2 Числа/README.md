# Числа

- [ ] В современном JavaScript существует два типа чисел:

  + Обычные числа в JavaScript хранятся в 64-битном формате IEEE-754, который также называют «числа с плавающей точкой двойной точности»
  + BigInt числа дают возможность работать с целыми числами произвольной длины.

<hr>
<br>
<br>

<h2>Способы записи числа</h2>

- [ ]  1 миллиард

```javascript
  let billion = 1000000000;

  let billion = 1_000_000_000
```

  + В JavaScript, чтобы укоротить запись числа, мы можем добавить к нему букву `"e"` и указать необходимое количество нулей:

  ```javascript
    let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей
  
    alert( 7.3e9 );  // 7.3 миллиарда (7,300,000,000)
  
  
    // Другими словами, "e" умножает число на 1 с указанным количеством нулей.
  
    1e3 === 1 * 1000 // e3 означает *1000
    1.23e6 === 1.23 * 1000000 // e6 означает *1000000
  ```

<br>
<br>

- [ ] 1 микросекунду (одна миллионная секунды):

```javascript
  let mcs = 0.000001;
```

  + В этом случае нам также поможет `"e"`. Если мы хотим избежать записи длинной последовательности из нулей, мы можем сделать так:

  ```javascript
    let ms = 1e-6; // шесть нулей слева от 1


    // Если мы подсчитаем количество нулей в 0.000001, их будет 6. Естественно, верная запись 1e-6.

    // Другими словами, отрицательное число после "e" подразумевает деление на 1 с указанным количеством нулей:

    // 1 делится на 1 с 3 нулями
    1e-3 === 1 / 1000 (=0.001)
    
    // 1.23 делится на 1 с 6 нулями
    1.23e-6 === 1.23 / 1000000 (=0.00000123)
  ```

<hr>
<br>
<br>

<h2>Округление</h2>

- [ ] Одна из часто используемых операций при работе с числами – это `округление`.

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/fe3d7835-f8b3-479f-ab22-8158742f1da7)

<br>

- [ ] Что если нам надо округлить число до `n-ого` количества цифр в дробной части?
- [ ] Например, у нас есть `1.2345` и мы хотим округлить число до 2-х знаков после запятой, оставить только `1.23`.

<br>

- [x] Есть два пути решения:

  + Умножить и разделить.

     ```javascript
      let num = 1.23456;

      alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23
     ```

  + Метод `toFixed(n)` округляет число до `n` знаков после запятой и возвращает строковое представление результата.
     
    ```javascript
      let num = 12.34;
      alert( num.toFixed(1) ); // "12.3"


    // Округляет значение до ближайшего числа, как в большую, так и в меньшую сторону, аналогично методу Math.round:

      let num = 12.38;
      alert( num.toFixed(1) ); // "12.4"
    ```

    + Результатом `toFixed` является `строка`. Если десятичная часть короче, чем необходима, будут добавлены нули в конец строки:
   
      ```javascript
        let num = 12.34;
        alert( num.toFixed(5) ); // "12.34000", добавлены нули, чтобы получить 5 знаков после запятой
      ```

    + Мы можем преобразовать полученное значение в `число`, используя унарный оператор `+ или Number()`, пример с унарным оператором: `+num.toFixed(5) / Number(num.toFixed(5))`.
   
<hr>
<br>
<br>

<h2>Неточные вычисления</h2>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/80e8a31c-d59d-4531-a57b-ad0b6e3589d4)

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/7fd3a700-141d-4619-b0cd-60d22dcd7232)

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/a98e484e-001a-459d-bacb-bb1e1912b8ab)

<hr>
<br>
<br>

<h2>Проверка: isFinite и isNaN</h2>

- [ ] Cпециальные числовые значения:

  + `Infinity (и -Infinity)` — особенное численное значение, которое ведёт себя в точности как математическая бесконечность `∞`. (Возникает при делении на `0/ -0`)
  + `NaN` представляет ошибку.
     
<br>

- [x] Эти числовые значения принадлежат типу `number`, но они не являются «обычными» числами, поэтому есть функции для их проверки:

  + `isNaN(value)` преобразует значение в число и проверяет является ли оно `NaN`:
     
    ```javascript
      alert( isNaN(NaN) ); // true
      alert( isNaN("str") ); // true
      alert( isNaN(5) ); // fasle


    /*
      Сравнить как === NaN нельзя
      NaN уникально тем, что не является равным ничему другому. Даже себе.
    */

      alert( NaN === NaN ); // false
    ```

  <br>

  + `isFinite(value)` **`преобразует аргумент в число`** и возвращает `true`, если оно является обычным числом, т.е. не `NaN/Infinity/-Infinity`:
     
    ```javascript
      console.log(isFinite("15")); // true (Само преобразует в число)
      console.log(isFinite("str")); // false, потому что специальное значение: NaN
      console.log(isFinite(Infinity)); // false, потому что специальное значение: Infinity

      console.log(isFinite("")); // true (Пустая строка ""/" " интерпритируется как 0)
      console.log(isFinite("123fff")); // false (Преобразует в число. 123fff == NaN (Не прохдит проверку))
      console.log(isFinite(false)); // true (Преобразует в число. False == 0 (число))
      console.log(isFinite(true)); // true (Преобразует в число. False == 1 (число))
      
      console.log(isFinite(undefined)); // false (Преобразует в число. Undefined == NaN (не проходит проверку))
      console.log(isFinite(null)); // true (Преобразует в число. Null == 0 (число))


    // Объект

      console.log(isFinite({ number: 15 })); // false (Попытка преобразования объекта к примитиву == NaN)

      const obj = {
        number: 15,
        string: "Привет",
      
        [Symbol.toPrimitive](hint) {
          console.log(hint);
      
          return hint === "number" ? this.number : this.string;
        },
      };
      
      console.log(isFinite(obj)); true (преобразовали к примитиву 15)
    
    ```

<hr>
<br>
<br>

<h2>Проверка: Number.isFinite и Number.isNaN</h2>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/39193f67-f647-4471-837d-6ea2b49a4d81)

- [x] Рботают аналогично `isFinite и isNaN`, но сначала строго проверяют значения на тип `number`.

  + `Number.isNaN(value)` возвращает `true` только в том случае, если аргумент принадлежит к типу `number` и является `NaN`. Во всех остальных случаях возвращает `false`.

    ```javascript
      console.log(Number.isNaN(NaN)); // true (number и == NaN)
      console.log(Number.isNaN("str")); // false (NaN, но !== number)
      console.log(Number.isNaN(5)); // fasle (Number, но !== NaN)
    ```

  <br>

  + `Number.isFinite(value)` возвращает `true` только в том случае, если аргумент принадлежит к типу `number` и не является `NaN/Infinity/-Infinity`. Во всех остальных случаях возвращает `false`.
     
    ```javascript
      console.log(Number.isFinite("15")); // fasle (Не number)
      console.log(Number.isFinite("str")); // fasle (Не number)
      console.log(Number.isFinite(Infinity)); // fasle (Number, но == Infinity)
      
      console.log(Number.isFinite("")); // fasle (Не number)
      console.log(Number.isFinite("123fff")); // fasle (Не number)
      console.log(Number.isFinite(false)); // fasle (Не number)
      console.log(Number.isFinite(true)); // fasle (Не number)
      
      console.log(Number.isFinite(undefined)); // false (Преобразует в число. Undefined == NaN (не проходит проверку))
      console.log(Number.isFinite(null)); // fasle (Не number)

    // Объект

      console.log(Number.isFinite({ number: 15 })); // false (Object !== number)
      
      const obj = {
        number: 15,
        string: "Привет",
      
        [Symbol.toPrimitive](hint) {
          console.log(hint);
      
          return hint === "number" ? this.number : this.string;
        },
      };
      
      console.log(Number.isFinite(obj)); // fasle (Object !== number)
    ```

<hr>
<br>
<br>

<h2>Сравнение Object.is</h2>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/291c320b-4205-47c0-88ff-cbb9664e13b7)

```javascript
  // 0 и -0
  let a = 0;
  let b = -0;
  
  console.log(a === b); // true 0 === -0, странно
  console.log(Object.is(a, b)); // false
  
  // NaN и NaN
  let c = NaN;
  let d = NaN;
  
  console.log(c === d); // false (NaN ничему не равно даже себе)
  console.log(Object.is(c, d)); // true (Тут они равноы)
```

<hr>
<br>
<br>

<h2>parseInt и parseFloat</h2>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/0201e4ed-17a1-4d19-b0e1-af48df26ac81)

<br>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/cf0821bf-1867-494f-9853-7d800a483b8e)

  ```javascript
    // Стандартное поведение
    console.log(parseInt("522px")); // 522
    console.log(parseFloat("12.45px")); // 12.45
    
    // Не стандарт
    console.log(parseInt("12.5")); // 12 - parseInt вернет целую часть
    console.log(parseFloat("12.5.55")); // 12.5 - parseFloat остановится на второй точке
  ```

+ Функции `parseInt/parseFloat` вернут `NaN`, если не смогли прочитать ни одну цифру:

  ```javascript
    console.log(parseInt("a123")); // NaN - тк начинается с буквы
    console.log(parseInt("a12.5")); // NaN - тк начинается с буквы
  ```

<hr>
<br>
<br>

<h2>Другие математические функции</h2>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/f50fd8e2-cbae-4137-97be-7615bda38734)

- [x] В объекте Math есть множество функций и констант, включая тригонометрические функции, подробнее можно ознакомиться в документации по объекту [Math](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math)

<hr>
<br>
<br>

<h2>Итого</h2>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/a9d28a92-0991-4b60-8abc-8eb801bca5b8)

<br>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/c4d16adb-96b8-4736-9ef2-2bcec4a5c50c)

<br>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/910dcee3-1ed6-40e7-8322-54baf5255b79)

<br>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/1e4209bd-752e-4f3c-bf9d-2ffc9fd82d17)

<br>

- [x] Ещё больше математических функций: Документация по объекту [Math](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math). Библиотека маленькая, но содержит всё самое важное.
