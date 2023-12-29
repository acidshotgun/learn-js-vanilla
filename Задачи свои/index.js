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
