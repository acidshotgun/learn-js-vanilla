# Декораторы и переадресация вызова, call/apply

<h2>Декораторы</h2>

- [ ] `Декоратор` — это средство, которое позволяет обернуть одну функцию другой и расширить ее возможности.

  + Есть две разные ф-ии с вычислениями, которые мы хотим кэшировать.
  + `Декоратор` `cachingDecorator` Принимает эти ф-ии и возвращает их `улучшеный` вариант.
  + Декоратор возвращает ф-ю, которая будет записывать значения в кэш и возвращать их, если они там есть.

```javascript
  function slow(num) {
    // здесь могут быть ресурсоёмкие вычисления
    return num * 10;
  }
  
  function findLog(num) {
    // здесь тоже могут быть ресурсоёмкие вычисления
    // Поисл логарифма
    return Math.log(num);
  }
  
  // Декорратор для кэширования
  function cachingDecorator(func) {
    const cache = new Map();
  
    return function (num) {
      if (cache.has(num)) {
        console.log("This value is from cache");
        return cache.get(num);
      }
  
      let result = func(num);
  
      cache.set(num, result);
      console.log("This value is not from cache");
      return result;
    };
  }
  
  // ф-я slow, обёрнутая в декоратор
  slow = cachingDecorator(slow);
  
  /*
    Первый вызов будет высчитываться и добавлен в кэш
    Последующие такие же беруться из кэша
  */
  console.log(slow(10));
  console.log(slow(10));
  console.log(slow(10));
  
  console.log(slow(20));
  console.log(slow(20));
  
  console.log(slow(10));
  
  // ф-я findLog, обёрнутая в декоратор
  findLog = cachingDecorator(findLog);
  
  // Аналогично
  console.log(findLog(10));
  console.log(findLog(10));
```

<br>

- [ ] Еще пример.
- [ ] Декоратор, который валидирует кол-во входящих в ф-ю `multiply` элементов + проверяет что они должны быть числом.

  + Возвращает улучшенную, ф-и `multiply`.

```javascript
  const allArgsValid = function (fn) {
    return function (...args) {
      if (args.length != fn.length) {
        throw new Error("Only submit required number of params");
      }
  
      const validArgs = args.filter((arg) => Number.isInteger(arg));
  
      if (validArgs.length < fn.length) {
        throw new TypeError("Argument cannot be a non-integer");
      }
  
      return fn(...args);
    };
  };
  
  //ordinary multiply function
  let multiply = function (a, b) {
    return a * b;
  };
  
  //decorated multiply function that only accepts the required number of params and only integers
  multiply = allArgsValid(multiply);
  
  console.log(multiply(6, 8));
  //48
  
  multiply(6, 8, 7);
  //Error: Only submit required number of params
  
  multiply(3, null);
  //TypeError: Argument cannot be a non-integer
  
  multiply("", 4);
  //TypeError: Argument cannot be a non-integer
```

<hr>
<br>
<br>

<h2>func.call, func.apply</h2>

- [ ] Методы `func.call`, `func.apply` - используются для передачи контекста ф-ии, с котороым ей необходимо будет работать.
- [ ] Работают идентично с той разницей, что `call` - принимает аргументы подряд, а `apply` - принимает аргументы массивом.

```javascript
  "use strict";

  let obj = {
    name: "Vova",
    age: 15,
  };
  
  function printName(text, question) {
    console.log(`${text} ${this.name}, ${question}`);
  }

  printName("Hi", "how are you?"); // Ошибка, тк this == undefined

  /*
    Тут ф-я вызывается с привязанным к объекту контекстом
    this === obj
  */
  printName.call(obj, "Hi", "how are you?"); // Hi Vova, how are you?
  printName.apply(obj, ["Hi", "how are you?"]); // Hi Vova, how are you?
``` 

<hr>
<br>
<br>

<h2>func.bind</h2>

- [ ] `func.bind` - аналогичный метод для привязывания контекста.
- [ ] Отличие - возвращает новую ф-ю с привязанным контекстом.

```javascript
  "use strict";

  let obj = {
    name: "Vova",
    age: 15,
  };
  
  function printName(text, question) {
    console.log(`${text} ${this.name}, ${question}`);
  }
  
  let print = printName.bind(obj, "Hi", "how are you?");
  
  print(); // Hi Vova, how are you?
```

