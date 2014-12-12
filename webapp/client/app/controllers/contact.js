/**
 * Created by Bram on 7/11/2014.
 */
'use strict'

angular.module('webappApp')
    .controller('ContactCtrl', function ($scope, Contact) {
        $scope.contact = function (form) {
            $scope.submitted = true;
            console.log($scope.getCurrentUser()._id);
            if (form.$valid) {
                Contact.create({
                    onderwerp: $scope.contact.onderwerp,
                    bericht: $scope.contact.bericht,
                    sendDate: Date.now(),
                    sendBy: $scope.getCurrentUser()._id
                });
            }
        };
    });

/**
 Contact.transporter($scope.model, function(props){
                    console.log(props);
                    console.log($scope.contact);
  });
 **/