export const distinct = array => {
  if (array) {
    return array.reduce((unique, item) => {
      return unique.includes(item) ? unique : [...unique, item]
    }, [])
  }
}

export const countEntries = array => {
  const map = array.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  )
  return map.entries()
}

export const topEntries = (array, n) => {
  const entries = Object.fromEntries(countEntries(array))
  const sortedList = Object.entries(entries).sort((a, b) => {
    if (b[1] > a[1]) return 1
    else if (b[1] < a[1]) return -1
    //if values are same do additional checking if keys are in the right order
    else {
      if (a[0] > b[0]) return 1
      else if (a[0] < b[0]) return -1
      else return 0
    }
  })
  // return first n values from sortedList
  return sortedList.map(el => el[0]).slice(0, n)
}
