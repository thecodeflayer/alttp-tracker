import {InvertedRegionHelper} from '@/inverted/InvertedRegionHelper';

export class InvertedStaticMapDW {
  superbunnyCave = {x: 1265, y: 223, title: 'Superbunny Cave', itemCount: 2,
    req:[[InvertedRegionHelper.reqDeathMtnEastDW]],
    validate(items, dungeons){
      return InvertedRegionHelper.deathMtnEastDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  hookshotCave = {x: 1247, y: 99, title: 'Hookshot Cave', itemCount: 4,
    req:[
      [InvertedRegionHelper.reqDeathMtnEastDW, 'items/hookshot1'],
      [InvertedRegionHelper.reqDeathMtnEastDW, 'items/boots1']
    ],
    validate(items, dungeons){
      return (items.hookshot || items.boots) && InvertedRegionHelper.deathMtnEastDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  spikeCave = {x: 862, y: 221, title: 'Spike Cave', itemCount: 1,
    req:[
      [InvertedRegionHelper.reqDeathMtnWestDW, 'items/hammer1', 'items/glove1', 'items/jar1', 'items/cape1'],
      [InvertedRegionHelper.reqDeathMtnWestDW, 'items/hammer1', 'items/glove1', 'items/jar1', 'items/bluecane1'],
      [InvertedRegionHelper.reqDeathMtnWestDW, 'items/hammer1', 'items/glove1', 'items/halfmagic1', 'items/cape1'],
      [InvertedRegionHelper.reqDeathMtnWestDW, 'items/hammer1', 'items/glove1', 'items/halfmagic1', 'items/bluecane1'],
    ],
    validate(items, dungeons){
      return (items.jar > 0 || items.halfmagic) && items.hammer
        && items.glove>0 && (items.cape || items.bluecane)
        && InvertedRegionHelper.deathMtnWestDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  catfish = {x: 1341, y: 257, title: 'Catfish', itemCount: 1,
    req:[['items/glove1', InvertedRegionHelper.reqNorthEastDW]],
    validate(items, dungeons){
      return items.glove > 0 && InvertedRegionHelper.northEastDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  linkHouse = {x:820, y:1037, title:'Link\'s House', itemCount: 1,
    req:[], validate(items, dungeons) {
      return true;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  pyramid = {x: 870, y: 670, title: 'Pyramid', itemCount: 1,
    req:[[InvertedRegionHelper.reqNorthEastDW]],
    validate(items, dungeons){
      return InvertedRegionHelper.northEastDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  pyramidFairy = {x: 703, y: 733, title: 'Pyramid Fairy', itemCount: 2,
    req:[['dungeons/crystal4~', 'dungeons/crystal4', 'items/mirror1', InvertedRegionHelper.reqNorthEastDW]],
    validate(items, dungeons){
      let c = 0;
      const keys = Object.keys(dungeons);
      for(const key of keys){
        if(dungeons[key].crystal === 4 && dungeons[key].boss) {
          c = c + 1;
        }
      }
      return c === 2 && items.mirror && InvertedRegionHelper.northEastDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  brewery = {x: 163, y: 878, title: 'Brewery', itemCount: 1,
    req:[['items/bombs1']],
    validate(items, dungeons){
      return items.bombs;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  cShapeHouse = {x: 310, y: 726, title: 'C-Shaped House', itemCount: 1,
    req:[],
    validate(items, dungeons){
      return true;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  chestGame = {x: 76, y: 702, title: 'Chest Game', itemCount: 1,
    req:[],
    validate(items, dungeons){
      return true;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  hammerPegs = {x: 474, y: 908, title: 'Hammer Pegs', itemCount: 1,
    req:[
      ['items/hammer1', 'items/glove2'],
      ['items/hammer1', 'items/mirror1', InvertedRegionHelper.reqNorthWestLW]
    ],
    validate(items, dungeons){
      return items.hammer && (items.glove === 2
            || (items.mirror && InvertedRegionHelper.northWestLW(items, dungeons)));
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  oldMan = {x: 532, y: 268, title: 'Rescue Old Man', itemCount: 1,
    req:[
      ['items/lantern1', 'items/glove1'],
      ['items/lantern1', InvertedRegionHelper.reqDeathMtnWestDW]
    ],
    validate(items, dungeons){
      return items.lantern
            && ((items.glove > 0 && InvertedRegionHelper.northWestDW(items, dungeons))
            || InvertedRegionHelper.deathMtnWestDW(items, dungeons));
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  blacksmith = {x: 223, y: 994, title: 'Blacksmith', itemCount: 1,
    req:[
      ['items/glove2', InvertedRegionHelper.reqNorthWestLW],
      ['items/mirror1', InvertedRegionHelper.reqNorthWestLW],
    ],
    validate(items, dungeons) {
      return (items.glove === 2 || items.mirror) && InvertedRegionHelper.northWestLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }
  };
  purpleChest = {x: 457, y: 802, title: 'Purple Chest', itemCount: 1,
    req:[
      ['items/glove2', InvertedRegionHelper.reqNorthWestLW, InvertedRegionHelper.reqSouthLW],
      ['items/mirror1', InvertedRegionHelper.reqNorthWestLW, InvertedRegionHelper.reqSouthLW],
    ],
    validate(items, dungeons){
      return ((items.glove === 2 || items.mirror) && InvertedRegionHelper.northWestLW(items, dungeons))
            && InvertedRegionHelper.southLW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  hypeCave = {x: 896, y: 1168, title: 'Hype Cave', itemCount: 5,
    req:[['items/bombs1']],
    validate(items, dungeons){
      return items.bombs;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  stumpy = {x: 463, y: 1024, title: 'Stumpy', itemCount: 1,
    req:[],
    validate(items, dungeons){
      return true;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  diggingGame = {x: 85, y: 1043, title: 'Digging Game', itemCount: 1,
    req:[],
    validate(items, dungeons){
      return true;
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
  mireShed = {x: 59, y: 1205, title: 'Mire Shed', itemCount: 2,
    req:[[InvertedRegionHelper.reqMireDW]],
    validate(items, dungeons){
      return InvertedRegionHelper.mireDW(items, dungeons);
    },
    validateEntrance(items, dungeons, entrances){
      return true;
    }};
}
