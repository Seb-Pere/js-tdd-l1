/*module.exports = (cars, colour) => {
  return cars.map((car, index) => {
    if (index === 0) {
      return {
        ...car,
        colour: colour,
      }
    }

    return car
  })
}*/

module.exports = (cars, colour) => {
  return [
    { ...cars[0], colour: colour },
    ...cars.slice(1),
  ]
}
