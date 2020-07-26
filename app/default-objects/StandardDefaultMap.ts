import {DefaultMap, DefaultMapData, IDefaultMapData, MapWorld} from '@/default-objects/DefaultMap';
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
export class StandardMapData extends DefaultMapData implements IDefaultMapData {
  lightworld = new MapWorld();
  darkworld = new MapWorld();
  constructor() {
    super();
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

  static fromObject(obj:any):StandardMapData {
    const data = new StandardMapData();
    const keys = Object.keys(new MapWorld());
    for(const key of keys) {
      StandardMapData.fromObjectHelper(data, obj, 'lightworld', key);
      StandardMapData.fromObjectHelper(data, obj, 'darkworld', key);
    }

    return data;
  }
}
