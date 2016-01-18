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

    $scope.newClothes = function(clothesJSON) {
      if (clothesJSON.ident == 'bra' && $scope.mannequin.ident == 'naked') {
        $scope.mannequin = Mannequins.getIdent('bra');
        console.log('i found the dummy');
      }
      console.log('you clicked');
      findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
    //  $scope.sousvetements
    };

    function findAndRemove(array, property, value) {
      array.forEach(function(result, index) {
        if(result[property] === value) {
          //Remove from array
          array.splice(index, 1);
        }
      });
    }
  });
