/**
 * Created by Bram on 7/11/2014.
 */
'use strict'

angular.module('webappApp')
    .controller('ContactCtrl', function ($scope, Contact) {
        Contact.create($scope.model, function (props) {
            console.log(props)
        });


    });

