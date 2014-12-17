'use strict';

angular.module('webappApp')
  .controller('InschrijvingCtrl', function ($scope, Inschrijven, Auth, Kampen, $stateParams, $location, flash) {
    //TEST SCOPE WITH PRE-FILLED DETAILS
    $scope.flash = flash;
    $scope.kamp = Kampen.show($stateParams);

    $scope.fillDummyData = function() {
      $scope.inschrijving = {
        lidMutualiteit: false,
        persoonTenLaste: {
          aansluitingsNummer: "358/876985",
          codeGerechtigde: "855"
        },
        tweedeOuder: {
          aansluitingsNummer: "358/876985"
        },
        contactPersoon: [{
          rijksregisterNummer: "84984g8w22",
          voornaam: "Antwan",
          naam: "Flores",
          straat: "Gentsesteenweg",
          huisNummer: "32",
          bus: "5b",
          gemeente: "Gent",
          postcode: "8565",
          telefoonNummer: "037426586"
        }],
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
        gebruiker: Auth.getCurrentUser()._id,
        periode: {
          startDatum: new Date(2015, 1, 12),
          eindDatum: new Date(2015, 1, 17)
        },
        kamp: $stateParams.id
      };
    };

    //ORIGINAL SCOPE
    $scope.inschrijving = {
      lidMutualiteit: false,
      persoonTenLaste: {
        aansluitingsNummer: "",
        codeGerechtigde: ""
      },
      tweedeOuder: {
        aansluitingsNummer: ""
      },
      contactPersoon: [{
        rijksregisterNummer: "",
        voornaam: "",
        naam: "",
        straat: "",
        huisnummer: "",
        bus: "",
        gemeente: "",
        postcode: "",
        telefoonNummer: ""
      }],
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
      activiteit: "",
      periode: {
        startDatum: new Date(),
        eindDatum: new Date()
      },
      kamp: $stateParams.id
    };


    $scope.setPeriode = function() {
      var periodes = $scope.inschrijving.periode.split("|");
      $scope.inschrijving.periode.eindDatum = periodes[1];
      $scope.inschrijving.periode.startDatum = periodes[0];
      console.log($scope.inschrijving);
    };


    $scope.methods = {
      addNoodPersoon: function(voornaam, naam, telefoonNummer) {
        $scope.inschrijving.noodPersonen.push({naam: naam, voornaam: voornaam, telefoonNummer: telefoonNummer});
      },
      adresZelfdeAlsOuder: function(yes) {
        if(yes) {
          $scope.inschrijving.adresDeelnemer.straat      = $scope.inschrijving.betalendeOuder.straat;
          $scope.inschrijving.adresDeelnemer.huisnummer  = $scope.inschrijving.betalendeOuder.huisnummer;
          $scope.inschrijving.adresDeelnemer.bus         = $scope.inschrijving.betalendeOuder.bus;
          $scope.inschrijving.adresDeelnemer.gemeente    = $scope.inschrijving.betalendeOuder.gemeente;
          $scope.inschrijving.adresDeelnemer.postcode    = $scope.inschrijving.betalendeOuder.postcode;
        } else {
          $scope.inschrijving.adresDeelnemer.straat      = "";
          $scope.inschrijving.adresDeelnemer.huisnummer  = "";
          $scope.inschrijving.adresDeelnemer.bus         = "";
          $scope.inschrijving.adresDeelnemer.gemeente    = "";
          $scope.inschrijving.adresDeelnemer.postcode    = "";
        }
      },
      contactpersoonZelfdeOuder: function(yes) {
        if(yes) {
          $scope.inschrijving.contactPersoon = $scope.inschrijving.betalendeOuder;
        } else {
          $scope.inschrijving.contactPersoon.rijksregisterNummer = "";
          $scope.inschrijving.contactPersoon.voornaam = "";
          $scope.inschrijving.contactPersoon.naam = "";
          $scope.inschrijving.contactPersoon.straat = "";
          $scope.inschrijving.contactPersoon.huisnummer = "";
          $scope.inschrijving.contactPersoon.bus = "";
          $scope.inschrijving.contactPersoon.gemeente = "";
          $scope.inschrijving.contactPersoon.postcode = "";
          $scope.inschrijving.contactPersoon.telefoonNummer = "";
        }
      },
      createInschrijving: function() {
        if(Auth.getCurrentUser()._id != null){
          Inschrijven.create($scope.inschrijving, function(props){
            console.log(props);
            var message = "U bent ingeschreven.";
            $scope.flash.setMessage(message);
            console.log($scope.flash.getMessage());
            console.log($scope.flash);
            $location.path('/');
          });
        }
        else{
          $location.path('/login');
        }
      }

    }
  });
