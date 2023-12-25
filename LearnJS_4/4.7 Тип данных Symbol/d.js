let user = {
  name: "Vasya",
  age: 13,
};

let id = Symbol("id");

user[id] = "popa15";

console.log(user[id]);

const userId = Symbol("id");

const fakeUser = {
  name: "Gena",
  age: 16,
  sayHi() {
    console.log(`Привет я ${this.name}`);
  },
  [userId]: "id1294_21",
};

for (let key in fakeUser) {
  console.log(`Ключ: ${key}, значение: ${fakeUser[key]}`);
}

console.log(fakeUser);
