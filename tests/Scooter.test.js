const Scooter = require('../src/Scooter')

// typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter()
    expect(scooter).toBeInstanceOf(Scooter)
  })
})

// Method tests
describe('scooter methods', () => {
  // tests here!
  beforeEach(() => {
    station = {scooters: []}
    scooter = new Scooter(station)
  })
  // rent method
  test('has low charger error', () =>{
    scooter.charge = 10
    expect(() => scooter.rent({username: 'tester'})).toThrow('Scooter needs charge')
  })
  test('has isBroken error', () =>{
    scooter.charge = 100
    scooter.isBroken = true
    expect(() => scooter.rent({username: 'testerB'})).toThrow('Scooter needs repair')
    
  })
  test('is available', () =>{
    scooter.user = {username: 'testerA'}
    scooter.charge = 100
    expect(() => scooter.rent({username: 'testerA'})).toThrow('Scooter already rented')
  })
  test('remove scooter to checked out user', () =>{
    scooter.charge = 100
    const user = {username: 'testerD'}
    scooter.rent(user)
    expect(scooter.user).toEqual(user)
    expect(scooter.station).toBe(null)
  })
  // dock method
  test('remove scooter to checked out user', () =>{
    scooter.charge = 100
    const user = {username: 'testerE'}
    const dockStation = {scooters: []}
    scooter.dock(dockStation)
    expect(scooter.station).toBe(dockStation)
    expect(dockStation.scooters).toContain(scooter)
  })
 
})
