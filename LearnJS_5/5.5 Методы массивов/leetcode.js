// 1365. How Many Numbers Are Smaller Than the Current Number

function smallerNumbersThanCurrent(nums) {
  const result = [];

  for (let checkNumber of nums) {
    let counter = 0;

    for (let key of nums) {
      if (checkNumber > key) {
        counter++;
      }
    }

    result.push(counter);
  }

  return result;
}

let task = [8, 1, 2, 2, 3];

console.log(smallerNumbersThanCurrent(task));

// 1480. Running Sum of 1d Array
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

// 2798. Number of Employees Who Met the Target

let hours = [0, 1, 2, 3, 4];
let target = 2;

let numberOfEmployeesWhoMetTarget = function (hours, target) {
  let madeTarget = hours.filter((item) => item >= target);

  return madeTarget.length;
};

console.log(numberOfEmployeesWhoMetTarget(hours, target));
