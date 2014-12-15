'use strict'

angular.module('webappApp')
  .factory('Activiteiten', ['$resource', function($resource){
    return $resource('api/activiteiten/:method:id', {id: "@_id"},
      {
        'show':          { method: 'GET', isArray: false},
        'index':         { method: 'GET', isArray: true},
        'patch':        { method: 'POST'}
      }
    )
  }]);