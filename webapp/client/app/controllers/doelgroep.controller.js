/**
 * Created by Maxim on 27/11/2014.
 */
'use strict';


angular.module('webappApp')
  .controller('DoelgroepCtrl', function ($scope, $cookies) {

    var doelgroepCookie = $cookies.doelgroep;

    if(typeof(doelgroepCookie) === "undefined") {
      console.log("TEST");
    }

  });
