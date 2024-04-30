# Promise API

<h2>Promise.all</h2>

- [ ] `Promise.all` - используется, когда нужно запустить множество промисов параллельно и дождаться результата каждого.

```javascript
  let promise = Promise.all(iterable);
```

<br>

  + `Promise.all` принимает массив промисов (может принимать любой перебираемый объект, но обычно используется массив) и возвращает новый промис.
  + Новый промис завершится, когда завершится весь переданный список промисов, и его `результатом` будет `массив их результатов`.

```javascript
  Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then(res => console.log(res)); // когда все промисы выполнятся, результат будет [1,2,3]
  // каждый промис даёт элемент массива
```

  + Порядок точно соответствует исходному порядку, независимо от времени.

<br>

- [x] Если любой из промисов завершится с ошибкой, то промис, возвращённый `Promise.all`, немедленно завершается с этой ошибкой.
- [x] В случае ошибки, остальные результаты игнорируются

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/64addf03-7244-4ca7-8f6f-be77e8b4c3c5)


```javascript
  Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).catch(alert); // Error: Ошибка!
```

<br>
<br>

<h3>Большой пример а FETCH</h3>

```javascript
  // массив имен
  let names = ["iliakan", "remy", "jeresig"];

  // Запрос на получение пользователей по имени
  // В request будет массив объектов Promise Responce
  let requests = names.map((name) =>
    fetch(`https://api.github.com/users/${name}`)
  );

  // Promise.all обрабатывает все промисы в request
  // Затем все промисы передает дальше
  Promise.all(requests)
    .then((responses) => {
      // все промисы успешно завершены
      for (let response of responses) {
        console.log(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки
      }
  
      return responses;
    })
    // преобразовать массив ответов response в response.json(),
    // чтобы прочитать содержимое каждого
    // .json() возвращает промис => поэтому нужно Promise.all для их обработки. Он будет обрабатывать массив промисов для .json() и передавать дальше
    // По итогу передается дальше массив уже объектов с данными. После .json()
    .then((responses) => Promise.all(responses.map((r) => r.json())))
    // все JSON-ответы обработаны, users - массив с результатами
    .then((users) => users.forEach((user) => console.log(user.name)));
```

<hr>
<br>
<br>

<h2>Promise.allSettled</h2>

```javascript
  let promise = Promise.allSettled(iterable);
```

<br>

- [x] `Promise.all` завершается с ошибкой, если она возникает в любом из переданных промисов. Это подходит для ситуаций `«всё или ничего»`, когда нам нужны все результаты для продолжения/

<br>

- [ ] Метод `Promise.allSettled` всегда ждёт завершения всех промисов. В массиве результатов будет:

  + `{status:"fulfilled", value:результат}` для успешных завершений,
  + `{status:"rejected", reason:ошибка}` для ошибок.
     
![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/ca8cefd8-784f-484e-8f73-e761fc336217)

<hr>
<br>
<br>

<h2>Promise.race</h2>

- [ ] Метод ждёт только первый выполненный промис, из которого берёт результат (или ошибку).

```javascript
  let promise = Promise.race(iterable);
```

<br>

```javascript
  // Быстрее всех выполнился первый промис, он и дал результат. После этого остальные промисы игнорируются.

  Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) =>
      setTimeout(() => reject(new Error("Ошибка!")), 2000)
    ),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
  ]).then((res) => console.log(res)); // 1
```

<hr>
<br>
<br>

<h2>Promise.any</h2>

- [x] Очень похож на `Promise.race`, но ждёт только `первый успешно выполненный промис`, из которого берёт результат.
- [x] Если ни один из переданных промисов не завершится успешно, тогда возвращённый объект `Promise` будет отклонён с помощью `AggregateError` – специального объекта ошибок, который хранит все ошибки промисов в своём свойстве errors.

<br>

```javascript
  let promise = Promise.any(iterable);
```

<br>

```javascript
  Promise.any([
    new Promise((resolve, reject) =>
      setTimeout(() => reject(new Error("Ошибка!")), 1000)
    ),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
  ]).then((res) => console.log(res)); // 1
```
+ Первый промис в этом примере был самым быстрым, но он был отклонён, поэтому результатом стал второй.
+ После того, как первый успешно выполненный промис «выиграет гонку», все дальнейшие результаты будут проигнорированы.

<hr>
<br>
<br>

<h2>Promise.resolve/reject</h2>

- [x] [НЕ НУЖЕН НО ЕСЛИ ЧЕ МОЖНО ЗАГУГЛИТЬ](https://learn.javascript.ru/promise-api#promise-resolve-reject)
