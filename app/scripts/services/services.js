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
      image : '../images/saisons/printemps.png',
      bgimage: '../images/saisons/printemps-bg.jpg'

    },
      {
        id: 1,
        name : 'ete',
        des: 'il fait chaud en été',
        image : '../images/saisons/ete.png',
        bgimage: '../images/saisons/ete-bg.jpg'
      },
      {
        id: 2,
        name : 'automne',
        des: 'il fait fraiche en automne',
        image : '../images/saisons/automne.png',
        bgimage : '../images/saisons/automne-bg.jpg'
      },
      {
        id: 3,
        name : 'hiver',
        des : 'il fait froid en hiver',
        image : '../images/saisons/hiver.png',
        bgimage: '../images/saisons/hiver-bg.jpg'
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
      image : '../images/mannequins/corpsHomme.png'

    },
      {
        id: 1,
        name : 'femme',
        image : '../images/mannequins/corpsFemme.png',
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

  })
  .factory('Sousvetements', function () {
    var sousvetements = [{
      id: 0,
      name : 'soutien-gorge',
      image : '../images/vetements/soutien-gorge_resize.png'

    },
      {
        id: 1,
        name : 'culotte',
        image : '../images/vetements/culotte.png'
      }
      ,
      {
        id: 2,
        name : 'maillot',
        image : '../images/vetements/maillot.png'
      }
    ];
    return {
      all: function() {
        return sousvetements;
      },
      get: function(sousvetementId) {
        for (var i = 0; i < sousvetements.length; i++) {
          if (sousvetements[i].id === parseInt(sousvetementId)) {
            return sousvetements[i];
          }
        }
      }
    };

  })
  .factory('Hauts', function () {
    var hauts = [{
      id: 0,
      name : 'pull',
      image : '../images/vetements/pull_resize.png'

    },
      {
        id: 1,
        name : 'tunique',
        image : '../images/vetements/tunique_resize.png'
      }
    ];
    return {
      all: function() {
        return hauts;
      },
      get: function(hautId) {
        for (var i = 0; i < hauts.length; i++) {
          if (hauts[i].id === parseInt(hautId)) {
            return hauts[i];
          }
        }
      }
    };

  })
  .factory('Bas', function () {
    var bas = [{
      id: 0,
      name : 'pantalon',
      image : '../images/vetements/pantalon_resize.png'

    },
      {
        id: 1,
        name : 'short pantalon',
        image : '../images/vetements/short_resize.png'
      }
    ];
    return {
      all: function() {
        return bas;
      },
      get: function(basID) {
        for (var i = 0; i < bas.length; i++) {
          if (bas[i].id === parseInt(basID)) {
            return bas[i];
          }
        }
      }
    };

  })
;
