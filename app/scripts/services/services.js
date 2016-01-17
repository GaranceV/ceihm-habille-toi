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

  })
  .factory('Mannequins', function () {

    var mannequins = [{
      id: 0,
      name : 'homme',
      image : '../images/corpsHomme.png'

    },
      {
        id: 1,
        name : 'femme',
        image : '../images/corpsFemme.png',
      }
    ];

    return {
      all: function() {
        return mannequins;
      },
      get: function(mannequinId) {
        for (var i = 0; i < mannequins.length; i++) {
          if (mannequins[i].id === parseInt(mannequinId)) {
            return mannequins[i];
          }
        }
      }
    };

  });;
