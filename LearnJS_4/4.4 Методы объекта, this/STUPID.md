# ТУТ БУДУТ ПРИМЕРЫ ЗАДАЧЕК С THIS, НАДО КОТОРЫМИ Я ТУПИЛ. (ДЛЯ ПОНИМАНИЯ)

<h2>ЗАДАЧА 1</h2>

- [ ] Если вызвать `this` вне объекта, то он всегда `undefined (для строгого режима)` и `window/глобал (в нестрогом)`
      
- [ ] В этом примере два варианта:
      
    + `undefined` для сторого режима
    + `window` для нестрогого режима

```javascript
  function someFunc() {
    console.log(this);
  }
  
  someFunc();
```

<hr>
<br>
<br>

<h2>ЗАДАЧА 2</h2>

- [ ] Контекст вызова всегда напрямую зависит от того, где вызывается `this`.

  + Еще раз - `this` вне объекта = `undefined (строгий режим)` и `window (нестрогий режим)`
  + Вызывая метод `obj.method()` напрямую - контекстом будет являться сам объект.
  + Передав в переменную `func` ссылку на метод объекта => мы будем вызывать его уже вне объекта и контекст будет теряться. И таким образом будет работать принцип вызова `this` вне объектов.
     
  <br>

  + Грубо говоря мы вызваем метод объекта ВНЕ этого самого объекта.

```javascript
  const obj = {
    name: "какойта объект",
    method: function () {
      console.log(this);
    },
  };
  
  obj.method(); // { name: 'какойта объект', method: [Function: method] }
  
  // const func = obj.method.bind(obj);
  const func = obj.method;
  func(); // window / undefined
```

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/5da55ce4-571e-4ff3-ba06-d9e3afe09466)
