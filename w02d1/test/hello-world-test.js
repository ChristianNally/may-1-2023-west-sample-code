//const assert = require('assert');
const assert = require('chai').assert;

const objectOfFunctions = require('../hello-world');

describe('the salutation tests', () => {

  describe('subgroup', () => {
    it('the old days', () => {
      // .isTrue(value, [message])
      assert.isTrue(true, 'must be 2020+');
    });
  });

  it('says hello in a way that we expect', () => {
    const returnValue = objectOfFunctions.sayHello('my little friend');
    const expectedValue = 'Hello, my little friend';
      
    assert.equal(returnValue, expectedValue);  
  });
  
  it('says goodbye in a way that we expect', () => {
    const returnValue = objectOfFunctions.sayGoodbye('my little friend');
    const expectedValue = 'Goodbye, my little friend';
      
    assert.equal(returnValue, expectedValue);  
  });
  
  it('says see ya later aligator in a way that we expect', () => {
    const returnValue = objectOfFunctions.saySYLA('my little friend');
    const expectedValue = 'SYLA, my little friend';
      
    assert.equal(returnValue, expectedValue);  
  });
  

});
