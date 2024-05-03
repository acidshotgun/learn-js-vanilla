# Async/await

- [ ] `Async/await` - это альтернативный синтаксис работы с промисами.

<hr>
<br>
<br>

<h2>Асинхронные функции - async</h2>

- [ ] `async` - ставится перед ф-ей и сообщает, что ф-я будет асинхронная.
- [ ] `async` всегда возвращает `Promise`

<br>

  + Два кода ниже идентичные. (Всегда возвращает промис)

  ```javascript
    async function f() {
      return 1;
    }
    
    f().then(console.log); // 1
  
  // и то же самое
    async function f1() {
      return Promise.resolve(1);
    }
    
    f1().then(console.log); // 1
  ```

<hr>
<br>
<br>

<h2>Await</h2>

- [ ] `await` заставит интерпретатор JavaScript ждать, пока промис справа от `await` не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.
  + те. справа от `await` должен быть `Promise` или ф-я которая его возвращает.
     
- [ ] `await` работает только внутри `async` ф-ии.

```javascript
  async function foo() {
    const fetchData = new Promise((resolve) => {
      setTimeout(() => {
        resolve("this is date");
      }, 1500);
    });
  
    // Ожидаем данные из промиса fetchData
    const data = await fetchData;
  
    // Выводим данные
    console.log(data);
  }
  
  foo(); // this is date
```

- [x] По сути, это просто «синтаксический сахар» для получения результата промиса, более наглядный, чем `promise.then`.

<hr>
<br>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/a0c33c53-0220-4071-876a-08553d124105)

<hr>
<br>
<br>

<h2>Обработка ошибок</h2>

- [ ] Когда промис завершается успешно, `await promise` возвращает результат. Когда завершается с ошибкой – будет выброшено исключение. Как если бы на этом месте находилось выражение `throw`.

  + Два одинаковых кода:
     
  ```javascript
    async function f() {
      await Promise.reject(new Error("Упс!"));
    }

  // И такой же
    async function f() {
      throw new Error("Упс!");
    }
  ```

<br>

- [x] Но есть отличие: на практике промис может завершиться с ошибкой не сразу, а через некоторое время. В этом случае будет задержка, а затем `await` выбросит исключение.
- [x] Такие ошибки можно ловить, используя `try..catch`, как с обычным `throw`:

```javascript
  async function f() {

    try {
      let response = await fetch('/no-user-here');
      let user = await response.json();
    } catch(err) {
      // перехватит любую ошибку в блоке try: и в fetch, и в response.json
      alert(err);
    }
  }
  
  f();
```

<br>

- [ ] Если у нас нет `try..catch`, асинхронная функция будет возвращать завершившийся с ошибкой промис (в состоянии rejected). В этом случае мы можем использовать метод `.catch` промиса, чтобы обработать ошибку:
- [ ] Виртуальная обёртка `try/catch`, которая отлавливает ошибки.

```javascript
  async function f() {
    let response = await fetch('http://no-such-url');
  }
  
  // f() вернёт промис в состоянии rejected
  f().catch(alert); // TypeError: failed to fetch // (*)
```

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/7f8adfeb-92a8-4bc3-8562-5b8fe838121c)
