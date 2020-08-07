import {IStaticMapShopsDW} from '@/interfaces/IStaticMapShopsDW';
import {RetroRegionHelper} from '@/retro/RetroRegionHelper';

export class RetroStaticMapShopsDW implements IStaticMapShopsDW{
  dwFortuneTeller = {x:281, y:487, title:'Fortune Teller',
    takeAny: true, req:[[RetroRegionHelper.reqNorthWestDW]], validate(items, dungeons): boolean{
      return RetroRegionHelper.northWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  archeryGame = {x:322, y:1055, title:'Archery Game',
    takeAny: true, req:[[RetroRegionHelper.reqNorthWestDW]], validate(items, dungeons): boolean{
      return RetroRegionHelper.northWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  dwSanctuaryHint = {x:692, y:416, title:'Dark Sanctuary Hint',
    takeAny: true, req:[[RetroRegionHelper.reqNorthWestDW]], validate(items, dungeons): boolean{
      return RetroRegionHelper.northWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  dwBonkFairy = {x:709, y:977, title:'Dark Bonk Fairy',
    takeAny: true, req:[['items/boots1', 'items/moonpearl1', RetroRegionHelper.reqSouthDW]], validate(items, dungeons): boolean{
      return items.boots && items.moonpearl && RetroRegionHelper.southDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  dwDesertFairy = {x:164, y:1202, title:'Mire Fairy',
    takeAny: true, req:[['items/moonpearl1', RetroRegionHelper.reqMireDW]], validate(items, dungeons): boolean{
      return items.moonpearl && RetroRegionHelper.mireDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  dwDesertHint = {x:298, y:1241, title:'Mire Hint',
    takeAny: true, req:[['items/moonpearl1', RetroRegionHelper.reqMireDW]], validate(items, dungeons): boolean{
      return items.moonpearl && RetroRegionHelper.mireDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  dwLakeHyliaFairy = {x:1236, y:972, title:'Dark Lake Hylia Fairy',
    takeAny: true, req:[[RetroRegionHelper.reqNorthEastDW]], validate(items, dungeons): boolean{
      return RetroRegionHelper.northEastDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  podHint = {x:1274, y:758, title:'Palace of Darkness Hint',
    takeAny: true, req:[['items/moonpearl1', RetroRegionHelper.reqNorthEastDW]], validate(items, dungeons): boolean{
      return items.moonpearl && RetroRegionHelper.northEastDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  dwEastHint = {x:1470, y:1054, title:'East Dark World Hint',
    takeAny: true, req:[['items/moonpearl1', RetroRegionHelper.reqNorthEastDW]], validate(items, dungeons): boolean{
      return items.moonpearl && RetroRegionHelper.northEastDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  dwLakeLedgeFairy = {x:1342, y:1158, title:'Lake Hylia Ledge Fairy',
    takeAny: true, req:[
      ['items/moonpearl1', 'items/flippers1', 'items/bombs1', RetroRegionHelper.reqSouthDW],
      ['items/moonpearl1', 'items/flippers1', 'items/boots1', RetroRegionHelper.reqSouthDW]
    ], validate(items, dungeons): boolean{
      return items.moonpearl && items.flippers && (items.bombs || items.boots) && RetroRegionHelper.southDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  dwLakeLedgeSpikeCave = {x:1371, y:1158, title:'Lake Hylia Ledge Spike Cave',
    takeAny: true, req:[['items/moonpearl1', 'items/flippers1', RetroRegionHelper.reqSouthDW]], validate(items, dungeons): boolean{
      return items.moonpearl && items.flippers && RetroRegionHelper.southDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  dwLakeLedgeHint = {x:1353, y:1178, title:'Laky Hylia Ledge Hint',
    takeAny: true, req:[['items/moonpearl1', 'items/flippers1', RetroRegionHelper.reqSouthDW]], validate(items, dungeons): boolean{
      return items.moonpearl && items.flippers && RetroRegionHelper.southDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  dwDeathMtnFairy = {x:609, y:287, title:'Dark Death Mountain Fairy',
    takeAny: true, req:[['items/moonpearl1', RetroRegionHelper.reqDeathMtnWestLW]], validate(items, dungeons): boolean{
      return items.moonpearl && RetroRegionHelper.deathMtnWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  //shops
  dwPotionShop = {x:1207, y:509, title:'Dark Potion Shop',
    takeAny: false, req:[
      ['items/hammer1', RetroRegionHelper.reqNorthEastDW],
      ['items/flippers1', RetroRegionHelper.reqNorthEastDW],
      ['items/glove1', RetroRegionHelper.reqNorthEastDW],
    ], validate(items, dungeons): boolean{
      return (items.hammer || items.flippers || items.glove > 0) && RetroRegionHelper.northEastDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  dwForestShop = {x:498, y:691, title:'Red Shield Shop',
    takeAny: false, req:[[RetroRegionHelper.reqNorthWestDW]], validate(items, dungeons): boolean{
      return RetroRegionHelper.northWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  dwLumberjackHutShop = {x:504, y:88, title:'Lumberjack Hut',
    takeAny: false, req:[[RetroRegionHelper.reqNorthWestDW]], validate(items, dungeons): boolean{
      return RetroRegionHelper.northWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  dwLakeHyliaShop = {x:972, y:1207, title:'Dark Lake Hylia Shop',
    takeAny: false, req:[[RetroRegionHelper.reqSouthDW]], validate(items, dungeons): boolean{
      return RetroRegionHelper.southDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  dwOutcastShop = {x:304, y:802, title:'Outcast Shop',
    takeAny: false, req:[['items/hammer1', 'items/moonpearl1', RetroRegionHelper.reqNorthWestDW]], validate(items, dungeons): boolean{
      return items.hammer && items.moonpearl && RetroRegionHelper.northWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  dwDeathMtnShop = {x:1266, y:222, title:'Dark Death Mountain Shop',
    takeAny: false, req:[['items/moonpearl1', RetroRegionHelper.reqDeathMtnEastLW]], validate(items, dungeons): boolean{
      return items.moonpearl && RetroRegionHelper.deathMtnEastLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
}
