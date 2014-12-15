'use strict';

angular.module('webappApp')
  .controller('VakantieCtrl', function ($scope, Kampen, $stateParams, $filter) {

    var defaultVakantie = "zomervakantie";

    $scope.kampen = Kampen.findByVakantie({vakantie: defaultVakantie}, function(kampen){
      $scope.eersteKamp = kampen[0];
    });

    $scope.filter = {vakantie: defaultVakantie, leeftijden: []};

    $scope.setVakantie = function(vakantie) {
      $scope.filter.vakantie = vakantie;
      $scope.update();
    };

    $scope.toggleLeeftijd = function(leeftijd) {

      if($scope.filter.leeftijden.indexOf(leeftijd) > -1) {

        //verwijder leeftijd
        var newLeeftijden = [];
        for(var i = 0; i < $scope.filter.leeftijden.length; i++) {
          if($scope.filter.leeftijden[i] != leeftijd) {
            newLeeftijden.push($scope.filter.leeftijden[i]);
          }
        }

        $scope.filter.leeftijden = newLeeftijden;

      } else {
        $scope.filter.leeftijden.push(leeftijd);
      }

      console.log($scope.filter.leeftijden);
      $scope.update();
    };

    $scope.update = function() {

      Kampen.index(function(kampen){

        var newKampen = [];
        var condition1 = false, condition2 = false;

        for(var i = 0; i < kampen.length; i++) {
          condition1 = false;

          //bevat leeftijd x jaar
          for(var j = 0; j < $scope.filter.leeftijden.length; j++) {


            if(kampen[i].doelgroepen.indexOf($scope.filter.leeftijden[j]) > -1) {
              condition1 = true;
              break;
            }
          }

          condition1 = condition1 || $scope.filter.leeftijden.length === 0;
          condition2 = typeof($scope.filter.vakantie) === "undefined" || $scope.filter.vakantie == kampen[i].vakantie;


          if(condition1 && condition2){
            newKampen.push(kampen[i]);
          }
        }

        $scope.eersteKamp = newKampen[0];
        $scope.kampen = newKampen;

      });
    }
  });
