import {RetroStaticMapDungeonsLW} from '~/retro/RetroStaticMapDungeonsLW';
import {DefaultItemsData} from '~/default-objects/DefaultItems';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';
import {TestLocationHelper} from '~/tests/TestLocationHelper';

describe('RetroStaticMapDungeonsLW', () => {

  const tests = [];

  //only test for bow changes in retro since all the rest are covered by standard tests
  const bossTests = [
    ['ep', false, {}, {}],
    ['ep', false, {lantern:false, firerod:false}, {}, true],
    ['ep', false, {bow:0}, {}, true],
    ['ep', false, {quiver:false}, {}, true],
    ['ep', true, {lantern:true, bow:1, quiver:true}, {}],

  ];

  tests.forEach((test)=> {
    const items =  test[2];
    const dungeons = test[3];
    const result = test[1];
    const isNeg = test[4] ? true : false;
    const location = new RetroStaticMapDungeonsLW()[test[0]];
    const itemKeys = Object.keys(test[2]);
    const dungeonKeys = Object.keys(test[3]);
    const itemsObj = isNeg ? TestLocationHelper.getLoadedItem() : new DefaultItemsData();
    const dungeonsObj = new DefaultDungeonsData();
    it('should'+(isNeg?' negative':'')+' test dungeon access for '+test[0]+' with '+
      (itemKeys.length>0 ? ('items '+TestLocationHelper.stringifyItem(items)): 'no items')+' and '+
      (dungeonKeys.length>0 ? ('dungeons '+TestLocationHelper.stringifyDungeon(dungeons)): 'no dungeons')+' and expect '+result, () => {
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
    const location = new RetroStaticMapDungeonsLW()[test[0]];
    const itemKeys = Object.keys(test[2]);
    const dungeonKeys = Object.keys(test[3]);
    const itemsObj = isNeg ? TestLocationHelper.getLoadedItem() : new DefaultItemsData();
    const dungeonsObj = new DefaultDungeonsData();
    it('should'+(isNeg?' negative':'')+' test boss access for '+test[0]+' with '+
      (itemKeys.length>0 ? ('items '+TestLocationHelper.stringifyItem(items)): 'no items')+' and '+
      (dungeonKeys.length>0 ? ('dungeons '+TestLocationHelper.stringifyDungeon(dungeons)): 'no dungeons')+' and expect '+result, () => {
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
