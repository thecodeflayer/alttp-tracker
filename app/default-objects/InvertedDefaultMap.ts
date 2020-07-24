import {DefaultMap, DefaultMapData, IDefaultMapData, MapWorld} from '@/default-objects/DefaultMap';
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

export class InvertedMapData extends DefaultMapData implements IDefaultMapData{
  lightworld = new MapWorld();
  darkworld = new MapWorld();
  constructor() {
    super();
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
  static fromObject(obj:any):InvertedMapData {
    const data = new InvertedMapData();
    const keys = Object.keys(new MapWorld());
    for(const key of keys) {
      InvertedMapData.fromObjectHelper(data, obj, 'lightworld', key);
      InvertedMapData.fromObjectHelper(data, obj, 'darkworld', key);
    }

    return data;
  }


}
