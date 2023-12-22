# Конструктор, оператор "new"

- [ ] Обычный синтаксис `{...}` позволяет создать только один объект. Но зачастую нам нужно создать множество похожих, однотипных объектов, таких как пользователи, элементы меню и так далее.

  + Это можно сделать при помощи функции-конструктора и оператора `"new"`.
     
```javascript
  function User(name, age) {
    this.name = name;
    this.isAdmin = false;
  
    this.sayHi = function () {
      console.log(`Привет, я ${this.name} мне ${this.age}`);
    };
  }
  
  const vova = new User("Vova", 15);
  const sasha = new User("Sasha", 18);
  
  console.log(vova); // - User { name: 'Vova', isAdmin: false, sayHi: [Function (anonymous)] }
  console.log(sasha); // - User { name: 'Vova', isAdmin: false, sayHi: [Function (anonymous)] }
```

<br>

![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/4780949f-cf72-4018-90fe-dc5d8996631b)
![image](https://github.com/acidshotgun/learn-js-vanilla/assets/117285472/ea20e2be-9a04-488b-ae94-9aed957b6bcf)

<br>

  + Теперь, если нам будет необходимо создать других пользователей, мы можем просто вызвать `new User("Ann")`, `new User("Alice")` и так далее. Данная конструкция гораздо удобнее и читабельнее, чем многократное создание `литерала объекта`.

  + Это и является основной целью конструкторов – реализовать код для многократного создания однотипных объектов.
