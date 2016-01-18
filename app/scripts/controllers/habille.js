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
    $scope.hauts = Hauts.all();
    $scope.bas = Bas.all();
    $scope.vests = Vests.all();
    $scope.chaussures = Chaussures.all();
    $scope.accessoires = Accessoires.all();

    $scope.newUnderwear = function(clothesJSON) {
      if($scope.mannequin.ident == 'naked') {
        //dress
        if (clothesJSON.ident == 'bra' || clothesJSON.ident == 'socks' || clothesJSON.ident == 'panties') {
          $scope.mannequin = Mannequins.getIdent(clothesJSON.ident);
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          //error
        }
      }
      else if($scope.mannequin.ident == 'bra') {
        //dress
        if (clothesJSON.ident == 'socks' || clothesJSON.ident == 'panties') {
          $scope.mannequin = Mannequins.getIdent('bra'+clothesJSON.ident);
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          //error
        }
      }
      else if($scope.mannequin.ident == 'panties') {
        //dress
        if (clothesJSON.ident == 'socks' || clothesJSON.ident == 'bra') {
          $scope.mannequin = Mannequins.getIdent(clothesJSON.ident+'panties');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          //error
        }
      }
      else if($scope.mannequin.ident == 'socks') {
        if (clothesJSON.ident == 'bra' || clothesJSON.ident == 'panties') {
          $scope.mannequin = Mannequins.getIdent(clothesJSON.ident+'socks');
          $scope.mannequin = Mannequins.getIdent('socks'+clothesJSON.ident);
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          //error
        }
        //dress
      }
      else if($scope.mannequin.ident == 'brasocks') {
        //dress
        console.log('the dummy is in brasocks');
        if (clothesJSON.ident == 'panties') {
          console.log('your in panties in brasocks');
          $scope.mannequin = Mannequins.getIdent('underwear');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          //error
        }
      }
      else if($scope.mannequin.ident == 'pantiessocks') {
        //dress
        if (clothesJSON.ident == 'bra') {
          $scope.mannequin = Mannequins.getIdent('underwear');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          //error
        }
      }
      else if($scope.mannequin.ident == 'brapanties') {
        //dress
        if (clothesJSON.ident == 'socks') {
          $scope.mannequin = Mannequins.getIdent('underwear');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          //error
        }
      }

      console.log('you clicked');
    };

    $scope.newShirt = function(clothesJSON) {
console.log('you clicked on a shirt');
    };

    function findAndRemove(array, property, value) {
      array.forEach(function(result, index) {
        if(result[property] === value) {
          //Remove from array
          array.splice(index, 1);
        }
      });
    }


    $scope.resetClothes = function() {
      $scope.sousvetements = Sousvetements.all();
      $scope.hauts = Hauts.all();
      $scope.bas = Bas.all();
      $scope.vests = Vests.all();
      $scope.chaussures = Chaussures.all();
      $scope.accessoires = Accessoires.all();
      $scope.mannequin = Mannequins.get($routeParams.mannequinId);
    };


  });
