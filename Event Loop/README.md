<h2>EVENT LOOP</h2>

[ШПОРА С ТАБЛИЧКОЙ](https://habr.com/ru/articles/681882/)

# Event loop

- Поток выполнения в браузере, равно как и в Node.js, основан на событийном цикле.

<h2>Событийный цикл</h2>

- [ ] Идея `event loop` такая - Есть бесконечный цикл, в котором движок JavaScript (+ Node.js) ожидает задачи, исполняет их и снова ожидает появления новых.

  - Пока есть задачи:
    - выполнить их, начиная с самой старой
  - Бездействовать до появления новой задачи, а затем перейти к пункту 1

<br>

- [ ] Задачи поступают на выполнение – движок выполняет их – затем ожидает новые задачи (во время ожидания практически не нагружая процессор компьютера)

- [ ] Может так случиться, что задача поступает, когда движок занят чем-то другим, тогда она ставится в очередь.

- [ ] Очередь, которую формируют такие задачи, называют «очередью макрозадач» (macrotask queue, термин v8).

![image](https://github.com/user-attachments/assets/bce95008-f249-43bd-af27-b3ea5e0e8a6e)


[ДИАГРАММА](https://app.diagrams.net/#G1875w0lyQMRABzLuQx39ppm7ouR_G_GxP)

<br>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/b5fcdff1-0666-4eab-9b62-433b568eaf58)


<hr>
<br>
<br>

<h2>Макро и микротаски</h2>

- [ ] `Микротаски (Microtasks)`:

  - Микротаски представляют собой задачи, которые выполняются после завершения текущей операции и перед выполнением следующей макротаски.
  - Примеры микротасок включают обработчики промисов `(then, catch, finally)`.

- [ ] `Макротаски (Macrotasks)`:

  - Макротаски представляют собой задачи, которые выполняются после всех микротасок и перед началом следующего цикла событий.
  - Примеры макротасок включают `setTimeout`, `setInterval`, выполнение скриптов, обработку событий (например, кликов).

```javascript
// EVENT LOOP TASKS
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

// 1
// 7
// 3
// 5
// 2
// 6
// 4
//

setTimeout(function timeout() {
  console.log("Таймаут");
}, 0);

let p = new Promise(function (resolve, reject) {
  console.log("Создание промиса");
  resolve();
});

p.then(function () {
  console.log("Обработка промиса");
});

console.log("Конец скрипта");

// Создание промиса
// Конец скрипта
// Обработка промиса
// Таймаут
```

<br>

- [ ] Задача посложнее

```javascript
  let a;

  let p4 = new Promise(function (resolve) {
    console.log("TEST A1", a);
    a = 25;
    setTimeout(() => {
      console.log("TEST A2", a);
      resolve(a);
    }, 100);
  });
  
  setTimeout(function timeout() {
    a = 10;
    console.log("TEST A3", a);
  }, 100);
  
  p4.then(function (b) {
    console.log("TEST A4", a);
  });
  
  console.log("TEST A5", a);
  
  // TEST A1 undefined
  // TEST A5 25
  
  // TEST A2 25
  // TEST A4 25 // promise resolve (setTimeout 100) - поэтому будет ожидать
  
  // TEST A3 10
```

<br>

- [ ] Еще задачка посложнее

```javascript
  function resolveAfter2Seconds(x) {
    console.log(`Какой Х пришёл -> ${x}`);
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x); //
      }, 5000);
    });
  }
  
  async function add1(x) {
    console.log("add1 Hello");
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    console.log("add1 Bye");
    return x + a + b;
  }
  
  add1(10).then(console.log);
  
  // add1 Hello
  // Какой Х пришёл -> 20
  // Какой Х пришёл -> 30
  // add1 Bye
  // 60
```
