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
    req:[],
    reqBoss:[]
  }; // palace of darkness
  sp = {x:703, y:1402, title:'Swamp Palace', boss:'Arrghus',
    validate(items, dungeons){
      return items.flippers && items.moonpearl && items.mirror && StandardRegionHelper.southDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.flippers && items.moonpearl && items.mirror && items.hookshot && items.hammer && StandardRegionHelper.southDW(items, dungeons);
    },
    req:[],
    reqBoss:[]
  }; // swamp palace
  sw = {x:149, y:164, title:'Skull Woods', boss:'Mothula',
    validate(items, dungeons){
      return items.moonpearl && StandardRegionHelper.northWestDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.moonpearl && items.firerod && StandardRegionHelper.northWestDW(items, dungeons);
    },
    req:[],
    reqBoss:[]
  }; // skull woods
  tt = {x:190, y:717, title:'Thieves\' Town', boss:'Blind',
    validate(items, dungeons){
      return items.moonpearl && StandardRegionHelper.northWestDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.moonpearl && StandardRegionHelper.northWestDW(items, dungeons);
    },
    req:[],
    reqBoss:[]
  }; // thieves town
  ip = {x:1195, y:1294, title:'Ice Palace', boss:'Kholdstare',
    validate(items, dungeons){
      return (items.firerod || items.bombos) && items.moonpearl && items.flippers && items.glove === 2 && StandardRegionHelper.southDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.hammer && items.glove === 2 && (items.firerod || items.bombos) && items.moonpearl && items.flippers && StandardRegionHelper.southDW(items, dungeons);
    },
    req:[],
    reqBoss:[]
  }; // ice palace
  mm = {x:110, y:1247, title:'Misery Mire', boss:'Vitreous',
    validate(items, dungeons){
      return StandardRegionHelper.mm(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.redcane && items.lantern && StandardRegionHelper.mm(items, dungeons);
    },
    req:[],
    reqBoss:[]
  }; // misery mire
  tr = {x:1411, y:90, title:'Turtle Rock', boss:'Trinexx',
    validate(items, dungeons){
      return StandardRegionHelper.tr(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.firerod && items.icerod && StandardRegionHelper.tr(items, dungeons);
    },
    req:[],
    reqBoss:[]
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
    req:[],
    reqBoss:[]
  };
}
