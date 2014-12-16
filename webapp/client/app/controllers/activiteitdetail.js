'use strict';

angular.module('webappApp')
  .controller('ActiviteitDetailCtrl', function ($scope, $stateParams, Activiteiten, $location, Auth, $http) {

    if(Auth.getCurrentUser()._id != null){
            if(Auth.getCurrentUser().role === "ROLE_MONITOR"){
                     $scope.activiteit = Activiteiten.show($stateParams);
            }
            else{
              $location.path('/');
            }
        }
        else{
            $location.path('/login');
        }
    console.log($scope.activiteit);

    $scope.inschrijven = function() {


        $http.post('/api/activiteiten/' + $scope.activiteit._id + '/inschrijven', {user: Auth.getCurrentUser()})
            .success(function(data, status, headers, config) {
                console.log(data);
                console.log(status);
            });

        //$location.path('/activiteiten');
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
