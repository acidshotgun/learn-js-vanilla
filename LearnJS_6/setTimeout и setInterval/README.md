# Планирование: setTimeout и setInterval

- [ ] Выполнение ф-й можно планировать:

  + `setTimeout` позволяет вызвать функцию один раз через определённый интервал времени.
  + `setInterval` позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.\
     
<br>

- [x] Эти методы не являются частью спецификации JavaScript. Но большинство сред выполнения JS-кода имеют внутренний планировщик и предоставляют доступ к этим методам. В частности, они поддерживаются во всех браузерах и Node.js.

<hr>
<br>
<br>

<h2>setTimeout</h2>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/4bcbfd9c-52bc-48b7-bc95-507d9753273b)

<br>

```javascript
  const sayHi = (name, ...args) => {
    console.log(`HELLLOOO ${name}`);
  
    args.forEach((item) => console.log(item));
  };

  // Вызовем ф-ю sayHi через 1.5 секунды
  setTimeout(() => sayHi("sasha", "Hello", "World"), 1500); // HELLLOOO sasha ЖОПА ГАД
```

<br>
<br>

<h3>+ Отмена через clearTimeout</h3>

- [ ] `Индендификатор таймера` можно положить в переменную.
- [ ] Это позволит получить информацию, а так же `отменить` его.

```javascript
  const sayHi = (name, ...args) => {
    console.log(`HELLLOOO ${name}`);
  
    args.forEach((item) => console.log(item));
  };
  
  // Присвоили переменной
  const timer = setTimeout(() => sayHi("sasha", "ЖОПА", "ГАД"), 1500);
  
  // Отменили (передумали)
  clearInterval(timer);
  
  // Можно даже отменить через какое-то время
  // Тут таймаут удалится до его исполнения
  setTimeout(() => clearTimeout(timer), 1300);
```

<hr>
<br>
<br>

<h2>setInterval</h2>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/0fbba8a6-db90-4f75-a5b2-8aa0542b7b27)

```javascript
  // повторить с интервалом 2 секунды
  let timerId = setInterval(() => console.log('tick'), 2000);
  
  // остановить вывод через 5 секунд
  setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);
```

<br>

- [x] Доп

```javascript
  const sayHi = (name) => {
    console.log(`HELLLOOO ${name}`);
  };
  
  const interval1 = setInterval(
    () => setTimeout(() => sayHi("sasha"), 2000),
    1000
  );
  
  setTimeout(() => {
    clearInterval(interval1), console.log("STOP INTERVAL!");
  }, 10000);
```

<hr>
<br>
<br>

<h2>Вложенный setTimeout</h2>

- [ ] Еще один способ запускать что-то регулярно, помимо `setInterval` - это вложенный `setTimeout`.

```javascript
/** вместо:
  let timerId = setInterval(() => alert('tick'), 2000);
*/

// Метод setTimeout выше планирует следующий вызов прямо после окончания текущего (*).
  let timerId = setTimeout(function tick() {
    console.log("tick");
    timerId = setTimeout(tick, 2000); // (*)
  }, 2000);
```

- [x] Вложенный `setTimeout` – более гибкий метод, чем `setInterval`. С его помощью последующий вызов может быть задан по-разному в зависимости от результатов предыдущего.

  + Например, необходимо написать сервис, который отправляет запрос для получения данных на сервер каждые 5 секунд, но если сервер перегружен, то необходимо увеличить интервал запросов до 10, 20, 40 секунд…
  + Вот псевдокод:
     
  ```javascript
  let delay = 5000;

  let timerId = setTimeout(function request() {
    ...отправить запрос...
  
    if (ошибка запроса из-за перегрузки сервера) {
      // увеличить интервал для следующего запроса
      delay *= 2;
    }
  
    timerId = setTimeout(request, delay);
  
  }, delay);
  ```

<br>
<br>

- [x] Вложенный `setTimeout` позволяет задать задержку между выполнениями более точно, чем `setInterval`.

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/b1a78b69-4e58-4048-a6fd-4cc582eedc81)

<br>

- [x] Результаты:

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/b43ccb2b-2357-4f01-b52d-7d52fe694ec4)

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/18573263-6091-48ea-9dd8-de3c174ec568)

<hr>
<br>
<br>

<h2>setTimeout с нулевой задержкой</h2>


