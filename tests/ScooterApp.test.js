const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp()
// ScooterApp tests here

// register user
describe('registerUser method tests', () => {
  test('Should return instance of User', () => {
    const response = scooterApp.registerUser('JoeABloggs', 'test123', 21)
    expect(response).toBeInstanceOf(User)
  })
})

// log in
describe('loginUser method tests', () => {
  beforeEach(() => {scooterApp.registerUser('JoeBBloggs', 'test123', 21)
})
  test('Should login', () => {
    const response = scooterApp.loginUser('JoeBBloggs', 'test123')
    expect(scooterApp.registeredUsers['JoeBBloggs'].loggedIn).toBe(true)
  })
  
})
describe('loginUser false method tests', () => {
  beforeEach(() => {scooterApp.registerUser('JoeZBloggs', 'test123', 21)
  })
  test('Should not login', () => {
    expect(() => {
      const newUser = scooterApp.loginUser('JoeZBloggs', 'test1323', 21)
      scooterApp.loginUser(newUser);
    }).toThrow('Username or Password is incorrect')
  })
})

// log out

// rent scooter

// dock scooter
