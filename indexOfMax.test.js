function getIndexOfMax(arr) {
  // Your code goes here...
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
