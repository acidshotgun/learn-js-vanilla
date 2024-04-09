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
