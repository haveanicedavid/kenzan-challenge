var app = require('../app.js');
var coinConverter = require('../coin-converter.js');

module.exports = app.controller('MainController', ['$scope', function($scope) {
  // $scope.onePence    = 0;
  // $scope.twoPence    = 0;
  // $scope.twentyPence = 0;
  // $scope.fiftyPence  = 0;
  // $scope.onePound    = 0;
  // $scope.twoPound    = 0;
  $scope.coins = {
    onePence:    0,
    twoPence:    0,
    twentyPence: 0,
    fiftyPence:  0,
    onePound:    0,
    twoPound:    0
  };

  $scope.currencyConvert = function() {
    // pennies are attached to the ng-model 'pennies' in the input field
    var coins = coinConverter($scope.pennies);

    for (var coin in coins) {
      $scope.coins[coin] = coins[coin];
    }
  };

}]);