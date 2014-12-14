'use strict';

angular.module('webappApp')
  .controller('KampDetailCtrl', function ($scope, $stateParams, Kampen, $location, Auth, Inschrijven) {
    $scope.kamp = Kampen.show($stateParams);

    $scope.ingeschreven = true;
    console.log($scope.ingeschreven);

    var gebruikerId = Auth.getCurrentUser()._id;
    var i = Inschrijven.query({gebruikerId: gebruikerId}, function(inschrijvingen){
                         i.forEach(function(inschrijving) {
                            if(inschrijving.kamp._id === $stateParams.id)
                            {

                                $scope.ingeschreven = false;
                                console.log($scope.ingeschreven);
                            }
                        });
                    });

    $scope.inschrijven = function () {
     $location.path('/kampen/' + $stateParams.id + "/inschrijven");
    }

  });
