# Объект функции, NFE

- [ ] Каждое зн-е в JS имеет свой тип. В JavaScript `функции` – это `объекты`.

- [ ] Можно представить функцию как `«объект, который может делать какое-то действие»`. Функции можно не только вызывать, но и использовать их как обычные объекты: добавлять/удалять свойства, передавать их по ссылке и т.д.

<hr>
<br>
<br>

<h2>Свойство «name»</h2>

- [ ] Имя функции нам доступно как свойство `«name»`:

```javascript
function sayHi() {
  alert("Hi");
}

alert(sayHi.name); // sayHi

// Даже если ф-я присваивается без имени.
let sayHi = function() {
  alert("Hi");
};

alert(sayHi.name); // sayHi (есть имя!)
```

<hr>
<br>
<br>

<h2>Свойство «length»</h2>

- [ ] Свойство `«length»` содержит количество параметров функции в её объявлении.

```javascript
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2
```

<hr>
<br>
<br>

<h2>Пользовательские свойства</h2>

- [ ] Мы также можем добавить свои собственные свойства.

```javascript
function sayHi() {
  alert("Hi");
  
  // давайте посчитаем, сколько вызовов мы сделали
  sayHi.counter++;
}
sayHi.counter = 0; // начальное значение

sayHi(); // Hi
sayHi(); // Hi

alert( `Вызвана ${sayHi.counter} раза` ); // Вызвана 2 раза
```

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/d557b4c6-f661-4d5a-a946-8ed42d269cc7)

<hr>
<br>
<br>

<h2>Named Function Expression</h2>

- [ ] `Named Function Expression` или `NFE` – это термин для `Function Expression`, у которого есть имя.

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/4ace0753-8e8a-47ec-bd75-b6f54f807e02)

<br>


