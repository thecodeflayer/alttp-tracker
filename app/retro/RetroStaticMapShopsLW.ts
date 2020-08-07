import {IStaticMapShopsLW} from '@/interfaces/IStaticMapShopsLW';
import {RetroRegionHelper} from '@/retro/RetroRegionHelper';

export class RetroStaticMapShopsLW implements IStaticMapShopsLW{
  lumberjackHouse = {x:503, y:94, title:'Lumberjack\'s House',
    takeAny: true, req:[], validate(items, dungeons): boolean{
      return RetroRegionHelper.northWestLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  lostWoodsGamble = {x:278, y:23, title:'Lost Woods Gamble',
    takeAny: true, req:[], validate(items, dungeons): boolean{
      return RetroRegionHelper.northWestLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  lwFortuneTeller = {x:281, y:485, title:'Fortune Teller',
    takeAny: true, req:[], validate(items, dungeons): boolean{
      return RetroRegionHelper.northWestLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  snitchLadyWest = {x:76, y:703, title:'Snitch Lady West',
    takeAny: true, req:[], validate(items, dungeons): boolean{
      return RetroRegionHelper.northWestLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  snitchLadyEast = {x:310, y:727, title:'Snitch Lady East',
    takeAny: true, req:[], validate(items, dungeons): boolean{
      return RetroRegionHelper.northWestLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  bushCoveredHouse = {x:305, y:802, title:'Bush Covered House',
    takeAny: true, req:[], validate(items, dungeons): boolean{
      return RetroRegionHelper.northWestLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  bombHut ={x:41, y:897, title:'Bomb Hut',
    takeAny: true, req:[['items/bombs1']], validate(items, dungeons): boolean{
      return items.bombs && RetroRegionHelper.northWestLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  kakarikoGambleGame = {x:322, y:1054, title:'Kakariko Gamble Game',
    takeAny: true, req:[], validate(items, dungeons): boolean{
      return RetroRegionHelper.northWestLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  lwBonkFairy = {x:710, y:979, title:'Bonk Fairy',
    takeAny: true, req:[['items/bombs1']], validate(items, dungeons): boolean{
      return items.boots && RetroRegionHelper.southLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  desertFairy = {x:416, y:1340, title:'Desert Fairy',
    takeAny: true, req:[], validate(items, dungeons): boolean{
      return RetroRegionHelper.southLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  fiftyRupeeCave = {x:468, y:1434, title:'50 Rupee Cave',
    takeAny: true, req:[['items/glove1']], validate(items, dungeons): boolean{
      return items.glove > 0 && RetroRegionHelper.southLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  lwHypeFairy = {x:896, y:1172, title:'Hype Fairy',
    takeAny: true, req:[['items/bombs1']], validate(items, dungeons): boolean{
      return items.bombs && RetroRegionHelper.southLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  lwLakeHyliaFortuneTeller = {x:973, y:1206, title:'Lake Hylia Fortune Teller',
    takeAny: true, req:[], validate(items, dungeons): boolean{
      return RetroRegionHelper.southLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  lwLakeHyliaFairy = {x:1236, y:972, title:'Lake Hylia Fairy',
    takeAny: true, req:[], validate(items, dungeons): boolean{
      return RetroRegionHelper.northEastLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  longFairyCave = {x:1471, y:1053, title:'Long Fairy Cave',
    takeAny: true, req:[], validate(items, dungeons): boolean{
      return RetroRegionHelper.northEastLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  goodBeeCave = {x:1371, y:1160, title:'Good Bee Cave',
    takeAny: true, req:[], validate(items, dungeons): boolean{
      return RetroRegionHelper.southLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  twentyRupeeCave = {x:1353, y:1177, title:'20 Rupee Cave',
    takeAny: true, req:[['items/glove1']], validate(items, dungeons): boolean{
      return items.glove > 0 && RetroRegionHelper.southLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  capacityUpgrade = {x:1189, y:1282, title:'Capacity Upgrade',
    takeAny: true, req:[['items/flippers1']], validate(items, dungeons): boolean{
      return items.flippers && RetroRegionHelper.southLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }}
  hookshotFairy = {x:1266, y:221, title:'Hookshot Fairy',
    takeAny: true, req:[[RetroRegionHelper.reqDeathMtnEastLW]], validate(items, dungeons): boolean{
      return RetroRegionHelper.deathMtnEastLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};

  // shops
  kakarikoShop = {x:164, y:878, title:'Kakariko Shop',
    takeAny: false, req:[],
    validate(items, dungeons): boolean{
      return RetroRegionHelper.northWestLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  lwLakeHyliaShop = {x:1090, y:1153, title:'Lake Hylia Shop',
    takeAny: false, req:[],
    validate(items, dungeons): boolean{
      return RetroRegionHelper.southLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  lwDeathMtnShop = {x:1283, y:221, title:'Death Mountain Shop',
    takeAny: false, req:[['items/bombs1', RetroRegionHelper.reqDeathMtnEastLW]],
    validate(items, dungeons): boolean{
      return items.bombs && RetroRegionHelper.deathMtnEastLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
}
