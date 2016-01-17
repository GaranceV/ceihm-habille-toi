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
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.saisons = Saisons.all();
  })

  .controller('SaisonDetailCtrl', function ($scope, Saisons, $routeParams) {
    $scope.saison = Saisons.get($routeParams.saisonId);
  })
;
