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
      name : 'Printemps',
      des: 'Il fait beau au printemps',
      image : '../images/saisons/printemps.png',
      bgimage: '../images/saisons/printemps-bg.jpg'
    },
      {
        id: 1,
        name: 'Eté',
        des: 'Il fait chaud en été',
        image: '../images/saisons/ete.png',
        bgimage: '../images/saisons/ete-bg.jpg'
      },
      {
        id: 2,
        name : 'Automne',
        des: 'Il fait frais en automne',
        image : '../images/saisons/automne.png',
        bgimage : '../images/saisons/automne-bg.jpg'
      },
      {
        id: 3,
        name: 'Hiver',
        des: 'Il fait froid en hiver',
        image: '../images/saisons/hiver.png',
        bgimage: '../images/saisons/hiver-bg.jpg'
      }
    ];

    return {
      all: function () {
        return saisons;
      },
      get: function (saisonId) {
        for (var i = 0; i < saisons.length; i++) {
          if (saisons[i].id === parseInt(saisonId)) {
            return saisons[i];
          }
        }
      }
    };

  })
  .factory('Mannequins', function ($http) {
    //var jsonAddress = "../images/dummy.json";
    var self = this;
    self.mannequins = [];
    return {
      all: function () {
        var promiseDummy = $http.get('../images/dummy.json');
        promiseDummy.then(function (dummies) {
          console.log('in the promise result');
          self.mannequins = dummies;
          return dummies;
        });
        console.log('promise dummy ?!');
        promiseDummy.then(function(result) {
          self.mannequins = result.data;
          console.log(self.mannequins);
        });
        return promiseDummy;
      },
      get: function (mannequinId) {
        console.log('you called get dummy');
        console.log(self.mannequins.length + ' size of mannequins');
        for (var i = 0; i < self.mannequins.length; i++) {
          if (self.mannequins[i].id === parseInt(mannequinId)) {
            return self.mannequins[i];
          }
        }
      },
      getIdent: function (mannequinIdent) {
        for (var i = 0; i < self.mannequins.length; i++) {
          if (self.mannequins[i].ident === mannequinIdent) {
            return self.mannequins[i];
          }
        }
      }
    };

  })
  .factory('Sousvetements', function () {
    var sousvetements = [{
      id: 0,
      name: 'soutien-gorge',
      image: '../images/vetements/bra.png',
      ident: 'bra'
    },
    {
      id: 2,
      name : 'maillot',
      image : '../images/vetements/maillot.png',
      ident: 'body'
    },
      {
        id: 3,
        name: 'chaussettes',
        image: '../images/vetements/chaussettes_armoire.png',
        ident: 'socks'
      },
      {
        id: 1,
        name: 'culotte',
        image: '../images/vetements/culotte.png',
        ident: 'panties'
      },
      {
        id: 4,
        name: 'collants',
        image: '../images/vetements/tightsbox.png',
        ident: 'tights'
      }
    ];
    return {
      all: function () {
        return sousvetements;
      },
      get: function (sousvetementId) {
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
      name: 'pull',
      image: '../images/vetements/pull4.png',
      ident:'pullover'

    },
      {
        id: 1,
        name: 'tunique',
        image: '../images/vetements/tunique_resize.png',
        ident:'shirt'
      }
    ];
    return {
      all: function () {
        return hauts;
      },
      get: function (hautId) {
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
        id: 2,
        name: 'pantalon best',
        image: '../images/vetements/pant3.png',
        ident: 'pants'
      },
      {
        id: 1,
        name: 'short pantalon',
        image: '../images/vetements/short_resize.png',
        ident: 'short'
      },
      {
        id: 3,
        name: 'jupe',
        image: '../images/vetements/jupe.png',
        ident: 'skirt'

      }
    ];
    return {
      all: function () {
        return bas;
      },
      get: function (basID) {
        for (var i = 0; i < bas.length; i++) {
          if (bas[i].id === parseInt(basID)) {
            return bas[i];
          }
        }
      }
    };

  })
  .factory('Vests', function () {
    var vests = [{
      id: 0,
      name: 'manteau',
      image: '../images/vetements/manteau_armoire.png',
      ident: 'jacket'
    },
      {
        id: 1,
        name: 'manteau court',
        image: '../images/vetements/manteaucourt.png',
        ident: 'shortCoat'
      },
      {
        id: 2,
        name: 'manteau noir',
        image: '../images/vetements/manteauNoir.png',
        ident: 'balckCoat'
      }
    ];
    return {
      all: function () {
        return vests;
      },
      get: function (vestId) {
        for (var i = 0; i < vests.length; i++) {
          if (vests[i].id === parseInt(vestId)) {
            return vests[i];
          }
        }
      }
    };
  })
  .factory('Chaussures', function () {
    var chaussures = [{
      id: 0,
      name: 'chaussure',
      image: '../images/vetements/chaussures_resize.png',
      ident: 'shoes'
    },
      {
        id: 1,
        name: 'chaussons',
        image: '../images/vetements/mule.png',
        ident: 'slippers'
      },
      {
        id: 2,
        name: 'sandales',
        image: '../images/vetements/sandales.png',
        ident: 'sandals'
      }
    ];
    return {
      all: function () {
        return chaussures;
      },
      get: function (chaussureId) {
        for (var i = 0; i < chaussures.length; i++) {
          if (chaussures[i].id === parseInt(chaussureId)) {
            return chaussures[i];
          }
        }
      }
    };
  })
  .factory('Accessoires', function () {
    var accessoires = [{
      id: 0,
      name: 'echarpe',
      image: '../images/vetements/scarf.png',
      ident: 'scarf'
    },
      {
        id: 1,
        name: 'gant',
        image: '../images/vetements/gant_droit.png',
        ident: 'gloves'
      },
      {
        id: 2,
        name: 'bonnet',
        image: '../images/vetements/bonnet_armoire.png',
        ident: 'hat'
      }
    ];
    return {
      all: function () {
        return accessoires;
      },
      get: function (accessoireId) {
        for (var i = 0; i < accessoires.length; i++) {
          if (accessoires[i].id === parseInt(accessoireId)) {
            return accessoires[i];
          }
        }
      }
    };
  })

;
