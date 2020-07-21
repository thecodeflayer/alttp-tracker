import {InvertedStaticMapDungeonsLW} from '~/inverted/InvertedStaticMapDungeonslW';
import {DefaultItemsData} from '~/default-objects/DefaultItems';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';

describe('InvertedStaticMapDungeonsLW', () => {

  const tests = [
    ['ep', false, {}, {}],

    ['dp', false, {}, {}],

    ['toh', false, {}, {}],

    ['gt', false, {}, {}],


  ];

  const bossTests = [
    ['ep', false, {}, {}],

    ['dp', false, {}, {}],

    ['toh', false, {}, {}],

    ['gt', false, {}, {}],

  ];

  const negTests = [];

  tests.forEach((test)=> {
    const items =  test[2];
    const dungeons = test[3];
    const result = test[1];
    const isNeg = test[4] ? true : false;
    const location = new InvertedStaticMapDungeonsLW()[test[0]];
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
    const location = new InvertedStaticMapDungeonsLW()[test[0]];
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
