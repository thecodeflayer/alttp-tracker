import {DefaultMap, IDefaultMapData, MapWorld} from '@/default-objects/DefaultMap';
import {StandardStaticMapDW} from '@/standard/StandardStaticMapDW';
import {StandardStaticMapLW} from '@/standard/StandardStaticMapLW';
import {StandardStaticMapDungeonsDW} from '@/standard/StandardStaticMapDungeonsDW';
import {StandardStaticMapDungeonsLW} from '@/standard/StandardStaticMapDungeonsLW';

export class StandardDefaultMap extends DefaultMap{
  data = new StandardMapData();

  toJSONString() :string {
    return JSON.stringify(this);
  }
  static fromJSON(str: string) :StandardDefaultMap {
    const obj = JSON.parse(str);
    const retval =  new StandardDefaultMap();
    retval.version = obj.version;
    retval.data = StandardMapData.fromObject(obj.data);
    return (retval as DefaultMap);
  }
}
export class StandardMapData implements IDefaultMapData{
  lightworld = new MapWorld();
  darkworld = new MapWorld();
  constructor() {

    const dwLocationKeys = Object.keys(new StandardStaticMapDW());
    const lwLocationKeys = Object.keys(new StandardStaticMapLW());

    for(const key of dwLocationKeys) {
      this.darkworld.addLocation(key);
    }
    for(const key of lwLocationKeys) {
      this.lightworld.addLocation(key);
    }

    const dwDungeonKeys = Object.keys(new StandardStaticMapDungeonsDW());
    const lwDungeonKeys = Object.keys(new StandardStaticMapDungeonsLW());

    for(const key of dwDungeonKeys) {
      this.darkworld.addDungeon(key);
      this.darkworld.addBoss(key);
    }
    for(const key of lwDungeonKeys) {
      this.lightworld.addDungeon(key);
      this.lightworld.addBoss(key);
    }
  }
  getCopy(): IDefaultMapData {
    return JSON.parse(JSON.stringify(this));
  }
  private static fromObjectHelper(data: StandardMapData, obj: any, world: string, mapkey: string) {

    const keys = Object.keys(data[world][mapkey]);
    for(const key of keys) {
      if(obj[world] && obj[world][mapkey] && obj[world][mapkey][key]) {
        data[world][mapkey][key] = obj[world][mapkey][key];
      }
    }
  }

  static fromObject(obj:any):StandardMapData {
    const data = new StandardMapData();
    //do locations
    StandardMapData.fromObjectHelper(data, obj, 'lightworld', 'locations');
    StandardMapData.fromObjectHelper(data, obj, 'darkworld', 'locations');
    //do dungeons
    StandardMapData.fromObjectHelper(data, obj, 'lightworld', 'dungeons');
    StandardMapData.fromObjectHelper(data, obj, 'darkworld', 'dungeons');
    //do bosses
    StandardMapData.fromObjectHelper(data, obj, 'lightworld', 'bosses');
    StandardMapData.fromObjectHelper(data, obj, 'darkworld', 'bosses');
    //do other fields
    const others = Object.keys(new MapWorld());
    // remove the keys we already did
    others.splice(others.indexOf('locations'), 1);
    others.splice(others.indexOf('dungeons'), 1);
    others.splice(others.indexOf('bosses'), 1);
    for(const key of others) {
      data.lightworld[key] = obj.lightworld[key];
      data.darkworld[key] = obj.darkworld[key];
    }

    return data;
  }
}
