let user = {
  firstName: "Вася",
  sayHi() {
    console.log(`Привет, ${this.firstName}!`);
  },
};

setTimeout(user.sayHi, 1000); // Привет, undefined!
