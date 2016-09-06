'use strict';

/**
 * @ngdoc function
 * @name habilleToiApp.controller:SaisonCtrl
 * @description
 * # SaisonCtrl
 * Controller of the habilleToiApp
 */
angular.module('habilleToiApp')
  .controller('SaisonCtrl', function ($scope, Saisons) {
    $scope.saisons = Saisons.all();
  })

  .controller('SaisonDetailCtrl', function ($scope, Saisons, $routeParams, Mannequins) {
    $scope.saison = Saisons.get($routeParams.saisonId);

    $scope.mannequins = Mannequins.all();

    $scope.saisonId= $routeParams.saisonId;
  });
