(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.lunchList = "";
  $scope.clickCheckLunch = function () {
    if ($scope.lunchList.length == 0)
    {
      $scope.lunchMessage = "Please enter data first";
    }
    else {
      var numberOfItems = $scope.lunchList.split(",").length;
      switch (numberOfItems)
      {
      case 1:
      case 2:
      case 3:
        $scope.lunchMessage = "Enjoy!";
        break;
      default:
        $scope.lunchMessage = "Too much!";
        break;
      }
    }
  };
}

})();
