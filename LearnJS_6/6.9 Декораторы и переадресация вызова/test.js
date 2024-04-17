"use strict";

let obj = {
  name: "Vova",
  age: 15,
};

function printName(text, question, test) {
  console.log(`${text} ${this.name}, ${question}`);
}

printName.call(obj, "Hi", "how are you?");
printName.apply(obj, ["Hi", "how are you?"]);

let print = printName.bind(obj, "Hi", "how are you?");

print();
