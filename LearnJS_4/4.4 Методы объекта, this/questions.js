const copyObject = (obj) => {
  // const newObject = {};

  // for (let key in obj) {
  //   newObject[key] = obj[key];
  // }

  const newObject = Object.assign({}, obj);

  return newObject;
};

let user = {
  name: "Bob",
  age: 20,
  sayHi() {
    test = () => {
      console.log(`Привет, я - ${this.name}`);
      console.log(this);
    };

    test();
  },
};

const userCopy = copyObject(user);
userCopy.name = "Vova";

// user = null;

userCopy.sayHi();

/*
  ВОПРОСЫ:
  1) Что выводит this внутри function()? - глобальный объект???
  2) ЧТо выводит this как просто console.log(this) - глобальный объект???
  3) Что выводит this при () => {}? ======== {} что за {}???
*/

// 1)
function someFunc() {
  console.log(this);
}

someFunc();

// Спросить про это
const hui = {
  name: "Apple",
  age: this.name, // тут undefined, тк this - глобал
  showThis() {
    console.log(this); // тут контекст this - это объект hui
  },
};

hui.showThis();
