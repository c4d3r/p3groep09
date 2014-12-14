'use strict';

angular.module('webappApp')
    .controller('AccountCtrl', function($scope, Inschrijven, Kampen,$location, Auth) {
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser();
        $scope.kampen = [];

        if(Auth.getCurrentUser()._id != null)
        {
        var gebruikerId = $scope.getCurrentUser._id;
                var i = Inschrijven.query({gebruiker:  Auth.getCurrentUser()}, function(inschrijvingen){
                     i.forEach(function(inschrijving) {
                        if($scope.getCurrentUser._id === inschrijving.gebruiker._id){
                            $scope.kampen.push(inschrijving.kamp);
                        }
                    });
                });
        }
        else{
           $location.path('/login');
        }



        $scope.logout = function() {
            Auth.logout();
            $location.path('/login');
        };


        $scope.isActive = function(route) {
            return route === $location.path();
        };
    });