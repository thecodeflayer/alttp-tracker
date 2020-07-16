import {standardRegionHelper} from '@/standard/regionHelper';

export const standardStaticMapDW = {
  superbunnyCave: {x: 1265, y: 223,title: 'Superbunny Cave', itemCount: 2,
    req:['items/moonpearl1','items/glove2',
      'lp','items/hookshot1','or','items/hammer1','items/mirror1','rp',
      'and','lp','items/flute1','or','items/lantern1','rp'],
    validate(items, dungeons){
      return items.moonpearl && standardRegionHelper.deathMtnEastDW(items, dungeons);
    }},
  hookshotCave: {x: 1247, y: 99,title: 'Hookshot Cave', itemCount: 4,
    req:['items/hookshot1','items/moonpearl1','items/glove2',
      'and','lp','items/flute1','or','items/lantern1','rp'],
    validate(items, dungeons){
      return items.hookshot && items.moonpearl && standardRegionHelper.deathMtnEastDW(items, dungeons);
    }},
  spikeCave: {x: 862, y: 221,title: 'Spike Cave', itemCount: 1,
    req:['items/hammer1','items/moonpearl1','items/glove2',
      'lp','items/hookshot1','or','items/mirror1','rp',
      'and','lp','items/flute1','or','items/lantern1','rp'],
    validate(items, dungeons){
      return items.hammer && items.moonpearl && standardRegionHelper.deathMtnEastDW(items, dungeons);
    }},
  catfish: {x: 1341, y: 257,title: 'Catfish', itemCount: 1,
    req:['items/moonpearl1','items/glove1','and',
      'dungeons/aga_boss0','or','items/hammer1'],
    validate(items, dungeons){
      return items.moonpearl && items.glove > 0 && standardRegionHelper.northEastDW(items, dungeons);
    }},
  pyramid: {x: 870, y: 670,title: 'Pyramid', itemCount: 1,
    req:['dungeons/aga_boss0',
      'or','items/hammer1','items/glove1'],
    validate(items, dungeons){
      return standardRegionHelper.northEastDW(items, dungeons);
    }},
  pyramidFairy: {x: 703, y: 733,title: 'Pyramid Fairy', itemCount: 2,
    req:['dungeons/crystal4','dungeons/crystal4',
      'items/moonpearl1','and','items/glove2','or',
      'lp','items/hammer1','or','items/flippers1',
      'and','dungeons/aga_boss0','or','items/glove1','rp'],
    validate(items, dungeons){
      let c = 0;
      const keys = Object.keys(dungeons);
      for(const key of keys){
        if(dungeons[key].crystal === 4 && dungeons[key].boss) {
          c = c + 1;
        }
      }
      return c === 2 && standardRegionHelper.southDW(items, dungeons)
            && ((items.hammer && items.moonpearl)
                || (items.mirror && dungeons.aga.boss));
    }},
  brewery: {x: 163, y: 878,title: 'Brewery', itemCount: 1,
    req:['items/bombs1','items/moonpearl1','and',
      'items/glove2','or','items/hammer1','items/glove1','or',
      'lp','dungeons/aga_boss0','and','items/hammer1','or','items/flippers1','rp'],
    validate(items, dungeons){
      return items.bombs && items.moonpearl && standardRegionHelper.northWestDW(items, dungeons);
    }},
  cShapeHouse: {x: 310, y: 726,title: 'C-Shaped House', itemCount: 1,
    req:['items/moonpearl1','and',
      'items/glove2','or','items/hammer1','items/glove1','or',
      'lp','dungeons/aga_boss0','and','items/hammer1','or','items/flippers1','rp'],
    validate(items, dungeons){
      return items.moonpearl && standardRegionHelper.northWestDW(items, dungeons);
    }},
  chestGame: {x: 76, y: 702,title: 'Chest Game', itemCount: 1,
    req:['items/moonpearl1','and',
      'items/glove2','or','items/hammer1','items/glove1','or',
      'lp','dungeons/aga_boss0','and','items/hammer1','or','items/flippers1','rp'],
    validate(items, dungeons){
      return items.moonpearl && standardRegionHelper.northWestDW(items, dungeons);
    }},
  hammerPegs: {x: 474, y: 908,title: 'Hammer Pegs', itemCount: 1,
    req:['items/moonpearl1','items/hammer1','items/glove2'],
    validate(items, dungeons){
      return items.moonpearl && items.hammer && items.glove === 2 && standardRegionHelper.northWestDW(items, dungeons);
    }},
  bumperCave: {x: 532, y: 268,title: '​Bumper Cave', itemCount: 1,
    req:['items/moonpearl1','and','lp','items/hammer1','or','items/flippers1','rp','and',
      'lp','items/glove1','or','dungeons/aga_boss0','rp'],
    validate(items, dungeons){
      return items.moonpearl && items.hookshot && items.glove > 0 && items.cape
            &&standardRegionHelper.northWestDW(items, dungeons);
    }},
  blacksmith: {x: 223, y: 994,title: 'Blacksmith', itemCount: 1,
    req:['items/mirror1','items/moonpearl1','items/glove2'],
    validate(items, dungeons){
      return items.mirror && items.moonpearl && items.glove === 2
            && standardRegionHelper.northWestDW(items, dungeons);
    }},
  purpleChest: {x: 457, y: 802,title: 'Purple Chest', itemCount: 1,
    req:['items/mirror1','items/moonpearl1','items/glove2'],
    validate(items, dungeons){
      return items.mirror && items.moonpearl && items.glove === 2
            && standardRegionHelper.northWestDW(items, dungeons);
    }},
  hypeCave: {x: 896, y: 1168,title: 'Hype Cave', itemCount: 5,
    req:['items/moonpearl1','and','items/glove2','or',
      'lp','items/hammer1','or','items/flippers1',
      'and','dungeons/aga_boss0','or','items/glove1','rp'],
    validate(items, dungeons){
      return items.moonpearl && items.bombs && standardRegionHelper.southDW(items, dungeons);
    }},
  stumpy: {x: 463, y: 1024,title: 'Stumpy', itemCount: 1,
    req:['items/moonpearl1','and','items/glove2','or',
      'lp','items/hammer1','or','items/flippers1',
      'and','dungeons/aga_boss0','or','items/glove1','rp'],
    validate(items, dungeons){
      return items.moonpearl && standardRegionHelper.southDW(items, dungeons);
    }},
  diggingGame: {x: 85, y: 1043,title: 'Digging Game', itemCount: 1,
    req:['items/moonpearl1','and','items/glove2','or',
      'lp','items/hammer1','or','items/flippers1',
      'and','dungeons/aga_boss0','or','items/glove1','rp'],
    validate(items, dungeons){
      return items.moonpearl && standardRegionHelper.southDW(items, dungeons);
    }},
  mireShed: {x: 59, y: 1205,title: 'Mire Shed', itemCount: 2,
    req:['items/mirror1','items/glove2','items/flute1'],
    validate(items, dungeons){
      return items.moonpearl && standardRegionHelper.mireDW(items, dungeons);
    }},
};