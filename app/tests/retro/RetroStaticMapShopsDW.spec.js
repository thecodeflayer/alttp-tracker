import {RetroStaticMapShopsDW} from '~/retro/RetroStaticMapShopsDW';
import {DefaultItemsData} from '~/default-objects/DefaultItems';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';
import {TestLocationHelper} from '~/tests/TestLocationHelper';

describe('RetroStaticMapShopsDW', () => {
  const tests = [
    ['dwFortuneTeller', false, {}, {}],
    ['dwFortuneTeller', true, {moonpearl: true, glove:2}, {}],
    ['dwFortuneTeller', true, {moonpearl: true, glove:1, hammer: true}, {}],
    ['dwFortuneTeller', true, {moonpearl: true, glove:2, hammer: true}, {}],
    ['dwFortuneTeller', true, {moonpearl: true, glove:1, hookshot: true}, {aga:{boss:true}}],
    ['dwFortuneTeller', true, {moonpearl: true, glove:2, hookshot: true}, {aga:{boss:true}}],
    ['dwFortuneTeller', true, {moonpearl: true, flippers:true, hookshot: true}, {aga:{boss:true}}],

  ];
  tests.forEach((test)=> {
    const items =  test[2];
    const dungeons = test[3];
    const result = test[1];
    const isNeg = test[4] ? true : false;
    const location = new RetroStaticMapShopsDW()[test[0]];
    const itemKeys = Object.keys(test[2]);
    const dungeonKeys = Object.keys(test[3]);
    it('should'+(isNeg?' negative':'')+' test shop access for '+test[0]+' with '+
      (itemKeys.length>0 ? ('items '+TestLocationHelper.stringifyItem(items)): 'no items')+' and '+
      (dungeonKeys.length>0 ? ('dungeons '+TestLocationHelper.stringifyDungeon(dungeons)): 'no dungeons')+' and expect '+result, () => {
      const itemsObj = isNeg ? TestLocationHelper.getLoadedItem() : new DefaultItemsData();
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
