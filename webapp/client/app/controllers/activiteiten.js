'use strict';

angular.module('webappApp')
  .controller('ActiviteitenCtrl', function ($scope, Activiteiten, $location, $window, Auth) {
    if(Auth.getCurrentUser()._id != null){
        $scope.activiteiten = Activiteiten.index();
    }
    else{
        $location.path('/login');
    }



  });
