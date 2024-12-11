var createCounter = function (n) {
  return function () {
    // return n++;
    return (n = n + 1);
  };
};

const counter = createCounter(5);
counter();

console.log(counter());
