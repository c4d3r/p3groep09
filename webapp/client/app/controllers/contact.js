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

    });

