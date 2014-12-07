'use strict';

angular.module('webappApp')
  .controller('VakantieCtrl', function ($scope, Kampen, $stateParams, $filter) {

    var getSeizoenName = function(date) {
      var seizoen = "zomer";
      date = new Date(date);

      if(date.getMonth() >= seizoenen["zomer"] && date.getMonth() < seizoenen["herfst"]) {
        seizoen = "zomer";
      }
      if(date.getMonth() >= seizoenen["herfst"] && date.getMonth() < seizoenen["winter"]) {
        seizoen = "herfst";
      }
      if(date.getMonth() >= seizoenen["winter"] && date.getMonth() < seizoenen["lente"]) {
        seizoen = "winter";
      }
      if(date.getMonth() >= seizoenen["lente"] && date.getMonth() < seizoenen["zomer"]) {
        seizoen = "lente";
      }

      return seizoen;
    };

    $scope.berekenSeizoen = function() {

      var currentDate = new Date();
      var futureDate = new Date(new Date(currentDate).setMonth(currentDate.getMonth() + seizoenOffset));

      return getSeizoenName(futureDate);
    };

    var seizoenOffset = 9 //aantal maanden voor seizoen geadverteerd wordt, zorg dat we in zomer staan voor demo
      , seizoenen = {
          zomer: 6,
          herfst: 9,
          winter: 12,
          lente: 3
        }
      , seizoen = typeof($stateParams.seizoen) === "undefined" ? $scope.berekenSeizoen() : $stateParams.seizoen
    ;

    $scope.kampen = Kampen.findBySeizoen({selectedSeizoen: seizoen}, function(kampen){
      $scope.eersteKamp = kampen[0];
    });

    $scope.filter = {seizoen: seizoen, leeftijden: []};

    $scope.setSeizoen = function(seizoen) {
      $scope.filter.seizoen = seizoen;
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
          var s = getSeizoenName(kampen[i].startDatum);

          //bevat leeftijd x jaar
          for(var j = 0; j < $scope.filter.leeftijden.length; j++) {


            if(kampen[i].doelgroepen.indexOf($scope.filter.leeftijden[j]) > -1) {
              condition1 = true;
              break;
            }
          }

          condition1 = condition1 || $scope.filter.leeftijden.length === 0;
          condition2 = typeof($scope.filter.seizoen) === "undefined" || $scope.filter.seizoen == s;


          if(condition1 && condition2){
            newKampen.push(kampen[i]);
          }
        }

        $scope.eersteKamp = newKampen[0];
        $scope.kampen = newKampen;

      });
    }
  });
