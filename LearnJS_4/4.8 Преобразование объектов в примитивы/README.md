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
  */
  console.log(user + "строка") // 1000строка
```

  + Как мы можем видеть из кода, user становится `либо строкой` со своим описанием, `либо суммой денег` в зависимости от преобразования. Единый метод `user[Symbol.toPrimitive] обрабатывает все случаи преобразования`.

<hr>
<br>
<br>

<h2>toString/valueOf</h2>
