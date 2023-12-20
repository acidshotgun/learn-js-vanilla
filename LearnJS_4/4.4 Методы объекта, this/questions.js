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
  1) Что выводит this при function()? - объект???
  2) Что выводит this при () => {}? ======== {} что за {}???

*/
