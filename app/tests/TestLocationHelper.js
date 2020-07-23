import {DefaultItemsData} from '~/default-objects/DefaultItems';

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
