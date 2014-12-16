'use strict';

angular.module('webappApp')
  .controller('ActiviteitenCtrl', function ($scope, Activiteiten, $location, $window, Auth) {

    /*Auth.getCurrentUser()._id toont ons het id van de ingelogde gebruiker*/
    if(Auth.getCurrentUser()._id != null){
    /*Auth.getCurrentUser().role toont ons de rol van de ingelogde gebruiker
      In dit geval kijken we of de rol die van de monitor is.
    */
        if(Auth.getCurrentUser().role === "ROLE_MONITOR"){
        /*Dit toont de lijst met activiteiten, die wordt opgehaald uit de backend*/
        $scope.activiteiten = Activiteiten.index();
        }
        else{
        /*Dit verwijst de gebruiker door naar de startpagina*/
          $location.path('/');
        }
    }
    else{
       /* Dit verwijst de gebruiker door naar de login pagina*/
        $location.path('/login');
    }
  });
