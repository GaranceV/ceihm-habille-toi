'use strict';

/**
 * @ngdoc function
 * @name habilleToiApp.controller:HabilleCtrl
 * @description
 * # HabilleCtrl
 * Controller of the habilleToiApp
 */
angular.module('habilleToiApp')
  .controller('HabilleCtrl', function ($scope, Saisons, Mannequins, Sousvetements, Hauts, Bas, Vests, Chaussures, Accessoires, $routeParams, $document) {

    $scope.saison = Saisons.get($routeParams.saisonId);
    $scope.mannequin = Mannequins.get($routeParams.mannequinId);
    $scope.sousvetements = Sousvetements.all();
    $scope.hauts = Hauts.all();
    $scope.bas = Bas.all();
    $scope.vests = Vests.all();
    $scope.chaussures = Chaussures.all();
    $scope.accessoires = Accessoires.all();

    $scope.audio_bad = new Audio('../../sounds/bad.mp3');


    $scope.newUnderwear = function (clothesJSON) {
      console.log('mannequin : ', $scope.mannequin.ident, ' - clicked on : ', clothesJSON.ident);

      if ($scope.mannequin.ident == 'naked') {
        //dress
        if (clothesJSON.ident == 'bra' || clothesJSON.ident == 'socks' || clothesJSON.ident == 'panties') {
          $scope.mannequin = Mannequins.getIdent(clothesJSON.ident);
          //Enlever le croix rouge quand choisir un bon vetement
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.sousvetements, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'bra') {
        //dress
        if (clothesJSON.ident == 'socks' || clothesJSON.ident == 'panties') {
          $scope.mannequin = Mannequins.getIdent('bra' + clothesJSON.ident);
          //Enlever le croix rouge quand choisir un bon vetement
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          //error
          $scope.audio_bad.play();
          findAndFilter($scope.sousvetements, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'brashirt') {
        //dress
        if (clothesJSON.ident == 'socks' || clothesJSON.ident == 'panties') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          //Enlever le croix rouge quand choisir un bon vetement
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          //error
          $scope.audio_bad.play();
          findAndFilter($scope.sousvetements, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'panties') {
        //dress
        if (clothesJSON.ident == 'socks' || clothesJSON.ident == 'bra' || clothesJSON.ident == 'tights') {
          $scope.mannequin = Mannequins.getIdent(clothesJSON.ident + 'panties');
          //Enlever le croix rouge quand choisir un bon vetement
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          //error
          $scope.audio_bad.play();
          findAndFilter($scope.sousvetements, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'socks') {
        if (clothesJSON.ident == 'bra') {
          $scope.mannequin = Mannequins.getIdent(clothesJSON.ident + 'socks');
          //Enlever le croix rouge quand choisir un bon vetement
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else if (clothesJSON.ident == 'panties') {
          $scope.mannequin = Mannequins.getIdent('socks' + clothesJSON.ident);
        }
        else {
          //error
          $scope.audio_bad.play();
          findAndFilter($scope.sousvetements, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'brasocks') {
        //if panties go underwear
        if (clothesJSON.ident == 'panties') {
          $scope.mannequin = Mannequins.getIdent('underwear');
          //Enlever le croix rouge quand choisir un bon vetement
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          //error
          $scope.audio_bad.play();
          findAndFilter($scope.sousvetements, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'sockspanties') {
        //if bra go underwear
        if (clothesJSON.ident == 'bra') {
          $scope.mannequin = Mannequins.getIdent('underwear');
          //Enlever le croix rouge quand choisir un bon vetement
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          //error
          $scope.audio_bad.play();
          findAndFilter($scope.sousvetements, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightspanties') {
        //if bra go underwear
        if (clothesJSON.ident == 'bra') {
          $scope.mannequin = Mannequins.getIdent('tights');
          //Enlever le croix rouge quand choisir un bon vetement
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          //error
          $scope.audio_bad.play();
          findAndFilter($scope.sousvetements, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'sockspantiespants') {
        //if bra go underwear
        if (clothesJSON.ident == 'bra') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          //Enlever le croix rouge quand choisir un bon vetement
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          //error
          $scope.audio_bad.play();
          findAndFilter($scope.sousvetements, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'brapanties') {
        //if socks go underwear
        if (clothesJSON.ident == 'socks') {
          $scope.mannequin = Mannequins.getIdent('underwear');
          //Enlever le croix rouge quand choisir un bon vetement
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        } else if (clothesJSON.ident == 'tights') {
          $scope.mannequin = Mannequins.getIdent('tights');
          //Enlever le croix rouge quand choisir un bon vetement
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          //error
          $scope.audio_bad.play();
          findAndFilter($scope.sousvetements, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'brasocksshirtpullover') {
        //if socks go underwear
        if (clothesJSON.ident == 'panties') {
          $scope.mannequin = Mannequins.getIdent('underwearshirtpullover');
          //Enlever le croix rouge quand choisir un bon vetement
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          //error
          $scope.audio_bad.play();
          findAndFilter($scope.sousvetements, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'brasocksshirt' || $scope.mannequin.ident == 'brashirtsocks') {
        //if socks go underwear
        if (clothesJSON.ident == 'panties') {
          $scope.mannequin = Mannequins.getIdent('underwearshirt');
          //Enlever le croix rouge quand choisir un bon vetement
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          //error
          $scope.audio_bad.play();
          findAndFilter($scope.sousvetements, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'brashirtpullover') {
        //if socks go brasocksshirtpullover
        if (clothesJSON.ident == 'socks') {
          $scope.mannequin = Mannequins.getIdent('brasocksshirtpullover');
          //Enlever le croix rouge quand choisir un bon vetement
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else if (clothesJSON.ident == 'panties') {
          $scope.mannequin = Mannequins.getIdent('brapantiesshirtpullover');
          //Enlever le croix rouge quand choisir un bon vetement
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.sousvetements, 'ident', clothesJSON.ident);
        }
        else {
          //error
          $scope.audio_bad.play();
          findAndFilter($scope.sousvetements, 'ident', clothesJSON.ident);
        }
      }
      else {
        //error
        $scope.audio_bad.play();
        findAndFilter($scope.sousvetements, 'ident', clothesJSON.ident);
      }
    };

    $scope.newShirt = function (clothesJSON) {
      console.log('mannequin : ', $scope.mannequin.ident, ' - clicked on : ', clothesJSON.ident);
      if ($scope.mannequin.ident == 'underwear') {
        // if underwear go shirt
        if (clothesJSON.ident == 'shirt') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.hauts, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.hauts, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tights') {
        // if underwear go shirt
        if (clothesJSON.ident == 'shirt') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.hauts, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.hauts, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirt') {
        // if underwear go shirt
        if (clothesJSON.ident == 'shirt') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.hauts, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.hauts, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshoes') {
        // if underwear go shirt
        if (clothesJSON.ident == 'shirt') {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirtshoes');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.hauts, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.hauts, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirtshoes') {
        // if underwear go shirt
        if (clothesJSON.ident == 'pullover') {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirtpullovershoes');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.hauts, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.hauts, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirt') {
        // if underwear go shirt
        if (clothesJSON.ident == 'pullover') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.hauts, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.hauts, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsshirt') {
        // if underwear go shirt
        if (clothesJSON.ident == 'pullover') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.hauts, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.hauts, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearpants') {
        // if underwear go shirt
        if (clothesJSON.ident == 'shirt') {
          $scope.mannequin = Mannequins.getIdent('underwearshirtpants');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.hauts, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.hauts, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpants') {
        // if underwear go shirt
        if (clothesJSON.ident == 'pullover') {
          $scope.mannequin = Mannequins.getIdent('underwearshirtpulloverpants');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.hauts, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.hauts, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'bra') {
        //if bra go shirt
        if (clothesJSON.ident == 'shirt') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.hauts, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.hauts, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'brapanties') {
        //if bra + panties go shirt
        if (clothesJSON.ident == 'shirt') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.hauts, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.hauts, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearpantsshoes') {
        //if bra + panties go shirt
        if (clothesJSON.ident == 'shirt') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.hauts, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.hauts, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'brasocks') {
        // ig bra + socks go shirt
        if (clothesJSON.ident == 'shirt') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.hauts, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.hauts, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'sockspantiespantsshoes') {
        // ig bra + socks go shirt
        if (clothesJSON.ident == 'shirt') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.hauts, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.hauts, 'ident', clothesJSON.ident);
        }
      }
      //console.log(string.indexOf(substring) > -1);
     // underwearshirtpulloverpants
      else if (($scope.mannequin.ident).indexOf("shirt") > -1 && ($scope.mannequin.ident).indexOf("pants") > -1) {
        //if anything + shirt go anything + pullover
        if (clothesJSON.ident == 'pullover') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident.slice(0, -5) + clothesJSON.ident + 'pants');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.hauts, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.hauts, 'ident', clothesJSON.ident);
        }
      }

      else if (($scope.mannequin.ident).indexOf("shirt") > -1) {
        //if anything + shirt go anything + pullover
        if (clothesJSON.ident == 'pullover') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.hauts, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.hauts, 'ident', clothesJSON.ident);
        }
      }
      else {
        $scope.audio_bad.play();
        findAndFilter($scope.hauts, 'ident', clothesJSON.ident);
      }

    };

    $scope.newPants = function (clothesJSON) {
      console.log('mannequin : ', $scope.mannequin.ident, ' - clicked on : ', clothesJSON.ident);
      if ($scope.mannequin.ident == 'panties') {
        // if underwear go shirt
        if (clothesJSON.ident == 'pants') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.bas, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.bas, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tights') {
        // if underwear go shirt
        if (clothesJSON.ident == 'skirt') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.bas, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.bas, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsshirt') {
        // if underwear go shirt
        if (clothesJSON.ident == 'skirt') {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirt');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.bas, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.bas, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsshirtpullover') {
        // if underwear go shirt
        if (clothesJSON.ident == 'skirt') {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirtpullover');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.bas, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.bas, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'sockspanties') {
        // if underwear go shirt
        if (clothesJSON.ident == 'pants') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.bas, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.bas, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'brapanties') {
        // if underwear go shirt
        if (clothesJSON.ident == 'pants') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.bas, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.bas, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwear') {
        // if underwear go shirt
        if (clothesJSON.ident == 'pants') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.bas, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.bas, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'brapantiesshirt' || $scope.mannequin.ident == 'brashirtpanties') {
        // if underwear go shirt
        if (clothesJSON.ident == 'pants') {
          $scope.mannequin = Mannequins.getIdent('brapantiesshirt' + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.bas, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.bas, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirt') {
        // if underwear go shirt
        if (clothesJSON.ident == 'pants') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.bas, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.bas, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'brapantiesshirtpullover') {
        // if underwear go shirt
        if (clothesJSON.ident == 'pants') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.bas, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.bas, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpullover') {
        // if underwear go shirt
        if (clothesJSON.ident == 'pants') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.bas, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.bas, 'ident', clothesJSON.ident);
        }
      }
      else {
        $scope.audio_bad.play();
        findAndFilter($scope.bas, 'ident', clothesJSON.ident);
      }
    };

    $scope.newShoes = function (clothesJSON) {
      console.log('mannequin : ', $scope.mannequin.ident, ' - clicked on : ', clothesJSON.ident);
      if ($scope.mannequin.ident == 'sockspantiespants') {
        // if sock + panties + pants go to shoes
        if (clothesJSON.ident == 'shoes') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.chaussures, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.chaussures, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearpants') {
        // if underwear + pants go to shoes
        if (clothesJSON.ident == 'shoes') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.chaussures, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.chaussures, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirtpulloverjacket') {
        // if underwear + pants go to shoes
        if (clothesJSON.ident == 'shoes') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.chaussures, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.chaussures, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirt') {
        // if underwear + pants go to shoes
        if (clothesJSON.ident == 'shoes') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.chaussures, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.chaussures, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpants') {
        // if underwear + shirt + pants go to shoes
        if (clothesJSON.ident == 'shoes') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.chaussures, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.chaussures, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpulloverpants') {
        // if underwear + shirt + pullover + pants go to shoes
        if (clothesJSON.ident == 'shoes') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.chaussures, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.chaussures, 'ident', clothesJSON.ident);
        }
      }
      else {
        $scope.audio_bad.play();
        findAndFilter($scope.chaussures, 'ident', clothesJSON.ident);
      }
    };

    $scope.newJacket = function (clothesJSON) {
      console.log('mannequin : ', $scope.mannequin.ident, ' - clicked on : ', clothesJSON.ident);
    /*  if ($scope.mannequin.ident == 'brashirtpullover') {
        // if bra + shirt + pullover go to jacket
        if (clothesJSON.ident == 'jacket') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.vests, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.vests, 'ident', clothesJSON.ident);
        }
      }*/
  /*    else if ($scope.mannequin.ident == 'brapantiesshirtpullover') {
        // if bra + panties + shirt + pullover go to jacket
        if (clothesJSON.ident == 'jacket') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.vests, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.vests, 'ident', clothesJSON.ident);
        }
      } */
    /*  else if ($scope.mannequin.ident == 'brasocksshirtpullover') {
        // if bra + shirt + pullover go to jacket
        if (clothesJSON.ident == 'jacket') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.vests, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.vests, 'ident', clothesJSON.ident);
        }
      }*/
     /* else if ($scope.mannequin.ident == 'underwearshirtpullover') {
        // if underwear + shirt + pullover go to jacket
        if (clothesJSON.ident == 'jacket') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.vests, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.vests, 'ident', clothesJSON.ident);
        }
      } */
      if ($scope.mannequin.ident == 'underwearshirtpulloverpants') {
        // if underwear + shirt + pullover go to jacket
        if (clothesJSON.ident == 'jacket') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.vests, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.vests, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpulloverpantsshoes' || $scope.mannequin.ident == 'underwearpantsshoesshirtpullover') {
        // if underwear + shirt + pullover go to jacket
        if (clothesJSON.ident == 'jacket') {
          $scope.mannequin = Mannequins.getIdent('underwearshirtpulloverpantsshoes' + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.vests, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.vests, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpulloverpantsshoesgloves') {
        // if underwear + shirt + pullover go to jacket
        if (clothesJSON.ident == 'jacket') {
          $scope.mannequin = Mannequins.getIdent('underwearshirtpulloverpantsshoesjacketgloves');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.vests, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.vests, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirtpullover') {
        // if underwear + shirt + pullover go to jacket
        if (clothesJSON.ident == 'jacket') {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirtpulloverjacket');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.vests, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.vests, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirtpullovershoes') {
        // if underwear + shirt + pullover go to jacket
        if (clothesJSON.ident == 'jacket') {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirtpulloverjacketshoes');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.vests, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.vests, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpulloverpantsshoesscarf') {
        // if underwear + shirt + pullover go to jacket
        if (clothesJSON.ident == 'jacket') {
          $scope.mannequin = Mannequins.getIdent('underwearshirtpulloverpantsshoesjacketscarf');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.vests, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.vests, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpulloverpantsshoesscarfgloves') {
        // if underwear + shirt + pullover go to jacket
        if (clothesJSON.ident == 'jacket') {
          $scope.mannequin = Mannequins.getIdent('underwearshirtpulloverpantsshoesjacketscarfgloves');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.vests, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.vests, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpulloverpantsshoeshat') {
        // if underwear + shirt + pullover go to jacket
        if (clothesJSON.ident == 'jacket') {
          $scope.mannequin = Mannequins.getIdent('underwearshirtpulloverpantsshoesjackethat');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.vests, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.vests, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpulloverpantsshoeshatgloves') {
        // if underwear + shirt + pullover go to jacket
        if (clothesJSON.ident == 'jacket') {
          $scope.mannequin = Mannequins.getIdent('underwearshirtpulloverpantsshoesjackethatgloves');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.vests, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.vests, 'ident', clothesJSON.ident);
        }
      }

      else {
        $scope.audio_bad.play();
        findAndFilter($scope.vests, 'ident', clothesJSON.ident);
      }
    };

    $scope.newScarf = function (clothesJSON) {
      console.log('mannequin : ', $scope.mannequin.ident, ' - clicked on : ', clothesJSON.ident);
   /*   if ($scope.mannequin.ident.match("shirt$")) {
        // if anything with a shirt
        if (clothesJSON.ident == 'scarf') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }*/
   /*  else if ($scope.mannequin.ident.match("pullover$")) {
        // if anything with a pullover
        if (clothesJSON.ident == 'scarf') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      } */
      if ($scope.mannequin.ident.match("jacket$")) {
        // if anything with a jacket
        if (clothesJSON.ident == 'scarf' || clothesJSON.ident == 'gloves' || clothesJSON.ident == 'hat' ) {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirtpulloverjacketshoes') {
        // if underwear + shirt + pants + shoes
        if (clothesJSON.ident == 'scarf' || clothesJSON.ident == 'gloves' || clothesJSON.ident == 'hat' ) {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirtpulloverjacketshoeshat') {
        // if underwear + shirt + pants + shoes
        if (clothesJSON.ident == 'scarf' || clothesJSON.ident == 'gloves') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirtpulloverjacketshoeshatgloves') {
        // if underwear + shirt + pants + shoes
        if (clothesJSON.ident == 'scarf') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirtpulloverjacketshoeshatscarf') {
        // if underwear + shirt + pants + shoes
        if (clothesJSON.ident == 'scarf') {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirtpulloverjacketshoeshatglovesscarf');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirtpulloverjacketshoesscarfgloves') {
        // if underwear + shirt + pants + shoes
        if (clothesJSON.ident == 'hat') {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirtpulloverjacketshoeshatglovesscarf');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirtpulloverjacketshoesscarf') {
        // if underwear + shirt + pants + shoes
        if (clothesJSON.ident == 'hat') {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirtpulloverjacketshoeshatscarf');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        } else if (clothesJSON.ident == 'gloves') {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirtpulloverjacketshoesglovesscarf');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirtpulloverjacketshoesgloves') {
        // if underwear + shirt + pants + shoes
        if (clothesJSON.ident == 'hat') {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirtpulloverjacketshoeshatgloves');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        } else if (clothesJSON.ident == 'scarf') {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirtpulloverjacketshoesglovesscarf');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirtpullovershoes') {
        // if underwear + shirt + pants + shoes
        if (clothesJSON.ident == 'hat' || clothesJSON.ident == 'gloves' || clothesJSON.ident == 'scarf' ) {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirtpullovershoesgloves') {
        // if underwear + shirt + pants + shoes
        if (clothesJSON.ident == 'hat' || clothesJSON.ident == 'scarf' ) {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirtpullovershoeshat') {
        // if underwear + shirt + pants + shoes
        if (clothesJSON.ident == 'gloves') {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirtpullovershoesgloveshat');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        } else if (clothesJSON.ident == 'scarf') {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirtpullovershoeshatscarf');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirtpullovershoesscarf') {
        // if underwear + shirt + pants + shoes
        if (clothesJSON.ident == 'hat') {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirtpullovershoeshatscarf');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        } else if (clothesJSON.ident == 'gloves') {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirtpullovershoesglovesscarf');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirtpullovershoesgloveshat') {
        // if underwear + shirt + pants + shoes
        if (clothesJSON.ident == 'scarf' ) {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirtpullovershoesglovesscarf') {
        // if underwear + shirt + pants + shoes
        if (clothesJSON.ident == 'hat' ) {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirtpullovershoesgloveshatscarf');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'tightsskirtshirtpullovershoeshatscarf') {
        // if underwear + shirt + pants + shoes
        if (clothesJSON.ident == 'gloves') {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirtpullovershoesgloveshatscarf');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpantsshoes') {
        // if underwear + shirt + pants + shoes
        if (clothesJSON.ident == 'scarf') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpulloverpantsshoes') {
        if (clothesJSON.ident == 'scarf' || clothesJSON.ident == 'gloves' || clothesJSON.ident == 'hat' ) {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpulloverpantsshoeshat') {
        if (clothesJSON.ident == 'scarf' || clothesJSON.ident == 'gloves') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpulloverpantsshoesjackethat' ) {
        if (clothesJSON.ident == 'gloves' || clothesJSON.ident == 'scarf') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpulloverpantsshoesjackethatscarf' || $scope.mannequin.ident == 'underwearshirtpulloverpantsshoesjackethatgloves' ) {
        if (clothesJSON.ident == 'gloves' || clothesJSON.ident == 'scarf') {
          $scope.mannequin = Mannequins.getIdent('pantsall');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpulloverpantsshoesjacketscarf') {
          if (clothesJSON.ident == 'gloves') {
          $scope.mannequin = Mannequins.getIdent('underwearshirtpulloverpantsshoesjacketscarfgloves');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
          else if (clothesJSON.ident == 'hat') {
            $scope.mannequin = Mannequins.getIdent('underwearshirtpulloverpantsshoesjackethatscarf');
            angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
            findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
          }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpulloverpantsshoesjacketgloves') {
        if (clothesJSON.ident == 'scarf') {
          $scope.mannequin = Mannequins.getIdent('underwearshirtpulloverpantsshoesjacketscarfgloves');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        } else if (clothesJSON.ident == 'hat') {
          $scope.mannequin = Mannequins.getIdent('underwearshirtpulloverpantsshoesjackethatgloves');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpulloverpantsshoeshatgloves') {
        if (clothesJSON.ident == 'scarf') {
          $scope.mannequin = Mannequins.getIdent('tightsskirtshirtpulloverjacketshoeshatglovesscarf');
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else if ($scope.mannequin.ident == 'underwearshirtpulloverpantsshoesgloves') {
        if (clothesJSON.ident == 'scarf') {
          $scope.mannequin = Mannequins.getIdent($scope.mannequin.ident + clothesJSON.ident);
          angular.element($document[0].getElementsByClassName('croix-rouge')).addClass('hidden');
          findAndRemove($scope.accessoires, 'ident', clothesJSON.ident);
        }
        else {
          $scope.audio_bad.play();
          findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
        }
      }
      else {
        $scope.audio_bad.play();
        findAndFilter($scope.accessoires, 'ident', clothesJSON.ident);
      }
    };

    function findAndRemove(array, property, value) {
      array.forEach(function (result, index) {
        if (result[property] === value) {
          //Remove from array
          array.splice(index, 1);
        }
      });
    }


    $scope.resetClothes = function () {
      $scope.sousvetements = Sousvetements.all();
      $scope.hauts = Hauts.all();
      $scope.bas = Bas.all();
      $scope.vests = Vests.all();
      $scope.chaussures = Chaussures.all();
      $scope.accessoires = Accessoires.all();
      $scope.mannequin = Mannequins.get($routeParams.mannequinId);
    };


    function findAndFilter(array, property, value) {
      array.forEach(function (result, index) {
        if (result[property] === value) {
          //gray the chosen image
          angular.element($document[0].getElementById(result[property])).removeClass('hidden');
        }
      });
    }
  })
;
