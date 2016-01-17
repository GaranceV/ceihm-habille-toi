'use strict';

/**
 * @ngdoc function
 * @name habilleToiApp.controller:HabilleCtrl
 * @description
 * # HabilleCtrl
 * Controller of the habilleToiApp
 */
angular.module('habilleToiApp')
  .controller('HabilleCtrl', function ($scope, Saisons, Mannequins,Sousvetements,Hauts, Bas,$routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.saison = Saisons.get($routeParams.saisonId);
    $scope.mannequin = Mannequins.get($routeParams.mannequinId);
    $scope.sousvetements = Sousvetements.all();
    $scope.hauts = Hauts.all();
    $scope.bas = Bas.all();
  })
;
