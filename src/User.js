// const ScooterApp = require('./ScooterApp')
// const Scooter = require('./Scooter')
class User {
  // User code here
constructor(username, password, age){
  this.username=username
  this.password=password
  this.age=age
  this.loggedIn=false
}
login(password){
  if(password !== this.password){
    throw Error('Incorrect password')
  }
  this.loggedIn = true
  return `${this.username} logged in`
}
logout(){
  this.loggedIn = false
  return `${this.username} logged out`
}
}
module.exports = User
