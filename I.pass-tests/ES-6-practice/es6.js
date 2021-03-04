module.exports = {
  arrow: () => 'es6 is awesome!',
  defaultParameter: (name = 'sam') => name,
  combineArrays: (arr1, arr2) => [...arr1, ...arr2],
  destructuring: ({ cyf }) => cyf,
  templateString: (a, b) => `The sum is equal to ${a + b}`
};
