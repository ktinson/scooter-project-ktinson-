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
login(password){}
logout(){}
}
module.exports = User
