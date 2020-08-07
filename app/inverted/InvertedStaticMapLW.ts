import {InvertedRegionHelper} from '@/inverted/InvertedRegionHelper';

export class InvertedStaticMapLW {
  uncle = {x:894, y:624, title:'Inverted Uncle', itemCount: 1,
    req:[['items/moonpearl1', InvertedRegionHelper.reqNorthEastLW]], validate(items, dungeons) {
      return items.moonpearl && InvertedRegionHelper.northEastLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  secretPassage = {x:826, y:644, title:'Secret Passage', itemCount: 1,
    req:[['items/moonpearl1', InvertedRegionHelper.reqNorthEastLW]],  validate(items, dungeons) {
      return items.moonpearl && InvertedRegionHelper.northEastLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  backOfEscape = {x:778, y:439, title:'Escape',
    itemCount: 5, req:[['items/moonpearl1', 'items/glove1', InvertedRegionHelper.reqNorthEastLW]],
    validate(items, dungeons) {
      return InvertedRegionHelper.northEastLW(items, dungeons) && items.moonpearl && items.glove > 0;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  sahashralaHut = {x:1216, y:660, title:'Sahashrala\'s Hut', itemCount: 3,
    req: [['items/moonpearl1', 'items/bombs1', InvertedRegionHelper.reqNorthEastLW]],
    validate(items, dungeons) {
      return InvertedRegionHelper.northEastLW(items, dungeons) && items.moonpearl && items.bombs;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }
  };
  sahashrala = {x:1216, y:680, title:'Sahashrala', itemCount: 1,
    req: [['crystal-green', InvertedRegionHelper.reqNorthEastLW]],
    validate(items, dungeons) {
      let retval = false;
      const keys = Object.keys(dungeons);
      for(const key of keys) {
        if(dungeons[key].crystal === 1 && dungeons[key].boss === true){
          retval = true;
          break;
        }
      }
      return retval && InvertedRegionHelper.northEastLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }
  };
  potionShop = {x:1201, y:502, title:'Potion Shop', itemCount: 1,
    req:[[InvertedRegionHelper.reqNorthEastLW, 'items/mushroom1', 'items/moonpearl1']],
    validate(items, dungeons){
      return items.mushroom && InvertedRegionHelper.northEastLW(items, dungeons) && items.moonpearl;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  zora = {x:1457, y:187, title:'King Zora (500 Rupees)', itemCount: 1,
    req:[
      [InvertedRegionHelper.reqNorthEastLW, 'items/moonpearl1', 'items/glove1'],
      [InvertedRegionHelper.reqNorthEastLW, 'items/moonpearl1', 'items/flippers1'],
    ],
    validate(items, dungeons){
      return  InvertedRegionHelper.northEastLW(items, dungeons) && items.moonpearl
                && (items.glove > 0 || items.flippers);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }
  };
  zoraLedge = {x:1427, y:187, title:'Zora Ledge', itemCount: 1,
    req:[[InvertedRegionHelper.reqNorthEastLW, 'items/moonpearl1', 'items/flippers1']],
    validate(items, dungeons){
      return InvertedRegionHelper.northEastLW(items, dungeons) && items.moonpearl && items.flippers;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  waterfallFairy = {x:1350, y:208, title:'Waterfall Fairy', itemCount: 2,
    req:[[InvertedRegionHelper.reqNorthEastLW, 'items/moonpearl1', 'items/flippers1']],
    validate(items, dungeons){
      return InvertedRegionHelper.northEastLW(items, dungeons) && items.moonpearl && items.flippers;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  pedestal = {x:62, y:74, title:'Master Sword Pedestal', itemCount: 1,
    req:[['crystal-green', 'crystal-red', 'crystal-blue', InvertedRegionHelper.reqNorthWestLW]],
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
      return InvertedRegionHelper.northWestLW(items, dungeons) && rb === 2 && g;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  kingTomb = {x: 902, y: 444, title:'King\'s Tomb', itemCount: 1,
    req:[[InvertedRegionHelper.reqNorthWestLW, 'items/boots1', 'items/moonpearl1', 'items/glove2']],
    validate(items, dungeons){
      return InvertedRegionHelper.northWestLW(items, dungeons)
                && items.boots && items.moonpearl
                && items.glove === 2;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  tavern = {x: 240, y:850, title:'Kakariko Tavern', itemCount: 1,
    req:[['items/moonpearl1', InvertedRegionHelper.reqNorthWestLW]],
    validate(items, dungeons){
      return InvertedRegionHelper.northWestLW(items, dungeons) && items.moonpearl;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  chickenHut = {x: 146, y:814, title:'Chicken Hut', itemCount: 1,
    req:[[InvertedRegionHelper.reqNorthWestLW, 'items/moonpearl1', 'items/bombs1']],
    validate(items, dungeons){
      return InvertedRegionHelper.northWestLW(items, dungeons) && items.moonpearl && items.bombs;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  well = {x: 38, y:639, title:'Kakariko Well', itemCount: 5,
    req:[[InvertedRegionHelper.reqNorthWestLW, 'items/moonpearl1', 'items/bombs1']],
    validate(items, dungeons){
      return InvertedRegionHelper.northWestLW(items, dungeons) && items.moonpearl && items.bombs;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  blindhouse = {x: 193, y:632, title:'Blind\'s House', itemCount: 5,
    req:[[InvertedRegionHelper.reqNorthWestLW, 'items/moonpearl1', 'items/bombs1']],
    validate(items, dungeons){
      return InvertedRegionHelper.northWestLW(items, dungeons) && items.moonpearl && items.bombs;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  pegasusRock = {x:595, y:440, title:'Pegasus Rocks', itemCount: 1,
    req:[[InvertedRegionHelper.reqNorthWestLW, 'items/moonpearl1', 'items/boots1']],
    validate(items, dungeons){
      return InvertedRegionHelper.northWestLW(items, dungeons) && items.moonpearl && items.boots;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  bottleMerchant = {x:144, y:698, title:'Bottle Merchant (100 Rupees)', itemCount: 1,
    req:[[InvertedRegionHelper.reqNorthWestLW]], validate(items, dungeons){
      return InvertedRegionHelper.northWestLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  magicBat = {x:486, y:844, title:'Magic Bat', itemCount: 1,
    req:[[InvertedRegionHelper.reqNorthWestLW, 'items/moonpearl1', 'items/hammer1', 'items/powder1']],
    validate(items, dungeons){
      return InvertedRegionHelper.northWestLW(items, dungeons)
                && items.hammer && items.powder && items.moonpearl;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  sickKid = {x:234, y:807, title:'Sick Kid', itemCount: 1,
    req:[[InvertedRegionHelper.reqNorthWestLW, 'items/jar1']],
    validate(items, dungeons){
      return InvertedRegionHelper.northWestLW(items, dungeons) && items.jar > 0;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  lwHideout = {x:283, y:194, title:'Lost Woods Hideout', itemCount: 1,
    req:[[InvertedRegionHelper.reqNorthWestLW, 'items/moonpearl1']],
    validate(items, dungeons){
      return items.moonpearl && InvertedRegionHelper.northWestLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }
  };
  lumberjackTree = {x:450, y:110, title:'Lumberjack Tree', itemCount: 1,
    req:[[InvertedRegionHelper.reqNorthWestLW, 'items/moonpearl1', 'items/boots1', 'dungeons/aga_boss0']],
    validate(items, dungeons){
      return InvertedRegionHelper.northWestLW(items, dungeons) && dungeons.aga.boss && items.boots && items.moonpearl;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }
  };
  graveyardLedge = {x:855, y:416, title:'Graveyard Ledge', itemCount: 1,
    req:[[InvertedRegionHelper.reqNorthWestLW, 'items/moonpearl1', 'items/bombs1']],
    validate(items, dungeons){
      return items.moonpearl && items.bombs && InvertedRegionHelper.northWestLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  lwMushroom = {x:185, y:135, title:'Lost Woods Mushroom Location', itemCount: 1,
    req:[[InvertedRegionHelper.reqNorthWestLW, 'items/moonpearl1']],
    validate(items, dungeons){
      return InvertedRegionHelper.northWestLW(items, dungeons) && items.moonpearl;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }
  };
  floodChest = {x:703, y:1405, title:'Floodgate Chest', itemCount: 1,
    req:[[InvertedRegionHelper.reqSouthLW, 'items/moonpearl1']],
    validate(items, dungeons){
      return InvertedRegionHelper.southLW(items, dungeons) && items.moonpearl;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  floodTreasure = {x:677, y:1394, title:'Floodgate Sunken Treasure', itemCount: 1,
    req:[[InvertedRegionHelper.reqSouthLW, 'items/moonpearl1']], validate(items, dungeons){
      return InvertedRegionHelper.southLW(items, dungeons) && items.moonpearl;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  sanctuary = {x:691, y:410, title:'Sanctuary', itemCount: 1,
    req:[[InvertedRegionHelper.reqNorthEastLW, 'items/moonpearl1']], validate(items, dungeons){
      return items.moonpearl && InvertedRegionHelper.northEastLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  aginahCave = {x:298, y:1242, title:'Aginah Cave', itemCount: 1,
    req:[[InvertedRegionHelper.reqSouthLW, 'items/moonpearl1', 'items/bombs1']],
    validate(items, dungeons){
      return InvertedRegionHelper.southLW(items, dungeons) && items.moonpearl && items.bombs;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  moldormCave = {x:978, y:1412, title:'Mini-Moldorm Cave', itemCount: 5,
    req:[[InvertedRegionHelper.reqSouthLW, 'items/moonpearl1']],
    validate(items, dungeons){
      return InvertedRegionHelper.southLW(items, dungeons) && items.moonpearl;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  iceRodCave = {x:1342, y:1160, title:'Ice Rod Cave', itemCount: 1,
    req:[[InvertedRegionHelper.reqSouthLW, 'items/moonpearl1', 'items/bombs1']],
    validate(items, dungeons){
      return InvertedRegionHelper.southLW(items, dungeons) && items.moonpearl && items.bombs;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  hobo = {x:1059, y:1045, title:'Hobo Under the Bridge', itemCount: 1,
    req:[[InvertedRegionHelper.reqSouthLW, 'items/moonpearl1', 'items/flippers1']],
    validate(items, dungeons){
      return InvertedRegionHelper.southLW(items, dungeons) && items.moonpearl && items.flippers;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  bombosTablet = {x:328, y:1380, title:'Bombos Tablet', itemCount: 1,
    req:[[InvertedRegionHelper.reqSouthLW, 'items/book1', 'items/sword2']],
    validate(items, dungeons){
      return items.book && items.sword > 1 && InvertedRegionHelper.southLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  cave45 = {x:399, y:1242, title:'Cave 45', itemCount: 1,
    req:[[InvertedRegionHelper.reqSouthLW, 'items/moonpearl1']],
    validate(items, dungeons){
      return InvertedRegionHelper.southLW(items, dungeons) && items.moonpearl;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  checkerCave = {x:263, y:1165, title:'Checkerboard Cave', itemCount: 1,
    req:[[InvertedRegionHelper.reqSouthLW, 'items/moonpearl1', 'items/glove1']],
    validate(items, dungeons){
      return InvertedRegionHelper.southLW(items, dungeons) && items.moonpearl && items.glove>0;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  library = {x:243, y:990, title:'Library', itemCount: 1,
    req:[[InvertedRegionHelper.reqSouthLW, 'items/moonpearl1', 'items/boots1']],
    validate(items, dungeons){
      return InvertedRegionHelper.southLW(items, dungeons) && items.moonpearl && items.boots;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  mazeRace = {x:148, y:1080, title:'Maze Race', itemCount: 1,
    req:[[InvertedRegionHelper.reqSouthLW, 'items/moonpearl1', 'items/bombs1']],
    validate(items, dungeons){
      return InvertedRegionHelper.southLW(items, dungeons) && items.moonpearl && items.bombs;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  desertLedge = {x:38, y:1375, title:'Desert Ledge', itemCount: 1,
    req:[[InvertedRegionHelper.reqSouthLW, 'items/moonpearl1', 'items/book1']],
    validate(items, dungeons){
      return InvertedRegionHelper.southLW(items, dungeons) && items.moonpearl && items.book;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  lakeIsland = {x:1091, y:1244, title:'Lake Hylia Island', itemCount: 1,
    req:[[InvertedRegionHelper.reqSouthLW, 'items/moonpearl1', 'items/flippers1']],
    validate(items, dungeons){
      return InvertedRegionHelper.southLW(items, dungeons) && items.moonpearl && items.flippers;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  fluteSpot = {x:435, y:992, title:'Flute Spot', itemCount: 1,
    req:[[InvertedRegionHelper.reqSouthLW, 'items/moonpearl1', 'items/shovel1']],
    validate(items, dungeons){
      return InvertedRegionHelper.southLW(items, dungeons) && items.moonpearl && items.shovel;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  bumperCave = {x:532, y:268, title:'Bumper Cave', itemCount: 1,
    req:[[InvertedRegionHelper.reqNorthEastLW, 'items/moonpearl1', 'items/cape1', 'items/mirror1']],
    validate(items, dungeons){
      return items.cape && items.moonpearl && items.mirror && InvertedRegionHelper.northEastLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  spectacleRockCave = {x:732, y:220, title:'Spectacle Rock Cave', itemCount: 1,
    req:[[InvertedRegionHelper.reqDeathMtnWestLW]],
    validate(items, dungeons){
      return InvertedRegionHelper.deathMtnWestLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  etherTablet = {x:630, y:28, title:'Ether Tablet', itemCount: 1,
    req:[[InvertedRegionHelper.reqToh && 'items/book1','items/sword2', 'items/hammer1']],
    validate(items, dungeons){
      return items.moonpearl && InvertedRegionHelper.toh(items, dungeons)
            && items.book && items.sword > 1 && items.hammer;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  spectacleRock = {x:761, y:121, title:'Spectacle Rock', itemCount: 1,
    req:[[InvertedRegionHelper.reqDeathMtnEastLW, 'items/hammer1', 'items/moonpearl1']],
    validate(items, dungeons){
      return items.hammer && items.moonpearl && InvertedRegionHelper.deathMtnEastLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  spiralCave = {x:1195, y:140, title:'Spiral Cave', itemCount: 1,
    req:[[InvertedRegionHelper.reqDeathMtnEastLW, 'items/moonpearl1']],
    validate(items, dungeons){
      return items.moonpearl && InvertedRegionHelper.deathMtnEastLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  mimicCave = {x:1266, y:140, title:'Mimic Cave', itemCount: 1,
    req:[[InvertedRegionHelper.reqDeathMtnEastLW, 'items/hammer1', 'items/moonpearl1']],
    validate(items, dungeons){
      return items.hammer && items.moonpearl && InvertedRegionHelper.deathMtnEastLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  paradoxCave = {x:1283, y:222, title:'Paradox Cave', itemCount: 7,
    req:[[InvertedRegionHelper.reqDeathMtnEastLW, 'items/moonpearl1', 'items/bombs1']],
    validate(items, dungeons){
      return items.moonpearl && InvertedRegionHelper.deathMtnEastLW(items, dungeons)
            && items.bombs;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  floatingIsland = {x:1220, y:26, title:'Floating Island', itemCount: 1,
    req:[[InvertedRegionHelper.reqDeathMtnEastLW]],
    validate(items, dungeons){
      return InvertedRegionHelper.deathMtnEastLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
}
