/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {DefaultItemsData} from '~/default-objects/DefaultItems';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';
import {DefaultSettingsData} from '~/default-objects/DefaultSettings';

export class TestLocationHelper {
  static stringifyItem(obj) {
    let retval = '';
    const keys = Object.keys(obj);
    for(const key of keys) {
      retval = retval + key +':'+obj[key]+',';
    }
    return retval;
  }
  static stringifyDungeon(obj) {
    let retval = '';
    const keys = Object.keys(obj);
    for(const key of keys) {
      retval = retval + key+'['+TestLocationHelper.stringifyItem(obj[key])+'] ';
    }
    return retval;
  }

  static doTests(tests, testType, locationObj, isBoss) {
    tests.forEach((test)=> {
      const items =  test[2];
      const dungeons = test[3];
      const result = test[1];
      const isNeg = !!test[4];
      const location = locationObj[test[0]];
      const itemKeys = Object.keys(test[2]);
      const dungeonKeys = Object.keys(test[3]);
      const itemsObj = isNeg ? TestLocationHelper.getLoadedItem() : new DefaultItemsData();
      const dungeonsObj = new DefaultDungeonsData();
      const settingsObj = new DefaultSettingsData();
      const expecting = 'should'+(isNeg?' negative':'')+' test '+ testType +' access for '+test[0]+' with '+
        (itemKeys.length>0 ? ('items '+TestLocationHelper.stringifyItem(items)): 'no items')+' and '+
        (dungeonKeys.length>0 ? ('dungeons '+TestLocationHelper.stringifyDungeon(dungeons)): 'no dungeons')+' and expect '+result;
      //console.log(expecting);
      it(expecting, () => {
        //load items
        for(const key of itemKeys) {
          itemsObj[key] = items[key];
        }
        //load dungeons
        for(const key of dungeonKeys) {
          dungeonsObj[key] = dungeons[key];
        }
        if(isBoss) {
          expect(location.validateBoss(itemsObj, dungeonsObj, settingsObj)).toBe(result);
        } else {
          expect(location.validate(itemsObj, dungeonsObj, settingsObj)).toBe(result);
        }
      });
    });
  }

  static getLoadedItem() {
    const itemsObj = new DefaultItemsData();
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
    itemsObj.quiver = true;
    return itemsObj;
  }
}
