function makeWorker() {
  let name = "Pete";

  return function () {
    console.log(name);
  };
}

if (true) {
  makeWorker()();
}

function sayHi() {
  console.log(phrase);

  var phrase = "Привет";
}

sayHi();
