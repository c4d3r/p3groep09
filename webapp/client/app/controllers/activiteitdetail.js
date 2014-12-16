'use strict';

angular.module('webappApp')
  .controller('ActiviteitDetailCtrl', function ($scope, $stateParams, Activiteiten, $location, Auth, $http) {
    $scope.activiteit = Activiteiten.show($stateParams);

    console.log($scope.activiteit);

    $scope.inschrijven = function() {


        $http.post('/api/activiteiten/' + $scope.activiteit._id + '/inschrijven', {user: Auth.getCurrentUser()})
            .success(function(data, status, headers, config) {
                console.log(data);
                console.log(status);
            });

        /*var deferred = $q.defer();
        var promise = deferred.promise;


        promise.then(function(result){
            Activiteiten.update($scope.activiteit);
            //$location.path('/activiteiten');
        },function(reason){
            console.log("error");
        });
        deferred.resolve($scope.activiteit.inschrijvingen.push(Auth.getCurrentUser()));*/
     }

  });
