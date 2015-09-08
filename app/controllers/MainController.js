var app = require('../app.js');

module.exports = app.controller('MainController', ['$scope', function($scope) {
  $scope.coins = 0;
  
  $scope.currencyConvert = function() {
    $scope.coins = $scope.pennies * 2;
  };
}]);