# Цепочка промисов.

<h2>Цепочка промисов</h2>

- [ ] `Цепочка` промисов используется для последовательного выполнения асинхронных операций и обработки их результатов или ошибок.
- [ ] Она позволяет создавать последовательные цепочки операций, где каждый последующий шаг зависит от результата предыдущего.
- [ ] Это делает код более читаемым и поддерживаемым, позволяя избегать "callback hell" и управлять асинхронным кодом с помощью промисов.

<br>

- [x] ГЛАВНОЕ чтобы в цепочке был возврал `return` чтобы передавать зн-я по цепочке.

```javascript
  new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000); // (*)

  }).then(function(result) { // (**)
    console.log(result); // 1
    return result * 2;

  }).then(function(result) { // (***)
    console.log(result); // 2
    return result * 2;

  }).then(function(result) {
    console.log(result); // 4
    return result * 2;
  });
```

  + В примере промис принимает в себя число и затем выводит его в консоль, передавая дальше при помощи `return`

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/5ca1f080-3ea7-42d7-ad1b-07289423d74c)

  ![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/a26df959-8274-4b03-9ce8-1bf182752e07)

- [x] Всё это работает, потому что вызов `promise.then` тоже возвращает промис, так что мы можем вызвать на нём следующий `.then`.

- [x] Когда обработчик возвращает какое-то значение, то оно становится результатом выполнения соответствующего промиса и передаётся в следующий `.then`.

<hr>
<br>
<br>

<h2>Возвращаем промисы</h2>

- [ ] Обработчик `handler`, переданный в `.then(handler)`, может вернуть промис.
- [ ] Например, когда нужно сделать дополнительный запрос куда-либо.

<br>

- [ ] В этом случае дальнейшие обработчики ожидают, пока он выполнится, и затем получают его результат.

```javascript
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  })
    .then((res) => {
      console.log(res);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(res * 2);
        }, 2000);
      });
    })
    // Этот пусть выполнится сразу ))
    .then((res) => {
      console.log(res);
      return res * 10;
    })
    .then((res) => {
      console.log(res);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(res * 2);
        }, 2000);
      });
    })
    .then((res) => {
      console.log(res);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(res * 2);
        }, 2000);
      });
    });
```

<br>

- [x] Возвращая промисы, мы можем строить цепочки из асинхронных действий.
- [x] Они будут выполнены через какое-то время.

<br>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/ecc85339-4cc7-4548-bae5-0e0204e57fcb)
