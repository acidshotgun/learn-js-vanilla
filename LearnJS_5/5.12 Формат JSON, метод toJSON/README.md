# Формат JSON, метод toJSON

- [x] `JSON (JavaScript Object Notation)` - это формат обмена данными, основанный на синтаксисе JavaScript, который представляет данные в виде пар ключ-значение, аналогично объектам в JavaScript, но все ключи и значения представлены в виде строк.

<hr>
<br>
<br>

<h2>JSON.stringify</h2>

- [ ] Первоначально JSON был создан для JavaScript, но многие другие языки также имеют библиотеки, которые могут работать с ним. Таким образом, JSON легко использовать для обмена данными, когда клиент использует JavaScript, а сервер написан на Ruby/PHP/Java или любом другом языке.

- [ ] JavaScript предоставляет методы:

  + `JSON.stringify` для преобразования объектов в `JSON`.
  + `JSON.parse` для преобразования `JSON` обратно в `объект`.
     
```javascript
  let user = {
    name: "sasha",
    age: 15,
    isAdmin: true,
    languages: ["russian", "english"],
    wife: null,
  };

  /*
    Преобразуем в JSON. 3 аргумента:
      1) Сам объект
      2) Фильтрация зн-й (null по-умолчанию = фильтрации нет)
      3) spaces - отступы для удобства
  */
  let json = JSON.stringify(user, null, 2);
  
  console.log(typeof json); // string
  console.log(json);
  /*
    {
      "name": "sasha",
      "age": 15,
      "isAdmin": true,
      "languages": [
        "russian",
        "english"
      ],
      "wife": null
    }
  */
```

+ Метод `JSON.stringify(student)` берёт объект и преобразует его в строку.

<br>

- [ ] `JSON` поддерживает следующие типы данных:

  + Объекты { ... }
  + Массивы [ ... ]
  + Примитивы:
    + строки,
    + числа,
    + логические значения true/false,
    + null.

```javascript
  // число в JSON остаётся числом
  console.log(JSON.stringify(1)); // 1
  
  // строка в JSON по-прежнему остаётся строкой, но в двойных кавычках
  console.log(JSON.stringify("test")); // "test"
  
  console.log(JSON.stringify(true)); // true (строка)
  
  console.log(JSON.stringify([1, 2, 3])); // [1,2,3] (строка)
  
  console.log(JSON.stringify(null)); // null (строка)
  
  console.log(JSON.stringify(undefined)); // undefined (не поддерживается)
```

<br>

- [ ] `JSON` является независимой от языка спецификацией для данных, поэтому `JSON.stringify` пропускает некоторые специфические свойства объектов JavaScript:

  + Свойства-функции (методы).
  + Символьные ключи и значения.
  + Свойства, содержащие `undefined`.

```javascript
  let user = {
    sayHi() {
      // будет пропущено
      alert("Hello");
    },
    [Symbol("id")]: 123, // также будет пропущено
    something: undefined, // как и это - пропущено
  };
  
  console.log(JSON.stringify(user)); // {} (пустой объект)
```

<br>

- [x] `Вложенные объекты` поддерживаются и конвертируются автоматически.

<hr>
<br>
<br>

<h2>Пользовательский «toJSON»</h2>

- [ ] Как и `toString` для преобразования строк, объект может предоставлять метод `toJSON` для преобразования в `JSON`. `JSON.stringify` автоматически вызывает его, если он есть.

```javascript
  let room = {
    number: 23,
    toJSON() {
      return this.number;
    },
  };
  
  let meetup = {
    title: "Conference",
    room,
  };
  
  console.log(JSON.stringify(room)); // 23
  
  console.log(JSON.stringify(meetup));
  /*
    {
      "title":"Conference",
      "room": 23
    }
  */
```

+ `toJSON` используется как при прямом вызове `JSON.stringify(room)`, так и когда room вложен в другой сериализуемый объект.

<hr>
<br>
<br>

<h2>JSON.parse</h2>

- [ ] Чтобы декодировать `JSON-строку`, нам нужен другой метод с именем `JSON.parse`.

```javascript
  let json = `{
    "name": "sasha",
    "age": 15,
    "isAdmin": true,
    "languages": [
      "russian",
      "english"
    ],
    "wife": null
  }`;
  
  let obj = JSON.parse(json);
  
  console.log(obj); // Получаем объект нормальный
```

<br>

- [ ] Синтаксис:

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/72bf85bd-7455-4e86-a0b7-c50eee7693d5)

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/8ce7e242-b4dc-40c2-beb3-366b504527d1)

<br>
<br>

- [x] `JSON` может быть настолько сложным, насколько это необходимо, объекты и массивы могут включать другие объекты и массивы. Но они должны быть в том же JSON-формате.
- [x] Вот типичные ошибки в написанном от руки JSON (иногда приходится писать его для отладки):

```javascript
  let json = `{
    name: "John",                     // Ошибка: имя свойства без кавычек
    "surname": 'Smith',               // Ошибка: одинарные кавычки в значении (должны быть двойными)
    'isAdmin': false,                 // Ошибка: одинарные кавычки в ключе (должны быть двойными)
    "birthday": new Date(2000, 2, 3), // Ошибка: не допускается конструктор "new", только значения
    "gender": "male"                  // Ошибка: отсутствует запятая после непоследнего свойства
    "friends": [0,1,2,3],             // Ошибка: не должно быть запятой после последнего свойства
  }`;
```

<hr>
<br>
<br>

<h2>Использование reviver</h2>

