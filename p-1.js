// Function returns function
var createHelloWorld = function (...args) {
  return function (...args) {
    return "Hello world";
  };
};

const f = createHelloWorld();
f({}, ["a", "b"], 42);

console.log(f());

// Learning keypoint
// rest param can take any kind of input by ...args or ...anything
// Closures - its a feature of js that can access and remember outer function and scope after the function are executed.

// another example
const resturent = function (...order) {
  return function (...takingOrder) {
    return "only bread";
  };
};

const ordered = resturent("vhuna kishori");
console.log(ordered());
