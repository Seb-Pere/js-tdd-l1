module.exports = (words) => {
  const iMiddleWord = Math.floor(words.length / 2)
  
  return words.splice(iMiddleWord, 1)
}
