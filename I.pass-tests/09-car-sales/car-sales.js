module.exports = (carsSold) => {
  const totals = {}

  carsSold.forEach(
    ({ make, price }) => {
      if (!totals[make]) {
        totals[make] = 0
      }

      totals[make] += price
    },
  )

  return totals
}