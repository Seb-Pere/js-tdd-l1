const greetPeople = require("./greet-people");

test("print list of names prefixed with Hello", function() {
  const names = ['Irina', 'Ashleigh', 'Etza']
  

  const output = greetPeople(names)
  const expected = 'Hello IrinaAshleighEtza'

  expect(output).toEqual(expected)
});

test('print list of nanmes prefixed with Hello', function() {
  const names = ['a', 'b', 'c']

  const output = greetPeople(names)
  const expected = 'Hello abc'

  expect(output).toEqual(expected)
})

test('It should throw an error if param is not an array', function() {
  expect(
    () => { greetPeople(42) }
  ).toThrowError(new TypeError('people.forEach is not a function'))
})
