import {StandardRegionHelper} from '@/standard/StandardRegionHelper';

export class StandardStaticMapLW {
  uncle  = {x:894, y:624, title:'Uncle', itemCount: 1, req:[],
    validate(items, dungeons) {
      return true;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }
  };
  secretPassage = {x:826, y:644, title:'Secret Passage', itemCount: 1, req:[],
    validate(items, dungeons) {
      return true;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }
  };
  backOfEscape = {x:778, y:439, title:'Escape',
    itemCount: 5, req:[['items/glove1']],
    validate(items, dungeons) {
      return items.glove > 0;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  sahashralaHut = {x:1216, y:660, title:'Sahashrala\'s Hut', itemCount: 3,
    req: [['items/bombs1']],
    validate(items, dungeons) {
      return items.bombs;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }
  };
  sahashrala = {x:1216, y:680, title:'Sahashrala', itemCount: 1,
    req: [['crystal-green']],
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
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }
  };
  potionShop = {x:1201, y:502, title:'Potion Shop', itemCount: 1,
    req:[['items/mushroom1']],
    validate(items){
      return items.mushroom;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  zora = {x:1457, y:187, title:'King Zora (500 Rupees)', itemCount: 1,
    req:[['items/glove1'], ['items/flippers1']],
    validate(items){
      return items.glove > 0 || items.flippers;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }
  };
  zoraLedge = {x:1427, y:187, title:'Zora Ledge', itemCount: 1,
    req:[['items/flippers1']],
    validate(items){
      return items.flippers;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  waterfallFairy = {x:1350, y:208, title:'Waterfall Fairy', itemCount: 2,
    req:[['items/flippers1']],
    validate(items){
      return items.flippers;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  pedestal = {x:62, y:74, title:'Master Sword Pedestal', itemCount: 1,
    req:[['crystal-green', 'crystal-blue', 'crystal-red']],
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
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  kingTomb = {x: 902, y: 444, title:'King\'s Tomb', itemCount: 1,
    req:[
      ['items/boots1', 'items/glove2'],
      ['items/boots1', 'items/moonpearl1', StandardRegionHelper.reqNorthWestDW]
    ],
    validate(items, dungeons){
      return items.boots
                && (items.glove === 2
                || (items.mirror && StandardRegionHelper.northWestDW(items, dungeons)) && items.moonpearl);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  tavern = {x: 240, y:850, title:'Kakariko Tavern', itemCount: 1, req:[],
    validate(){
      return true;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }
  };
  chickenHut = {x: 146, y:814, title:'Chicken Hut', itemCount: 1,
    req:[['items/bombs1']],
    validate(items){
      return items.bombs;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  well = {x: 38, y:639, title:'Kakariko Well', itemCount: 5,
    req:[['items/bombs1']],
    validate(items){
      return items.bombs;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  blindhouse = {x: 193, y:632, title:'Blind\'s House', itemCount: 5,
    req:[['items/bombs1']], validate(items){
      return items.bombs;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  pegasusRock = {x:595, y:440, title:'Pegasus Rocks', itemCount: 1,
    req:[['items/boots1']], validate(items){
      return items.boots;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  bottleMerchant = {x:144, y:698, title:'Bottle Merchant (100 Rupees)', itemCount: 1, req:[],
    validate(){
      return true;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  magicBat = {x:486, y:844, title:'Magic Bat', itemCount: 1,
    req:[
      ['items/powder1', 'items/hammer1'],
      ['items/powder1', 'items/mirror1', 'items/moonpearl1', 'items/glove2', StandardRegionHelper.reqNorthWestDW]
    ],
    validate(items, dungeons){
      return items.powder &&
        (items.hammer
          || (items.mirror && items.moonpearl
                && (items.glove === 2 && StandardRegionHelper.northWestDW(items, dungeons))));
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  sickKid = {x:234, y:807, title:'Sick Kid', itemCount: 1,
    req:[['items/jar1']], validate(items){
      return items.jar > 0;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  lwHideout = {x:283, y:194, title:'Lost Woods Hideout', itemCount: 1, req:[],
    validate(){
      return true;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  lumberjackTree = {x:450, y:110, title:'Lumberjack Tree', itemCount: 1,
    req:[['dungeons/aga_boss0', 'items/boots1']],
    validate(items, dungeons){
      return dungeons.aga.boss && items.boots;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  graveyardLedge = {x:855, y:416, title:'Graveyard Ledge', itemCount: 1,
    req:[['items/mirror1', 'items/moonpearl1', StandardRegionHelper.reqNorthWestDW]],
    validate(items, dungeons){
      return items.mirror && items.moonpearl && StandardRegionHelper.northWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  lwMushroom = {x:185, y:135, title:'Lost Woods Mushroom Location', itemCount: 1, req:[],
    validate(){
      return true;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  floodChest = {x:703, y:1405, title:'Floodgate Chest', itemCount: 1, req:[],
    validate(){
      return true;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  floodTreasure = {x:677, y:1394, title:'Floodgate Sunken Treasure', itemCount: 1, req:[],
    validate(){
      return true;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  linkHouse =  {x:820, y:1037, title:'Link\'s House', itemCount: 1, req:[],
    validate(){
      return true;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  sanctuary = {x:691, y:410, title:'Sanctuary', itemCount: 1, req:[],
    validate(){
      return true;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  aginahCave = {x:298, y:1242, title:'Aginah Cave', itemCount: 1,
    req:[['items/bombs1']], validate(items){
      return items.bombs;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  moldormCave =  {x:978, y:1412, title:'Mini-Moldorm Cave', itemCount: 5,
    req:[['items/bombs1']], validate(items){
      return items.bombs;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  iceRodCave = {x:1342, y:1160, title:'Ice Rod Cave', itemCount: 1,
    req:[['items/bombs1']], validate(items){
      return items.bombs;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  hobo = {x:1059, y:1045, title:'Hobo Under the Bridge', itemCount: 1,
    req:[['items/flippers1']], validate(items){
      return items.flippers;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  bombosTablet = {x:328, y:1380, title:'Bombos Tablet', itemCount: 1,
    req:[['items/book1', 'items/sword2', 'items/mirror1', StandardRegionHelper.reqSouthDW]],
    validate(items, dungeons){
      return items.book && items.sword > 1 && items.mirror && StandardRegionHelper.southDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  cave45 = {x:399, y:1242, title:'Cave 45', itemCount: 1,
    req:[['items/mirror1', StandardRegionHelper.reqSouthDW]],
    validate(items, dungeons){
      return items.mirror && StandardRegionHelper.southDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  checkerCave = {x:263, y:1165, title:'Checkerboard Cave', itemCount: 1,
    req:[['items/mirror1', StandardRegionHelper.reqMireDW]],
    validate(items, dungeons){
      return items.mirror && StandardRegionHelper.mireDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  library = {x:243, y:990, title:'Library', itemCount: 1,
    req:[['items/boots1']], validate(items){
      return items.boots;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  mazeRace = {x:148, y:1080, title:'Maze Race', itemCount: 1,
    req:[['items/bombs1']], validate(items){
      return items.bombs;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  desertLedge = {x:38, y:1375, title:'Desert Ledge', itemCount: 1,
    req:[['items/book1', 'or', 'items/mirror1', 'items/glove2', 'items/flute1']],
    validate(items, dungeons){
      return StandardRegionHelper.dp(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  lakeIsland = {x:1091, y:1244, title:'Lake Hylia Island', itemCount: 1,
    req:[['items/mirror1', 'items/flippers1', 'items/moonpearl1', StandardRegionHelper.reqNorthEastDW]],
    validate(items, dungeons){
      return items.mirror && items.flippers && items.moonpearl && StandardRegionHelper.northEastDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  fluteSpot = {x:435, y:992, title:'Flute Spot', itemCount: 1,
    req:[['items/shovel1']], validate(items){
      return items.shovel;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  oldMan = {x:609, y:286, title:'Rescue Old Man', itemCount: 1,
    req:[['items/lantern1', StandardRegionHelper.reqDeathMtnWestLW]],
    validate(items, dungeons){
      return items.lantern && StandardRegionHelper.deathMtnWestLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  spectacleRockCave = {x:732, y:220, title:'Spectacle Rock Cave', itemCount: 1,
    req:[[StandardRegionHelper.reqDeathMtnWestLW]],
    validate(items, dungeons){
      return StandardRegionHelper.deathMtnWestLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  etherTablet = {x:630, y:28, title:'Ether Tablet', itemCount: 1,
    req:[['items/book1', 'items/sword2', StandardRegionHelper.reqToh]],
    validate(items, dungeons){
      return items.book && items.sword > 1 && StandardRegionHelper.toh(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  spectacleRock = {x:761, y:121, title:'Spectacle Rock', itemCount: 1,
    req:[['items/mirror1', StandardRegionHelper.reqDeathMtnWestLW]],
    validate(items, dungeons){
      return items.mirror && StandardRegionHelper.deathMtnWestLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  spiralCave = {x:1195, y:140, title:'Spiral Cave', itemCount: 1,
    req:[[StandardRegionHelper.reqDeathMtnEastLW]],
    validate(items, dungeons){
      return StandardRegionHelper.deathMtnEastLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  mimicCave = {x:1266, y:140, title:'Mimic Cave', itemCount: 1,
    req:[['items/hammer1', 'items/mirror1', StandardRegionHelper.reqTr]],
    validate(items, dungeons){
      return items.hammer && items.mirror && StandardRegionHelper.tr(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  paradoxCave = {x:1283, y:222, title:'Paradox Cave', itemCount: 7,
    req:[[StandardRegionHelper.reqDeathMtnEastLW]],
    validate(items, dungeons){
      return StandardRegionHelper.deathMtnEastLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  floatingIsland = {x:1220, y:26, title:'Floating Island', itemCount: 1,
    req:[['items/mirror1', 'items/bombs1', 'items/glove1', StandardRegionHelper.reqDeathMtnEastLW]],
    validate(items, dungeons){
      return items.mirror && items.bombs && items.glove > 0
            && StandardRegionHelper.deathMtnEastDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }}
}
