var assert        = require('chai').assert;
var coinConverter = require('../app/coin-converter.js');

describe('Coin Converter', function() {
  
  // it('should exist', function () {
  //   var test = new coinConverter(3);
  //   assert.equal(test.pennies, 3);
  // });

  it('should convert two pound coins', function () {
    var coin = new coinConverter(2.00);
    assert.equal(coin.twoPound, 1);
  });

  xit('should convert three pounds to one 2 pound coin and one 1 pound coin', function () {
    var coin = new coinConverter(3.00);
    assert.equal(coin.twoPound, 1);
    assert.equal(coin.onePound, 1);
  });

});