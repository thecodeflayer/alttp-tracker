import {StandardStaticMapDungeonsLW} from '~/standard/StandardStaticMapDungeonslW';
import {DefaultItemsData} from '~/default-objects/DefaultItems';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';

describe('StaticMapDuneonsLW', () => {

  const tests = [
    ['ep', true, {}, {}],

    ['dp', false, {}, {}],
    ['dp', true, {book:true}, {}],
    ['dp', true, {flute:true, mirror:true, glove:2}, {}],

    ['toh', false, {}, {}],
    ['toh', true, {flute:true, mirror:true}, {}],
    ['toh', true, {glove:1, lantern:true, mirror:true}, {}],
    ['toh', true, {glove:2, lantern:true, mirror:true}, {}],
    ['toh', true, {flute:true, hookshot:true, hammer:true}, {}],
    ['toh', true, {glove:1, lantern:true, hookshot: true, hammer: true}, {}],
    ['toh', true, {glove:2, lantern:true, hookshot: true, hammer: true}, {}],

    ['aga', false, {}, {}],
    ['aga', true, {sword:2}, {}],
    ['aga', true, {sword:3}, {}],
    ['aga', true, {sword:4}, {}],
    ['aga', true, {cape:true}, {}],

  ];

  const bossTests = [
    ['ep', false, {}, {}],
    ['ep', true, {lantern:true, bow:1}, {}],
    ['ep', false, {lantern:false, firerod:false}, {}, true],
    ['ep', false, {bow:0}, {}],

    ['dp', false, {}, {}],
    ['dp', false, {glove:0}, {}, true],
    ['dp', false, {lantern: false, firerod: false}, {}, true],
    ['dp', true, {book:true, lantern:true, glove: 1}, {}],
    ['dp', true, {book:true, lantern:true, glove: 2}, {}],
    ['dp', true, {book:true, firerod:true, glove: 1}, {}],
    ['dp', true, {book:true, firerod:true, glove: 2}, {}],
    ['dp', true, {flute:true, mirror:true, lantern:true, glove: 2}, {}],
    ['dp', true, {flute:true, mirror:true, firerod:true, glove: 2}, {}],

    ['toh', false, {}, {}],
    ['toh', true, {flute:true, mirror:true}, {}],
    ['toh', true, {glove:1, lantern:true, mirror:true}, {}],
    ['toh', true, {glove:2, lantern:true, mirror:true}, {}],
    ['toh', true, {flute:true, hookshot:true, hammer:true}, {}],
    ['toh', true, {glove:1, lantern:true, hookshot: true, hammer: true}, {}],
    ['toh', true, {glove:2, lantern:true, hookshot: true, hammer: true}, {}],

    ['aga', false, {}, {}],
    ['aga', true, {sword:2, lantern: true}, {}],
    ['aga', true, {sword:3, lantern: true}, {}],
    ['aga', true, {sword:4, lantern: true}, {}],
    ['aga', true, {cape:true, lantern: true, net:true}, {}],

  ];

  const negTests = [];

  tests.forEach((test)=> {
    const items =  test[2];
    const dungeons = test[3];
    const result = test[1];
    const isNeg = test[4] ? true : false;
    const location = new StandardStaticMapDungeonsLW()[test[0]];
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
    const location = new StandardStaticMapDungeonsLW()[test[0]];
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
  return retval;
}
