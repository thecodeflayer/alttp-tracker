import {DefaultMap, DefaultMapData, MapWorld} from '@/default-objects/DefaultMap';
import {RetroStaticMapShopsDW} from '@/retro/RetroStaticMapShopsDW';
import {RetroStaticMapShopsLW} from '@/retro/RetroStaticMapShopsLW';

export class RetroDefaultMap extends DefaultMap{
  data = new RetroMapData();

  toJSONString() :string {
    return JSON.stringify(this);
  }
  static fromJSON(str: string) :RetroDefaultMap {
    const obj = JSON.parse(str);
    const retval =  new RetroDefaultMap();
    retval.version = obj.version;
    retval.data = RetroMapData.fromObject(obj.data);
    return (retval as DefaultMap);
  }
}
export class RetroMapData extends DefaultMapData{
  constructor() {
    super();
    this.lightworld.addLocation('oldMan');
    this.lightworld.addDungeon('aga');
    this.lightworld.addBoss('aga');
    this.lightworld.addLocation('linkHouse');
    this.darkworld.addLocation('bumperCave');
    this.darkworld.addDungeon('gt');
    this.darkworld.addBoss('gt');

    const dwShopKeys = Object.keys(new RetroStaticMapShopsDW());
    const lwShopKeys = Object.keys(new RetroStaticMapShopsLW());

    for(const key of dwShopKeys) {
      this.darkworld.addShop(key);
    }
    for(const key of lwShopKeys) {
      this.lightworld.addShop(key);
    }
  }
  private static fromObjectHelper(data: RetroMapData, obj: any, world: string, mapkey: string) {
    const keys = Object.keys(data[world][mapkey]);
    for(const key of keys) {
      if(obj[world] && obj[world][mapkey] && obj[world][mapkey][key]) {
        data[world][mapkey][key] = obj[world][mapkey][key];
      }
    }
  }

  static fromObject(obj:any):RetroMapData {
    const data = new RetroMapData();
    //do locations
    RetroMapData.fromObjectHelper(data, obj, 'lightworld', 'locations');
    RetroMapData.fromObjectHelper(data, obj, 'darkworld', 'locations');
    //do dungeons
    RetroMapData.fromObjectHelper(data, obj, 'lightworld', 'dungeons');
    RetroMapData.fromObjectHelper(data, obj, 'darkworld', 'dungeons');
    //do bosses
    RetroMapData.fromObjectHelper(data, obj, 'lightworld', 'bosses');
    RetroMapData.fromObjectHelper(data, obj, 'darkworld', 'bosses');
    //do shops
    RetroMapData.fromObjectHelper(data, obj, 'lightworld', 'shops');
    RetroMapData.fromObjectHelper(data, obj, 'darkworld', 'shops');
    //do other fields
    const others = Object.keys(new MapWorld());
    // remove the keys we already did
    others.splice(others.indexOf('locations'), 1);
    others.splice(others.indexOf('dungeons'), 1);
    others.splice(others.indexOf('bosses'), 1);
    others.splice(others.indexOf('shops'), 1);
    for(const key of others) {
      data.lightworld[key] = obj.lightworld[key];
      data.darkworld[key] = obj.darkworld[key];
    }
    return data;
  }
}
