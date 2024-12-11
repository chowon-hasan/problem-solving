var createHelloWorld = function (...args) {
  return function (...args) {
    return "Hello world";
  };
};

const f = createHelloWorld();
f({}, ["a", "b"], 42);

console.log(f());
