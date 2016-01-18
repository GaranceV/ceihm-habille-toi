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

    $scope.dummyPromise = Mannequins.all();
    $scope.dummyPromise.then(function(result) {
      $scope.mannequins = result.data;
      console.log($scope.mannequins);
    });
    $scope.saisonId= $routeParams.saisonId;

  });
