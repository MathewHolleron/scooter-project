class Scooter{
  
  static nextSerial = 1;

    constructor(station) {
      this.station = station;
      this.user = null;
      this.nextSerial;
      this.serial = Scooter.nextSerial;
      Scooter.nextSerial ++;
      this.charge = 100;
      this.isBroken = false;
  }


    rent() {
      if (this.isBroken) {
        throw new Error("Scooter needs repair");
      } else if (this.charge <= 20) {
        throw new Error("Scooter needs to recharge");
      } else {
        this.station = null;
        
      }
    }

  dock(station) {
    this.station = station;
    this.user = null;
  }

  async Charge() {
    console.log('Starting charge');
    
    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100

    console.log('Charge complete');   
  }

  async requestRepair() {
  let isBroken = true;
  
  setInterval(() => {
    this.isBroken = false;
    console.log('Repair completed');
    this.isBroken = true;
  }, 5000);
}
}

module.exports = Scooter
