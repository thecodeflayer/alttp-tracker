import {DefaultItemsData} from '@/default-objects/DefaultItems';
import {DefaultDungeonsData} from '@/default-objects/DefaultDungeons';
import {DefaultMapData} from '@/default-objects/DefaultMap';
import {DefaultSettingsData} from '@/default-objects/DefaultSettings';

export class DefaultGameSaves {
  version = '0.0.1';
  data = new DefaultGameSavesData();

  toJSONString() :string {
    return JSON.stringify(this);
  }
  static fromJSON(str: string) :DefaultGameSaves {
    const obj = JSON.parse(str);
    const retval =  new DefaultGameSaves();
    retval.version = obj.version;
    retval.data = DefaultGameSavesData.fromObject(obj.data);
    return retval;
  }
}
export class DefaultGameSavesData {
  game0 = new Game();
  game1 = new Game();
  game2 = new Game();
  game3 = new Game();
  game4 = new Game();


  static fromObject(obj:any):DefaultGameSavesData {
    const data = new DefaultGameSavesData();
    const keys = Object.keys(obj);
    for(const key of keys){
      data[key] = obj[key];
    }
    return data;
  }
  getCopy(): DefaultGameSavesData {
    return JSON.parse(JSON.stringify(this));
  }
}

export class Game {
  items:DefaultItemsData;
  dungeons:DefaultDungeonsData;
  map:DefaultMapData;
  settings:DefaultSettingsData;
  timestamp = undefined;
  versions: GameVersions;
  constructor() {
  }
}
export class GameVersions {
  items: string;
  dungeons: string;
  map: string;
  settings: string;
  constructor(items: string, dungeons: string, map: string, settings: string) {
    this.items = items;
    this.dungeons = dungeons;
    this.map = map;
    this.settings = settings;
  }
}
