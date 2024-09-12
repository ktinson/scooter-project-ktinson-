class Scooter {
  // scooter code here
  static nextSerial = 1
  constructor(station =null, user = null,serial, charge = 100, isBroken = false){
    this.station=station
    this.user=user
    this.serial=serial
    this.charge=Scooter.nextSerial++
    this.isBroken=isBroken
}
rent(user){
  if(this.charge < 20){
    throw Error('Scooter needs charge')
  }
  if(this.isBroken){
    throw Error('Scooter needs repair')
  }
  if(this.user){
    throw Error('Scooter already rented')
  }
  if(this.station){
    this.station.scooters = this.station.scooters.filter(scooter => scooter !== this)
  }
  this.user = user
  this.station = null
}
dock(station){
  if(this.user){
    throw Error('Scooter is currently rented')
  }
  this.station = station
  this.user = null
  if(!this.station.scooters.includes(this)){
    this.station.scooters.push(this)
  }
}
}

module.exports = Scooter
