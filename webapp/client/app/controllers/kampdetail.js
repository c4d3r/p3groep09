'use strict';

angular.module('webappApp')
  .controller('KampDetailCtrl', function ($scope, $stateParams, Kampen, $location) {
    $scope.kamp = Kampen.show($stateParams);

    $scope.inschrijven = function () {
     $location.path('/kampen/' + $stateParams.id + "/inschrijven");
    }

  });
