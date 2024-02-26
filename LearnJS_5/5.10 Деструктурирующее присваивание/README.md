# Деструктурирующее присваивание

+ Объекты позволяют нам создавать одну сущность, которая хранит элементы данных по ключам.
+ Массивы позволяют нам собирать элементы данных в упорядоченный список.

<br>

- [x] `Деструктурирующее присваивание` – это специальный синтаксис, который позволяет нам «распаковать» массивы или объекты в несколько переменных, так как иногда они более удобны. Позволяет работать с элементами массива / объекта по отдельности.

<hr>
<br>
<br>

<h2>Деструктуризация массива</h2>

- [x] `let [item1 = default, item2, ...rest] = array`

```javascript
  // у нас есть массив с именем и фамилией
  let arr = ["Ilya", "Kantor"];
  
  // деструктурирующее присваивание
  // записывает firstName = arr[0]
  // и surname = arr[1]
  let [firstName, surname] = arr;
  
  console.log(firstName); // Ilya
  console.log(surname);  // Kantor
```

<br>

+ Отлично смотрится в сочетании со `split` или другими методами, `возвращающими массив`:

```javascript
  let [firstName, surname] = "Ilya Kantor".split(' ');
  console.log(firstName); // Ilya
  console.log(surname);  // Kantor
```

<br>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/3d6cfa9b-7ad1-435a-b486-fd72bec45ccb)

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/09c330b4-78ab-4faf-b5a2-78140ff359ee)

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/2b682c84-0509-4063-9996-77a80b372050)

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/a48aadd7-210f-488b-ba12-f7facdf17167)

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/a01f2308-e725-4301-875b-4c82ac2e84ae)

<br>
<br>

  <h3>Остаточные параметры «…» "...REST"</h3>

  - [ ] Обычно, если массив длиннее, чем список слева, «лишние» элементы опускаются.
  - [ ] Если мы хотим не просто получить первые значения, но и собрать все остальные, то мы можем добавить ещё один параметр, который получает остальные значения, используя оператор «остаточные параметры» – троеточие `("...")`:

  ```javascript
    const names = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

    const [name1, name2, ...titles] = names;
    
    console.log(name1); // Julius
    console.log(name2); // Caesar
    
    console.log(titles); // [ 'Consul', 'of the Roman Republic' ]
  ```

  - [x] Переменная `titles` (`rest` - оператор) является массивом из оставшихся элементов.

<br>
<br>

  <h3>Значения по умолчанию</h3>

  - [ ] Если в массиве меньше значений, чем в присваивании, то ошибки не будет. Отсутствующие значения считаются неопределёнными:
  - [ ] Если мы хотим, чтобы значение «по умолчанию» заменило отсутствующее, мы можем указать его с помощью `=`:

  ```javascript
    // Пустой массив - элементов меньше
    let [firstName, surname] = [];
    
    console.log(firstName); // undefined
    console.log(surname); // undefined
    
    // значения по умолчанию
    let [name5 = "Guest", surname5 = "Anonymous"] = ["Julius"];
    
    console.log(name5); // Julius (из массива)
    console.log(surname5); // Anonymous (значение по умолчанию)
  ```

<hr>
<br>
<br>

<h2>Деструктуризация объекта</h2>

- [x] `let {prop : varName = default, ...rest} = object` 

```javascript
  const obj = {
    name: "sasha",
    age: 18,
    isAdmin: true,
  };

  const { name, age, isAdmin } = obj;
  // Порядок не будет иметь значения
  //const { isAdmin, age, name } = obj;
  
  console.log(name); // sasha
  console.log(age); // 18
  console.log(isAdmin); // true
```

<br>
<br>

  <h3>Остаток объекта «…» "...REST"</h3>

  ```javascript
    const obj = {
    name: "sasha",
    age: 18,
    isAdmin: true,
  };
  
  const { name, ...rest } = obj;
  
  console.log(name); // sasha
  
  console.log(rest); // { age: 18, isAdmin: true }
  ```
  - [x] Переменная `rest` (`rest` - оператор) является объектом из оставшихся элементов. (как и массивы в массиве).

<hr>
<br>
<br>

<h2>Вложенная деструктуризация</h2>

- [ ] Если объект или массив содержит другие вложенные объекты или массивы, то мы можем использовать более сложные шаблоны с левой стороны, чтобы извлечь более глубокие свойства.

```javascript
  let options = {
    size: {
      width: 100,
      height: 200,
    },
    items: ["Cake", "Donut"],
    extra: true,
  };
  
  // деструктуризация разбита на несколько строк для ясности
  let {
    size: {
      // положим size сюда
      width,
      height,
    },
    items: [item1, item2], // добавим элементы к items
    extra,
    title = "Menu", // отсутствует в объекте (используется значение по умолчанию)
  } = options;
  
  console.log(title); // Menu
  console.log(width); // 100
  console.log(height); // 200
  console.log(item1); // Cake
  console.log(item2); // Donut
  
  console.log(extra); // true
```

<hr>
<br>
<br>

<h2>Умные параметры функций</h2>

