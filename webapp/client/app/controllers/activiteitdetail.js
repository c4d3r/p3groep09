'use strict';

angular.module('webappApp')
  .controller('ActiviteitDetailCtrl', function ($scope, $stateParams, Activiteiten, $location, Auth, $q) {
    $scope.activiteit = Activiteiten.show($stateParams);

    console.log($scope.activiteit);

    $scope.inschrijven = function() {

        var deferred = $q.defer();
        var promise = deferred.promise;

        promise.then(function(result){
            Activiteiten.update($scope.activiteit);
            $location.path('/activiteiten');
        },function(reason){
            console.log("error");
        });
        deferred.resolve($scope.activiteit.inschrijvingen.push(Auth.getCurrentUser()._id));
     }

  });
