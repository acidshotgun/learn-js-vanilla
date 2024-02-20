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
