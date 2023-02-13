const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter class checks', () => {
    const scooter1 = new Scooter("Bebington")
  test('shows correct properties', () => {
    // edit this to be a real test!
    expect(scooter1).toHaveProperty("charge");
    expect(scooter1).toHaveProperty("user", null);
    expect(scooter1).toHaveProperty("serial");
    expect(scooter1).toHaveProperty("station");
    expect(scooter1).toHaveProperty("isBroken");
    expect(scooter1).toHaveProperty("nextSerial");
    
    
    
  })

    test("static value incrementing test", () => {
      const scooter2 = new Scooter("Birkenhead");
      const scooter3 = new Scooter("Birkenhead");
      expect(scooter2.serial).toBe(scooter1.serial + 1);
      expect(scooter3.serial).toBe(scooter2.serial + 1);
    });


});



//Method tests
describe('scooter methods', () => {
  
  
  //rent method
  
    test("should check out the scooter to the user", () => {
      const scooter = new Scooter("birkenhead");
      scooter.rent();
      expect(scooter.station).toBe(null);
    });

  //dock method
test("Dock method", () => {
  const scooter = new Scooter();
  scooter.dock();
  expect(scooter.user).toBe(null)

})
  
  //requestRepair method
  test("repair", async () => {
    const scooter = new Scooter();
    await scooter.Charge(); // we need to wait for the charge!
    expect(scooter.charge).toBe(100);
  });
  
  //charge method

  test("requestRepair", async () => {
    const scooter = new Scooter();
    await scooter.requestRepair(); // we need to wait for the repair!
    expect(scooter.isBroken).toBe(false);
  });
});

