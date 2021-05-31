function mergeArr (a, b) {
  let newLength = a.length + b.length
  let i = 0
  let longArr = []
  let max
  let min
  let newArr = []
  if (a.length > b.length) {
    longArr = a
  } else {
    longArr = b
  }
  let longLength = longArr.length
  for (i = 0; i < longLength; i++) {
    if (a.length > 0 && b.length > 0) {
      if (a[0] >= b[0] ) {
        min = b[0]
        b.shift()
      } else {
        min = a[0]
        a.shift()
      }
      if (a.length > 0 && b.length > 0) {
        if (a[a.length - 1] >= b[b.length - 1]) {
          max = a[a.length - 1]
          a.pop()
        } else {
          max = b[b.length - 1]
          b.pop()
        }
      } else if (a.length > 0) {
        max = a[a.length - 1]
        a.pop()
      } else {
        max = b[b.length - 1]
        b.pop()
      }

    } else if (a.length > 0) {
      min = a[0]
      max = a[a.length - 1]
      a.shift()
      a.pop()
    } else {
      min = b[0]
      max = b[b.length - 1]
      b.shift()
      b.pop()
    }
    newArr[i] = min
    newArr[newLength - (i + 1)] = max
  }

  return newArr
}
