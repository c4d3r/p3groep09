'use strict';

angular.module('webappApp')
  .factory('Kampen', ['$resource', function($resource){
    return $resource('api/kampen/:method:id', {id: "@_id"},
      {
        'show':          { method: 'GET', isArray: false},
        'index':         { method: 'GET', isArray: true},
        'findBySeizoen': { method: 'GET', params: {method: "seizoen", selectedSeizoen: "@selectedSeizoen"} ,isArray: true}
      } //hier is findBySeizoen nie de functienaam in de backend, die ga gwn de method aanroepe
    )
  }]);
