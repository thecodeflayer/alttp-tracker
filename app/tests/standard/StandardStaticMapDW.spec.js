import {StandardStaticMapDW} from '~/standard/StandardStaticMapDW';
import {DefaultItemsData} from '~/default-objects/DefaultItems';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';

describe('StandardStaticMapDW', () => {

  const tests = [
    ['mireShed', false, {}, {}],
    ['mireShed', true, {moonpearl:true, flute:true, glove:2}, {}],

    ['catfish', false, {}, {}],
    ['catfish', true, {moonpearl: true, glove:1}, {aga:{boss:true}}],
    ['catfish', true, {moonpearl: true, glove:2}, {aga:{boss:true}}],
    ['catfish', true, {moonpearl:true, glove:1, hammer:true}, {}],
    ['catfish', true, {moonpearl:true, glove:2, hammer:true}, {}],

    ['pyramid', false, {}, {}],
    ['pyramid', true, {}, {aga:{boss:true}}],
    ['pyramid', true, {moonpearl: true, glove: 1, hammer:true}, {}],
    ['pyramid', true, {moonpearl: true, glove: 2, flippers: true}, {}],

    ['pyramidFairy', false, {}, {}],
    ['pyramidFairy', false, {moonpearl: true, hammer:true}, {ep:{crystal:4, boss:true}, aga:{boss:true}}],
    ['pyramidFairy', true, {moonpearl: true, hammer:true}, {ep:{crystal:4, boss:true}, dp:{crystal:4, boss:true}, aga:{boss:true}}],
    ['pyramidFairy', true, {moonpearl: true, hammer:true, glove:1}, {ep:{crystal:4, boss:true}, dp:{crystal:4, boss:true}}],
    ['pyramidFairy', true, {moonpearl: true, glove:2, mirror:true}, {ep:{crystal:4, boss:true}, dp:{crystal:4, boss:true}, aga:{boss:true}}],
    ['pyramidFairy', true, {moonpearl: true, glove:1, mirror:true, hookshot:true}, {ep:{crystal:4, boss:true}, dp:{crystal:4, boss:true}, aga:{boss:true}}],
    ['pyramidFairy', true, {moonpearl: true, glove:2, mirror:true, hookshot:true}, {ep:{crystal:4, boss:true}, dp:{crystal:4, boss:true}, aga:{boss:true}}],
    ['pyramidFairy', true, {moonpearl: true, flippers: true, mirror:true, hookshot:true}, {ep:{crystal:4, boss:true}, dp:{crystal:4, boss:true}, aga:{boss:true}}],

    ['brewery', false, {}, {}],
    ['brewery', true, {bombs:true, moonpearl: true, glove:2}, {}],
    ['brewery', true, {bombs:true, moonpearl: true, glove:1, hammer: true}, {}],
    ['brewery', true, {bombs:true, moonpearl: true, glove:2, hammer: true}, {}],
    ['brewery', true, {bombs:true, moonpearl: true, glove:1, hookshot: true}, {aga:{boss:true}}],
    ['brewery', true, {bombs:true, moonpearl: true, glove:2, hookshot: true}, {aga:{boss:true}}],
    ['brewery', true, {bombs:true, moonpearl: true, flippers:true, hookshot: true}, {aga:{boss:true}}],

    ['cShapeHouse', false, {}, {}],
    ['cShapeHouse', true, {moonpearl: true, glove:2}, {}],
    ['cShapeHouse', true, {moonpearl: true, glove:1, hammer: true}, {}],
    ['cShapeHouse', true, {moonpearl: true, glove:2, hammer: true}, {}],
    ['cShapeHouse', true, {moonpearl: true, glove:1, hookshot: true}, {aga:{boss:true}}],
    ['cShapeHouse', true, {moonpearl: true, glove:2, hookshot: true}, {aga:{boss:true}}],
    ['cShapeHouse', true, {moonpearl: true, flippers:true, hookshot: true}, {aga:{boss:true}}],

    ['chestGame', false, {}, {}],
    ['chestGame', true, {moonpearl: true, glove:2}, {}],
    ['chestGame', true, {moonpearl: true, glove:1, hammer: true}, {}],
    ['chestGame', true, {moonpearl: true, glove:2, hammer: true}, {}],
    ['chestGame', true, {moonpearl: true, glove:1, hookshot: true}, {aga:{boss:true}}],
    ['chestGame', true, {moonpearl: true, glove:2, hookshot: true}, {aga:{boss:true}}],
    ['chestGame', true, {moonpearl: true, flippers:true, hookshot: true}, {aga:{boss:true}}],

    ['hammerPegs', false, {}, {}],
    ['hammerPegs', true, {moonpearl: true, hammer:true, glove:2}, {}],

    ['bumperCave', false, {}, {}],
    ['bumperCave', true, {moonpearl: true, cape: true, glove:2}, {}],
    ['bumperCave', true, {moonpearl: true, cape: true, glove:1, hammer: true}, {}],
    ['bumperCave', true, {moonpearl: true, cape: true, glove:1, hookshot: true}, {aga:{boss:true}}],

    ['blacksmith', false, {}, {}],
    ['blacksmith', true, {moonpearl: true, glove:2}, {}],

    ['purpleChest', false, {}, {}],
    ['purpleChest', true, {moonpearl: true, glove:2}, {}],

    ['hypeCave', false, {}, {}],
    ['hypeCave', true, {bombs: true, moonpearl: true, hammer: true}, {aga:{boss: true}}],
    ['hypeCave', true, {bombs: true, moonpearl: true, glove:2}, {}],
    ['hypeCave', true, {bombs: true, moonpearl: true, glove:1, hammer: true}, {}],
    ['hypeCave', true, {bombs: true, moonpearl: true, glove:1, hookshot: true}, {aga:{boss: true}}],
    ['hypeCave', true, {bombs: true, moonpearl: true, flippers: true, hookshot: true}, {aga:{boss: true}}],

    ['stumpy', false, {}, {}],
    ['stumpy', true, {moonpearl: true, hammer:true}, {aga:{boss:true}}],
    ['stumpy', true, {bombs: true, moonpearl: true, glove:2}, {}],
    ['stumpy', true, {bombs: true, moonpearl: true, glove:1, hammer: true}, {}],
    ['stumpy', true, {bombs: true, moonpearl: true, glove:1, hookshot: true}, {aga:{boss: true}}],
    ['stumpy', true, {bombs: true, moonpearl: true, flippers: true, hookshot: true}, {aga:{boss: true}}],

    ['diggingGame', false, {}, {}],
    ['diggingGame', true, {moonpearl: true, hammer:true}, {aga:{boss:true}}],
    ['diggingGame', true, {bombs: true, moonpearl: true, glove:2}, {}],
    ['diggingGame', true, {bombs: true, moonpearl: true, glove:1, hammer: true}, {}],
    ['diggingGame', true, {bombs: true, moonpearl: true, glove:1, hookshot: true}, {aga:{boss: true}}],
    ['diggingGame', true, {bombs: true, moonpearl: true, flippers: true, hookshot: true}, {aga:{boss: true}}],

    ['superbunnyCave', false, {}, {}],
    ['superbunnyCave', true, {moonpearl: true, glove:2, hookshot: true, flute:true}, {}],
    ['superbunnyCave', true, {moonpearl: true, glove:2, mirror:true, hammer:true, flute:true}, {}],
    ['superbunnyCave', true, {moonpearl: true, glove:2, mirror:true, hammer:true, lantern:true}, {}],

    ['hookshotCave', false, {}, {}],
    ['hookshotCave', true, {moonpearl: true, glove:2, hookshot: true, flute:true}, {}],
    ['hookshotCave', true, {moonpearl: true, glove:2, mirror:true, hammer:true, flute:true, boots:true}, {}],
    ['hookshotCave', true, {moonpearl: true, glove:2, hookshot:true, lantern:true}, {}],
    ['hookshotCave', true, {moonpearl: true, glove:2, mirror:true, hammer:true, lantern:true, boots:true}, {}],

    ['spikeCave', false, {}, {}],
    ['spikeCave', true, {jar:1, moonpearl: true, hammer: true, glove:1, lantern:true, cape:true}, {}],
    ['spikeCave', true, {jar:1, moonpearl: true, hammer: true, glove:2, lantern:true, cape:true}, {}],
    ['spikeCave', true, {jar:1, moonpearl: true, hammer: true, glove:1, flute:true, cape:true}, {}],
    ['spikeCave', true, {jar:1, moonpearl: true, hammer: true, glove:2, flute:true, cape:true}, {}],
    ['spikeCave', true, {jar:1, moonpearl: true, hammer: true, glove:1, lantern:true, bluecane:true}, {}],
    ['spikeCave', true, {jar:1, moonpearl: true, hammer: true, glove:2, lantern:true, bluecane:true}, {}],
    ['spikeCave', true, {jar:1, moonpearl: true, hammer: true, glove:1, flute:true, bluecane:true}, {}],
    ['spikeCave', true, {jar:1, moonpearl: true, hammer: true, glove:2, flute:true, bluecane:true}, {}],
    ['spikeCave', true, {halfmagic:true, moonpearl: true, hammer: true, glove:1, lantern:true, cape:true}, {}],
    ['spikeCave', true, {halfmagic:true, moonpearl: true, hammer: true, glove:2, lantern:true, cape:true}, {}],
    ['spikeCave', true, {halfmagic:true, moonpearl: true, hammer: true, glove:1, flute:true, cape:true}, {}],
    ['spikeCave', true, {halfmagic:true, moonpearl: true, hammer: true, glove:2, flute:true, cape:true}, {}],
    ['spikeCave', true, {halfmagic:true, moonpearl: true, hammer: true, glove:1, lantern:true, bluecane:true}, {}],
    ['spikeCave', true, {halfmagic:true, moonpearl: true, hammer: true, glove:2, lantern:true, bluecane:true}, {}],
    ['spikeCave', true, {halfmagic:true, moonpearl: true, hammer: true, glove:1, flute:true, bluecane:true}, {}],
    ['spikeCave', true, {halfmagic:true, moonpearl: true, hammer: true, glove:2, flute:true, bluecane:true}, {}],

    //negative tests

    ['mireShed', false, {glove:0}, {}, true],
    ['mireShed', false, {moonpearl: false}, {}, true],
    ['mireShed', false, {flute:false}, {}, true],
    ['catfish', false, {glove:0}, {}, true],
    ['catfish', false, {moonpearl: false}, {}, true],
    ['pyramidFairy', false, {moonpearl: false}, {ep:{crystal:4, boss:true}, dp:{crystal:4, boss:true}}, true],
    ['brewery', false, {moonpearl: false}, {}, true],
    ['cShapeHouse', false, {moonpearl: false}, {}, true],
    ['chestGame', false, {moonpearl: false}, {}, true],
    ['hammerPegs', false, {moonpearl: false}, {}, true],
    ['hammerPegs', false, {hammer: false}, {}, true],
    ['hammerPegs', false, {glove:0}, {}, true],
    ['hammerPegs', false, {moonpearl: false}, {}, true],
    ['bumperCave', false, {moonpearl: false}, {}, true],
    ['bumperCave', false, {cape: false}, {}, true],
    ['bumperCave', false, {glove:0}, {}, true],
    ['blacksmith', false, {moonpearl: false}, {}, true],
    ['blacksmith', false, {glove:0}, {}, true],
    ['purpleChest', false, {moonpearl: false}, {}, true],
    ['purpleChest', false, {glove:0}, {}, true],
    ['hypeCave', false, {moonpearl: false}, {}, true],
    ['stumpy', false, {moonpearl:false}, {}, true],
    ['diggingGame', false, {moonpearl:false}, {}, true],
    ['superbunnyCave', false, {moonpearl:false}, {}, true],
    ['superbunnyCave', false, {glove:0}, {}, true],
    ['hookshotCave', false, {moonpearl:false}, {}, true],
    ['hookshotCave', false, {glove:0}, {}, true],
    ['spikeCave', false, {moonpearl:false}, {}, true],
    ['spikeCave', false, {glove:0}, {}, true],
    ['spikeCave', false, {hammer:false}, {}, true],
    ['spikeCave', false, {cape:false, bluecane:false}, {}, true],
  ];

  const negTests = [];

  tests.forEach((test)=> {
    const items =  test[2];
    const dungeons = test[3];
    const result = test[1];
    const isNeg = test[4] ? true : false;
    const location = new StandardStaticMapDW()[test[0]];
    const itemKeys = Object.keys(test[2]);
    const dungeonKeys = Object.keys(test[3]);
    it('should'+(isNeg?' negative':'')+' test location access for '+test[0]+' with '+
      (itemKeys.length>0 ? ('items '+stringifyItem(items)): 'no items')+' and '+
      (dungeonKeys.length>0 ? ('dungeons '+stringifyDungeon(dungeons)): 'no dungeons')+' and expect '+result, () => {
      const itemsObj = new DefaultItemsData();
      if(isNeg) {
        itemsObj.bow = 2;
        itemsObj.boomerang = 3;
        itemsObj.hookshot = true;
        itemsObj.bombs = true;
        itemsObj.powder = true;
        itemsObj.mushroom = true;
        itemsObj.firerod = true;
        itemsObj.icerod = true;
        itemsObj.bombos = true;
        itemsObj.ether = true;
        itemsObj.quake = true;
        itemsObj.shovel = true;
        itemsObj.lantern = true;
        itemsObj.hammer = true;
        itemsObj.flute = true;
        itemsObj.net = true;
        itemsObj.book = true;
        itemsObj.moonpearl = true;
        itemsObj.jar = 4;
        itemsObj.bluecane = true;
        itemsObj.redcane = true;
        itemsObj.cape = true;
        itemsObj.mirror = true;
        itemsObj.glove = 2;
        itemsObj.boots = true;
        itemsObj.flippers = true;
        itemsObj.halfmagic = true;
        itemsObj.sword = 4;
        itemsObj.shield = 3;
        itemsObj.tunic = 2;
      }
      const dungeonsObj = new DefaultDungeonsData();
      //load items
      for(const key of itemKeys) {
        itemsObj[key] = items[key];
      }
      //load dungeons
      for(const key of dungeonKeys) {
        dungeonsObj[key] = dungeons[key];
      }
      expect(location.validate(itemsObj, dungeonsObj)).toBe(result);
    });
  });
});

function stringifyItem(obj) {
  let retval = '';
  const keys = Object.keys(obj);
  for(const key of keys) {
    retval = retval + key +':'+obj[key]+',';
  }
  return retval;
}
function stringifyDungeon(obj) {
  let retval = '';
  const keys = Object.keys(obj);
  for(const key of keys) {
    retval = retval + key+'['+stringifyItem(obj[key])+'] ';
  }
  return retval;
}
