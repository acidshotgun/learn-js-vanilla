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
