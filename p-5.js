// Apply Transform Over Each Element in Array

const map = function (arr, fn) {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
};

const plusone = function (val) {
  return (val = val + 1);
};

const array = [2, 3, 4];

console.log(map(array, plusone));
