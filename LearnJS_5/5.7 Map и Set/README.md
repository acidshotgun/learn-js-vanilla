# Map и Set

<h2>Map</h2>

- [ ] `Map` – это коллекция ключ/значение, как и `Object`. Но основное отличие в том, что `Map` позволяет использовать ключи любого типа.

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/f91a2f92-a75e-437b-883c-3401bd313996)

<br>

```javascript
  let map = new Map();

  /*
    Поскольку обращение к объектам происходит по ссылке,
    чтобы получать св-ва, ключу которых - это объект / ф-я
    необходимо создать ссылки на эти "объекты"
    и в Map помещать ссылку
  */
  let obj = { name: "sasha" };
  let func = () => "Hello world";
  
  // set'ом можно помещать св-ва в Map по цепочке.
  map
    .set("string", "some value")
    .set(true, "boolean")
    .set(obj, "name") // в кач-ве ключа (объект) - будет ссылко
    .set({ name: "olivia" }, "name") // неверный вариант (get выдаст undefined)
    .set(func, "func"); // аналогично с ф-ей
  
  /*
    Получение св-в get()
  */
  console.log(map.get(true)); // "boolean" (нашли по ключу)
  console.log(map.get("string")); // "some value" (нашли по ключу)
  
  console.log(map.get(obj)); // name
  console.log(map.get({ name: "olivia" })); // undefined (тк тут в получении ищем объект не по ссылке, а другой (как бы))
  console.log(map.get(func)); // func
  
  /*
    Поиск св-в has()
  */
  console.log(map.has(obj)); // true
  console.log(map.has(true)); // true
  console.log(map.has("такого ключа нет")); // false
  
  /*
    Удаление пары ключ/значение delete()
  */
  map.delete(obj); // удаляем св-во
  console.log(map.has(obj)); // false (удалён)
  
  /*
    Кол-во элементов size()
  */
  console.log(map.size); // 4
  
  /*
    Очистить всю коллекцию clear()
  */
  map.clear();
  console.log(map.size); // 0
  console.log(map); // Map(0) {} (пустой Map)
```

- [x] При создании `Map` мы можем указать массив (или другой итерируемый объект) с парами ключ-значение для инициализации
- [x] Но не обычный объект

```javascript
  let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук", 50],
  ]);
  
  console.log(recipeMap); // Map(3) { 'огурец' => 500, 'помидор' => 350, 'лук' => 50 }
```

<br>

- [ ] В отличии от `объектов`, `Map` - не приводит ключи к строкам. В кач-ве ключей можно использовать любые типы данных.

<br>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/53e1a2eb-4b94-4f22-b191-c8e6ed7d07db)

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/0a6fc34a-ae47-4762-ae91-2fdac2b92392)

<hr>
<br>
<br>

<h2>Ключи Map - УНИКАЛЬНЫ</h2>

- [x] Ключи `Map` УНИКАЛЬНЫ. Если добавлять один и тот же ключ, то он перезаписывается:

```javascript
  let newMap = new Map();

  newMap.set("name", "sasha");
  newMap.set("name", "vova");
  
  console.log(newMap); // Map(1) { 'name' => 'vova' }
```

<hr>
<br>
<br>

<h2>Перебор Map</h2>

- [ ] Для перебора коллекции `Map` есть 3 метода:

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/13d28d2e-060b-4c20-a042-2c41ad5e06c1)

```javascript
  let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук", 50],
  ]);
  
  /*
    map.keys() – возвращает итерируемый объект по ключам,
  */
  console.log(recipeMap.keys()); // [Map Iterator] { 'огурец', 'помидор', 'лук' }
  
  // Важно, что сначала keys() возвращает итерируемый объект (прошлая глава)
  // и затем он перебирается
  for (let key of recipeMap.keys()) {
    console.log(key); // огурец помидор лук
  }
  
  /*
    map.values() – возвращает итерируемый объект по значениям,
  */
  console.log(recipeMap.values()); // [Map Iterator] { 500, 350, 50 }
  
  for (let key of recipeMap.values()) {
    console.log(key); // 500 350 50
  }
  
  /*
    map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.
  */
  console.log(recipeMap.entries()); // [Map Entries] { [ 'огурец', 500 ], [ 'помидор', 350 ], [ 'лук', 50 ] }
  
  for (let key of recipeMap) {
    // то же самое, что и recipeMap.entries()
    console.log(key);
  }
```

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/3016e155-0018-4dbc-a855-199d1ccdab4b)

<hr>
<br>
<br>

<h2>Object.entries: Map из Object</h2>

- [ ] При создании `Map` мы можем указать массив (или другой итерируемый объект) с парами ключ-значение для инициализации,

```javascript
  // массив пар [ключ, значение]
  let map = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
  ]);
  
  alert( map.get('1') ); // str1
```

<br>

- [ ] Если у нас уже есть обычный `объект`, и мы хотели бы создать `Map` из него, то поможет встроенный метод `Object.entries(obj)`, который `получает объект и возвращает массив пар ключ-значение` для него, как раз в этом формате.

