const sayHi = (name) => {
  console.log(`HELLLOOO ${name}`);
};

const interval1 = setInterval(
  () => setTimeout(() => sayHi("sasha"), 2000),
  1000
);

setTimeout(() => {
  clearInterval(interval1), console.log("STOP INTERVAL!");
}, 10000);
