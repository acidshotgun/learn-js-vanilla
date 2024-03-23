function makeWorker() {
  let name = "Pete";

  return function () {
    console.log(name);
  };
}

if (true) {
  makeWorker()();
}
