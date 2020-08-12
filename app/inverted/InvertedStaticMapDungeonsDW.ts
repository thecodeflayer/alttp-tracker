import {InvertedRegionHelper} from '@/inverted/InvertedRegionHelper';

export class InvertedStaticMapDungeonsDW {
  pod = {x:1438, y:603, title:'Palace of Darkness', boss:'Helmasaur King',
    validate(items, dungeons){
      return InvertedRegionHelper.northEastDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.hammer && items.bow > 0 && items.lantern && InvertedRegionHelper.northEastDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances, settings){
      return true;
    },
    validateBossEntrance(items, dungeons, entrances, settings) {
      return true;
    },
    req:[[InvertedRegionHelper.reqNorthEastDW]],
    reqBoss:[['items/hammer1', 'items/bow1', 'items/lantern1', InvertedRegionHelper.reqNorthEastDW]]
  }; // palace of darkness
  sp = {x:703, y:1402, title:'Swamp Palace', boss:'Arrghus',
    validate(items, dungeons){
      return items.flippers && items.moonpearl && items.mirror && InvertedRegionHelper.southDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.flippers && items.moonpearl && items.mirror && items.hookshot && items.hammer && InvertedRegionHelper.southDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances, settings){
      return true;
    },
    validateBossEntrance(items, dungeons, entrances, settings) {
      return true;
    },
    req:[['items/flippers1', 'items/moonpearl1', 'items/mirror1']],
    reqBoss:[['items/flippers1', 'items/moonpearl1', 'items/mirror1', 'items/hookshot1', 'items/hammer1']]
  }; // swamp palace
  sw = {x:149, y:164, title:'Skull Woods', boss:'Mothula',
    validate(items, dungeons){
      return InvertedRegionHelper.northWestDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.firerod && InvertedRegionHelper.northWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances, settings){
      return true;
    },
    validateBossEntrance(items, dungeons, entrances, settings) {
      return true;
    },
    req:[],
    reqBoss:[['items/firerod1']]
  }; // skull woods
  tt = {x:190, y:717, title:'Thieves\' Town', boss:'Blind',
    validate(items, dungeons){
      return InvertedRegionHelper.northWestDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return InvertedRegionHelper.northWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances, settings){
      return true;
    },
    validateBossEntrance(items, dungeons, entrances, settings) {
      return true;
    },
    req:[],
    reqBoss:[]
  }; // thieves town
  ip = {x:1195, y:1294, title:'Ice Palace', boss:'Kholdstare',
    validate(items, dungeons){
      return (items.firerod || items.bombos) && items.flippers && InvertedRegionHelper.southDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.hammer && items.glove > 0 && (items.firerod || items.bombos) && items.flippers && InvertedRegionHelper.southDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances, settings){
      return true;
    },
    validateBossEntrance(items, dungeons, entrances, settings) {
      return true;
    },
    req:[
      ['items/flippers1', 'items/firerod1'],
      ['items/flippers1', 'items/bombos1']
    ],
    reqBoss:[
      ['items/flippers1', 'items/hammer1', 'items/glove1', 'items/firerod1'],
      ['items/flippers1', 'items/hammer1', 'items/glove1', 'items/bombos1']
    ]
  }; // ice palace
  mm = {x:110, y:1247, title:'Misery Mire', boss:'Vitreous',
    validate(items, dungeons){
      return InvertedRegionHelper.mm(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.redcane && items.lantern && InvertedRegionHelper.mm(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances, settings){
      return true;
    },
    validateBossEntrance(items, dungeons, entrances, settings) {
      return true;
    },
    req:[[InvertedRegionHelper.reqMm]],
    reqBoss:[['items/redcane1', 'items/lantern1', InvertedRegionHelper.reqMm]]
  }; // misery mire
  tr = {x:1411, y:90, title:'Turtle Rock', boss:'Trinexx',
    validate(items, dungeons){
      return InvertedRegionHelper.tr(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.firerod && items.icerod && InvertedRegionHelper.tr(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances, settings){
      return true;
    },
    validateBossEntrance(items, dungeons, entrances, settings) {
      return true;
    },
    req:[[InvertedRegionHelper.reqTr]],
    reqBoss:[['items/firerod1', 'items/icerod1', InvertedRegionHelper.reqTr]]
  }; // turtle rock
  aga = {x:844, y:35, title:'Agahnim\'s Tower', boss:'Agahnim',
    validate(items, dungeons){
      return InvertedRegionHelper.deathMtnEastDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.lantern && (items.sword > 0 || items.net) && InvertedRegionHelper.deathMtnEastDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances, settings){
      return true;
    },
    validateBossEntrance(items, dungeons, entrances, settings) {
      return true;
    },
    req:[[InvertedRegionHelper.reqDeathMtnEastDW]],
    reqBoss:[
      ['items/lantern1', InvertedRegionHelper.reqDeathMtnEastDW, 'items/sword1'],
      ['items/lantern1', InvertedRegionHelper.reqDeathMtnEastDW, 'items/net1'],
    ]
  };
}
