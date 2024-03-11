// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

const pow = (x, n) => {
  return n == 1 ? x : x * pow(x, n - 1);
};

console.log(pow(2, 10));
