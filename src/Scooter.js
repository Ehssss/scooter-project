class Scooter{
  // scooter code here
  constructor (station) {
    this.station = station;
  }
  user = null;
/*   static serial = 
  static nextSerial =  
  ^^ figure out how to work these */
  charge = 100;
  isBroken = false;
  rent(user) {
    if (this.charge > 20 && this.isBroken === false){
      this.station = null;
      this.user = user
    }
    else {
      if (this.charge < 21) {
        throw new Error ('scooter needs to charge')
      }
      if (this.isBroken === true){
        throw new Error ('scooter needs repair')
      }
    }
  }
  dock (station){
    this.station = station;
    this.user = null;
  }
}


module.exports = Scooter
