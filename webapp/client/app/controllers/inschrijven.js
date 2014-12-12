'use strict';

angular.module('webappApp')
  .controller('InschrijvingCtrl', function ($scope, Inschrijven) {

    //TEST SCOPE WITH PRE-FILLED DETAILS
    $scope.model = {
      lidMutualiteit: false,
      persoonTenLaste: {
        aansluitingsNummer: "358/876985",
        codeGerechtigde: "855"
      },
      tweedeOuder: {
        aansluitingsNummer: "358/876985"
      },
      contactPersoon: {
        rijksregisterNummer: "84984g8w22",
        voornaam: "Antwan",
        naam: "Flores",
        straat: "Gentsesteenweg",
        huisnummer: "32",
        bus: "5b",
        gemeente: "Gent",
        postcode: "8565",
        telefoonNummer: "037426586"
      },
      betalendeOuder: {
        rijksregisterNummer: "wegewgs5",
        voornaam: "Jeffery",
        naam: "Ramos",
        straat: "Gentsesteenweg",
        huisnummer: "32",
        bus: "5b",
        gemeente: "Gent",
        postcode: "8565",
        telefoonNummer: "037426586"
      },
      rijksregisterNummer: "wegewgs5",
      voornaam: "Flores",
      naam: "Antwan",
      geboorteDatum: new Date(2001, 10, 10),
      adresDeelnemer: {
        straat: "Gentsesteenweg",
        huisnummer: "32",
        bus: "5b",
        gemeente: "Gent",
        postcode: "8565",
        telefoonNummer: "0348425"
      },
      noodPersonen: [],
      extraInformatie: "",
      gebruiker: "",
      activiteit: ""
    };

    //ORIGINAL SCOPE
    /*$scope.model = {
      lidMutualiteit: false,
      persoonTenLaste: {
        aansluitingsNummer: "",
        codeGerechtigde: ""
      },
      tweedeOuder: {
        aansluitingsNummer: ""
      },
      contactPersoon: {
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
    }; */

    $scope.methods = {
      addNoodPersoon: function(voornaam, naam, telefoonNummer) {
        $scope.model.noodPersonen.push({naam: naam, voornaam: voornaam, telefoonNummer: telefoonNummer});
      },
      adresZelfdeAlsOuder: function(yes) {
        if(yes) {
          $scope.model.adresDeelnemer.straat      = $scope.model.betalendeOuder.straat;
          $scope.model.adresDeelnemer.huisnummer  = $scope.model.betalendeOuder.huisnummer;
          $scope.model.adresDeelnemer.bus         = $scope.model.betalendeOuder.bus;
          $scope.model.adresDeelnemer.gemeente    = $scope.model.betalendeOuder.gemeente;
          $scope.model.adresDeelnemer.postcode    = $scope.model.betalendeOuder.postcode;
        } else {
          $scope.model.adresDeelnemer.straat      = "";
          $scope.model.adresDeelnemer.huisnummer  = "";
          $scope.model.adresDeelnemer.bus         = "";
          $scope.model.adresDeelnemer.gemeente    = "";
          $scope.model.adresDeelnemer.postcode    = "";
        }
      },
      contactpersoonZelfdeOuder: function(yes) {
        if(yes) {
          $scope.model.contactPersoon = $scope.model.betalendeOuder;
        } else {
          $scope.model.contactPersoon.rijksregisterNummer = "";
          $scope.model.contactPersoon.voornaam = "";
          $scope.model.contactPersoon.naam = "";
          $scope.model.contactPersoon.straat = "";
          $scope.model.contactPersoon.huisnummer = "";
          $scope.model.contactPersoon.bus = "";
          $scope.model.contactPersoon.gemeente = "";
          $scope.model.contactPersoon.postcode = "";
          $scope.model.contactPersoon.telefoonNummer = "";
        }
      },
      createInschrijving: function() {
        Inschrijven.create($scope.model, function(props){
            console.log(props);
        });
      }
    }
  });
