# var

- [ ] `let` и `const` ведут себя одинаково по отношению к лексическому окружению, области видимости.

- [ ] `var` - ведет себя немного иначе.

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/26051e34-5043-43d5-8967-108c3a5aca50)

<hr>
<br>
<br>

<h2>Для var не существует блочной видимости</h2>

  - [ ] К переменной `var` можно получить доступ снаруж блока

```typescript
  {
    var name1 = "hello";
  }
  
  console.log(name1); // hello
```

```typescript
  // цикл например
  for (var i = 0; i < 10; i++) {
    //...
  }
  
  console.log(i); // 10
```

<hr>
<br>
<br>

<h2> var ограничена ф-ей</h2>

  - [ ] К переменной `var` нельзя получить доступ, снаружи ф-ии.
  - [ ] `var` ограничыена ф-ей.

```typescript
 function sayHi() {
    if (true) {
      var foo = "Привет";
    }
  
    console.log(foo);
  }
  
  sayHi(); // Привет (OK)
  
  // foo ограничена ф-ей
  // И это локальная переменная для sayHi()
  console.log(foo); // ReferenceError: foo is not defined
```

<hr>
<br>
<br>

<h2> «var» допускает повторное объявление</h2>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/fcf32c96-58d8-41ad-8887-e62538173d9f)

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/c5a57122-acaf-47cc-9ca1-60736eac029c)

<hr>
<br>
<br>

<h2> «var» обрабатываются в начале запуска функции</h2>

- [ ] Объявления переменных `var` обрабатываются в начале выполнения функции (или запуска скрипта, если переменная является глобальной).

- [ ] Другими словами, переменные `var` считаются объявленными с самого начала исполнения функции вне зависимости от того, в каком месте функции реально находятся их объявления (при условии, что они не находятся во вложенной функции).

```javascript
  function sayHi() {
    phrase = "Привет";
  
    alert(phrase);
  
    var phrase;
  }
  sayHi();
```

+ и так (блочная область игнорируется)

```javascript
  function sayHi() {
    phrase = "Привет"; // (*)
  
    if (false) {
      var phrase;
    }
  
    alert(phrase);
  }
  sayHi();
```

- [x] Это поведение называется `«hoisting» (всплытие, поднятие)`, потому что все объявления переменных `var` `«всплывают»` в самый верх функции.

<hr>
<br>
<br>

<h2> IIFE</h2>

- [ ] `IIFE` - `«Immediately-invoked function expressions»` - это способ имкляции блочной видимости.

```javascript
// Способы создания IIFE

  (function() {
    alert("Круглые скобки вокруг функции");
  })();
  
  (function() {
    alert("Круглые скобки вокруг всего выражения");
  }());
  
  !function() {
    alert("Выражение начинается с логического оператора НЕ");
  }();
  
  +function() {
    alert("Выражение начинается с унарного плюса");
  }();
```
