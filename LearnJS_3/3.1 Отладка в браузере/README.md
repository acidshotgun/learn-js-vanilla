# Отладка в браузере

<h2>Панель «Исходный код» («Sources»)</h2>
f12

![](https://github.com/acidshotgun/learn-js-vanilla/blob/master/LearnJS_3/3.1%20%D0%9E%D1%82%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0%20%D0%B2%20%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B5/img/raaa.jpg)

<hr>
<br>
<br>

<h2>Консоль(«Sources»)</h2>

- [ ] При нажатии на клавишу `Esc` в нижней части экрана вызывается консоль, где можно вводить команды и выполнять их клавишей `Enter`.

- [ ] Результат выполнения инструкций сразу же отображается в консоли.

<hr>
<br>
<br>

<h2>Точки останова (breakpoints)</h2>

![](https://github.com/acidshotgun/learn-js-vanilla/blob/master/LearnJS_3/3.1%20%D0%9E%D1%82%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0%20%D0%B2%20%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B5/img/faaa.jpg)

<hr>
<br>
<br>

<h2>Команда debugger</h2>

- [ ] Выполнение кода можно также приостановить с помощью команды `debugger` прямо изнутри самого кода:

```javascript
  function hello(name) {
    let phrase = `Привет, ${name}!`;
  
    debugger;  // <-- тут отладчик остановится
  
    say(phrase);
  }
```

<hr>
<br>
<br>

<h2>Остановимся и оглядимся</h2>

![](https://github.com/acidshotgun/learn-js-vanilla/blob/master/LearnJS_3/3.1%20%D0%9E%D1%82%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0%20%D0%B2%20%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B5/img/maaa.jpg)

<hr>
<br>
<br>

<h2>Пошаговое выполнение скрипта</h2>


