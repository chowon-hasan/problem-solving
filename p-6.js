// Filter Elements from Array
var filter = function (arr, fn) {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
};

const iseven = function (num) {
  return num % 2 === 0;
};

const greaterThan = function (num) {
  return num > 12;
};

const increment = function (num) {
  return (num + 1) % 2 === 0;
};

const array = [12, 15, 20];

console.log(filter(array, increment));
// console.log(filter(array, greaterThan));
// console.log(filter(array, iseven));
