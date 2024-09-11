// require the User and Scooter classes - see where they can be used in ScooterApp.js
const User = require('./User')
class ScooterApp {
  // ScooterApp code here
  constructor(stations = [], registeredUsers = {}){
    this.stations=this.stations
    this.registeredUsers=registeredUsers
  }
  registerUser(username, password, age){
      // if(this.registerUser[username]){
      //   throw Error('Username in use')
      // }
      const newUser = new User(username, password, age)
      return newUser 
      }
  loginUser(username, password){}
  logoutUser(username){}
  createScooter(station){}
  dockScooter(scooter, station){}
  rentScooter(scooter, user){}
  print(){}
}

module.exports = ScooterApp
