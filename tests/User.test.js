const User = require('../src/User')


// User tests here
describe('User property tests', () => {
  let user
  beforeEach(() => { user = new User('Joeymal', 'test123', 21)}) 

  // test username
  test('username should be a string', () => {
    expect(typeof user.username).toBe('string')
  })
  test('Has correct username', () => {
    expect(user.username).toBe('Joeymal')
  })
  // test password
  test('password should be a string', () => {
    expect(typeof user.password).toBe('string')
  })
  test('Has correct password', () => {
    expect(user.password).toBe('test123')
  })
  // test age
  test('age should be a number', () => {
    expect(typeof user.age).toBe('number')
  })
  test('Has correct age', () => {
    expect(user.age).toBe(21)
  })
})

// test login
describe('Has login and logout', () => {
  let user
  beforeEach(() => { user = new User('Joeymal', 'test123', 21)}) 
  
  test('has login false', () => {
    expect(() => {user.login('test124');}).toThrow('Incorrect password')
    expect(user.loggedIn).toEqual(false)
  })
  test('has login true', () => {
    expect(user.login('test123')).toBe("Joeymal logged in")
    expect(user.loggedIn).toBe(true)
  })
  test('has logout', () => {
    const result = user.logout()
    expect(user.loggedIn).toBe(false)
    expect(result).toBe("Joeymal logged out")
  })
})
// test logout

