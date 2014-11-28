'use strict';

angular.module('webappApp')
    .controller('AccountCtrl', function($scope, Inschrijven, Kampen, Contact,$location, Auth) {
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;

        var i = $scope.getCurrentUser.inschrijvingen;


        i.forEach(function(inschrijving)
        {
            //$scope.inschrijvingen.push(Inschrijven.show(inschrijving));
            $scope.kampen.push(Kampen.show(inschrijving.kamp));
        });

        $scope.logout = function() {
            Auth.logout();
            $location.path('/login');
        };


        $scope.isActive = function(route) {
            return route === $location.path();
        };
    });