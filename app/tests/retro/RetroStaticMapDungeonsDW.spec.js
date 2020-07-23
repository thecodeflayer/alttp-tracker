import {RetroStaticMapDungeonsDW} from '~/retro/RetroStaticMapDungeonsDW';
import {DefaultItemsData} from '~/default-objects/DefaultItems';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';
import {DefaultSettingsData} from '~/default-objects/DefaultSettings';
import {TestLocationHelper} from '~/tests/TestLocationHelper';

describe('RetroStaticMapDungeonsDW', () => {

  const tests = [];

  //only test for bow changes in retro since all the rest are covered by standard tests
  const bossTests = [
    ['pod', false, {}, {}],
    ['pod', false, {moonpearl:false}, {}, true],
    ['pod', false, {lantern:false, firerod:false}, {}, true],
    ['pod', false, {hammer:false}, {}, true],
    ['pod', false, {bow:0}, {}, true],
    ['pod', false, {quiver:false}, {}, true],
    ['pod', true, {quiver:true, moonpearl:true, lantern: true, bow:1, hammer: true}, {aga:{boss:true}}],
    ['pod', true, {quiver:true, moonpearl: true, lantern: true, bow:1, hammer: true, glove:1}, {}],
    ['pod', true, {quiver:true, moonpearl: true, lantern: true, bow:1, hammer: true, glove:2}, {}],
    ['pod', true, {quiver:true, moonpearl:true, firerod: true, bow:1, hammer: true}, {aga:{boss:true}}],
    ['pod', true, {quiver:true, moonpearl: true, firerod: true, bow:1, hammer: true, glove:1}, {}],
    ['pod', true, {quiver:true, moonpearl: true, firerod: true, bow:1, hammer: true, glove:2}, {}],

    ['gt', false, {}, {}],
    ['gt', false, {glove:1}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', false, {moonpearl: false}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', false, {lantern: false, mirror:false, flute:false}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', false, {hookshot: false, hammer:false}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', false, {lantern: false, firerod:false}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', false, {bow:0}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', false, {quiver:false}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', true, {quiver:true, moonpearl: true, glove:2, lantern: true, hookshot: true, bow:1, sword:1}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', true, {quiver:true, moonpearl: true, glove:2, lantern: true, hookshot: true, bow:1, net:true}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', true, {quiver:true, moonpearl: true, glove:2, firerod: true, hookshot: true, bow:1, net:true}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
  ];

  tests.forEach((test)=> {
    const items =  test[2];
    const dungeons = test[3];
    const result = test[1];
    const isNeg = test[4] ? true : false;
    const location = new RetroStaticMapDungeonsDW()[test[0]];
    const itemKeys = Object.keys(test[2]);
    const dungeonKeys = Object.keys(test[3]);
    const itemsObj = isNeg ? TestLocationHelper.getLoadedItem() : new DefaultItemsData();
    const settingsObj = new DefaultSettingsData();
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
      expect(location.validate(itemsObj, dungeonsObj, settingsObj)).toBe(result);
    });
  });

  bossTests.forEach((test)=> {
    const items =  test[2];
    const dungeons = test[3];
    const result = test[1];
    const isNeg = test[4] ? true : false;
    const location = new RetroStaticMapDungeonsDW()[test[0]];
    const itemKeys = Object.keys(test[2]);
    const dungeonKeys = Object.keys(test[3]);
    const itemsObj = isNeg ? TestLocationHelper.getLoadedItem() : new DefaultItemsData();
    const settingsObj = new DefaultSettingsData();
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
      expect(location.validateBoss(itemsObj, dungeonsObj, settingsObj)).toBe(result);
    });
  });
});
