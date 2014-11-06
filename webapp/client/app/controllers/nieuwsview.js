'use strict';

angular.module('webappApp')
  .controller('NieuwsItemViewCtrl', function ($scope, $stateParams, NieuwsItems) {
    console.log($stateParams);
    console.log(NieuwsItems.show($stateParams));

    $scope.nieuwsItem = NieuwsItems.show($stateParams);
  });
