/**
 * Created by Bram on 22/11/2014.
 */
angular.module('webappApp')
    .factory('Contact', function ($resource) {
        return $resource('api/contacts/:id', {id: "@_id"},
            {
                'show': { method: 'GET', isArray: false},
                'index': { method: 'GET', isArray: true},
                'create': { method: 'POST'},
                'send': { method: 'POST'}
            }
        );
    });