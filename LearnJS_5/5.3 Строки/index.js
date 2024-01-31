let str = "Hello world";

console.log(str.substr(2, 7)); // llo wor (со 2 на длину 7)

/*
  Значение первого аргумента может быть отрицательным, тогда позиция определяется с конца:
*/

console.log(str.substr(-5, 2)); // wo (-5 символ и длина 2)

// С литкодазадача))
let defangIPaddr = function (address) {
  let defAdr = "";

  for (let key of address) {
    if (key == ".") {
      defAdr += "[.]";
    } else {
      defAdr += key;
    }
  }

  return defAdr;
};

const ip = "255.100.50.0";

console.log(typeof defangIPaddr(ip));

// или

let defangIPaddr2 = function (address) {
  return address.split(".").join("[.]");
};

///////////////

let hours = [0, 1, 2, 3, 4];
let target = 2;

let numberOfEmployeesWhoMetTarget = function (hours, target) {
  let madeTarget = hours.filter((item) => item >= target);

  return madeTarget.length;
};

console.log(numberOfEmployeesWhoMetTarget(hours, target));

////////////////////

let nums = [3, 1, 2, 10, 1];

let runningSum = function (nums) {
  let result = [];

  for (let i = 1; i <= nums.length; i++) {
    let midArray = nums.slice(0, i);

    result.push(midArray.reduce((sum, current) => (sum += current), 0));
  }

  return result;
};

console.log(runningSum(nums));
