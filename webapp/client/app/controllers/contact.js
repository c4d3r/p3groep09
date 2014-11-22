/**
 * Created by Bram on 7/11/2014.
 */
angular.module('webappApp')
    .controller('ContactCtrl', function ($scope, Email) {
        $scope.methods = {
            createEmail: function () {
                Email.create($scope.model, function (props) {
                    console.log(props);
                })
            }

        }
        smtpTransporter.sendMail({
            from: "joetz.projecten3@gmail.com",
            to: "joetz.projecten3@gmail.com",
            subject: $scope.onderwerp,
            text: $scope.tekst
        })
    });

