var app = require('../app.js');

var coinValues = {
  twoPound:    200,
  onePound:    100,
  fiftyPence:  50,
  twentyPence: 20,
  twoPence:    2,
  onePence:    1
};

function coinConverter (startingCurrency) {
  var pennies = sanitizeCurrency(startingCurrency);
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

function sanitizeCurrency (startingCurrency) {
  var parsedCurrency = startingCurrency.replace(/[^.p\d]/g, "");

  if (parsedCurrency.indexOf("p") > -1) {
    if (parsedCurrency.indexOf('.') > -1) {
      var int = parseFloat(parsedCurrency.replace(/[^.\d]/g, ""));
      return int.toFixed(2) * 100;
    } else {
      var int = parseFloat(parsedCurrency.replace(/[^\d]/g, ""));
      return parseFloat(int).toFixed(2);
    }
  } else{
    return parseFloat(parsedCurrency).toFixed(2) * 100;
  }
}

app.factory("coinConverter", function() {
  return coinConverter;
});