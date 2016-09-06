'use strict';

/**
 * @ngdoc function
 * @name habilleToiApp.controller:MannequinCtrl
 * @description
 * # MannequinCtrl
 * Controller of the habilleToiApp
 */
angular.module('habilleToiApp')
  .controller('MannequinCtrl', function ($scope, Mannequins, $routeParams) {
      $scope.mannequins = Mannequins.all();

    $scope.saisonId= $routeParams.saisonId;

  });
