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
      name : 'printemps',
      des: 'il fait beau en printemps',
      image : '../images/printemps.png',
      bgimage: '../images/printemps-bg.jpg'

    },
      {
        id: 1,
        name : 'ete',
        des: 'il fait chaud en été',
        image : '../images/ete.png',
        bgimage: '../images/ete-bg.jpg'
      },
      {
        id: 2,
        name : 'automne',
        des: 'il fait fraiche en automne',
        image : '../images/automne.png',
        bgimage : '../images/automne-bg.jpg'
      },
      {
        id: 3,
        name : 'hiver',
        des : 'il fait froid en hiver',
        image : '../images/hiver.png',
        bgimage: '../images/hiver-bg.jpg'
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
      }
    };

  });
