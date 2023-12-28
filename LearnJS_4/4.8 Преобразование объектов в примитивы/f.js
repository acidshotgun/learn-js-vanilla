const user = {
  name: "Bob",
  money: 10000,

  [Symbol.toPrimitive](hint) {
    console.log(`Хинт - ${hint}`);

    return hint == "string" ? `{name: ${this.name}}` : this.money;
  },
};

console.log(user);
console.log(+user);
console.log(user + 5000);

const test = {
  number: 50,
  toString() {
    return this.number;
  },
};

console.log(test * 2);

///////////
