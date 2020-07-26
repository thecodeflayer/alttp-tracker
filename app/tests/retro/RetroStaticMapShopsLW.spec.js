import {RetroStaticMapShopsLW} from '~/retro/RetroStaticMapShopsLW';
import {TestLocationHelper} from '~/tests/TestLocationHelper';

describe('RetroStaticMapShopsLW', () => {
  const tests = [
    ['lumberjackHouse', true, {}, {}],

    ['lostWoodsGamble', true, {}, {}],

    ['lwFortuneTeller', true, {}, {}],

    ['snitchLadyWest', true, {}, {}],

    ['snitchLadyEast', true, {}, {}],

    ['bushCoveredHouse', true, {}, {}],

    ['bombHut', false, {}, {}],
    ['bombHut', false, {bombs:false}, {}, true],
    ['bombHut', true, {bombs:true}, {}],

    ['kakarikoGambleGame', true, {}, {}],

    ['lwBonkFairy', false, {}, {}],
    ['lwBonkFairy', false, {boots:false}, {}, true],
    ['lwBonkFairy', true, {boots:true}, {}],

    ['desertFairy', true, {}, {}],

    ['fiftyRupeeCave', false, {}, {}],
    ['fiftyRupeeCave', false, {glove:0}, {}, true],
    ['fiftyRupeeCave', true, {glove:1}, {}],
    ['fiftyRupeeCave', true, {glove:2}, {}],

    ['lwHypeFairy', false, {}, {}],
    ['lwHypeFairy', false, {bombs:false}, {}, true],
    ['lwHypeFairy', true, {bombs:true}, {}],

    ['lwLakeHyliaFortuneTeller', true, {}, {}],

    ['lwLakeHyliaFairy', true, {}, {}],

    ['longFairyCave', true, {}, {}],

    ['goodBeeCave', true, {}, {}],

    ['twentyRupeeCave', false, {}, {}],
    ['twentyRupeeCave', false, {glove:0}, {}, true],
    ['twentyRupeeCave', true, {glove:1}, {}],


    ['capacityUpgrade', false, {}, {}],
    ['capacityUpgrade', false, {flippers:false}, {}, true],
    ['capacityUpgrade', true, {flippers:true}, {}],

    ['hookshotFairy', false, {}, {}],
    ['hookshotFairy', false, {hookshot:false, hammer:false}, {}, true],
    ['hookshotFairy', false, {flute:false, lantern:false, mirror:false}, {}, true],
    ['hookshotFairy', true, {hookshot: true, flute:true}, {}],
    ['hookshotFairy', true, {hookshot: true, lantern:true, glove:1}, {}],
    ['hookshotFairy', true, {hammer: true, mirror:true, flute:true}, {}],
    ['hookshotFairy', true, {hammer: true, mirror:true, lantern:true, glove:1}, {}],

    ['kakarikoShop', true, {}, {}],

    ['lwLakeHyliaShop', true, {}, {}],

    ['lwDeathMtnShop', false, {}, {}],
    ['lwDeathMtnShop', false, {bombs:false}, {}, true],
    ['lwDeathMtnShop', false, {hookshot:false, hammer:false}, {}, true],
    ['lwDeathMtnShop', false, {flute:false, lantern:false, mirror:false}, {}, true],
    ['lwDeathMtnShop', true, {bombs:true, hookshot: true, flute:true}, {}],
    ['lwDeathMtnShop', true, {bombs:true, hookshot: true, lantern:true, glove:1}, {}],
    ['lwDeathMtnShop', true, {bombs:true, hammer: true, mirror:true, flute:true}, {}],
    ['lwDeathMtnShop', true, {bombs:true, hammer: true, mirror:true, lantern:true, glove:1}, {}],

  ];

  TestLocationHelper.doTests(tests, 'store', new RetroStaticMapShopsLW());

  // tests.forEach((test)=> {
  //   const items =  test[2];
  //   const dungeons = test[3];
  //   const result = test[1];
  //   const isNeg = test[4] ? true : false;
  //   const location = new RetroStaticMapShopsLW()[test[0]];
  //   const itemKeys = Object.keys(test[2]);
  //   const dungeonKeys = Object.keys(test[3]);
  //   it('should'+(isNeg?' negative':'')+' test shop access for '+test[0]+' with '+
  //     (itemKeys.length>0 ? ('items '+TestLocationHelper.stringifyItem(items)): 'no items')+' and '+
  //     (dungeonKeys.length>0 ? ('dungeons '+TestLocationHelper.stringifyDungeon(dungeons)): 'no dungeons')+' and expect '+result, () => {
  //     const itemsObj = isNeg ? TestLocationHelper.getLoadedItem() : new DefaultItemsData();
  //     const dungeonsObj = new DefaultDungeonsData();
  //     //load items
  //     for(const key of itemKeys) {
  //       itemsObj[key] = items[key];
  //     }
  //     //load dungeons
  //     for(const key of dungeonKeys) {
  //       dungeonsObj[key] = dungeons[key];
  //     }
  //     expect(location.validate(itemsObj, dungeonsObj)).toBe(result);
  //   });
  // });
});
