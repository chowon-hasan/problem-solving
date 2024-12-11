//
var createCounter = function (n) {
  return function () {
    // return n++;
    return (n = n + 1);
  };
};

const counter = createCounter(1);
// counter();
// counter();

console.log(counter());
// console.log(counter());

// key points

// closures
// post increament - n++ and n = n + 1
// n++ that will return current value and increament by 1 later
// n = n+1 that will update the value of n and then return the update value
