'use strict';

angular.module('webappApp')
    .controller('AccountCtrl', function($scope, Inschrijven, Kampen, $location, Auth) {
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;


        var inschrijvingen = Inschrijven.index();
        var kampen = Kampen.index();

        inschrijvingen.forEach(function(inschrijving){
            if(inschrijving.gebruiker === $scope.getCurrentUser)
                {
                    var _inschrijving = inschrijving;
                    kampen.forEach(function(kamp){
                        if(_inschrijving.kamp === kamp)
                        {
                            $scope.kampen.push(kamp);
                        }
                    });
                    _inschrijving = null;
                }
            });

        $scope.logout = function() {
            Auth.logout();
            $location.path('/login');
        };


        $scope.isActive = function(route) {
            return route === $location.path();
        };



    });