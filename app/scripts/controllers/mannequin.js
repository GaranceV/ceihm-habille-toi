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
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.mannequins = Mannequins.all();
    $scope.saisonId= $routeParams.saisonId;

  });
