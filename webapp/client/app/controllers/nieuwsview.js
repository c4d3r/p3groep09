'use strict';

angular.module('webappApp')
  .controller('NieuwsItemViewCtrl', function ($scope, $stateParams, NieuwsItems) {
    $scope.nieuwsItem = NieuwsItems.show($stateParams);
  });
