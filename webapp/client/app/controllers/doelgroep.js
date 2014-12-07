/**
 * Created by Maxim on 27/11/2014.
 */
'use strict';


angular.module('webappApp')
  .controller('DoelgroepCtrl', function ($scope, $cookies, $location) {

    $scope.setDoelgroep = function(value) {

      console.log("setting!");
      $cookies.doelgroep = value;

      $location.path('/');
    }

  });
