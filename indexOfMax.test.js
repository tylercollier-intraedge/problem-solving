function getIndexOfMax(arr) {
  let max = arr[0]
  let indexOfMax = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
      indexOfMax = i
    }
  }
  return indexOfMax
}

describe('getIndexOfMax', () => {
  it('correctly handles positive numbers', () => {
    const numbers = [1, 3, 2]

    expect(getIndexOfMax(numbers)).toEqual(1)
  })

  it('correctly handles negative numbers', () => {
    const numbers = [-1, -3, -2]

    expect(getIndexOfMax(numbers)).toEqual(0)
  })
})
