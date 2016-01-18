'use strict';

/**
 * @ngdoc function
 * @name habilleToiApp.controller:HabilleCtrl
 * @description
 * # HabilleCtrl
 * Controller of the habilleToiApp
 */
angular.module('habilleToiApp')
  .controller('HabilleCtrl', function ($scope, Saisons, Mannequins,Sousvetements,Hauts, Bas, Vests,Chaussures,Accessoires, $routeParams) {

    $scope.saison = Saisons.get($routeParams.saisonId);
    $scope.mannequin = Mannequins.get($routeParams.mannequinId);
    $scope.sousvetements = Sousvetements.all();
    console.log($scope.sousvetements);
    $scope.hauts = Hauts.all();
    $scope.bas = Bas.all();
    $scope.vests = Vests.all();
    $scope.chaussures = Chaussures.all();
    $scope.accessoires = Accessoires.all();

    $scope.newUnderwear = function(clothesJSON) {
      if (clothesJSON.ident == 'bra' && $scope.mannequin.ident == 'naked') {
        $scope.mannequin = Mannequins.getIdent('bra');
        console.log('you clicked on bra and the dummy is naked');
        findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);

      }
      else if (clothesJSON.ident == 'panties' && $scope.mannequin.ident == 'naked') {
        $scope.mannequin = Mannequins.getIdent('panties');
        console.log('you clicked on panties and the dummy is naked');
        findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);

      }
      else if (clothesJSON.ident == 'panties' && $scope.mannequin.ident == 'bra'
      || clothesJSON.ident == 'bra' && $scope.mannequin.ident == 'panties' ) {
        $scope.mannequin = Mannequins.getIdent('brapanties');
        console.log('you clicked on panties and the dummy has a bra');
        findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);

      }
      else {
        var audio_bad = new Audio('../../sounds/bad.mp3');
        audio_bad.play();
        findAndFilter($scope.sousvetements, 'ident', clothesJSON.ident);
      }
      console.log('you clicked');
    };

    $scope.newShirt = function(clothesJSON) {
      if (clothesJSON.ident == 'bra' && $scope.mannequin.ident == 'naked') {
        $scope.mannequin = Mannequins.getIdent('bra');
        console.log('you clicked on bra and the dummy is naked');
        findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);

      }
      else if (clothesJSON.ident == 'panties' && $scope.mannequin.ident == 'naked') {
        $scope.mannequin = Mannequins.getIdent('panties');
        console.log('you clicked on panties and the dummy is naked');
        findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);

      }
      else if (clothesJSON.ident == 'panties' && $scope.mannequin.ident == 'bra'
        || clothesJSON.ident == 'bra' && $scope.mannequin.ident == 'panties' ) {
        $scope.mannequin = Mannequins.getIdent('brapanties');
        console.log('you clicked on panties and the dummy has a bra');
        findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);

      }
      console.log('you clicked');
    };

    function findAndRemove(array, property, value) {
      array.forEach(function(result, index) {
        if(result[property] === value) {
          //Remove from array
          array.splice(index, 1);
        }
      });
    };

    function findAndFilter(array, property, value) {
      array.forEach(function(result, index) {
        if(result[property] === value) {
          //gray the chosen image

        }
      });
    };
  });
