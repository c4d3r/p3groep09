'use strict';

angular.module('webappApp')
  .controller('KampDetailCtrl', function ($scope, $stateParams, Kampen) {
    console.log($stateParams);
    console.log(Kampen.show($stateParams));

    $scope.kamp = Kampen.show($stateParams);
  });
