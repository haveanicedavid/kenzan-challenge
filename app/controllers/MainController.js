var app = require('../app.js');

module.exports = app.controller('MainController', ['$scope', function($scope) {
  $scope.onePence    = 0;
  $scope.twoPence    = 0;
  $scope.twentyPence = 0;
  $scope.fiftyPence  = 0;
  $scope.onePound    = 0;
  $scope.twoPound    = 0;

  $scope.currencyConvert = function() {
    $scope.coins = $scope.pennies * 2;
  };
}]);