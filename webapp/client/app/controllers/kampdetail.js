'use strict';

angular.module('webappApp')
  .controller('KampDetailCtrl', function ($scope, $stateParams, Kampen, $location) {
    console.log($stateParams);
    console.log(Kampen.show($stateParams));

    $scope.kamp = Kampen.show($stateParams);


    $scope.inschrijven = function ($id) {
     $location.path('/kampen/' + $id + "/inschrijven");
    }

  });
