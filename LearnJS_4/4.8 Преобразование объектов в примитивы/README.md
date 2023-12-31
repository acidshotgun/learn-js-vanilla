# Преобразование объектов в примитивы

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/da395e76-c9c1-4745-b936-cdb872f46f39)

<hr>
<br>
<br>

<h2>Правила преобразования</h2>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/f3d9c53c-dcb5-423c-9d79-abfb9b73ed09)

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/6b4ce2a4-88fc-46be-8c02-d7fa1686c4be)


<hr>
<br>
<br>

<h2>Хинты</h2>

- [ ] Как JavaScript решает, какое преобразование применить?

- [ ] Существует три варианта преобразования типов, которые происходят в различных ситуациях. Они называются `«хинтами»`, как описано в спецификации:

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/4f59ab61-497f-4f6a-b7b3-c797a0bcd106)

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/03fe0655-9938-41ff-a1d8-34cb3a776e7a)

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/b5766e5d-3855-440f-b7f1-01b676f67c7c)

+ В методе `Symbol.toPrimitive`, если передан аргумент `hint`, равный `"default"`, и не реализованы другие режимы преобразования `("number" или "string")`, то будет использовано преобразование к примитиву типа "default". Это приведет к попытке преобразовать объект к `строке`.

  <br>

  + Впрочем на практике, всё немного проще.

  + `Все встроенные объекты`, за исключением одного (`объект Date`, который мы рассмотрим позже), `реализуют "default"` преобразование тем же способом, что и `"number"`. И нам следует поступать так же.

<br>

<hr>
<hr>

- [x] **`Чтобы выполнить преобразование, JavaScript пытается найти и вызвать три следующих метода объекта`**:

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/229f4dc9-cf64-49ce-a439-efa536f36ee8)

<hr>
<hr>

<br>
<br>

<h2>Symbol.toPrimitive</h2>

- [ ] Есть встроенный символ с именем `Symbol.toPrimitive`, который следует использовать для обозначения метода преобразования, вот так:

```javascript
  obj[Symbol.toPrimitive] = function(hint) {
    // вот код для преобразования этого объекта в примитив
    // он должен вернуть примитивное значение
    // hint = чему-то из "string", "number", "default"
  };
```

- [ ] Если метод `Symbol.toPrimitive` существует, он используется для всех `хинтов`, и больше никаких методов не требуется.

  + Например, здесь объект user реализует его:
     
```javascript
  let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // демонстрация результатов преобразований:
  alert(user); // hint: string -> {name: "John"}
  alert(+user); // hint: number -> 1000
  alert(user + 500); // hint: default -> 1500

  /*
    Мой пример
    Унарный плюс "+" вызывает хинт number и возвращает 1000
    строка "строка" приводит к конкатенации
    Получаем строку "1000строка"

    тут уже срабатывает default, 
  */
  console.log(user + "строка") // 1000строка
```

  + Как мы можем видеть из кода, user становится `либо строкой` со своим описанием, `либо суммой денег` в зависимости от преобразования. Единый метод `user[Symbol.toPrimitive] обрабатывает все случаи преобразования`.

<hr>
<br>
<br>

<h2>toString/valueOf</h2>

- [ ] Если нет Symbol.toPrimitive, тогда JavaScript пытается найти методы toString и valueOf:

  + Для хинта "string": вызвать метод `toString`, `а если он не существует или возвращает объект вместо примитивного значения`, то `valueOf` (таким образом, `toString`имеет приоритет при строковом преобразовании).
  + Для других хинтов: вызвать метод `valueOf`, `а если он не существует или возвращает объект вместо примитивного значения`, то `toString` (таким образом, `valueOf` имеет приоритет для математических операций).
     
  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/6518bac6-38fb-4a2f-817a-0a738c7e6bb5)

<br>
<br>

+ Для примера, используем их в реализации всё того же объекта user. Но уже используя комбинацию `toString и valueOf` вместо `Symbol.toPrimitive`:

```javascript
  let user = {
    name: "John",
    money: 1000,
  
    // для хинта равного "string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // для хинта равного "number" или "default"
    valueOf() {
      return this.money;
    }
  
  };
  
  alert(user); // toString -> {name: "John"} // для строки
  alert(+user); // valueOf -> 1000  // для числа
  alert(user + 500); // valueOf -> 1500 // для default
```

+ Как видим, получилось то же поведение, что и в предыдущем примере с `Symbol.toPrimitive`.

<br>

- [ ] Довольно часто нам нужно единое «универсальное» место для обработки всех примитивных преобразований. В этом случае мы можем реализовать `только toString`:

```javascript
  let user = {
    name: "John",
  
    toString() {
      return this.name;
    }
  };
  
  alert(user); // toString -> John
  alert(user + 500); // toString -> John500
```

  + В отсутствие `Symbol.toPrimitive и valueOf`, `toString` обработает все примитивные преобразования.

<br>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/7a7cd071-c60a-4a1f-963c-0e573fb9236c)

<hr>
<br>
<br>

<h2>Дальнейшие преобразования</h2>

- [ ] Как мы уже знаем, многие операторы и функции выполняют преобразования типов, например, умножение * преобразует операнды в числа.

- [ ] Если мы передаём объект в качестве аргумента, то в вычислениях будут две стадии:

  + Объект преобразуется в примитив (с использованием правил, описанных выше).
  + Если необходимо для дальнейших вычислений, этот примитив преобразуется дальше.
     
```javascript
  let obj = {
    // toString обрабатывает все преобразования в случае отсутствия других методов
    toString() {
      return "2";
    }
  };
  
  alert(obj * 2); // 4, объект был преобразован к примитиву "2", затем умножение сделало его числом
```

  + Умножение `obj * 2` сначала преобразует объект в примитив (это строка "2") (тк имеем alert).
  + Затем `"2" * 2` становится `2 * 2` (строка преобразуется в число).

<br>

+ А вот, к примеру, бинарный плюс в подобной ситуации соединил бы строки, так как он совсем не брезгует строк:

```javascript
  let obj = {
    toString() {
      return "2";
    }
  };
  
  alert(obj + 2); // 22 ("2" + 2), преобразование к примитиву вернуло строку => конкатенация
```

<hr>
<br>
<br>

<h2>Итого</h2>

- [ ] Преобразование объекта в примитив вызывается автоматически многими встроенными функциями и операторами, которые ожидают примитив в качестве значения.

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/8c1cd5bc-794d-444a-8ec5-adb3123fbf4a)



