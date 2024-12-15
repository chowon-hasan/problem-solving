/**
 * @param {any} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (expectedVal) {
      if (val === expectedVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (expectedVal) {
      if (val !== expectedVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

//
console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
