class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    return `Hello, i'm ${this.name}`;
  }
}

class AdminUser extends User {
  isAdmin = true;
}

// const pidar = new AdminUser("Alisa", 19);

const nikita = new User("Nikita", 20);
const sasha = new User("Sasha", 20);

console.log(nikita.sayHi === sasha.sayHi);

///
///
///
///

function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHi = function () {
  return `Hi! I'm ${this.name}`;
};

const cat = new Animal("Tom");
const mouse = new Animal("Jerry");

console.log(cat.sayHi === mouse.sayHi);

//
//
//
//
const fruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];

const countValues = (array) => {
  const count = {};

  array.forEach((item) => (item in count ? count[item]++ : (count[item] = 1)));

  return count;
};

console.log(countValues(fruits));

///
///
///
///
///
function oddOnesOut(nums) {
  let obj = {};

  nums.forEach((item) => {
    item in obj ? (obj[item] += 1) : (obj[item] = 1);
  });

  console.log(obj);
}

oddOnesOut([1, 2, 3, 1, 3, 3]);
