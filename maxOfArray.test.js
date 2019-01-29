function getMaxOfArray(arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

describe('getMaxOfArray', () => {
  it('correctly handles positive numbers', () => {
    const numbers = [1, 3, 2]

    expect(getMaxOfArray(numbers)).toEqual(3)
  })

  it('correctly handles negative numbers', () => {
    const numbers = [-1, -3, -2]

    expect(getMaxOfArray(numbers)).toEqual(-1)
  })
})
