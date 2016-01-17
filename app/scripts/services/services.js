'use strict';

/**
 * @ngdoc function
 * @name habilleToiApp.service:service
 * @description
 * service of the habilleToiApp
 */
angular.module('habilleToiApp')
  .factory('Saisons', function () {

    var saisons = [{
      id: 0,
      name : "printemps",
      image : '../images/printemps.png'
    },
      {
        id: 1,
        name : "ete",
        image : '../images/ete.png'
      },
      {
        id: 2,
        name : "automne",
        image : '../images/automne.png'
      },
      {
        id: 3,
        name : "hiver",
        image : '../images/hiver.png'
      }
    ];

    return {
      all: function() {
      return saisons;
    },
      get: function(saisonId) {
        for (var i = 0; i < saisons.length; i++) {
          if (saisons[i].id === parseInt(saisonId)) {
            return saisons[i];
          }
        }
        return null;
      }
    }

  });
