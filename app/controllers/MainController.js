var app = require('../app.js');
var coinConverter = require('../coin-converter.js');

module.exports = app.controller('MainController', ['$scope', function($scope) {

  $scope.showInvalidError = false; // This is not an ideal way to do validations

  $scope.pennies = undefined; // attached to the ng-model 'pennies'
  $scope.coins = {
    onePence:    0,
    twoPence:    0,
    twentyPence: 0,
    fiftyPence:  0,
    onePound:    0,
    twoPound:    0
  };


  $scope.convertCoins = function() {

    if (isValidEntry($scope.pennies)) {
      $scope.showInvalidError = true;
    } else {
      $scope.showInvalidError = false;
      var coins = coinConverter($scope.pennies);

      for (var coin in coins) {
        $scope.coins[coin] = coins[coin];
      }
    }
  };

}]);

function isValidEntry (input) {
  var VALID_CHARS  = /[^.p£\d]/g;
  var ONLY_NUMBERS = /\d/;

  if (VALID_CHARS.test(input) || ! ONLY_NUMBERS.test(input)) {
    return true;
  } else {
    return false;
  }
}