'use strict';

angular.module('webappApp')
  .controller('VakantieCtrl', function ($scope, Kampen, $stateParams, $filter) {

    $scope.seizoenen = {
      zomer: new Date(new Date().getFullYear(), 6, 21, 0, 0, 0),
      herfst: new Date(new Date().getFullYear(), 9, 21, 0, 0, 0),
      winter: new Date(new Date().getFullYear(), 12, 21, 0, 0, 0),
      lente: new Date(new Date().getFullYear(), 3, 21, 0, 0, 0)
    };

    $scope.selectedSeizoen = $scope.seizoenen[$stateParams.seizoen];

    $scope.kampen = Kampen.findBySeizoen($scope.selectedSeizoen);
    console.log($scope.kampen);

  });
