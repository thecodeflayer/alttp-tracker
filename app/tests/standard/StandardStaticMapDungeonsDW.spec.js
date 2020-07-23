import {StandardStaticMapDungeonsDW} from '~/standard/StandardStaticMapDungeonsDW';
import {DefaultItemsData} from '~/default-objects/DefaultItems';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';
import {DefaultSettingsData} from '~/default-objects/DefaultSettings';
import {TestLocationHelper} from '~/tests/TestLocationHelper';

describe('StandardStaticMapDungeonsDW', () => {

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

    ['mm', false, {}, {}],
    ['mm', false, {glove:1}, {}, true],
    ['mm', false, {moonpearl: false}, {}, true],
    ['mm', false, {flute:false}, {}, true],
    ['mm', true, {glove:2, moonpearl: true, flute: true, bombos: true}, {mm:{medallion:1}}],
    ['mm', true, {glove:2, moonpearl: true, flute: true, ether: true}, {mm:{medallion:2}}],
    ['mm', true, {glove:2, moonpearl: true, flute: true, quake: true}, {mm:{medallion:3}}],

    ['tr', false, {}, {}],
    ['tr', false, {glove:1}, {}, true],
    ['tr', false, {moonpearl:false}, {}, true],
    ['tr', false, {hammer:false}, {}, true],
    ['tr', false, {redcane:false}, {}, true],
    ['tr', true, {flute:true, mirror:true, glove:2, moonpearl: true, hammer:true, redcane:true, bombos: true}, {tr:{medallion:1}}],
    ['tr', true, {flute:true, mirror:true, glove:2, moonpearl: true, hammer:true, redcane:true, ether: true}, {tr:{medallion:2}}],
    ['tr', true, {flute:true, mirror:true, glove:2, moonpearl: true, hammer:true, redcane:true, quake: true}, {tr:{medallion:3}}],
    ['tr', true, {lantern:true, mirror:true, glove:2, moonpearl: true, hammer:true, redcane:true, quake: true}, {tr:{medallion:3}}],
    ['tr', true, {flute:true, hookshot: true, glove:2, moonpearl: true, hammer:true, redcane:true, quake: true}, {tr:{medallion:3}}],
    ['tr', true, {lantern:true, hookshot:true, glove:2, moonpearl: true, hammer:true, redcane:true, quake: true}, {tr:{medallion:3}}],

    ['gt', false, {}, {}],
    ['gt', false, {glove:1}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', false, {moonpearl: false}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', false, {lantern: false, mirror:false, flute:false}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', false, {hookshot: false, hammer:false}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', true, {moonpearl: true, glove:2, lantern: true, hookshot: true}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', true, {moonpearl: true, glove:2, lantern: true, hammer:true}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', true, {moonpearl: true, glove:2, mirror: true, hookshot: true}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', true, {moonpearl: true, glove:2, mirror: true, hammer: true}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', true, {moonpearl: true, glove:2, flute: true, hookshot: true}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', true, {moonpearl: true, glove:2, flute: true, hammer: true}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
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

    ['ip', false, {}, {}],
    ['ip', false, {glove:1}, {}, true],
    ['ip', false, {moonpearl: false}, {}, true],
    ['ip', false, {flippers:false}, {}, true],
    ['ip', false, {hammer:false}, {}, true],
    ['ip', false, {firerod:false, bombos:false}, {}, true],
    ['ip', true, {moonpearl: true, flippers: true, glove:2, firerod: true, hammer: true}, {}],
    ['ip', true, {moonpearl: true, flippers: true, glove:2, bombos: true, hammer:true}, {}],

    ['mm', false, {}, {}],
    ['mm', false, {glove:1}, {}, true],
    ['mm', false, {moonpearl: false}, {}, true],
    ['mm', false, {flute:false}, {}, true],
    ['mm', false, {lantern:false}, {}, true],
    ['mm', false, {redcane:false}, {}, true],
    ['mm', true, {lantern:true, redcane:true, glove:2, moonpearl: true, flute: true, bombos: true}, {mm:{medallion:1}}],
    ['mm', true, {lantern:true, redcane:true, glove:2, moonpearl: true, flute: true, ether: true}, {mm:{medallion:2}}],
    ['mm', true, {lantern:true, redcane:true, glove:2, moonpearl: true, flute: true, quake: true}, {mm:{medallion:3}}],

    ['tr', false, {}, {}],
    ['tr', false, {glove:1}, {}, true],
    ['tr', false, {moonpearl:false}, {}, true],
    ['tr', false, {hammer:false}, {}, true],
    ['tr', false, {redcane:false}, {}, true],
    ['tr', false, {icerod:false}, {}, true],
    ['tr', false, {firerod:false}, {}, true],
    ['tr', false, {lantern:false}, {}, true],
    ['tr', true, {icerod:true, firerod:true, lantern:true, mirror:true, glove:2, moonpearl: true, hammer:true, redcane:true, bombos: true}, {tr:{medallion:1}}],
    ['tr', true, {icerod:true, firerod:true, lantern:true, mirror:true, glove:2, moonpearl: true, hammer:true, redcane:true, ether: true}, {tr:{medallion:2}}],
    ['tr', true, {icerod:true, firerod:true, lantern:true, mirror:true, glove:2, moonpearl: true, hammer:true, redcane:true, quake: true}, {tr:{medallion:3}}],
    ['tr', true, {icerod:true, firerod:true, lantern:true, hookshot:true, glove:2, moonpearl: true, hammer:true, redcane:true, quake: true}, {tr:{medallion:3}}],

    ['gt', false, {}, {}],
    ['gt', false, {glove:1}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', false, {moonpearl: false}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', false, {lantern: false, mirror:false, flute:false}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', false, {hookshot: false, hammer:false}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', false, {lantern: false, firerod:false}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', false, {bow:0}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', true, {moonpearl: true, glove:2, lantern: true, hookshot: true, bow:1, sword:1}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', true, {moonpearl: true, glove:2, lantern: true, hookshot: true, bow:1, net:true}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', true, {moonpearl: true, glove:2, firerod: true, hookshot: true, bow:1, net:true}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
  ];

  tests.forEach((test)=> {
    const items =  test[2];
    const dungeons = test[3];
    const result = test[1];
    const isNeg = test[4] ? true : false;
    const location = new StandardStaticMapDungeonsDW()[test[0]];
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
    const location = new StandardStaticMapDungeonsDW()[test[0]];
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
