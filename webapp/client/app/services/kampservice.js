'use strict';

angular.module('webappApp')
  .factory('Kampen', ['$resource', function($resource){
    return $resource('api/kampen/:id', {id: "@_id"},
      {
        'show':          { method: 'GET', isArray: false},
        'index':         { method: 'GET', isArray: true},
        'findBySeizoen': { method: 'GET', params: {selectedSeizoen: "@selectedSeizoen"} ,isArray: true}
      }
    )
  }]);
