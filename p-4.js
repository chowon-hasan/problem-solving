/**
 * @param {any} val
 * @return {Object}
 */
var createCounter = function (init) {
  let counter = init;
  return {
    increment: function () {
      return (counter += 1);
    },
    reset: function () {
      return (counter = init);
    },
    decrement: function () {
      return (counter -= 1);
    },
  };
};

//
console.log(createCounter(5).increment());
console.log(createCounter(5).reset());
console.log(createCounter(5).decrement());
