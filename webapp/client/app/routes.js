'use strict';

angular.module('webappApp')
  .config(function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/views/vakanties/index.html',
      controller: 'VakantieCtrl'
    })
    .state('doelgroep', {
      url: '/doelgroep',
      templateUrl: 'app/views/doelgroep/selectie.html',
      controller: 'DoelgroepCtrl'
    })
    /** NIEUWS **/
    .state('nieuws', {
        url: '/nieuws',
        templateUrl: 'app/views/nieuws/nieuws.html',
        controller: 'NieuwsItemCtrl'
    })
    .state('nieuws_view', {
        url: '/nieuws/:id',
        templateUrl: 'app/views/nieuws/nieuws_item.html',
        controller: 'NieuwsItemViewCtrl'
    })

    /** KAMPEN **/
    .state('kamp', {
      url: '/kampen',
      templateUrl: 'app/views/kampen/kampen.html',
      controller: 'KampenCtrl'
    })
    .state('kampen_seizoen', {
      url: '/kampen/seizoen/:seizoen',
      templateUrl: 'app/views/kampen/kampen.html',
      controller: 'VakantieCtrl'
    })
    .state('kamp_detail', {
      url: '/kampen/:id',
      templateUrl: 'app/views/kampen/kamp.html',
      controller: 'KampDetailCtrl'
    })
    .state('mijn_kamp_detail', {
      url: '/mijn_kampen',
      templateUrl: 'app/views/kampen/ingeschrevenkampen.html',
      controller: 'AccountCtrl'
    })
    .state('mijn_kampen', {
          url: '/mijn_kampen/:id',
          templateUrl: 'app/views/kampen/kamp.html',
          controller: 'AccountCtrl'
        })

    /** INSCHRIJVINGEN **/
    .state('inschrijving', {
      url: "/kampen/:id/inschrijven",
      templateUrl: "app/views/inschrijven/inschrijven.html",
      controller: "InschrijvingCtrl"
    })
    /** SECURITY */
    .state('login', {
        url: '/login',
        templateUrl: 'app/views/security/login.html',
        controller: 'LoginCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/views/security/signup.html',
      controller: 'SignupCtrl'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'app/account/settings/settings.html',
      controller: 'SettingsCtrl',
      authenticate: true
    })
    .state('admin', {
      url: '/admin',
      templateUrl: 'app/admin/admin.html',
      controller: 'AdminCtrl'
    })

    /** CONTACTEREN **/
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/views/contact/contact.html',
      controller: 'ContactCtrl'
    })

    ;
  });
