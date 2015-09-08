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

// startingcurrency = string
// Pound sign needs to be in the validations, but can be ingored for conversion
function sanitizeCurrency (startingCurrency) {
  startingCurrency.replace(/[^.p\d]/g, "");

  if (startingCurrency.indexOf("p") > -1) {
    if (startingCurrency.indexOf('.') > -1) {
      var int = parseFloat(startingCurrency.replace(/[^.\d]/g, ""));
      return int.toFixed(2) * 100;
    } else {
      var int = parseFloat(startingCurrency.replace(/[^\d]/g, ""));
      return parseFloat(int).toFixed(2);
    }
  } else{
    return parseFloat(startingCurrency).toFixed(2) * 100;
  }
}

module.exports = coinConverter;