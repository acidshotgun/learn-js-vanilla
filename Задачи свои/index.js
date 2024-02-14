"use strict";

const obj1 = {
  name: "Object 1",
  method: function () {
    const func = () => {
      console.log(this);
    };

    func();
  },
};

obj1.method();

////
console.log("Start");

setTimeout(function () {
  console.log("Timeout 1");
}, 0);

setTimeout(function () {
  console.log("Timeout 2");
  Promise.resolve().then(function () {
    console.log("Promise inside Timeout 2");
  });
}, 0);

Promise.resolve().then(function () {
  console.log("Promise 1");
  setTimeout(function () {
    console.log("Timeout inside Promise 1");
  }, 0);
});

Promise.resolve().then(function () {
  console.log("Promise 2");
});

console.log("End");

// Start
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2
// Promise inside Timeout 2
// Timeout inside Promise 1
