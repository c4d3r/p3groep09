/**
 * Created by Bram on 22/11/2014.
 */
angular.module('webappApp')
    .factory('Contacteren', function($resource){
        return $resource('api/email/:id', {id: "@_id"},
            {
                'show':     { method: 'GET', isArray: false},
                'index':    { method: 'GET', isArray: true},
                'create':   { method: 'POST'}
            }
        );
    });