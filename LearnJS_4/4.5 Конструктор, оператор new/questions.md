# Вопросы, которые надо разобрать!

<h1>ВОПРОС 1</h1>

- [ ] Почему ссылка на стрелочную ф-ю не работает в объекте, если ссылаться на нее??? ПРИМ. function decloration работает верно.

```javascript
  const showAge = () => {
    console.log(`Мне ${this.age} лет`);
  };
  
  // function showAge() {
  //   console.log(`Мне ${this.age} лет`);
  // }
  
  showAge();
  
  function User(name, age) {
    this.name = name;
    this.age = age;
  
    this.sayHello = function () {
      console.log(`Привет, я ${this.name}`);
    };
  
    this.sayAge = showAge;
  }
  
  const sasha = new User("Sasha", 18);
  const alena = new User("alena", 17);
  
  sasha.sayAge();
  alena.sayAge();

```
