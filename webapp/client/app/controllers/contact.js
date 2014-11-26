/**
 * Created by Bram on 7/11/2014.
 */
'use strict'

angular.module('webappApp')
    .controller('ContactCtrl', function ($scope, Contact) {

        $scope.contact = function (form) {
            $scope.submitted = true;
            console.log();
            if (form.$valid) {
                Contact.create({
                    onderwerp: $scope.contact.onderwerp,
                    bericht: $scope.contact.bericht,
                    sendDate: Date.now()
                    //sendBy: $scope.user
                });
                smtpTransporter.sendMail({
                    from: "joetz.projecten3@gmail.com",
                    to: "joetz.projecten3@gmail.com",
                    subject: $scope.contact.onderwerp,
                    text: $scope.contact.bericht
                });
            }
        };

    });



