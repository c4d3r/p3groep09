'use strict';

angular.module('webappApp')
  .controller('VakantieCtrl', function ($scope, Kampen, $stateParams, $filter) {

    var seizoenOffset = 9; //aantal maanden voor seizoen geadverteerd wordt, zorg dat we in zomer staan voor demo
    var seizoenen = {
      zomer: 6,
      herfst: 9,
      winter: 12,
      lente: 3
    };

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

    var seizoen = typeof($stateParams.seizoen) === "undefined" ? $scope.berekenSeizoen() : $stateParams.seizoen;

    $scope.filter = {seizoen: seizoen};

    $scope.kampen = Kampen.findBySeizoen({selectedSeizoen: seizoen}, function(kampen){
      $scope.eersteKamp = kampen[0];
    });

    $scope.update = function() {

      Kampen.index(function(kampen){

        console.log("selected: " + $scope.filter.seizoen);

        var newKampen = [];
        var condition1 = false, condition2 = false;

        for(var i = 0; i < kampen.length; i++) {
          var s = getSeizoenName(kampen[i].startDatum);

          condition1 = typeof($scope.filter.leeftijd) === "undefined" || kampen[i].doelgroepen.indexOf(parseInt($scope.filter.leeftijd)) > -1;
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
