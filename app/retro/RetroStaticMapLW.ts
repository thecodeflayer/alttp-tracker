import {RetroRegionHelper} from '@/retro/RetroRegionHelper';
import {StandardStaticMapLW} from '@/standard/StandardStaticMapLW';

export class RetroStaticMapLW extends StandardStaticMapLW{
  uncle  = {x:894, y:624, title:'Uncle', itemCount: 1, req:[], validate(items, dungeons) {
    return true;
  }};
  secretPassage = {x:826, y:644, title:'Secret Passage', itemCount: 1, req:[],  validate(items, dungeons) {
    return true;
  }};
  backOfEscape = {x:778, y:439, title:'Escape',
    itemCount: 6, req:['items/glove1'],
    validate(items, dungeons) {
      return items.glove > 0;
    }};
  sahashralaHut = {x:1216, y:660, title:'Sahashrala\'s Hut', itemCount: 3,
    req: ['items/bombs1'],
    validate(items, dungeons) {
      return items.bombs;
    }
  };
  sahashrala = {x:1216, y:680, title:'Sahashrala', itemCount: 1,
    req: ['crystal-green'],
    validate(items, dungeons) {
      let retval = false;
      const keys = Object.keys(dungeons);
      for(const key of keys) {
        if(dungeons[key].crystal === 1 && dungeons[key].boss === true){
          retval = true;
          break;
        }
      }
      return retval;
    }
  };
  potionShop = {x:1201, y:502, title:'Potion Shop', itemCount: 1,
    req:['items/mushroom1'],
    validate(items){
      return items.mushroom;
    }};
  zora = {x:1457, y:187, title:'King Zora (500 Rupees)', itemCount: 1,
    req:['items/glove1', 'or', 'items/flippers1'],
    validate(items){
      return items.glove > 0 || items.flippers;
    }
  };
  zoraLedge = {x:1427, y:187, title:'Zora Ledge', itemCount: 1,
    req:['items/flippers1'],
    validate(items){
      return items.flippers;
    }};
  waterfallFairy = {x:1350, y:208, title:'Waterfall Fairy', itemCount: 2,
    req:['items/flippers1'],
    validate(items){
      return items.flippers;
    }};
  pedestal = {x:62, y:74, title:'Master Sword Pedestal', itemCount: 1,
    req:['crystal-green', 'crystal-blue', 'crystal-red'],
    validate(items, dungeons){
      let rb = 0;
      let g = false;
      const keys = Object.keys(dungeons);
      for(const key of keys) {
        if(dungeons[key].crystal === 1 && dungeons[key].boss === true){
          g = true;
        } else if(dungeons[key].crystal === 2 && dungeons[key].boss === true) {
          rb = rb + 1;
        }
      }
      return rb === 2 && g;
    }};
  kingTomb = {x: 902, y: 444, title:'King\'s Tomb', itemCount: 1,
    req:[],
    validate(items, dungeons){
      return items.boots
                && (items.glove === 2
                || (items.mirror && RetroRegionHelper.northWestDW(items, dungeons)) && items.moonpearl);
    }};
  tavern = {x: 240, y:850, title:'Kakariko Tavern', itemCount: 1, req:[], validate(){
    return true;
  }};
  chickenHut = {x: 146, y:814, title:'Chicken Hut', itemCount: 1,
    req:['items/bombs1'], validate(items){
      return items.bombs;
    }};
  well = {x: 38, y:639, title:'Kakariko Well', itemCount: 5,
    req:['items/bombs1'], validate(items){
      return items.bombs;
    }};
  blindhouse = {x: 193, y:632, title:'Blind\'s House', itemCount: 5,
    req:['items/bombs1'], validate(items){
      return items.bombs;
    }};
  pegasusRock = {x:595, y:440, title:'Pegasus Rocks', itemCount: 1,
    req:['items/boots1'], validate(items){
      return items.boots;
    }};
  bottleMerchant = {x:144, y:698, title:'Bottle Merchant (100 Rupees)', itemCount: 1, req:[], validate(){
    return true;
  }};
  magicBat = {x:486, y:844, title:'Magic Bat', itemCount: 1,
    req:['items/powder1', 'items/hammer1', 'or',
      'items/powder1', 'items/moonpearl1', 'dungeons/aga_boss0', 'items/hookshot1', 'items/flippers1', 'items/glove2'],
    validate(items, dungeons){
      return items.powder
                && (items.hammer
                    || (items.mirror && items.moonpearl
                        && (items.glove === 2 && RetroRegionHelper.northWestDW(items, dungeons))));
    }};
  sickKid = {x:234, y:807, title:'Sick Kid', itemCount: 1,
    req:['items/jar1'], validate(items){
      return items.jar > 0;
    }};
  lwHideout = {x:283, y:194, title:'Lost Woods Hideout', itemCount: 1, req:[], validate(){
    return true;
  }};
  lumberjackTree = {x:450, y:110, title:'Lumberjack Tree', itemCount: 1,
    req:['dungeons/aga_boss0', 'items/boots1'], validate(items, dungeons){
      return dungeons.aga.boss && items.boots;
    }};
  graveyardLedge = {x:855, y:416, title:'Graveyard Ledge', itemCount: 1,
    req:['items/mirror1', 'items/moonpearl1', 'lp', 'dungeons/aga_boss0', 'items/hookshot1', 'items/flippers1', 'rp', 'or',
      'lp', 'items/hammer1', 'items/glove1', 'rp', 'or', 'items/glove2'],
    validate(items, dungeons){
      return items.mirror && items.moonpearl && RetroRegionHelper.northWestDW(items, dungeons);
    }};
  lwMushroom = {x:185, y:135, title:'Lost Woods Mushroom Location', itemCount: 1, req:[], validate(){
    return true;
  }};
  floodChest = {x:703, y:1405, title:'Floodgate Chest', itemCount: 1, req:[], validate(){
    return true;
  }};
  floodTreasure = {x:677, y:1394, title:'Floodgate Sunken Treasure', itemCount: 1, req:[], validate(){
    return true;
  }};
  linkHouse =  {x:820, y:1037, title:'Link\'s House', itemCount: 1, req:[], validate(){
    return true;
  }};
  sanctuary = {x:691, y:410, title:'Sanctuary', itemCount: 1, req:[], validate(){
    return true;
  }};
  aginahCave = {x:298, y:1242, title:'Aginah Cave', itemCount: 1,
    req:['items/bombs1'], validate(items){
      return items.bombs;
    }};
  moldormCave =  {x:978, y:1412, title:'Mini-Moldorm Cave', itemCount: 5,
    req:['items/bombs1'], validate(items){
      return items.bombs;
    }};
  iceRodCave = {x:1342, y:1160, title:'Ice Rod Cave', itemCount: 1,
    req:['items/bombs1'], validate(items){
      return items.bombs;
    }};
  hobo = {x:1059, y:1045, title:'Hobo Under the Bridge', itemCount: 1,
    req:['items/flippers1'], validate(items){
      return items.flippers;
    }};
  bombosTablet = {x:328, y:1380, title:'Bombos Tablet', itemCount: 1,
    req:['items/book1', 'items/sword2', 'items/mirror1', 'items/moonpearl1',
      'lp', 'dungeons/aga_boss0', 'items/hookshot1', 'items/flippers1',
      'rp', 'or',
      'lp', 'items/hammer1', 'items/glove1', 'rp'],
    validate(items, dungeons){
      return items.book && items.sword > 1 && items.mirror && RetroRegionHelper.southDW(items, dungeons);
    }};
  cave45 = {x:399, y:1242, title:'Cave 45', itemCount: 1,
    req:['items/mirror1', 'items/moonpearl1',
      'lp', 'dungeons/aga_boss0', 'items/hookshot1', 'items/flippers1',
      'rp', 'or',
      'lp', 'items/hammer1', 'items/glove1', 'rp'],
    validate(items, dungeons){
      return items.mirror && RetroRegionHelper.southDW(items, dungeons);
    }};
  checkerCave = {x:263, y:1165, title:'Checkerboard Cave', itemCount: 1,
    req:['items/mirror1', 'items/glove2', 'items/flute1'],
    validate(items, dungeons){
      return items.mirror && RetroRegionHelper.mireDW(items, dungeons);
    }};
  library = {x:243, y:990, title:'Library', itemCount: 1,
    req:['items/boots1'], validate(items){
      return items.boots;
    }};
  mazeRace = {x:148, y:1080, title:'Maze Race', itemCount: 1,
    req:['items/bombs1'], validate(items){
      return items.bombs;
    }};
  desertLedge = {x:38, y:1375, title:'Desert Ledge', itemCount: 1,
    req:['items/book1', 'or', 'items/mirror1', 'items/glove2', 'items/flute1'],
    validate(items, dungeons){
      return RetroRegionHelper.dp(items, dungeons);
    }};
  lakeIsland = {x:1091, y:1244, title:'Lake Hylia Island', itemCount: 1,
    req:['items/mirror1', 'items/flippers1', 'items/moonpearl1', 'lp', 'dungeons/aga_boss0', 'rp',
      'or', 'lp', 'items/hammer1', 'items/glove1', 'rp'],
    validate(items, dungeons){
      return items.mirror && items.flippers && items.moonpearl && RetroRegionHelper.northEastDW(items, dungeons);
    }};
  fluteSpot = {x:435, y:992, title:'Flute Spot', itemCount: 1,
    req:['items/shovel1'], validate(items){
      return items.shovel;
    }};
  oldMan = {x:609, y:286, title:'Rescue Old Man', itemCount: 1,
    req:['items/lantern1', 'lp', 'items/flute1', 'or', 'items/glove1', 'rp'],
    validate(items, dungeons){
      return items.lantern && RetroRegionHelper.deathMtnWestLW(items, dungeons);
    }};
  spectacleRockCave = {x:732, y:220, title:'Spectacle Rock Cave', itemCount: 1,
    req:['items/flute1', 'or', 'items/glove1', 'items/lantern1'],
    validate(items, dungeons){
      return RetroRegionHelper.deathMtnWestLW(items, dungeons);
    }};
  etherTablet = {x:630, y:28, title:'Ether Tablet', itemCount: 1,
    req:['lp', 'items/mirror1', 'or', 'items/hookshot1', 'items/hammer1', 'rp', 'and', 'lp', 'items/flute1', 'or', 'items/glove1', 'items/lantern1', 'rp'],
    validate(items, dungeons){
      return items.book && items.sword > 1 && RetroRegionHelper.toh(items, dungeons);
    }};
  spectacleRock = {x:761, y:121, title:'Spectacle Rock', itemCount: 1,
    req:['items/mirror1', 'and', 'items/flute1', 'or', 'items/glove1', 'items/lantern1'],
    validate(items, dungeons){
      return items.mirror && RetroRegionHelper.deathMtnWestLW(items, dungeons);
    }};
  spiralCave = {x:1195, y:140, title:'Spiral Cave', itemCount: 1,
    req:['lp', 'items/hookshot1', 'or', 'items/hammer1', 'items/mirror1', 'rp',
      'and', 'lp', 'items/flute1', 'or', 'items/glove1', 'items/lantern1', 'rp'],
    validate(items, dungeons){
      return RetroRegionHelper.deathMtnEastLW(items, dungeons);
    }};
  mimicCave = {x:1266, y:140, title:'Mimic Cave', itemCount: 1,
    req:['dungeons/medallion0', 'items/moonpearl1', 'items/redcane1', 'items/hammer1', 'items/glove2',
      'lp', 'items/hookshot1', 'or', 'items/mirror1', 'rp',
      'lp', 'items/flute1', 'or', 'items/lantern1', 'rp'],
    validate(items, dungeons){
      return items.hammer && items.mirror && RetroRegionHelper.tr(items, dungeons);
    }};
  paradoxCave = {x:1283, y:222, title:'Paradox Cave', itemCount: 7,
    req:['lp', 'items/hookshot1', 'or', 'items/hammer1', 'items/mirror1', 'rp',
      'and', 'lp', 'items/flute1', 'or', 'items/glove1', 'items/lantern1', 'rp'],
    validate(items, dungeons){
      return RetroRegionHelper.deathMtnEastLW(items, dungeons);
    }};
  floatingIsland = {x:1220, y:26, title:'Floating Island', itemCount: 1,
    req:['items/mirror1', 'items/bombs1', 'items/glove1',
      'and', 'lp', 'items/hookshot1', 'or', 'items/hammer1', 'rp',
      'and', 'lp', 'items/flute1', 'or', 'items/lantern1', 'rp'],
    validate(items, dungeons){
      return items.mirror && items.bombs && items.glove > 0
            && RetroRegionHelper.deathMtnEastDW(items, dungeons);
    }}
}
