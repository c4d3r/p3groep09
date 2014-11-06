'use strict';

angular.module('webappApp')
  .factory('NieuwsItems', function($resource){
    return $resource('api/nieuwsitems/:id', {id: "@_id"},
      {
        'show':     { method: 'GET', isArray: false},
        'index':    { method: 'GET', isArray: true}
      }
    );
  });
