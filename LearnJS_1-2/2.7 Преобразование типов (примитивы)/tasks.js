let str = "123";
console.log(typeof str); // string

let num = Number(str); // num становится числом
console.log(typeof num); // number

console.log(Boolean(0)); // false
console.log(Boolean("0")); // true
console.log(Boolean(1)); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Привет")); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
