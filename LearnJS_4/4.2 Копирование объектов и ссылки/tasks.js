const mainObj = {
  name: "sasha",
  age: 15,
};

const secondObj = mainObj;

secondObj.isAdmin = true;

console.log(mainObj, secondObj);
