import {DefaultMap, DefaultMapData, IDefaultMapData, MapWorld} from '@/default-objects/DefaultMap';
import {RetroStaticMapShopsDW} from '@/retro/RetroStaticMapShopsDW';
import {RetroStaticMapShopsLW} from '@/retro/RetroStaticMapShopsLW';
import {RetroStaticMapDW} from '@/retro/RetroStaticMapDW';
import {RetroStaticMapLW} from '@/retro/RetroStaticMapLW';
import {RetroStaticMapDungeonsDW} from '@/retro/RetroStaticMapDungeonsDW';
import {RetroStaticMapDungeonsLW} from '@/retro/RetroStaticMapDungeonsLW';

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
export class RetroMapData extends DefaultMapData implements IDefaultMapData{
  lightworld = new MapWorld();
  darkworld = new MapWorld();
  constructor() {
    super();
    const dwLocationKeys = Object.keys(new RetroStaticMapDW());
    const lwLocationKeys = Object.keys(new RetroStaticMapLW());

    for(const key of dwLocationKeys) {
      this.darkworld.addLocation(key);
    }
    for(const key of lwLocationKeys) {
      this.lightworld.addLocation(key);
    }

    const dwDungeonKeys = Object.keys(new RetroStaticMapDungeonsDW());
    const lwDungeonKeys = Object.keys(new RetroStaticMapDungeonsLW());

    for(const key of dwDungeonKeys) {
      this.darkworld.addDungeon(key);
      this.darkworld.addBoss(key);
    }
    for(const key of lwDungeonKeys) {
      this.lightworld.addDungeon(key);
      this.lightworld.addBoss(key);
    }

    const dwShopKeys = Object.keys(new RetroStaticMapShopsDW());
    const lwShopKeys = Object.keys(new RetroStaticMapShopsLW());

    for(const key of dwShopKeys) {
      this.darkworld.addShop(key);
    }
    for(const key of lwShopKeys) {
      this.lightworld.addShop(key);
    }
  }
  getCopy(): IDefaultMapData {
    return JSON.parse(JSON.stringify(this));
  }

  static fromObject(obj:any):RetroMapData {
    const data = new RetroMapData();
    const keys = Object.keys(new MapWorld());
    for(const key of keys) {
      RetroMapData.fromObjectHelper(data, obj, 'lightworld', key);
      RetroMapData.fromObjectHelper(data, obj, 'darkworld', key);
    }

    return data;
  }
}
