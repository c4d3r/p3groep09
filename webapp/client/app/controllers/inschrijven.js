'use strict';

angular.module('webappApp')
  .controller('InschrijvingCtrl', function ($scope) {
    $scope.model = {
      lidMutualiteit: false,
      persoonTenLaste: {
        aansluitingsNummer: "",
        codeGerechtigde: ""
      },
      tweedeOuder: {
        aansluitingsNummer: ""
      },
      contactPersoon: {
        //TODO: add details
      },
      betalendeOuder: {
        rijksregisterNummer: "",
        voornaam: "",
        naam: "",
        straat: "",
        huisnummer: "",
        bus: "",
        gemeente: "",
        postcode: "",
        telefoonNummer: ""
      },
      rijksregisterNummer: "",
      voornaam: "",
      geboorteDatum: "",
      adresDeelnemer: {
        straat: "",
        huisnummer: "",
        bus: "",
        gemeente: "",
        postcode: "",
      },
      noodPersonen: [],
      extraInformatie: "",
      gebruiker: "",
      activiteit: ""
    };
    $scope.methods = {

      addNoodPersoon: function(voornaam, naam, telefoonNummer) {
        $scope.model.noodPersonen.push({naam: naam, voornaam: voornaam, telefoonNummer: telefoonNummer});
      }

    }
  });
