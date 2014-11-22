'use strict';

angular.module('webappApp')
  .controller('KampenCtrl', function ($scope, Kampen, $location, $window) {
    $scope.kampen = Kampen.index();
  });
