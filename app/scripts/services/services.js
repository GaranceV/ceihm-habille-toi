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
  .factory('Mannequins', function () {
    var self = this;
    self.mannequins = [{"id":0,"name":"Un homme","image":"../images/mannequins/corpsHomme.png","teteimage":"../images/mannequins/homme_tete.png"},{"id":1,"name":"Une femme","image":"../images/mannequins/naked.png","teteimage":"../images/mannequins/femme_tete.png","ident":"naked"},{"id":2,"name":"femme","image":"../images/mannequins/bra.png","ident":"bra"},{"id":3,"name":"femme","image":"../images/mannequins/panties.png","ident":"panties"},{"id":4,"name":"femme","image":"../images/mannequins/brapanties.png","ident":"brapanties"},{"id":5,"name":"femme","image":"../images/mannequins/socks.png","ident":"socks"},{"id":6,"name":"femme","image":"../images/mannequins/brasocks.png","ident":"brasocks"},{"id":7,"name":"femme","image":"../images/mannequins/sockspanties.png","ident":"sockspanties"},{"id":8,"name":"femme","image":"../images/mannequins/underwear.png","ident":"underwear"},{"id":9,"name":"femme","image":"../images/mannequins/brashirt.png","ident":"brashirt"},{"id":10,"name":"femme","image":"../images/mannequins/brapantiesshirt.png","ident":"brapantiesshirt"},{"id":11,"name":"femme","image":"../images/mannequins/brasocksshirt.png","ident":"brasocksshirt"},{"id":12,"name":"femme","image":"../images/mannequins/underwearshirt.png","ident":"underwearshirt"},{"id":13,"name":"femme","image":"../images/mannequins/brashirtpullover.png","ident":"brashirtpullover"},{"id":14,"name":"femme","image":"../images/mannequins/brapantiesshirtpullover.png","ident":"brapantiesshirtpullover"},{"id":15,"name":"femme","image":"../images/mannequins/brasocksshirtpullover.png","ident":"brasocksshirtpullover"},{"id":16,"name":"femme","image":"../images/mannequins/underwearshirtpullover.png","ident":"underwearshirtpullover"},{"id":17,"name":"femme","image":"../images/mannequins/pantiespants.png","ident":"pantiespants"},{"id":18,"name":"femme","image":"../images/mannequins/sockspantiespants.png","ident":"sockspantiespants"},{"id":19,"name":"femme","image":"../images/mannequins/brapantiespants.png","ident":"brapantiespants"},{"id":20,"name":"femme","image":"../images/mannequins/underwearpants.png","ident":"underwearpants"},{"id":21,"name":"femme","image":"../images/mannequins/brapantiesshirtpants.png","ident":"brapantiesshirt"},{"id":22,"name":"femme","image":"../images/mannequins/underwearshirtpants.png","ident":"underwearshirtpants"},{"id":23,"name":"femme","image":"../images/mannequins/brapantiesshirtpulloverpants.png","ident":"brapantiesshirtpulloverpants"},{"id":24,"name":"femme","image":"../images/mannequins/underwearshirtpulloverpants.png","ident":"underwearshirtpulloverpants"},{"id":25,"name":"femme","image":"../images/mannequins/sockspantiespantsshoes.png","ident":"sockspantiespantsshoes"},{"id":26,"name":"femme","image":"../images/mannequins/underwearpantsshoes.png","ident":"underwearpantsshoes"},{"id":27,"name":"femme","image":"../images/mannequins/underwearshirtpantsshoes.png","ident":"underwearshirtpantsshoes"},{"id":28,"name":"femme","image":"../images/mannequins/underwearshirtpulloverpantsshoes.png","ident":"underwearshirtpulloverpantsshoes"},{"id":33,"name":"femme","image":"../images/mannequins/underwearshirtpulloverpantsjacket.png","ident":"underwearshirtpulloverpantsjacket"},{"id":34,"name":"femme","image":"../images/mannequins/underwearshirtpulloverpantsshoesjacket.png","ident":"underwearshirtpulloverpantsshoesjacket"},{"id":35,"name":"femme","image":"../images/mannequins/brashirtscarf.png","ident":"brashirtscarf"},{"id":36,"name":"femme","image":"../images/mannequins/brapantiesshirtscarf.png","ident":"brapantiesshirtscarf"},{"id":37,"name":"femme","image":"../images/mannequins/brasocksshirtscarf.png","ident":"brasocksshirtscarf"},{"id":38,"name":"femme","image":"../images/mannequins/underwearshirtscarf.png","ident":"underwearshirtscarf"},{"id":39,"name":"femme","image":"../images/mannequins/brashirtpulloverscarf.png","ident":"brashirtpulloverscarf"},{"id":40,"name":"femme","image":"../images/mannequins/brapantiesshirtpulloverscarf.png","ident":"brapantiesshirtpulloverscarf"},{"id":41,"name":"femme","image":"../images/mannequins/brasocksshirtpulloverscarf.png","ident":"brasocksshirtpulloverscarf"},{"id":43,"name":"femme","image":"../images/mannequins/brashirtpulloverjacketscarf.png","ident":"brashirtpulloverjacketscarf"},{"id":44,"name":"femme","image":"../images/mannequins/brapantiesshirtpulloverjacketscarf.png","ident":"brapantiesshirtpulloverjacketscarf"},{"id":47,"name":"femme","image":"../images/mannequins/underwearshirtpulloverpantsjacketscarf.png","ident":"underwearshirtpulloverpantsjacketscarf"},{"id":48,"name":"femme","image":"../images/mannequins/underwearshirtpulloverpantsshoesjacketscarf.png","ident":"underwearshirtpulloverpantsshoesjacketscarf"},{"id":49,"name":"femme","image":"../images/mannequins/MANQUE.png","ident":"underwearshirtpantsshoesscarf"},{"id":50,"name":"femme","image":"../images/mannequins/underwearshirtpulloverpantsshoesscarf.png","ident":"underwearshirtpulloverpantsshoesscarf"},{"id":51,"name":"femme","image":"../images/mannequins/underwearshirtpulloverpantsshoesgloves.png","ident":"underwearshirtpulloverpantsshoesgloves"},{"id":52,"name":"femme","image":"../images/mannequins/underwearshirtpulloverpantsshoesjacketgloves.png","ident":"underwearshirtpulloverpantsshoesjacketgloves"},{"id":53,"name":"femme","image":"../images/mannequins/underwearshirtpulloverpantsshoesjacketscarfgloves.png","ident":"underwearshirtpulloverpantsshoesjacketscarfgloves"},{"id":53,"name":"femme","image":"../images/mannequins/brashirtscarfpullover.png","ident":"brashirtscarfpullover"},{"id":54,"name":"femme","image":"../images/mannequins/underwearshirtpantsshoes.png","ident":"underwearpantsshoesshirt"},{"id":55,"name":"femme","image":"../images/mannequins/sockspantiespantsbra.png","ident":"sockspantiespantsbra"},{"id":56,"name":"femme","image":"../images/mannequins/sockspantiespantsshoesshirt.png","ident":"sockspantiespantsshoesshirt"},{"id":57,"name":"femme","image":"../images/mannequins/brapantiesshirt.png","ident":"brashirtpanties"},{"id":58,"name":"femme","image":"../images/mannequins/brasocksshirt.png","ident":"brashirtsocks"},{"id":59,"name":"femme","image":"../images/mannequins/underwearshirtpulloverpantsshoes.png","ident":"underwearpantsshoesshirtpullover"},{"id":60,"name":"femme","image":"../images/mannequins/underwearshirtpulloverpantsshoesglovesscarf.png","ident":"underwearshirtpulloverpantsshoesglovesscarf"},{"id":61,"name":"femme","image":"../images/mannequins/underwearshirtpulloverpantsshoeshat.png","ident":"underwearshirtpulloverpantsshoeshat"},{"id":62,"name":"femme","image":"../images/mannequins/underwearshirtpulloverpantsshoeshatgloves.png","ident":"underwearshirtpulloverpantsshoeshatgloves"},{"id":63,"name":"femme","image":"../images/mannequins/underwearshirtpulloverpantsshoesjackethat.png","ident":"underwearshirtpulloverpantsshoesjackethat"},{"id":64,"name":"femme","image":"../images/mannequins/underwearshirtpulloverpantsshoesjackethatgloves.png","ident":"underwearshirtpulloverpantsshoesjackethatgloves"},{"id":65,"name":"femme","image":"../images/mannequins/underwearshirtpulloverpantsshoesjackethatscarf.png","ident":"underwearshirtpulloverpantsshoesjackethatscarf"},{"id":66,"name":"femme","image":"../images/mannequins/pantsall.png","ident":"pantsall"},{"id":67,"name":"femme","image":"../images/mannequins/tightspanties.png","ident":"tightspanties"},{"id":68,"name":"femme","image":"../images/mannequins/tights.png","ident":"tights"},{"id":69,"name":"femme","image":"../images/mannequins/tightsshirt.png","ident":"tightsshirt"},{"id":70,"name":"femme","image":"../images/mannequins/tightsshirtpullover.png","ident":"tightsshirtpullover"},{"id":71,"name":"femme","image":"../images/mannequins/tightsskirt.png","ident":"tightsskirt"},{"id":72,"name":"femme","image":"../images/mannequins/tightsskirtshirt.png","ident":"tightsskirtshirt"},{"id":73,"name":"femme","image":"../images/mannequins/tightsskirtshirtpullover.png","ident":"tightsskirtshirtpullover"},{"id":45,"name":"femme","image":"../images/mannequins/tightsskirtshirtshoes.png","ident":"tightsskirtshirtshoes"},{"id":46,"name":"femme","image":"../images/mannequins/tightsskirtshirtpullovershoes.png","ident":"tightsskirtshirtpullovershoes"},{"id":74,"name":"femme","image":"../images/mannequins/tightsskirtshirtpulloverjacketshoes.png","ident":"tightsskirtshirtpulloverjacketshoes"},{"id":75,"name":"femme","image":"../images/mannequins/tightsskirtshirtpulloverjacket.png","ident":"tightsskirtshirtpulloverjacket"},{"id":76,"name":"femme","image":"../images/mannequins/tightsskirtshirtpulloverjacketscarf.png","ident":"tightsskirtshirtpulloverjacketscarf"},{"id":77,"name":"femme","image":"../images/mannequins/tightsskirtshirtpulloverjacketshoesscarf.png","ident":"tightsskirtshirtpulloverjacketshoesscarf"},{"id":78,"name":"femme","image":"../images/mannequins/tightsskirtshirtpulloverjacketshoesgloves.png","ident":"tightsskirtshirtpulloverjacketshoesgloves"},{"id":79,"name":"femme","image":"../images/mannequins/tightsskirtshirtpulloverjacketshoeshat.png","ident":"tightsskirtshirtpulloverjacketshoeshat"},{"id":80,"name":"femme","image":"../images/mannequins/tightsskirtshirtpulloverjacketshoeshatgloves.png","ident":"tightsskirtshirtpulloverjacketshoeshatgloves"},{"id":81,"name":"femme","image":"../images/mannequins/tightsskirtshirtpulloverjacketshoeshatscarf.png","ident":"tightsskirtshirtpulloverjacketshoeshatscarf"},{"id":82,"name":"femme","image":"../images/mannequins/tightsskirtshirtpulloverjacketshoeshatglovesscarf.png","ident":"tightsskirtshirtpulloverjacketshoeshatglovesscarf"},{"id":83,"name":"femme","image":"../images/mannequins/tightsskirtshirtpulloverjacketshoesscarfgloves.png","ident":"tightsskirtshirtpulloverjacketshoesglovesscarf"},{"id":84,"name":"femme","image":"../images/mannequins/tightsskirtshirtpullovershoesgloves.png","ident":"tightsskirtshirtpullovershoesgloves"},{"id":85,"name":"femme","image":"../images/mannequins/tightsskirtshirtpullovershoeshat.png","ident":"tightsskirtshirtpullovershoeshat"},{"id":86,"name":"femme","image":"../images/mannequins/tightsskirtshirtpullovershoesscarf.png","ident":"tightsskirtshirtpullovershoesscarf"},{"id":87,"name":"femme","image":"../images/mannequins/tightsskirtshirtpullovershoesgloveshat.png","ident":"tightsskirtshirtpullovershoesgloveshat"},{"id":88,"name":"femme","image":"../images/mannequins/tightsskirtshirtpullovershoesgloveshatscarf.png","ident":"tightsskirtshirtpullovershoesgloveshatscarf"},{"id":89,"name":"femme","image":"../images/mannequins/tightsskirtshirtpullovershoeshatscarf.png","ident":"tightsskirtshirtpullovershoeshatscarf"},{"id":90,"name":"femme","image":"../images/mannequins/tightsskirtshirtpullovershoesglovesscarf.png","ident":"tightsskirtshirtpullovershoesglovesscarf"},{"id":91,"name":"femme","image":"../images/mannequins/tightsskirtshirtpullovershoes.png","ident":"tightsskirtshirtpullovershoes"},{"id":92,"name":"femme","image":"../images/mannequins/tightsskirtshirtpulloverjacketshoesglovesscarfhat.png","ident":"tightsskirtshirtpulloverjacketshoesglovesscarfhat"},{"id":93,"name":"femme","image":"../images/mannequins/tightsskirtshoes.png","ident":"tightsskirtshoes"},{"id":94,"name":"femme","image":"../images/mannequins/underwearshirtpulloverpantsshoesjacketscarfgloveshat.png","ident":"underwearshirtpulloverpantsshoesjacketscarfgloveshat"},{"id":95,"name":"femme","image":"../images/mannequins/tightspantiesskirt.png","ident":"tightspantiesskirt"},{"id":96,"name":"femme","image":"../images/mannequins/tightspantiesskirtshoes.png","ident":"tightspantiesskirtshoes"}];
    return {
      all: function () {
        return self.mannequins;
      },
      get: function (mannequinId) {
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
