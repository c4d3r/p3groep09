'use strict';

angular.module('webappApp')
  .controller('ActiviteitDetailCtrl', function ($scope, $stateParams, Activiteiten, $location, Auth, User) {
    $scope.activiteit = Activiteiten.show($stateParams);

    var gebruikerId = Auth.getCurrentUser()._id;

    var i = User.query({_id: gebruikerId}, function(gebruiker){
        console.log(gebruiker);
        $scope.activiteit.contact = null;

        console.log($scope.activiteit.contact);
     });

    console.log(i);
    $scope.inschrijven = function () {
        $scope.activiteit.inschrijvingen.push(Auth.getCurrentUser()._id);
    }

  });
