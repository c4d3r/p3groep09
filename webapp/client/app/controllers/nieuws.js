'use strict';

angular.module('webappApp')
  .controller('NieuwsItemCtrl', function ($scope, NieuwsItems, $location, $window) {
    $scope.nieuwsItems = NieuwsItems.index();

  });
