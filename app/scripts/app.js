'use strict';

/**
 * @ngdoc overview
 * @name habilleToiApp
 * @description
 * # habilleToiApp
 *
 * Main module of the application.
 */
angular
  .module('habilleToiApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/saison', {
        templateUrl: 'views/saison.html',
        controller: 'SaisonCtrl',
        controllerAs: 'saison'
      })
      .when('/saison/:saisonId', {
        templateUrl: 'views/saisonDetail.html',
        controller: 'SaisonDetailCtrl'
      })
      .when('/saison/:saisonId/mannequin', {
        templateUrl: 'views/mannequin.html',
        controller: 'MannequinCtrl',
        controllerAs: 'mannequin'
      })
      .when('/saison/:saisonId/mannequin/:mannequinId/verifier', {
        templateUrl: 'views/verifier.html',
        controller: 'HabilleCtrl',
        controllerAs: 'habille'
      })
      .when('/saison/:saisonId/habille/:mannequinId', {
        templateUrl: 'views/habille.html',
        controller: 'HabilleCtrl',
        controllerAs: 'habille'
      })


      .when('/meteo', {
        templateUrl: 'views/meteo.html',
        controller: 'MeteoCtrl',
        controllerAs: 'meteo'
      })
      .when('/evenment', {
        templateUrl: 'views/evenment.html',
        controller: 'EvenementCtrl',
        controllerAs: 'evenment'
      })
      .when('/question', {
        templateUrl: 'views/question.html',
        controller: 'QuestionCtrl',
        controllerAs: 'question'
      })
      .when('/params', {
        templateUrl: 'views/params.html',
        controller: 'ParamsCtrl',
        controllerAs: 'params'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
