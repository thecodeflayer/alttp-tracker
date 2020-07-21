import {StandardStaticMapDungeonsDW} from '~/standard/StandardStaticMapDungeonsDW';
import {DefaultItemsData} from '~/default-objects/DefaultItems';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';

describe('StaticMapDuneonsLW', () => {

  const tests = [
    ['pod', false, {}, {}],
    ['pod', false, {moonpearl:false}, {}, true],
    ['pod', true, {moonpearl:true}, {aga:{boss:true}}],
    ['pod', true, {moonpearl: true, hammer: true, glove:1}, {}],
    ['pod', true, {moonpearl: true, hammer: true, glove:2}, {}],
    ['pod', true, {moonpearl: true, flippers: true, glove:2}, {}],

    ['sp', false, {}, {}],
    ['sp', false, {mirror:false}, {}, true],
    ['sp', false, {moonpearl:false}, {}, true],
    ['sp', false, {flippers:false}, {}, true],
    ['sp', true, {mirror:true, moonpearl:true, flippers:true, glove:2}, {}],
    ['sp', true, {mirror:true, moonpearl:true, flippers:true, glove:1, hammer: true}, {}],
    ['sp', true, {mirror:true, moonpearl:true, flippers:true, hammer: true}, {aga:{boss:true}}],
    ['sp', true, {mirror:true, moonpearl:true, flippers:true, hookshot: true}, {aga:{boss:true}}],

    ['sw', false, {}, {}],
    ['sw', false, {moonpearl:false}, {}, true],
    ['sw', true, {moonpearl: true, glove:2}, {}],
    ['sw', true, {moonpearl: true, glove:1, hammer:true}, {}],
    ['sw', true, {moonpearl: true, hammer:true, hookshot: true}, {aga:{boss:true}}],
    ['sw', true, {moonpearl: true, glove:1, hookshot: true}, {aga:{boss:true}}],
    ['sw', true, {moonpearl: true, flippers:true, hookshot: true}, {aga:{boss:true}}],

    ['tt', false, {}, {}],
    ['tt', false, {moonpearl: false}, {}, true],
    ['tt', true, {moonpearl: true, glove:2}, {}],
    ['tt', true, {moonpearl: true, glove:1, hammer: true}, {}],
    ['tt', true, {moonpearl: true, hammer:true, hookshot: true}, {aga:{boss:true}}],
    ['tt', true, {moonpearl: true, glove:1, hookshot: true}, {aga:{boss:true}}],
    ['tt', true, {moonpearl: true, flippers:true, hookshot: true}, {aga:{boss:true}}],

    ['ip', false, {}, {}],
    ['ip', false, {glove:1}, {}, true],
    ['ip', false, {moonpearl: false}, {}, true],
    ['ip', false, {flippers:false}, {}, true],
    ['ip', false, {firerod:false, bombos:false}, {}, true],
    ['ip', true, {moonpearl: true, flippers: true, glove:2, firerod: true}, {}],
    ['ip', true, {moonpearl: true, flippers: true, glove:2, bombos: true}, {}],

  ];

  const bossTests = [
    ['pod', false, {}, {}],
    ['pod', false, {moonpearl:false}, {}, true],
    ['pod', false, {lantern:false, firerod:false}, {}, true],
    ['pod', false, {hammer:false}, {}, true],
    ['pod', false, {bow:0}, {}, true],
    ['pod', true, {moonpearl:true, lantern: true, bow:1, hammer: true}, {aga:{boss:true}}],
    ['pod', true, {moonpearl: true, lantern: true, bow:1, hammer: true, glove:1}, {}],
    ['pod', true, {moonpearl: true, lantern: true, bow:1, hammer: true, glove:2}, {}],
    ['pod', true, {moonpearl:true, firerod: true, bow:1, hammer: true}, {aga:{boss:true}}],
    ['pod', true, {moonpearl: true, firerod: true, bow:1, hammer: true, glove:1}, {}],
    ['pod', true, {moonpearl: true, firerod: true, bow:1, hammer: true, glove:2}, {}],

    ['sp', false, {}, {}],
    ['sp', false, {mirror:false}, {}, true],
    ['sp', false, {moonpearl:false}, {}, true],
    ['sp', false, {flippers:false}, {}, true],
    ['sp', false, {hammer:false}, {}, true],
    ['sp', false, {hookshot:false}, {}, true],
    ['sp', true, {mirror:true, moonpearl:true, flippers:true, hammer:true, hookshot:true, glove:2}, {}],
    ['sp', true, {mirror:true, moonpearl:true, flippers:true, hammer:true, hookshot:true, glove:1}, {}],
    ['sp', true, {mirror:true, moonpearl:true, flippers:true, hammer:true, hookshot:true}, {aga:{boss:true}}],

    ['sw', false, {}, {}],
    ['sw', false, {moonpearl:false}, {}, true],
    ['sw', false, {firerod:false}, {}, true],
    ['sw', true, {firerod:true, moonpearl: true, glove:2}, {}],
    ['sw', true, {firerod:true, moonpearl: true, glove:1, hammer:true}, {}],
    ['sw', true, {firerod:true, moonpearl: true, hammer:true, hookshot: true}, {aga:{boss:true}}],
    ['sw', true, {firerod:true, moonpearl: true, glove:1, hookshot: true}, {aga:{boss:true}}],
    ['sw', true, {firerod:true, moonpearl: true, flippers:true, hookshot: true}, {aga:{boss:true}}],

    ['tt', false, {}, {}],
    ['tt', false, {moonpearl: false}, {}, true],
    ['tt', true, {moonpearl: true, glove:2}, {}],
    ['tt', true, {moonpearl: true, glove:1, hammer: true}, {}],
    ['tt', true, {moonpearl: true, hammer:true, hookshot: true}, {aga:{boss:true}}],
    ['tt', true, {moonpearl: true, glove:1, hookshot: true}, {aga:{boss:true}}],
    ['tt', true, {moonpearl: true, flippers:true, hookshot: true}, {aga:{boss:true}}],

    // ["Ice Palace - Boss", false, []],
    // ["Ice Palace - Boss", false, [], ['TitansMitt']],
    // ["Ice Palace - Boss", false, [], ['MoonPearl']],
    // ["Ice Palace - Boss", false, [], ['Flippers']],
    // ["Ice Palace - Boss", false, [], ['Hammer']],
    // ["Ice Palace - Boss", false, [], ['BigKeyD5']],
    // ["Ice Palace - Boss", false, [], ['FireRod', 'Bombos', 'AnySword']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'ProgressiveGlove', 'ProgressiveGlove', 'FireRod', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'ProgressiveGlove', 'ProgressiveGlove', 'FireRod', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'TitansMitt', 'FireRod', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'TitansMitt', 'FireRod', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'ProgressiveGlove', 'ProgressiveGlove', 'Bombos', 'UncleSword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'ProgressiveGlove', 'ProgressiveGlove', 'Bombos', 'UncleSword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'TitansMitt', 'Bombos', 'UncleSword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'TitansMitt', 'Bombos', 'UncleSword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'ProgressiveGlove', 'ProgressiveGlove', 'Bombos', 'ProgressiveSword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'ProgressiveGlove', 'ProgressiveGlove', 'Bombos', 'ProgressiveSword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'TitansMitt', 'Bombos', 'ProgressiveSword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'TitansMitt', 'Bombos', 'ProgressiveSword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'ProgressiveGlove', 'ProgressiveGlove', 'Bombos', 'MasterSword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'ProgressiveGlove', 'ProgressiveGlove', 'Bombos', 'MasterSword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'TitansMitt', 'Bombos', 'MasterSword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'TitansMitt', 'Bombos', 'MasterSword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'ProgressiveGlove', 'ProgressiveGlove', 'Bombos', 'L3Sword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'ProgressiveGlove', 'ProgressiveGlove', 'Bombos', 'L3Sword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'TitansMitt', 'Bombos', 'L3Sword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'TitansMitt', 'Bombos', 'L3Sword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'ProgressiveGlove', 'ProgressiveGlove', 'Bombos', 'L4Sword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'ProgressiveGlove', 'ProgressiveGlove', 'Bombos', 'L4Sword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'TitansMitt', 'Bombos', 'L4Sword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['BigKeyD5', 'MoonPearl', 'Flippers', 'TitansMitt', 'Bombos', 'L4Sword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
  ];

  const negTests = [];

  tests.forEach((test)=> {
    const items =  test[2];
    const dungeons = test[3];
    const result = test[1];
    const isNeg = test[4] ? true : false;
    const location = new StandardStaticMapDungeonsDW()[test[0]];
    const itemKeys = Object.keys(test[2]);
    const dungeonKeys = Object.keys(test[3]);
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
    it('should'+(isNeg?' negative':'')+' test dungeon access for '+test[0]+' with '+
      (itemKeys.length>0 ? ('items '+stringifyItem(items)): 'no items')+' and '+
      (dungeonKeys.length>0 ? ('dungeons '+stringifyDungeon(dungeons)): 'no dungeons')+' and expect '+result, () => {
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

  bossTests.forEach((test)=> {
    const items =  test[2];
    const dungeons = test[3];
    const result = test[1];
    const isNeg = test[4] ? true : false;
    const location = new StandardStaticMapDungeonsDW()[test[0]];
    const itemKeys = Object.keys(test[2]);
    const dungeonKeys = Object.keys(test[3]);
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
    it('should'+(isNeg?' negative':'')+' test boss access for '+test[0]+' with '+
      (itemKeys.length>0 ? ('items '+stringifyItem(items)): 'no items')+' and '+
      (dungeonKeys.length>0 ? ('dungeons '+stringifyDungeon(dungeons)): 'no dungeons')+' and expect '+result, () => {
      //load items
      for(const key of itemKeys) {
        itemsObj[key] = items[key];
      }
      //load dungeons
      for(const key of dungeonKeys) {
        dungeonsObj[key] = dungeons[key];
      }
      expect(location.validateBoss(itemsObj, dungeonsObj)).toBe(result);
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
}
