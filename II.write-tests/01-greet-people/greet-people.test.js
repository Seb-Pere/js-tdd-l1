const greetPeople = require("./greet-people");

test("It should return a list of names prefixed with Hello", function() {
  const output = greetPeople(['Irina', 'Ashleigh', 'Etza'])
  const expected = 'Hello IrinaAshleighEtza'

  expect(output).toEqual(expected)
});

test('It should return a list of names prefixed with Hello', function() {
  const output = greetPeople(['a', 'b', 'c'])
  const expected = 'Hello abc'

  expect(output).toEqual(expected)
})

test('It should throw a TypeError if the parameter is not an array', function() {
  expect(
    () => { greetPeople(42) }
  ).toThrowError(new TypeError('people.forEach is not a function'))
})
