const assert = require('chai').assert;
const tail = require('../tail')

//TestCode

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(['5']), '5'); 
  });
  it("returns '9' for ['5','7', '8', '9']", () => {
    assert.strictEqual(tail(['5','7', '8', '9']), '9'); 
  });
});

// console.log(tail(["Hello", "Lighthouse", "Labs"]))
// console.log(tail(["Deepthy", "Sharon"]))