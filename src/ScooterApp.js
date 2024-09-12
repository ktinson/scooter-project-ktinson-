// require the User and Scooter classes - see where they can be used in ScooterApp.js
const User = require('./User')
class ScooterApp {
  // ScooterApp code here
  constructor(stations = [], registeredUsers = {}){
    this.stations=this.stations
    this.registeredUsers=registeredUsers
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
    const sendStation = this.station.find(s => s.name === station)
    if(!sendStation){
      throw Error(`No such station`)
    }
    const instScooter = new Scooter()
    sendStation.scooters.push(instScooter)
    instScooter.station = sendStation
    console.log(`Created new scooter`)
    return instScooter

  }
  dockScooter(scooter, station){}
  rentScooter(scooter, user){}
  print(){}
}

module.exports = ScooterApp
