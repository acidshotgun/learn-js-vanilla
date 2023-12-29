"use strict";

const obj = {
  name: "какойта объект",
  method: function () {
    console.log(this);
  },
};

obj.method();

// const func = obj.method.bind(obj);
const func = obj.method;
func();
