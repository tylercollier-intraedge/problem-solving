function getMaxOfArray(arr) {
  // Your code goes here...
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
