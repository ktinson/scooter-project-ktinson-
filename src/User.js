const ScooterApp = require('./ScooterApp')
const Scooter = require('./Scooter')
class User {
  // User code here
constructor(username, password, age, loggedIn){
  this.username=username
  this.password=password
  this.age=age
  loggedIn=false
  this.loggedIn=loggedIn
}
login(password){}
logout(){}
}
module.exports = User
