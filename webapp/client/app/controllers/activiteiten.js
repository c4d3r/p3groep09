'use strict';

angular.module('webappApp')
  .controller('ActiviteitenCtrl', function ($scope, Activiteiten, $location, $window, Auth) {
    if(Auth.getCurrentUser()._id != null){
        if(Auth.getCurrentUser().role === "ROLE_MONITOR"){
        $scope.activiteiten = Activiteiten.index();
        }
        else{
          $location.path('/');
        }
    }
    else{
        $location.path('/login');
    }
  });