```javascript
  // 1) Простой объект
  let obj = {
    name: "John",
    age: 30,
  };
  /*
    2) Делайем из объекта Map
    при помощи Object.entries(obj)
    который из объекта делает массив пар [ключ, значение]
    А из массива пак ключ-значение уже делаем Map
  */
  console.log(Object.entries(obj)); // [ [ 'name', 'John' ], [ 'age', 30 ] ]
  
  let map = new Map(Object.entries(obj));
  
  // 3) Получаем с-во по ключу
  console.log(map.get("name")); // John
```

<hr>
<br>
<br>

<h2>Object.fromEntries: Object из Map</h2>

- [ ] `Object.fromEntries` - наоборот из массива пар `[ключ, значение]` делает объект.
- [ ] Соотв. мы из `Map` делаем массив пар `[ключ, значение]` и из него далее делаем объект.

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/acf42146-8428-4e0b-8230-74db24106c2c)

+ Мы можем использовать `Object.fromEntries`, чтобы получить обычный объект из Map. ()

```javascript
  // 1) Есть массив пар ключ / значение
  let array = [
    [true, "boolean"],
    ["string", "строка"],
    [undefined, 55],
  ];
  
  // 2) Из него делаем Map
  let map = new Map(array);
  
  /* 3) Из Map делаем объект
    Предваритольно сделав из него массив пар ключ / значение обратно при помощи Object.fromEntries();
    Получим обычный объект с строками в кач-ве ключей
  */
  let obj = Object.fromEntries(map);
  console.log(obj); // { true: 'boolean', string: 'строка', undefined: 55 }
  
  // Можем перебрать
  for (let key in obj) {
    console.log(`${key}: ${obj[key]} `);
  }
  /*
    true: boolean 
    string: строка 
    undefined: 55 
  */
```

<hr>
<br>
<br>

<h2>Set</h2>

- [ ] `Объект Set` – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/be616eae-3270-4ba0-9fc4-0011e68ec027)

```javascript
  let array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  let setFromArray = new Set(array);
  
  console.log(setFromArray); // Set(5) { 1, 2, 3, 4, 5 }
```

```javascript
  // 1) Есть псевдомассив
  let obj = {
    0: "hello",
    1: "world",
    length: 2,
  };
  
  /*
    2) Из всевдомассива делаем Set
    Предварительно сделав псевдомассив полноценным массивом Array.from()
  */
  let set = new Set(Array.from(obj));
  
  // Создадим объект и ссылку на него
  let testObj = { name: "Sasha" };
  let testObjCopy = testObj;
  
  // 3) Добавим
  set.add(testObj);
  set.add(testObjCopy);
  
  // Сохранит один объект, так как все зн-я должны быть уникальны.
  console.log(set); // Set(3) { 'hello', 'world', { name: 'Sasha' } }
```

```javascript
  // 1) Объект
  let obj = {
    name: "sasha",
    age: 15,
    isAdmin: true,
  };
  
  /*
    2) Сделали массив массивов ключ/зн-е Object.entries()
    и из него сделали Set
  */
  let set = new Set(Object.entries(obj));
  
  console.log(set); // Set(3) { [ 'name', 'sasha' ], [ 'age', 15 ], [ 'isAdmin', true ] }
```

<br>
<br>

<h3>Задачка на уникальные зн-я</h3>

  ```javascript
    // 1) Фильтрация уникальных элементов массива

    function unique(arr) {
      // return [...new Set(arr)]; // деструктуризация
      return Array.from(new Set(arr)); // или сделать массив из сета
    }
    
    let values = [
      "Hare",
      "Krishna",
      "Hare",
      "Krishna",
      "Krishna",
      "Krishna",
      "Hare",
      "Hare",
      ":-O",
    ];
    
    console.log(unique(values)); // Hare,Krishna,:-O
  ```

<hr>
<br>
<br>

<h2>Перебор объекта Set</h2>

- [ ] Мы можем перебрать содержимое объекта `set` как с помощью метода `for..of`, так и используя `forEach`:

```javascript
  let obj = {
    name: "sasha",
    age: 15,
    isAdmin: true,
  };
  
  let set = new Set(Object.entries(obj));
  
  // перебор for of
  for (let key of set) {
    console.log(key); // [ 'name', 'sasha' ] [ 'age', 15 ] [ 'isAdmin', true ]
  }
  
  // forEach - то же самое
  set.forEach((item) => {
    console.log(item); // [ 'name', 'sasha' ] [ 'age', 15 ] [ 'isAdmin', true ]
  });
```

<br>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/fd47669b-3b0a-44c6-addc-493f033f15e8)

<hr>
<br>
<br>

<h2>Итого</h2>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/fd03b9bd-950b-447f-90ee-fdd127597138)

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/6991d0e9-61e2-41e1-a130-1a187a24e7da)

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/1d4ee818-60ae-4267-9c6a-d01473048cf6)


