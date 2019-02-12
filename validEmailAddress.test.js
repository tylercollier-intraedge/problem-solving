// Note: you may not use regular expressions.
function isValidEmailAddress(email) {
  // Your code goes here...
}

describe('isValidEmailAddress', () => {
  function check(email, valid) {
    it(`validates ${email}`, () => {
      expect(isValidEmailAddress(email)).toEqual(valid)
    })
  }

  describe('valid emails', () => {
    check('tyler@intraedge.com', true)
    check('tyler@i.com', true)
    check('t@intraedge.com', true)
  })

  describe('invalid emails', () => {
    check('', false)
    check('tyler', false)
    check('tyler@intraedge', false)
    check('tyler@intraedge.c', false)
    check('intraedge.com', false)
  })
})
