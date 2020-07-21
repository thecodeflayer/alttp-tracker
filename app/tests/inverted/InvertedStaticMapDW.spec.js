import {InvertedStaticMapDW} from '~/inverted/InvertedStaticMapDW';
import {DefaultItemsData} from '~/default-objects/DefaultItems';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';

fdescribe('StaticMapDW', () => {

  const tests = [
    ['mireShed', false, {}, {}],
    ['mireShed', false, {flute:false, mirror:false}, {}, true],
    ['mireShed', true, {moonpearl:true, flute:true, glove:2}, {}],
    ['mireShed', true, {moonpearl:true, flute:true, glove:1, hammer:true}, {}],
    ['mireShed', true, {moonpearl: true, flute:true}, {aga:{boss:true}}],
    ['mireShed', true, {mirror:true}, {aga:{boss:true}}],

    ['catfish', false, {}, {}],
    ['catfish', false, {glove:0}, {}, true],
    ['catfish', true, {mirror:true, glove:1}, {aga:{boss:true}}],
    ['catfish', true, {mirror:true, glove:2}, {aga:{boss:true}}],
    ['catfish', true, {glove:1, hammer:true}, {}],
    ['catfish', true, {glove:1, flippers:true}, {}],
    ['catfish', true, {glove:2, mirror:true, moonpearl: true}, {}],

    ['pyramid', false, {}, {}],
    ['pyramid', true, {mirror:true}, {aga:{boss:true}}],
    ['pyramid', true, {hammer:true}, {}],
    ['pyramid', true, {flippers: true, glove:1}, {}],
    ['pyramid', true, {glove:2, mirror:true, moonpearl: true}, {}],

    ['pyramidFairy', false, {}, {}],
    ['pyramidFairy', false, {mirror:false}, {ep:{crystal:4, boss:true}, dp:{crystal:4, boss:true}}, true],
    ['pyramidFairy', false, {}, {ep:{crystal:4, boss:true}}, true],
    ['pyramidFairy', true, {mirror:true, hammer:true}, {ep:{crystal:4, boss:true}, dp:{crystal:4, boss:true}}],
    ['pyramidFairy', true, {mirror:true, glove:1, flippers:true}, {ep:{crystal:4, boss:true}, dp:{crystal:4, boss:true}}],
    ['pyramidFairy', true, {mirror:true, glove:2, flippers: true}, {ep:{crystal:4, boss:true}, dp:{crystal:4, boss:true}}],

    ['brewery', true, {bombs:true}, {}],
    ['cShapeHouse', true, {}, {}],
    ['chestGame', true, {}, {}],

    ['hammerPegs', false, {}, {}],
    ['hammerPegs', false, {hammer:false}, {}, true],
    ['hammerPegs', false, {glove:0, mirror:false}, {}, true],
    ['hammerPegs', true, {hammer:true, glove:2}, {}],
    ['hammerPegs', true, {hammer:true, glove:1, mirror: true, moonpearl: true}, {}],
    ['hammerPegs', true, {hammer:true, mirror:true}, {aga:{boss:true}}],

    ['oldMan', false, {}, {}],
    ['oldMan', false, {glove:0, flute:false}, {}, true],
    ['oldMan', false, {lantern:false}, {}, true],
    ['oldMan', true, {glove:1, lantern: true}, {}],
    ['oldMan', true, {glove:2, lantern: true}, {}],
    ['oldMan', true, {flute:true, lantern: true}, {aga:{boss:true}}],
    ['oldMan', true, {flute:true, moonpearl:true, hammer:true, glove:1, lantern: true}, {}],
    ['oldMan', true, {flute:true, moonpearl:true, glove:2, lantern: true}, {}],

    ['blacksmith', false, {}, {}],
    ['blacksmith', false, {glove:0, mirror:false}, {}, true],
    ['blacksmith', true, {glove:2, moonpearl: true}, {}],
    ['blacksmith', true, {mirror:true}, {aga:{boss:true}}],
    ['blacksmith', true, {glove:1, hammer:true, mirror:true, moonpearl: true}, {}],

    ['purpleChest', false, {}, {}],
    ['purpleChest', false, {glove:0, mirror:false}, {}, true],
    ['purpleChest', true, {glove:2, moonpearl: true}, {}],
    ['purpleChest', true, {mirror:true}, {aga:{boss: true}}],
    ['purpleChest', true, {glove:1, hammer:true, mirror: true, moonpearl: true}, {}],

    ['hypeCave', true, {bombs: true}, {}],
    ['stumpy', true, {}, {}],
    ['diggingGame', true, {}, {}],
    ['linkHouse', true, {}, {}],

    ['superbunnyCave', false, {}, {}],
    ['superbunnyCave', false, {glove:0, flute: false}, {}, true],
    ['superbunnyCave', true, {glove:1, lantern: true}, {}],
    ['superbunnyCave', true, {glove:2, moonpearl: true, flute: true}, {}],
    ['superbunnyCave', true, {glove:1, moonpearl: true, hammer:true, flute:true}, {}],

    ['hookshotCave', false, {}, {}],
    ['hookshotCave', false, {glove:0, flute:false}, {}, true],
    ['hookshotCave', false, {boots:false, hookshot:false}, {}, true],
    ['hookshotCave', true, {glove:1, lantern: true, boots: true}, {}],
    ['hookshotCave', true, {glove:2, moonpearl:true, flute:true, boots: true}, {}],
    ['hookshotCave', true, {glove:1, hammer:true, moonpearl:true, flute:true, boots: true}, {}],
    ['hookshotCave', true, {glove:1, lantern: true, hookshot: true}, {}],
    ['hookshotCave', true, {glove:2, moonpearl:true, flute:true, hookshot: true}, {}],
    ['hookshotCave', true, {glove:1, hammer:true, moonpearl:true, flute:true, hookshot: true}, {}],

    ['spikeCave', false, {}, {}],
    ['spikeCave', false, {glove:0}, {}, true],
    ['spikeCave', false, {hammer:false}, {}, true],
    ['spikeCave', false, {cape:false, bluecane:false}, {}, true],
    ['spikeCave', true, {jar:1, hammer: true, glove:1, lantern: true, cape:true}, {}],
    ['spikeCave', true, {jar:1, hammer: true, glove:2, lantern: true, cape:true}, {}],
    ['spikeCave', true, {jar:1, hammer: true, glove:1, flute:true, moonpearl: true, cape:true}, {}],
    ['spikeCave', true, {jar:1, hammer: true, glove:2, flute:true, moonpearl: true, cape:true}, {}],
    ['spikeCave', true, {jar:1, hammer: true, glove:1, lantern: true, bluecane:true}, {}],
    ['spikeCave', true, {jar:1, hammer: true, glove:2, lantern: true, bluecane:true}, {}],
    ['spikeCave', true, {jar:1, hammer: true, glove:1, flute:true, moonpearl: true, bluecane:true}, {}],
    ['spikeCave', true, {jar:1, hammer: true, glove:2, flute:true, moonpearl: true, bluecane:true}, {}],
    ['spikeCave', true, {halfmagic:true, hammer: true, glove:1, lantern: true, cape:true}, {}],
    ['spikeCave', true, {halfmagic:true, hammer: true, glove:2, lantern: true, cape:true}, {}],
    ['spikeCave', true, {halfmagic:true, hammer: true, glove:1, flute:true, moonpearl: true, cape:true}, {}],
    ['spikeCave', true, {halfmagic:true, hammer: true, glove:2, flute:true, moonpearl: true, cape:true}, {}],
    ['spikeCave', true, {halfmagic:true, hammer: true, glove:1, lantern: true, bluecane:true}, {}],
    ['spikeCave', true, {halfmagic:true, hammer: true, glove:2, lantern: true, bluecane:true}, {}],
    ['spikeCave', true, {halfmagic:true, hammer: true, glove:1, flute:true, moonpearl: true, bluecane:true}, {}],
    ['spikeCave', true, {halfmagic:true, hammer: true, glove:2, flute:true, moonpearl: true, bluecane:true}, {}],
  ];

  const negTests = [];

  tests.forEach((test)=> {
    const items =  test[2];
    const dungeons = test[3];
    const result = test[1];
    const isNeg = test[4] ? true : false;
    const location = new InvertedStaticMapDW()[test[0]];
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
