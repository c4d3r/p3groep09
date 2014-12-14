'use strict';

angular.module('webappApp')
  .controller('ActiviteitenCtrl', function ($scope, Activiteiten, $location, $window) {
    $scope.activiteiten = Activiteiten.index();

  });
