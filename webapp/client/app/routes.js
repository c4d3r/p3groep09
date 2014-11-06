'use strict';

angular.module('webappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/nieuws/nieuws.html',
        controller: 'NieuwsItemCtrl'
      })
      .state('nieuws_view', {
        url: '/nieuws/:id',
        templateUrl: 'app/views/nieuws/nieuws_item.html',
        controller: 'NieuwsItemViewCtrl'
      })
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
      });
  });
