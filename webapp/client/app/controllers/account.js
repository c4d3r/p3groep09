'use strict';

angular.module('webappApp')
    .controller('AccountCtrl', function($scope, Inschrijven, Kampen, Contact,$location, Auth) {
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser();
        $scope.kampen = [];

        var gebruikerId = $scope.getCurrentUser._id;
        var i = Inschrijven.query({gebruikerId: gebruikerId}, function(inschrijvingen){

             i.forEach(function(inschrijving) {
                console.log(inschrijving);
                $scope.kampen.push(inschrijving.kamp);
            });
        });


        $scope.logout = function() {
            Auth.logout();
            $location.path('/login');
        };


        $scope.isActive = function(route) {
            return route === $location.path();
        };
    });