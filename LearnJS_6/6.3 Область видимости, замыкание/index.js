function makeWorker() {
  let name = "Pete";

  return function () {
    console.log(name);
  };
}

if (true) {
  makeWorker()();
}

{
  var name1 = "string";
}

console.log(name1);

function sayHi() {
  var foo = "hello";

  console.log(foo);
}

sayHi();

console.log(foo);
