// require the User and Scooter classes - see where they can be used in ScooterApp.js
const User = require('./User')
const Scooter = require('./Scooter')
class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations=[
      {name: 'West', scooters: []},
      {name: 'Old', scooters: []},
      {name: 'Big', scooters: []},
      {name: 'Small', scooters: []}]
    this.registeredUsers={}
  }
  registerUser(username, password, age){
      if(this.registeredUsers[username]){
        throw Error('Username in use')
      }
      if(age < 18){
        throw Error ('Too young to register')
      }
      const newUser = new User(username, password, age)
      this.registeredUsers[username] = newUser
      return newUser 
      }
  loginUser(username, password){
    const user = this.registeredUsers[username]
    if(!user){
      throw Error('Username or Password is incorrect')
    }
    try{
      user.login(password)
      console.log(`${username} has logged in`)
    }catch(err){
      throw Error('Username or Password is incorrect')
    }
  }
  logoutUser(username){
    const user = this.registeredUsers[username];
    if(!user){
      throw Error('No user is logged in')
    }
    user.logout()
    console.log(`${username} has been logged out`)
  }
  createScooter(station){
    const sendStation = this.stations.find(s => s.name === station)
    if(!sendStation){
      throw Error(`No such station`)
    }
    const instScooter = new Scooter()
    sendStation.scooters.push(instScooter)
    instScooter.station = sendStation
    console.log(`Created new scooter`)
    return instScooter

  }
  dockScooter(scooter, station){
    const sendStation = this.stations.find(s => s.name === station)
    if(!sendStation){throw Error('No such station')}
    if(scooter.station === sendStation){throw Error('Scooter already at station')}
    if(scooter.station){
      const priorStation = this.stations.find(s => s.name === scooter.station)
      if(priorStation){
        priorStation.scooters = priorStation.scooters.filter(s => s !== scooter)
      }
    }
    sendStation.scooters.push(scooter)
    scooter.station = sendStation.name
    console.log('Scooter is docked')
  }
  rentScooter(scooter, user){
    const theStation = this.stations.find(s => s.name === scooter.station)
    if(!theStation){throw Error('Scooter is not available')}
    if(scooter.user){throw Error('Scooter is already rented')}
    scooter.user = user
    scooter.station = null
    console.log(`Scooter rented by ${user}`)
  }
  print(){
    console.log('Registered Users: ')
    const userArr = Object.keys(this.registeredUsers).map(username => ({Username: username}))
    console.table(userArr)
    console.log('Stations: ')
    const stationsArr =this.stations.map(station => ({
      Station: station.name,
      Scooters: station.scooters.length,

    }))
  }
}

module.exports = ScooterApp
