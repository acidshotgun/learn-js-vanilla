# Function Expression

- [ ] `Function Expression` (Функциональное Выражение). Позволяет создавать новую функцию в середине любого выражения.

```javascript
  let sayHi = function() {
    alert( "Привет" );
  };

// Здесь мы сразу присваиваем её переменной, так что смысл этих примеров кода один и тот же: "создать функцию и поместить её в переменную sayHi".
```

<hr>
<br>
<br>

<h2>Функция – это значение</h2>

- [ ] В JavaScript `функция` – это значение, поэтому мы можем обращаться с ней как со значением. Например скопировать в другую переменную.

```javascript
  function sayHi() {   // (1) создаём
    alert( "Привет" );
  }
  
  let func = sayHi;    // (2) копируем
  
  func(); // Привет     // (3) вызываем копию (работает)!
  sayHi(); // Привет    //     эта тоже все ещё работает (почему бы и нет)

/*
  1) Объявление Function Declaration (1) создаёт функцию и помещает её в переменную с именем sayHi.

  2) В строке (2) мы скопировали её значение в переменную func.
Обратите внимание (ещё раз): нет круглых скобок после sayHi.
Если бы они были, то выражение func = sayHi() записало бы результат вызова sayHi() в переменную func, а не саму функцию sayHi.

  3) Теперь функция может вызываться как sayHi(), так и func().
*/


// Function expression
  let sayHi = function() { // (1) создаём
    alert( "Привет" );
  };
  
  let func = sayHi;
```

<hr>
<br>
<br>

<h2>Функции-«колбэки»</h2>

- [ ] `Callback-функция` - это функция, которая передается в качестве аргумента в другую функцию и выполняется после завершения определенной операции или события.

  + Аргументы `showOk` и `showCancel` функции ask называются `функциями-колбэками` или просто `колбэками`.

```javascript
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );

/*
  Пример, где две анонимные callback функции создаются прямо внутри вызова ф-и ask() и передаются как аргументы
  После чего вызываются прямо в коде
*/


// Далее пример заменяет аналогичную запись
// Тут функции сначала объявлены, а затем переданы в функцию ask() как аргументы

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "Вы согласны." );
  }
  
  function showCancel() {
    alert( "Вы отменили выполнение." );
  }
  
  // использование: функции showOk, showCancel передаются в качестве аргументов ask
  ask("Вы согласны?", showOk, showCancel);
```

<br>

+ еще пример применения callback

  ```javascript
    function sayHi(age, young, old) {
      age >= 18 ? old() : young();
    }
    
    function helloYoung() {
      console.log("Привет молодой");
    }
    
    function helloOld() {
      console.log("Здравствуйте взрослый");
    }
    
    sayHi(15, helloYoung, helloOld);
  

  // С коллбэками как function expression
  
  function sayHi(age, young, old) {
    age >= 18 ? old() : young();
  }
  
  sayHi(
    15,
    () => console.log("Привет"), // можно стрелку
    function () {
      console.log("Здравствуйте");
    }
  );

  ```

  
<hr>
<br>
<br>

<h2>Function Expression в сравнении с Function Declaration</h2>

  + Синтаксис

    ```javascript
      // Function Declaration
      function sum(a, b) {
        return a + b;
      }

      // Function Expression
      let sum = function(a, b) {
        return a + b;
      };
    ```

    + `Function Expression` создаётся, когда выполнение доходит до него, и затем уже может использоваться.
    + `Function Declaration` может быть вызвана раньше, чем она объявлена.
   
    ДОП

    + `Function Declaration` имеет блочную область видимости в строгом режиме. Те когда `Function Declaration` находится в блоке `{...}`, функция доступна везде внутри блока. Но не снаружи него.
   
    ```javascript
      let age = 16; // возьмём для примера 16

      if (age < 18) {
        welcome();               // \   (выполнится)
                                 //  |
        function welcome() {     //  |
          alert("Привет!");      //  |  Function Declaration доступно
        }                        //  |  во всём блоке кода, в котором объявлено
                                 //  |
        welcome();               // /   (выполнится)
      
      } else {
      
        function welcome() {
          alert("Здравствуйте!");
        }
      }
      
      // здесь фигурная скобка закрывается,
      // поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.
      
      welcome(); // Ошибка: welcome is not defined
    ```

      + Верным подходом будет воспользоваться функцией, объявленной при помощи `Function Expression`, и присвоить значение `welcome` переменной, объявленной снаружи `if`, что обеспечит нам нужную видимость.
   
        ```javascript
          let age = prompt("Сколько Вам лет?", 18);

          let welcome;
          
          if (age < 18) {
          
            welcome = function() {
              alert("Привет!");
            };
          
          } else {
          
            welcome = function() {
              alert("Здравствуйте!");
            };
          
          }
          
          welcome(); // теперь всё в порядке
        ```

      + Или еще короче при помощи `callback`

      ```javascript
        let age = prompt("Сколько Вам лет?", 18);

        let welcome = (age < 18) ?
          function() { alert("Привет!"); } :
          function() { alert("Здравствуйте!"); };
        
        welcome(); // теперь всё в порядке
      ```
