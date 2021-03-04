var secondLargest = require("./second-largest");

test("Second largest", function() {
  var numbers = [2, 0, 23, 0, 57, 1, 230];

  var output = secondLargest(numbers);

  expect(output).toEqual(57);
});

test("Second largest with duplicate values", function() {
  var numbers = [2, 0, 23, 0, 57, 1, 230, 230];

  var output = secondLargest(numbers);

  expect(output).toEqual(57);
});