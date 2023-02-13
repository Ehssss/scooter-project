const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('scooter instance is created at full charge', () => {
    const scooter1 = new Scooter('station1');
    expect (scooter1.charge).toEqual(100);
  })
  test('scooter is not broken when created', () => {
    const scooter1 = new Scooter('station1');
    expect (scooter1.isBroken).toEqual(false);
  })
  test('station of scooter is correct', () => {
    const scooter1 = new Scooter('station1');
    expect (scooter1.station).toEqual('station1');
  })
})

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method

  //dock method

  //requestRepair method

  //charge method

})
