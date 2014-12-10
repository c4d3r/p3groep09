'use strict';

angular.module('webappApp')
  .factory('Inschrijven', function($resource){
    return $resource('api/inschrijvingen/:id', {id: "@_id"},
      {
        'show':     { method: 'GET', isArray: false},
        'index':    { method: 'GET', isArray: true},
        'create':   { method: 'POST'},
        'query':    { method: 'GET', params: {gebruikerId: "gebruikerId"}, isArray: true} //no idea
      }
    );
  });
