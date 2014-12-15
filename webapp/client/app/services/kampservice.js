'use strict';

angular.module('webappApp')
  .factory('Kampen', ['$resource', function($resource){
    return $resource('api/kampen/:method:id', {id: "@_id"},
      {
        'show':          { method: 'GET', isArray: false},
        'index':         { method: 'GET', isArray: true},
        'findByVakantie': { method: 'GET', params: {method: "vakantie", vakantie: "@vakantie"} ,isArray: true}
      }
    )
  }]);
