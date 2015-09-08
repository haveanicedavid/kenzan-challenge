var coinValues = {
  twoPound:    200,
  onePound:    100,
  fiftyPence:  50,
  twentyPence: 20,
  twoPence:    2,
  onePence:    1
};

function coinConverter (pounds) {
  var pennies = pounds * 100;
  var coins = {
    twoPound:    0,
    onePound:    0,
    fiftyPence:  0,
    twentyPence: 0,
    twoPence:    0,
    onePence:    0
  };

  for (var coin in coins) {
    coins[coin] = Math.floor(pennies / coinValues[coin]);
    pennies     = pennies % coinValues[coin];
  }
  
  return coins;
}

module.exports = coinConverter;