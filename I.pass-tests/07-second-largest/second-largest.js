module.exports = (numbers) =>
  [...new Set(numbers)].sort(
    (a, b) => b - a
  )[1]
