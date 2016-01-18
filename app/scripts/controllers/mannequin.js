'use strict';

/**
 * @ngdoc function
 * @name habilleToiApp.controller:MannequinCtrl
 * @description
 * # MannequinCtrl
 * Controller of the habilleToiApp
 */
angular.module('habilleToiApp')
  .controller('MannequinCtrl', function ($scope, MannequinTetes, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.mannequins = MannequinTetes.all();
    $scope.saisonId= $routeParams.saisonId;

  });
