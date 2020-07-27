import {InvertedRegionHelper} from '@/inverted/InvertedRegionHelper';

export class InvertedStaticMapDungeonsDW {
  pod = {x:1438, y:603, title:'Palace of Darkness', boss:'Helmasaur King',
    validate(items, dungeons){
      return InvertedRegionHelper.northEastDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.hammer && items.bow > 0 && items.lantern && InvertedRegionHelper.northEastDW(items, dungeons);
    },
    req:[],
    reqBoss:[]
  }; // palace of darkness
  sp = {x:703, y:1402, title:'Swamp Palace', boss:'Arrghus',
    validate(items, dungeons){
      return items.flippers && items.moonpearl && items.mirror && InvertedRegionHelper.southDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.flippers && items.moonpearl && items.mirror && items.hookshot && items.hammer && InvertedRegionHelper.southDW(items, dungeons);
    },
    req:[],
    reqBoss:[]
  }; // swamp palace
  sw = {x:149, y:164, title:'Skull Woods', boss:'Mothula',
    validate(items, dungeons){
      return InvertedRegionHelper.northWestDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.firerod && InvertedRegionHelper.northWestDW(items, dungeons);
    },
    req:[],
    reqBoss:[]
  }; // skull woods
  tt = {x:190, y:717, title:'Thieves\' Town', boss:'Blind',
    validate(items, dungeons){
      return InvertedRegionHelper.northWestDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return InvertedRegionHelper.northWestDW(items, dungeons);
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
    req:[],
    reqBoss:[]
  }; // ice palace
  mm = {x:110, y:1247, title:'Misery Mire', boss:'Vitreous',
    validate(items, dungeons){
      return InvertedRegionHelper.mm(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.redcane && items.lantern && InvertedRegionHelper.mm(items, dungeons);
    },
    req:[],
    reqBoss:[]
  }; // misery mire
  tr = {x:1411, y:90, title:'Turtle Rock', boss:'Trinexx',
    validate(items, dungeons){
      return InvertedRegionHelper.tr(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.firerod && items.icerod && InvertedRegionHelper.tr(items, dungeons);
    },
    req:[],
    reqBoss:[]
  }; // turtle rock
  aga = {x:844, y:35, title:'Agahnim\'s Tower', boss:'Agahnim',
    validate(items, dungeons){
      return InvertedRegionHelper.deathMtnEastDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.lantern && (items.sword > 0 || items.net) && InvertedRegionHelper.deathMtnEastDW(items, dungeons);
    },
    req:[],
    reqBoss:[]
  };
}
