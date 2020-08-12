import {StandardRegionHelper} from '@/standard/StandardRegionHelper';

export class StandardStaticMapDW {
  superbunnyCave = {x: 1265, y: 223, title: 'Superbunny Cave', itemCount: 2,
    req:[['items/moonpearl1', StandardRegionHelper.reqDeathMtnEastLW]],
    validate(items, dungeons){
      return items.moonpearl && StandardRegionHelper.deathMtnEastDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  hookshotCave = {x: 1247, y: 99, title: 'Hookshot Cave', itemCount: 4,
    req:[
      ['items/hookshot1', 'items/moonpearl1', StandardRegionHelper.reqDeathMtnEastLW],
      ['items/boots1', 'items/moonpearl1', StandardRegionHelper.reqDeathMtnEastLW],
    ],
    validate(items, dungeons){
      return (items.hookshot || items.boots) && items.moonpearl && StandardRegionHelper.deathMtnEastDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  spikeCave = {x: 862, y: 221, title: 'Spike Cave', itemCount: 1,
    req:[
      ['items/jar1', 'items/hammer1', 'items/glove1', 'items/moonpearl1', 'items/cape1', StandardRegionHelper.reqDeathMtnWestLW],
      ['items/jar1', 'items/hammer1', 'items/glove1', 'items/moonpearl1', 'items/bluecane1', StandardRegionHelper.reqDeathMtnWestLW],
      ['items/halfmagic1', 'items/hammer1', 'items/glove1', 'items/moonpearl1', 'items/cape1', StandardRegionHelper.reqDeathMtnWestLW],
      ['items/halfmagic1', 'items/hammer1', 'items/glove1', 'items/moonpearl1', 'items/bluecane1', StandardRegionHelper.reqDeathMtnWestLW],
    ],
    validate(items, dungeons){
      return (items.jar > 0 || items.halfmagic) && items.hammer
        && items.glove>0 && items.moonpearl && (items.cape || items.bluecane)
        && StandardRegionHelper.deathMtnWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  catfish = {x: 1341, y: 257, title: 'Catfish', itemCount: 1,
    req:[['items/moonpearl1', 'items/glove1', StandardRegionHelper.reqNorthEastDW]],
    validate(items, dungeons){
      return items.moonpearl && items.glove > 0 && StandardRegionHelper.northEastDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  pyramid = {x: 870, y: 670, title: 'Pyramid', itemCount: 1,
    req:[[StandardRegionHelper.reqNorthEastDW]],
    validate(items, dungeons){
      return StandardRegionHelper.northEastDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  pyramidFairy = {x: 703, y: 733, title: 'Pyramid Fairy', itemCount: 2,
    req:[
      ['dungeons/crystal4~', 'dungeons/crystal4', StandardRegionHelper.reqSouthDW, 'items/mirror1', 'dungeons/aga_boss0'],
      ['dungeons/crystal4~', 'dungeons/crystal4', StandardRegionHelper.reqSouthDW, 'items/hammer1', 'items/moonpearl1']
    ],
    validate(items, dungeons){
      let c = 0;
      const keys = Object.keys(dungeons);
      for(const key of keys){
        if(dungeons[key].crystal === 4 && dungeons[key].boss) {
          c = c + 1;
        }
      }
      return c === 2 && StandardRegionHelper.southDW(items, dungeons)
            && ((items.hammer && items.moonpearl)
                || (items.mirror && dungeons.aga.boss));
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  brewery = {x: 163, y: 878, title: 'Brewery', itemCount: 1,
    req:[['items/bombs1', 'items/moonpearl1', StandardRegionHelper.reqNorthWestDW]],
    validate(items, dungeons){
      return items.bombs && items.moonpearl && StandardRegionHelper.northWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  cShapeHouse = {x: 310, y: 726, title: 'C-Shaped House', itemCount: 1,
    req:[['items/moonpearl1', StandardRegionHelper.reqNorthWestDW]],
    validate(items, dungeons){
      return items.moonpearl && StandardRegionHelper.northWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  chestGame = {x: 76, y: 702, title: 'Chest Game', itemCount: 1,
    req:[['items/moonpearl1', StandardRegionHelper.reqNorthWestDW]],
    validate(items, dungeons){
      return items.moonpearl && StandardRegionHelper.northWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  hammerPegs = {x: 474, y: 908, title: 'Hammer Pegs', itemCount: 1,
    req:[['items/moonpearl1', 'items/hammer1', 'items/glove2', StandardRegionHelper.reqNorthWestDW]],
    validate(items, dungeons){
      return items.moonpearl && items.hammer && items.glove === 2 && StandardRegionHelper.northWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  bumperCave = {x: 532, y: 268, title: '​Bumper Cave', itemCount: 1,
    req:[['items/moonpearl1', 'items/glove1', 'items/cape1', StandardRegionHelper.reqNorthWestDW]],
    validate(items, dungeons){
      return items.moonpearl && items.glove > 0 && items.cape
            &&StandardRegionHelper.northWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  blacksmith = {x: 223, y: 994, title: 'Blacksmith', itemCount: 1,
    req:[['items/moonpearl1', 'items/glove2', StandardRegionHelper.reqNorthWestDW]],
    validate(items, dungeons){
      return items.moonpearl && items.glove === 2
            && StandardRegionHelper.northWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  purpleChest = {x: 457, y: 802, title: 'Purple Chest', itemCount: 1,
    req:[['items/moonpearl1', 'items/glove2', StandardRegionHelper.reqNorthWestDW]],
    validate(items, dungeons){
      return items.moonpearl && items.glove === 2
            && StandardRegionHelper.northWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  hypeCave = {x: 896, y: 1168, title: 'Hype Cave', itemCount: 5,
    req:[['items/moonpearl1', 'items/bombs1', StandardRegionHelper.reqSouthDW]],
    validate(items, dungeons){
      return items.moonpearl && items.bombs && StandardRegionHelper.southDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  stumpy = {x: 463, y: 1024, title: 'Stumpy', itemCount: 1,
    req:[['items/moonpearl1', StandardRegionHelper.reqSouthDW]],
    validate(items, dungeons){
      return items.moonpearl && StandardRegionHelper.southDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  diggingGame = {x: 85, y: 1043, title: 'Digging Game', itemCount: 1,
    req:[['items/moonpearl1', StandardRegionHelper.reqSouthDW]],
    validate(items, dungeons){
      return items.moonpearl && StandardRegionHelper.southDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  mireShed = {x: 59, y: 1205, title: 'Mire Shed', itemCount: 2,
    req:[['items/moonpearl1', StandardRegionHelper.reqMireDW]],
    validate(items, dungeons){
      return items.moonpearl && StandardRegionHelper.mireDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
}
