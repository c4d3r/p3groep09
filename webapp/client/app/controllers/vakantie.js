'use strict';

angular.module('webappApp')
  .controller('VakantieCtrl', function ($scope, Kampen, $stateParams, $filter) {

    var seizoenOffset = 9; //aantal maanden voor seizoen geadverteerd wordt, zorg dat we in zomer staan voor demo
    var seizoenen = {
      zomer: new Date(new Date().getFullYear() + 1, 5, 21),
      herfst: new Date(new Date().getFullYear() + 1, 8, 21),
      winter: new Date(new Date().getFullYear() + 1, 11, 21),
      lente: new Date(new Date().getFullYear() + 1, 2, 21)
    };

    $scope.berekenSeizoen = function() {

      var currentDate = new Date();
      var futureDate = new Date(new Date(currentDate).setMonth(currentDate.getMonth() + seizoenOffset));
      var seizoen = "zomer";

      //kan eenvoudiger als we besluiten dat heel de maand juni of juli eig zomer is
      if(futureDate >= seizoenen["zomer"] && futureDate < seizoenen["herfst"])
        seizoen = "zomer";
      if(futureDate >= seizoenen["herfst"] && futureDate < seizoenen["winter"])
        seizoen =  "herfst";
      if(futureDate >= seizoenen["winter"] && futureDate < seizoenen["lente"])
        seizoen =  "winter";
      if(futureDate >= seizoenen["lente"] && futureDate < seizoenen["zomer"])
        seizoen =  "lente";

      return seizoen;
    };

    var seizoen = typeof($stateParams.seizoen) === "undefined" ? $scope.berekenSeizoen() : $stateParams.seizoen;

    $scope.kampen = Kampen.findBySeizoen({selectedSeizoen: seizoen}, function(kampen){
      $scope.eersteKamp = kampen[0];
    });

  });
