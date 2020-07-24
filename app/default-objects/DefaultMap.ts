export abstract class DefaultMap {
  version = '0.0.1';
  data: IDefaultMapData;
  abstract toJSONString():string;
  static fromJSON(str: string):DefaultMap{
    throw new Error('override this method.');
  }
}
export interface IDefaultMapData {
  lightworld:MapWorld;
  darkworld:MapWorld;
  getCopy():IDefaultMapData;
}

export class MapWorld {
  mode = 0; //0 for map, 1 for location list
  scale = 1;
  x = 0;
  y = 0;
  centerKey = undefined;
  scrollY = 0;
  filterList = 0;
  locations = {};
  dungeons = {};
  bosses = {};
  shops = {};
  showMode = 'locations';
  addLocation(key: string) :void{
    this.locations[key] = {
      klass: 'locale-red',
      checked: false
    };
  }
  addDungeon(key: string) :void{
    this.dungeons[key] = {klass: 'locale-red'};
  }
  addBoss(key: string) :void{
    this.bosses[key] = {klass: 'locale-red'};
  }
  addShop(key: string) :void{
    this.shops[key] = {
      klass: 'locale-red',
      checked: false
    };
  }

}
