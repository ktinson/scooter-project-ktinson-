const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')
const Scooter = require('../src/Scooter')

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
describe('logout user', () => {
  let user = scooterApp.registerUser('tester', 'test123', 21)
  scooterApp.loginUser('tester', 'test123')
  scooterApp.print()
  scooterApp.logoutUser('tester')
  expect(user.loggedIn).toBe(false)
  scooterApp.print()
})
describe('logout user throw', () => {
  scooterApp.registerUser('testerA', 'test123', 21)
  // scooterApp.loginUser('testerA', 'test123')
  // scooterApp.logoutUser('testerA')
  expect(() => {
    scooterApp.logoutUser(`testerz`)
  }).toThrow('No user is logged in')
})
// rent scooter
describe('rent scooter method',()=>{
  let scooter
  let user
  beforeEach(() => {
    scooter = new Scooter();
  })
  test('rent scooter', () =>{
    const scooter = scooterApp.createScooter('West')
    scooter.station = 'West'
    scooterApp.rentScooter(scooter, user)
    expect(scooter.user).toBe(user)
    expect(scooter.station).toBe(null)
  })
})

// dock scooter
describe('dock scooter method',  () =>{
  beforeEach(() => {
    scooter = new Scooter();
  })
  test('test if scooter is docked', ()=>{
    scooterApp.createScooter('Old')
    station = 'Old'
    scooterApp.dockScooter(scooter, station)
    const sendStation = scooterApp.stations.find(s => s.name === station)
    expect(sendStation.scooters).toContain(scooter)
    expect(scooter.station).toBe(station)
  })
})
describe('create scooter method test', () => {
  beforeEach(()=>{
    scooterApp.registeredUsers['tester1'] = {username: 'tester1'}
    scooterApp.stations.push({name: 'test test', scooters: []})
  })
  test('prints to console', () => {
    console.log= jest.fn()
    scooterApp.print()
    expect(console.log).toHaveBeenCalledWith('Registered Users: ')
  })
})