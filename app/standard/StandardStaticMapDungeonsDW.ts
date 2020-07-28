import {StandardRegionHelper} from '@/standard/StandardRegionHelper';

export class StandardStaticMapDungeonsDW {
  pod = {x:1438, y:603, title:'Palace of Darkness', boss:'Helmasaur King',
    validate(items, dungeons){
      return items.moonpearl && StandardRegionHelper.northEastDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.hammer && items.moonpearl && items.bow > 0
        && (items.lantern || items.firerod) && StandardRegionHelper.northEastDW(items, dungeons);
    },
    req:[['items/moonpearl1', StandardRegionHelper.reqNorthEastDW]],
    reqBoss:[
      ['items/hammer1', 'items/moonpearl1', 'items/bow1', StandardRegionHelper.reqNorthEastDW, 'items/lantern1'],
      ['items/hammer1', 'items/moonpearl1', 'items/bow1', StandardRegionHelper.reqNorthEastDW, 'items/firerod1']
    ]
  }; // palace of darkness
  sp = {x:703, y:1402, title:'Swamp Palace', boss:'Arrghus',
    validate(items, dungeons){
      return items.flippers && items.moonpearl && items.mirror && StandardRegionHelper.southDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.flippers && items.moonpearl && items.mirror && items.hookshot && items.hammer && StandardRegionHelper.southDW(items, dungeons);
    },
    req:[['items/flippers1', 'items/moonpearl1', 'items/mirror1', StandardRegionHelper.reqSouthDW]],
    reqBoss:[['items/flippers1', 'items/moonpearl1', 'items/mirror1', 'items/hookshot1', 'items/hammer1', StandardRegionHelper.reqSouthDW]]
  }; // swamp palace
  sw = {x:149, y:164, title:'Skull Woods', boss:'Mothula',
    validate(items, dungeons){
      return items.moonpearl && StandardRegionHelper.northWestDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.moonpearl && items.firerod && StandardRegionHelper.northWestDW(items, dungeons);
    },
    req:[['items/moonpearl1', StandardRegionHelper.reqNorthWestDW]],
    reqBoss:[['items/moonpearl1', 'items/firerod1', StandardRegionHelper.reqNorthWestDW]]
  }; // skull woods
  tt = {x:190, y:717, title:'Thieves\' Town', boss:'Blind',
    validate(items, dungeons){
      return items.moonpearl && StandardRegionHelper.northWestDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.moonpearl && StandardRegionHelper.northWestDW(items, dungeons);
    },
    req:[['items/moonpearl1', StandardRegionHelper.reqNorthWestDW]],
    reqBoss:[['items/moonpearl1', StandardRegionHelper.reqNorthWestDW]]
  }; // thieves town
  ip = {x:1195, y:1294, title:'Ice Palace', boss:'Kholdstare',
    validate(items, dungeons){
      return (items.firerod || items.bombos) && items.moonpearl && items.flippers && items.glove === 2 && StandardRegionHelper.southDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.hammer && items.glove === 2 && (items.firerod || items.bombos) && items.moonpearl && items.flippers && StandardRegionHelper.southDW(items, dungeons);
    },
    req:[
      ['items/moonpearl1', 'items/glove2', 'items/flippers1', StandardRegionHelper.reqSouthDW, 'items/firerod1'],
      ['items/moonpearl1', 'items/glove2', 'items/flippers1', StandardRegionHelper.reqSouthDW, 'items/bombos1']
    ],
    reqBoss:[
      ['items/moonpearl1', 'items/glove2', 'items/flippers1', StandardRegionHelper.reqSouthDW, 'items/firerod1', 'items/hammer1'],
      ['items/moonpearl1', 'items/glove2', 'items/flippers1', StandardRegionHelper.reqSouthDW, 'items/bombos1', 'items/hammer1'],
    ]
  }; // ice palace
  mm = {x:110, y:1247, title:'Misery Mire', boss:'Vitreous',
    validate(items, dungeons){
      return StandardRegionHelper.mm(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.redcane && items.lantern && StandardRegionHelper.mm(items, dungeons);
    },
    req:[[StandardRegionHelper.reqMm]],
    reqBoss:[['items/redcane1', 'items/lantern1', StandardRegionHelper.reqMm]]
  }; // misery mire
  tr = {x:1411, y:90, title:'Turtle Rock', boss:'Trinexx',
    validate(items, dungeons){
      return StandardRegionHelper.tr(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.firerod && items.icerod && StandardRegionHelper.tr(items, dungeons);
    },
    req:[[StandardRegionHelper.reqTr]],
    reqBoss:[['items/firerod1', 'items/icerod1', StandardRegionHelper.reqTr]]
  }; // turtle rock
  gt = {x:844, y:35, title:'Ganon\'s Tower', boss:'Agahnim II',
    validate(items, dungeons, settings){
      return StandardRegionHelper.gt(items, dungeons, settings);
    },
    validateBoss(items, dungeons, settings){
      return (items.sword > 0 || items.net) && items.bow > 0
        && (items.lantern || items.firerod) && items.hookshot
        && StandardRegionHelper.gt(items, dungeons, settings);
    },
    req:[[StandardRegionHelper.reqGt]],
    reqBoss:[
      ['items/bow1', 'items/hookshot1', StandardRegionHelper.reqGt, 'items/sword1', 'items/lantern1'],
      ['items/bow1', 'items/hookshot1', StandardRegionHelper.reqGt, 'items/sword1', 'items/firerod1'],
      ['items/bow1', 'items/hookshot1', StandardRegionHelper.reqGt, 'items/net1', 'items/lantern1'],
      ['items/bow1', 'items/hookshot1', StandardRegionHelper.reqGt, 'items/net1', 'items/firerod1']
    ]
  };
}
