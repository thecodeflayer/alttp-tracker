import {RetroStaticMapShopsDW} from '~/retro/RetroStaticMapShopsDW';
import {DefaultItemsData} from '~/default-objects/DefaultItems';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';
import {TestLocationHelper} from '~/tests/TestLocationHelper';

describe('RetroStaticMapShopsDW', () => {
  const tests = [
    ['dwFortuneTeller', false, {}, {}],
    ['dwFortuneTeller', false, {moonpearl: false}, {aga:{boss:true}}, true],
    ['dwFortuneTeller', true, {moonpearl: true, glove:2}, {}],
    ['dwFortuneTeller', true, {moonpearl: true, glove:1, hammer: true}, {}],
    ['dwFortuneTeller', true, {moonpearl: true, glove:2, hammer: true}, {}],
    ['dwFortuneTeller', true, {moonpearl: true, glove:1, hookshot: true}, {aga:{boss:true}}],
    ['dwFortuneTeller', true, {moonpearl: true, glove:2, hookshot: true}, {aga:{boss:true}}],
    ['dwFortuneTeller', true, {moonpearl: true, flippers:true, hookshot: true}, {aga:{boss:true}}],

    ['archeryGame', false, {}, {}],
    ['archeryGame', false, {moonpearl: false}, {aga:{boss:true}}, true],
    ['archeryGame', true, {moonpearl: true, glove:2}, {}],
    ['archeryGame', true, {moonpearl: true, glove:1, hammer: true}, {}],
    ['archeryGame', true, {moonpearl: true, glove:2, hammer: true}, {}],
    ['archeryGame', true, {moonpearl: true, glove:1, hookshot: true}, {aga:{boss:true}}],
    ['archeryGame', true, {moonpearl: true, glove:2, hookshot: true}, {aga:{boss:true}}],
    ['archeryGame', true, {moonpearl: true, flippers:true, hookshot: true}, {aga:{boss:true}}],

    ['dwSanctuaryHint', false, {}, {}],
    ['dwSanctuaryHint', false, {moonpearl: false}, {aga:{boss:true}}, true],
    ['dwSanctuaryHint', true, {moonpearl: true, glove:2}, {}],
    ['dwSanctuaryHint', true, {moonpearl: true, glove:1, hammer: true}, {}],
    ['dwSanctuaryHint', true, {moonpearl: true, glove:2, hammer: true}, {}],
    ['dwSanctuaryHint', true, {moonpearl: true, glove:1, hookshot: true}, {aga:{boss:true}}],
    ['dwSanctuaryHint', true, {moonpearl: true, glove:2, hookshot: true}, {aga:{boss:true}}],
    ['dwSanctuaryHint', true, {moonpearl: true, flippers:true, hookshot: true}, {aga:{boss:true}}],

    ['dwBonkFairy', false, {}, {}],
    ['dwBonkFairy', false, {moonpearl: false}, {aga:{boss:true}}, true],
    ['dwBonkFairy', false, {boots: false}, {aga:{boss:true}}, true],
    ['dwBonkFairy', true, {boots:true, moonpearl: true, glove:2}, {}],
    ['dwBonkFairy', true, {boots:true, moonpearl: true, glove:1, hammer: true}, {}],
    ['dwBonkFairy', true, {boots:true, moonpearl: true, glove:2, hammer: true}, {}],
    ['dwBonkFairy', true, {boots:true, moonpearl: true, glove:1, hookshot: true}, {aga:{boss:true}}],
    ['dwBonkFairy', true, {boots:true, moonpearl: true, glove:2, hookshot: true}, {aga:{boss:true}}],
    ['dwBonkFairy', true, {boots:true, moonpearl: true, flippers:true, hookshot: true}, {aga:{boss:true}}],

    ['dwDesertFairy', false, {}, {}],
    ['dwDesertFairy', false, {moonpearl: false}, {aga:{boss:true}}, true],
    ['dwDesertFairy', false, {flute: false}, {aga:{boss:true}}, true],
    ['dwDesertFairy', false, {glove:1}, {aga:{boss:true}}, true],
    ['dwDesertFairy', true, {moonpearl:true, flute:true, glove:2}, {}],

    ['dwDesertHint', false, {}, {}],
    ['dwDesertHint', false, {moonpearl: false}, {aga:{boss:true}}, true],
    ['dwDesertHint', false, {flute: false}, {aga:{boss:true}}, true],
    ['dwDesertHint', false, {glove:1}, {aga:{boss:true}}, true],
    ['dwDesertHint', true, {moonpearl:true, flute:true, glove:2}, {}],

    ['dwLakeHyliaFairy', false, {}, {}],
    ['dwLakeHyliaFairy', false, {glove:0}, {aga:{boss:false}}, true],
    ['dwLakeHyliaFairy', false, {moonpearl: false}, {aga:{boss:false}}, true],
    ['dwLakeHyliaFairy', false, {hammer:false, flippers:false}, {aga:{boss:false}}, true],
    ['dwLakeHyliaFairy', true, {}, {aga:{boss:true}}],
    ['dwLakeHyliaFairy', true, {hammer:true, glove:1, moonpearl: true}, {}],
    ['dwLakeHyliaFairy', true, {glove:2, moonpearl: true, hammer: true}, {}],
    ['dwLakeHyliaFairy', true, {glove:2, moonpearl: true, flippers: true}, {}],

    ['podHint', false, {}, {}],
    ['podHint', false, {glove:0}, {aga:{boss:false}}, true],
    ['podHint', false, {moonpearl: false}, {aga:{boss:false}}, true],
    ['podHint', false, {hammer:false, flippers:false}, {aga:{boss:false}}, true],
    ['podHint', true, {moonpearl: true}, {aga:{boss:true}}],
    ['podHint', true, {hammer:true, glove:1, moonpearl: true}, {}],
    ['podHint', true, {glove:2, moonpearl: true, hammer: true}, {}],
    ['podHint', true, {glove:2, moonpearl: true, flippers: true}, {}],

    ['dwEastHint', false, {}, {}],
    ['dwEastHint', false, {glove:0}, {aga:{boss:false}}, true],
    ['dwEastHint', false, {moonpearl: false}, {aga:{boss:false}}, true],
    ['dwEastHint', false, {hammer:false, flippers:false}, {aga:{boss:false}}, true],
    ['dwEastHint', true, {moonpearl: true}, {aga:{boss:true}}],
    ['dwEastHint', true, {hammer:true, glove:1, moonpearl: true}, {}],
    ['dwEastHint', true, {glove:2, moonpearl: true, hammer: true}, {}],
    ['dwEastHint', true, {glove:2, moonpearl: true, flippers: true}, {}],

    ['dwLakeLedgeFairy', false, {}, {}],
    ['dwLakeLedgeFairy', false, {moonpearl: false}, {}, true],
    ['dwLakeLedgeFairy', false, {flippers: false}, {}, true],
    ['dwLakeLedgeFairy', false, {bombs: false, boots: false}, {}, true],
    ['dwLakeLedgeFairy', true, {flippers: true, bombs: true, moonpearl: true, hammer: true}, {aga:{boss: true}}],
    ['dwLakeLedgeFairy', true, {flippers: true, bombs: true, moonpearl: true, glove:2}, {}],
    ['dwLakeLedgeFairy', true, {flippers: true, bombs: true, moonpearl: true, glove:1, hammer: true}, {}],
    ['dwLakeLedgeFairy', true, {flippers: true, bombs: true, moonpearl: true, glove:1, hookshot: true}, {aga:{boss: true}}],
    ['dwLakeLedgeFairy', true, {bombs: true, moonpearl: true, flippers: true, hookshot: true}, {aga:{boss: true}}],
    ['dwLakeLedgeFairy', true, {flippers: true, boots: true, moonpearl: true, hammer: true}, {aga:{boss: true}}],
    ['dwLakeLedgeFairy', true, {flippers: true, boots: true, moonpearl: true, glove:2}, {}],
    ['dwLakeLedgeFairy', true, {flippers: true, boots: true, moonpearl: true, glove:1, hammer: true}, {}],
    ['dwLakeLedgeFairy', true, {flippers: true, boots: true, moonpearl: true, glove:1, hookshot: true}, {aga:{boss: true}}],
    ['dwLakeLedgeFairy', true, {boots: true, moonpearl: true, flippers: true, hookshot: true}, {aga:{boss: true}}],

    ['dwLakeLedgeSpikeCave', false, {}, {}],
    ['dwLakeLedgeSpikeCave', false, {moonpearl: false}, {}, true],
    ['dwLakeLedgeSpikeCave', false, {flippers: false}, {}, true],
    ['dwLakeLedgeSpikeCave', true, {flippers: true, moonpearl: true, hammer: true}, {aga:{boss: true}}],
    ['dwLakeLedgeSpikeCave', true, {flippers: true, moonpearl: true, glove:2}, {}],
    ['dwLakeLedgeSpikeCave', true, {flippers: true, moonpearl: true, glove:1, hammer: true}, {}],
    ['dwLakeLedgeSpikeCave', true, {flippers: true, moonpearl: true, glove:1, hookshot: true}, {aga:{boss: true}}],
    ['dwLakeLedgeSpikeCave', true, {moonpearl: true, flippers: true, hookshot: true}, {aga:{boss: true}}],

    ['dwLakeLedgeHint', false, {}, {}],
    ['dwLakeLedgeHint', false, {moonpearl: false}, {}, true],
    ['dwLakeLedgeHint', false, {flippers: false}, {}, true],
    ['dwLakeLedgeHint', true, {flippers: true, moonpearl: true, hammer: true}, {aga:{boss: true}}],
    ['dwLakeLedgeHint', true, {flippers: true, moonpearl: true, glove:2}, {}],
    ['dwLakeLedgeHint', true, {flippers: true, moonpearl: true, glove:1, hammer: true}, {}],
    ['dwLakeLedgeHint', true, {flippers: true, moonpearl: true, glove:1, hookshot: true}, {aga:{boss: true}}],
    ['dwLakeLedgeHint', true, {moonpearl: true, flippers: true, hookshot: true}, {aga:{boss: true}}],

    ['dwDeathMtnFairy', false, {}, {}],
    ['dwDeathMtnFairy', false, {flute:false, glove:0}, {}, true],
    ['dwDeathMtnFairy', true, {moonpearl: true, glove:1, lantern:true}, {}],
    ['dwDeathMtnFairy', true, {moonpearl: true, glove:2, lantern:true}, {}],
    ['dwDeathMtnFairy', true, {moonpearl: true, flute:true}, {}],

    ['dwPotionShop', false, {}, {}],
    ['dwPotionShop', false, {glove:0, flippers: false, hammer: false}, {aga:{boss:true}}, true],
    ['dwPotionShop', false, {moonpearl: false}, {}, true],
    ['dwPotionShop', true, {moonpearl: true, glove:1}, {aga:{boss:true}}],
    ['dwPotionShop', true, {moonpearl: true, glove:2}, {aga:{boss:true}}],
    ['dwPotionShop', true, {moonpearl:true, glove:1, hammer:true}, {}],
    ['dwPotionShop', true, {moonpearl:true, glove:2, hammer:true}, {}],
    ['dwPotionShop', true, {moonpearl:true, flippers:true}, {aga:{boss:true}}],
    ['dwPotionShop', true, {moonpearl:true, glove:2, flippers: true}, {}],

    ['dwLumberjackHutShop', false, {}, {}],
    ['dwLumberjackHutShop', false, {moonpearl: false}, {aga:{boss:true}}, true],
    ['dwLumberjackHutShop', true, {moonpearl: true, glove:2}, {}],
    ['dwLumberjackHutShop', true, {moonpearl: true, glove:1, hammer: true}, {}],
    ['dwLumberjackHutShop', true, {moonpearl: true, glove:2, hammer: true}, {}],
    ['dwLumberjackHutShop', true, {moonpearl: true, glove:1, hookshot: true}, {aga:{boss:true}}],
    ['dwLumberjackHutShop', true, {moonpearl: true, glove:2, hookshot: true}, {aga:{boss:true}}],
    ['dwLumberjackHutShop', true, {moonpearl: true, flippers:true, hookshot: true}, {aga:{boss:true}}],

    ['dwOutcastShop', false, {}, {}],
    ['dwOutcastShop', false, {moonpearl: false}, {aga:{boss:true}}, true],
    ['dwOutcastShop', false, {hammer: false}, {aga:{boss:true}}, true],
    ['dwOutcastShop', true, {hammer:true, moonpearl: true, glove:2}, {}],
    ['dwOutcastShop', true, {moonpearl: true, glove:1, hammer: true}, {}],
    ['dwOutcastShop', true, {moonpearl: true, glove:2, hammer: true}, {}],
    ['dwOutcastShop', true, {hammer:true, moonpearl: true, glove:1, hookshot: true}, {aga:{boss:true}}],
    ['dwOutcastShop', true, {hammer:true, moonpearl: true, glove:2, hookshot: true}, {aga:{boss:true}}],
    ['dwOutcastShop', true, {hammer:true, moonpearl: true, flippers:true, hookshot: true}, {aga:{boss:true}}],

    ['dwLakeHyliaShop', false, {}, {}],
    ['dwLakeHyliaShop', false, {moonpearl: false}, {}, true],
    ['dwLakeHyliaShop', true, {moonpearl: true, hammer: true}, {aga:{boss: true}}],
    ['dwLakeHyliaShop', true, {moonpearl: true, glove:2}, {}],
    ['dwLakeHyliaShop', true, {moonpearl: true, glove:1, hammer: true}, {}],
    ['dwLakeHyliaShop', true, {moonpearl: true, glove:1, hookshot: true}, {aga:{boss: true}}],
    ['dwLakeHyliaShop', true, {moonpearl: true, flippers: true, hookshot: true}, {aga:{boss: true}}],

    ['dwDeathMtnShop', false, {}, {}],
    ['dwDeathMtnShop', false, {moonpearl:false}, {}, true],
    ['dwDeathMtnShop', false, {hookshot: false, hammer:false}, {}, true],
    ['dwDeathMtnShop', true, {moonpearl: true, glove:2, hookshot: true, flute:true}, {}],
    ['dwDeathMtnShop', true, {moonpearl: true, glove:2, mirror:true, hammer:true, flute:true}, {}],
    ['dwDeathMtnShop', true, {moonpearl: true, glove:2, mirror:true, hammer:true, lantern:true}, {}],

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
