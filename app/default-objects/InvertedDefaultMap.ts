import {DefaultMap, IDefaultMapData, MapWorld} from '@/default-objects/DefaultMap';
import {InvertedStaticMapDW} from '@/inverted/InvertedStaticMapDW';
import {InvertedStaticMapLW} from '@/inverted/InvertedStaticMapLW';
import {InvertedStaticMapDungeonsDW} from '@/inverted/InvertedStaticMapDungeonsDW';
import {InvertedStaticMapDungeonsLW} from '@/inverted/InvertedStaticMapDungeonsLW';

export class InvertedDefaultMap extends DefaultMap{
  data = new InvertedMapData();
  toJSONString():string{
    return JSON.stringify(this);
  }
  static fromJSON(str: string) :InvertedDefaultMap {
    const obj = JSON.parse(str);
    const retval =  new InvertedDefaultMap();
    retval.version = obj.version;
    retval.data = InvertedMapData.fromObject(obj.data);
    return retval;
  }
}

export class InvertedMapData implements IDefaultMapData{
  lightworld = new MapWorld();
  darkworld = new MapWorld();
  constructor() {

    const dwLocationKeys = Object.keys(new InvertedStaticMapDW());
    const lwLocationKeys = Object.keys(new InvertedStaticMapLW());

    for(const key of dwLocationKeys) {
      this.darkworld.addLocation(key);
    }
    for(const key of lwLocationKeys) {
      this.lightworld.addLocation(key);
    }

    const dwDungeonKeys = Object.keys(new InvertedStaticMapDungeonsDW());
    const lwDungeonKeys = Object.keys(new InvertedStaticMapDungeonsLW());

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
  private static fromObjectHelper(data: InvertedMapData, obj: any, world: string, mapkey: string) {
    const keys = Object.keys(data[world][mapkey]);
    for(const key of keys) {
      if(obj[world] && obj[world][mapkey] && obj[world][mapkey][key]) {
        data[world][mapkey][key] = obj[world][mapkey][key];
      }
    }
  }

  static fromObject(obj:any):InvertedMapData {
    const data = new InvertedMapData();
    //do locations
    InvertedMapData.fromObjectHelper(data, obj, 'lightworld', 'locations');
    InvertedMapData.fromObjectHelper(data, obj, 'darkworld', 'locations');
    //do dungeons
    InvertedMapData.fromObjectHelper(data, obj, 'lightworld', 'dungeons');
    InvertedMapData.fromObjectHelper(data, obj, 'darkworld', 'dungeons');
    //do bosses
    InvertedMapData.fromObjectHelper(data, obj, 'lightworld', 'bosses');
    InvertedMapData.fromObjectHelper(data, obj, 'darkworld', 'bosses');
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
