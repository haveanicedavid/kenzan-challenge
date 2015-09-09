var assert        = require('chai').assert;
var coinConverter = require('../app/services/coin-converter.js');

describe('Coin Converter', function() {
  
  // it('should exist', function () {
  //   var test = new coinConverter(3);
  //   assert.equal(test.pennies, 3);
  // });

  it('should convert two pound coins', function () {
    var coin = new coinConverter('2.00');
    assert.equal(coin.twoPound, 1);
  });

  it('should convert three pounds to one 2 pound coin and one 1 pound coin', function () {
    var coin = new coinConverter('3.00');
    assert.equal(coin.twoPound, 1);
    assert.equal(coin.onePound, 1);
  });

  it('starts converting at the highest coin', function () {
    var coin = new coinConverter('4.00');
    assert.equal(coin.twoPound, 2);
    assert.equal(coin.onePound, 0);
  });

  it('converts fifty pence to one fiftyPence coin', function () {
    var coin = new coinConverter('0.50');
    assert.equal(coin.fiftyPence, 1);
  });

  it('converts twenty pence', function () {
    var coin = new coinConverter('0.40');
    assert.equal(coin.twentyPence, 2);
  });

  it('converts 3.65', function () { // Amount given in example document
    var coin = new coinConverter('3.65');
    assert.equal(coin.twoPound, 1);
    assert.equal(coin.onePound, 1);
    assert.equal(coin.fiftyPence, 1);
    assert.equal(coin.twentyPence, 0);
    assert.equal(coin.twoPence, 7);
    assert.equal(coin.onePence, 1);
  });

  it('converts pence if a p is present without £', function () {
    var coin = new coinConverter('2p');
    assert.equal(coin.twoPence, 1);
  });

  it('converts £4.20p', function () {
    var coin = new coinConverter('£4.20p');
    assert.equal(coin.twoPound, 2);
    assert.equal(coin.twentyPence, 1);
  });

});