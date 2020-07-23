import {InvertedStaticMapDungeonsLW} from '~/inverted/InvertedStaticMapDungeonsLW';
import {DefaultItemsData} from '~/default-objects/DefaultItems';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';
import {DefaultSettingsData} from '~/default-objects/DefaultSettings';
import {TestLocationHelper} from '~/tests/TestLocationHelper';

describe('InvertedStaticMapDungeonsLW', () => {

  const tests = [
    ['ep', false, {}, {}],
    ['ep', false, {moonpearl:false}, {aga:{boss:true}}, true],
    ['ep', false, {moonpearl:false}, {aga:{boss:true}}, true],
    ['ep', true, {moonpearl: true}, {aga:{boss:true}}],
    ['ep', true, {moonpearl: true, glove:1, hammer:true}, {}],
    ['ep', true, {moonpearl: true, glove:2}, {}],

    ['dp', false, {}, {}],
    ['dp', false, {book:false}, {aga:{boss:true}}, true],
    ['dp', false, {moonpearl:false}, {aga:{boss:true}}, true],
    ['dp', true, {book:true, moonpearl: true}, {aga:{boss:true}}],
    ['dp', true, {book:true, moonpearl: true, glove:1, hammer: true}, {}],
    ['dp', true, {book: true, moonpearl: true, glove:2}, {}],

    ['toh', false, {}, {}],
    ['toh', false, {lantern:false, flute:false}, {aga:{boss:true}}, true],
    ['toh', false, {moonpearl:false}, {aga:{boss:true}}, true],
    ['toh', false, {hammer:false}, {aga:{boss:true}}, true],
    ['toh', true, {glove:1, flute: true, hookshot:true, moonpearl: true, hammer: true}, {}],
    ['toh', true, {glove:2, flute: true, hookshot:true, moonpearl: true, hammer: true}, {}],
    ['toh', true, {glove:1, lantern: true, hookshot:true, moonpearl: true, hammer: true}, {}],
    ['toh', true, {glove:2, lantern: true, hookshot:true, moonpearl: true, hammer: true}, {}],
    ['toh', true, {glove:2, moonpearl: true, lantern:true, hammer: true}, {}],

    ['gt', false, {}, {}],
    ['gt', false, {moonpearl:false}, {aga:{boss:true}, pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', false, {hammer:false, glove:1}, {aga:{boss:false}, pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', false, {glove:0}, {aga:{boss:false}, pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', true, {moonpearl: true, hookshot: true, hammer: true}, {aga:{boss:true}, pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}],
    ['gt', true, {moonpearl: true, glove:1, hammer:true}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}],
    ['gt', true, {moonpearl: true, glove:2}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}],
  ];

  const bossTests = [
    ['ep', false, {}, {}],
    ['ep', false, {moonpearl:false}, {aga:{boss:true}}, true],
    ['ep', false, {lantern:false, firerod:false}, {aga:{boss:true}}, true],
    ['ep', false, {bow:0}, {aga:{boss:true}}, true],
    ['ep', true, {lantern:true, bow:1, moonpearl: true}, {aga:{boss:true}}],
    ['ep', true, {firerod:true, bow:1, moonpearl: true}, {aga:{boss:true}}],
    ['ep', true, {lantern:true, bow:1, moonpearl: true, glove:1, hammer:true}, {}],
    ['ep', true, {firerod:true, bow:1, moonpearl: true, glove:1, hammer:true}, {}],
    ['ep', true, {lantern:true, bow:1, moonpearl: true, glove:2}, {}],
    ['ep', true, {firerod:true, bow:1, moonpearl: true, glove:2}, {}],

    ['dp', false, {}, {}],
    ['dp', false, {book:false}, {aga:{boss:true}}, true],
    ['dp', false, {moonpearl:false}, {aga:{boss:true}}, true],
    ['dp', false, {glove:0}, {aga:{boss:true}}, true],
    ['dp', false, {lantern:false, firerod: false}, {aga:{boss:true}}, true],
    ['dp', true, {moonpearl: true, glove:1, book: true, lantern:true}, {aga:{boss:true}}],
    ['dp', true, {moonpearl: true, glove:1, book: true, lantern:true, hammer: true}, {}],
    ['dp', true, {moonpearl: true, glove:2, book: true, lantern:true}, {}],
    ['dp', true, {moonpearl: true, glove:1, book: true, firerod:true}, {aga:{boss:true}}],
    ['dp', true, {moonpearl: true, glove:1, book: true, firerod:true, hammer: true}, {}],
    ['dp', true, {moonpearl: true, glove:2, book: true, firerod:true}, {}],

    ['toh', false, {}, {}],
    ['toh', false, {lantern:false, flute:false}, {aga:{boss:true}}, true],
    ['toh', false, {moonpearl: false}, {aga:{boss:true}}, true],
    ['toh', false, {hammer:false}, {aga:{boss:true}}, true],
    ['toh', true, {glove:1, flute:true, hookshot:true, moonpearl: true, hammer: true}, {}],
    ['toh', true, {glove:2, flute:true, hookshot:true, moonpearl: true, hammer: true}, {}],
    ['toh', true, {glove:1, lantern:true, hookshot:true, moonpearl: true, hammer: true}, {}],
    ['toh', true, {glove:2, lantern:true, hookshot:true, moonpearl: true, hammer: true}, {}],

    ['gt', false, {}, {}],
    ['gt', false, {moonpearl: false}, {aga:{boss:true}, pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', false, {hookshot: false}, {aga:{boss:true}, pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', false, {bow:0}, {aga:{boss:true}, pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}, true],
    ['gt', true, {bow:1, sword:1, moonpearl: true, hookshot: true, lantern:true}, {aga:{boss:true}, pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}],
    ['gt', true, {bow:1, sword:1, moonpearl: true, hookshot: true, lantern:true, hammer: true, glove:1}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}],
    ['gt', true, {bow:1, sword:1, moonpearl: true, hookshot: true, lantern:true, glove:2}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}],
    ['gt', true, {bow:1, net:true, moonpearl: true, hookshot: true, lantern:true}, {aga:{boss:true}, pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}],
    ['gt', true, {bow:1, net:true, moonpearl: true, hookshot: true, lantern:true, hammer: true, glove:1}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}],
    ['gt', true, {bow:1, net:true, moonpearl: true, hookshot: true, lantern:true, glove:2}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}],

    ['gt', true, {bow:1, sword:1, moonpearl: true, hookshot: true, firerod:true}, {aga:{boss:true}, pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}],
    ['gt', true, {bow:1, sword:1, moonpearl: true, hookshot: true, firerod:true, hammer: true, glove:1}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}],
    ['gt', true, {bow:1, sword:1, moonpearl: true, hookshot: true, firerod:true, glove:2}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}],
    ['gt', true, {bow:1, net:true, moonpearl: true, hookshot: true, firerod:true}, {aga:{boss:true}, pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}],
    ['gt', true, {bow:1, net:true, moonpearl: true, hookshot: true, firerod:true, hammer: true, glove:1}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}],
    ['gt', true, {bow:1, net:true, moonpearl: true, hookshot: true, firerod:true, glove:2}, {pod:{crystal:3, boss:true}, sp:{crystal:3, boss:true}, sw:{crystal:3, boss:true}, tt:{crystal:3, boss:true}, ip:{crystal:3, boss:true}, mm:{crystal:4, boss:true}, tr:{crystal:4, boss:true}}],
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
    const itemsObj = isNeg ? TestLocationHelper.getLoadedItem() : new DefaultItemsData();
    const dungeonsObj = new DefaultDungeonsData();
    const settingsObj = new DefaultSettingsData();
    it('should'+(isNeg?' negative':'')+' test dungeon access for '+test[0]+' with '+
      (itemKeys.length>0 ? ('items '+ TestLocationHelper.stringifyItem(items)): 'no items')+' and '+
      (dungeonKeys.length>0 ? ('dungeons '+ TestLocationHelper.stringifyDungeon(dungeons)): 'no dungeons')+' and expect '+result, () => {
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
    const location = new InvertedStaticMapDungeonsLW()[test[0]];
    const itemKeys = Object.keys(test[2]);
    const dungeonKeys = Object.keys(test[3]);
    const itemsObj = isNeg ? TestLocationHelper.getLoadedItem() : new DefaultItemsData();
    const dungeonsObj = new DefaultDungeonsData();
    const settingsObj = new DefaultSettingsData();
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
