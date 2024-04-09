# Синтаксис "new Function"

<h2>Синтаксис</h2>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/8630ec8a-b3a4-4324-8607-1dcf0345435c)

<br>

- [ ] `new Function` позволяет превратить любую строку в функцию. Например, можно получить новую функцию с сервера и затем выполнить её:

<hr>
<br>
<br>

<h2>Замыкание</h2>

- [ ] Обычно функция запоминает, где родилась, в специальном свойстве [[Environment]]. Это ссылка на лексическое окружение, в котором она создана.
- [ ] Но когда функция создаётся с использованием new Function, в её [[Environment]] записывается ссылка не на внешнее лексическое окружение, в котором она была создана, а на глобальное. Поэтому такая функция имеет доступ только к глобальным переменным.

```javascript
  function getFunc() {
    let value = "test";
  
    let func = new Function('alert(value)');
  
    return func;
  }
  
  getFunc()(); // ошибка: value не определено
```

<br>

- [x] А вот обычное объявление.

```javascript
  function getFunc() {
    let value = "test";
  
    let func = function() { alert(value); };
  
    return func;
  }
  
  getFunc()(); // "test", из лексического окружения функции getFunc
```
