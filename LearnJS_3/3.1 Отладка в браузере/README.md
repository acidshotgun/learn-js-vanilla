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

![](https://github.com/acidshotgun/learn-js-vanilla/blob/master/LearnJS_3/3.1%20%D0%9E%D1%82%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0%20%D0%B2%20%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B5/img/resume.jpg)

<br>

![](https://github.com/acidshotgun/learn-js-vanilla/blob/master/LearnJS_3/3.1%20%D0%9E%D1%82%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0%20%D0%B2%20%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B5/img/step.jpg)

<br>

![](https://github.com/acidshotgun/learn-js-vanilla/blob/master/LearnJS_3/3.1%20%D0%9E%D1%82%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0%20%D0%B2%20%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B5/img/step%20over.jpg)

<br>

![](https://github.com/acidshotgun/learn-js-vanilla/blob/master/LearnJS_3/3.1%20%D0%9E%D1%82%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0%20%D0%B2%20%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B5/img/step%20into.jpg)

<br>

![](https://github.com/acidshotgun/learn-js-vanilla/blob/master/LearnJS_3/3.1%20%D0%9E%D1%82%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0%20%D0%B2%20%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B5/img/step%20out.jpg)

<br>

![](https://github.com/acidshotgun/learn-js-vanilla/blob/master/LearnJS_3/3.1%20%D0%9E%D1%82%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0%20%D0%B2%20%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B5/img/active.jpg)

<br>

![](https://github.com/acidshotgun/learn-js-vanilla/blob/master/LearnJS_3/3.1%20%D0%9E%D1%82%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0%20%D0%B2%20%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B5/img/deactive.jpg)

<hr>
<br>
<br>

<h2>Логирование</h2>

- [ ] Чтобы вывести что-то на консоль из нашего кода, существует функция `console.log`.

```javascript
  // чтобы увидеть результат, сначала откройте консоль
  for (let i = 0; i < 5; i++) {
    console.log("value,", i);
  }
```

<br>

- [x] Если правильно выстроить логирование в приложении, то можно и без отладчика разобраться, что происходит в коде.

<hr>
<br>
<br>

<h2>ИТОГО</h2>    

- [ ] Приостановить выполнение скрипта можно тремя способами:

    + Точками останова (breakpoints).
    + Использованием в коде команд debugger.
    + При ошибке (если инструменты разработчика открыты и кнопка (`включить/отключить автоматическую паузу в случае ошибки`) «включена»).
     
- [ ] При остановке мы можем отлаживать: анализировать переменные и пошагово пройти по процессу, чтобы отыскать проблему.

<hr>
<br>
<br>

<h2>ДОМАШКА ИЗ ROADMAP</h2>

- [x] Воспользоваться debugger в IDE в node.js

Запуск отладки:

  + Нажмите `F5` или выберите `"Run -> Start Debugging"` `(Запустить -> Начать отладку)`.
  + Выберите `"Node.js"` как среду для отладки, если это необходимо.

<br>

Использование отладчика:

  + Когда ваш код достигнет точки останова, выполнение программы приостановится.
  + Используйте кнопки управления (например, "Play", "Step Over", "Step Into") в отладчике для перемещения по коду, просмотра значений переменных и выполнения кода по шагам.
  + Вы также можете просматривать стек вызовов и другие панели отладчика для более подробного анализа вашего кода.

