var app = require('../app.js');
var coinConverter = require('../coin-converter.js');

module.exports = app.controller('MainController', ['$scope', function($scope) {

  $scope.pennies = undefined; // attached to the ng-model 'pennies'
  $scope.coins = {
    onePence:    0,
    twoPence:    0,
    twentyPence: 0,
    fiftyPence:  0,
    onePound:    0,
    twoPound:    0
  };

  $scope.currencyConvert = function() {
    var coins = coinConverter($scope.pennies);

    for (var coin in coins) {
      $scope.coins[coin] = coins[coin];
    }
  };

}]);