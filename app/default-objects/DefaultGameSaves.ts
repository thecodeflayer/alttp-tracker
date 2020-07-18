import {DefaultItems, DefaultItemsData} from '@/default-objects/DefaultItems';
import {DefaultDungeons, DefaultDungeonsData} from '@/default-objects/DefaultDungeons';
import {DefaultMap, DefaultMapData} from '@/default-objects/DefaultMap';
import {DefaultSettings, DefaultSettingsData} from '@/default-objects/DefaultSettings';
import {InvertedMapData} from '@/default-objects/InvertedDefaultMap';
import {StandardMapData} from '@/default-objects/StandardDefaultMap';

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
    const keys = Object.keys(data);
    for(const key of keys){
      if(obj[key]) {
        data[key] = Game.fromObject(obj[key]);
      }
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
  static fromObject(obj:any):Game{
    const game = new Game();
    if(obj.timestamp){
      game.timestamp = obj.timestamp;
      game.settings = obj.settings ? DefaultSettingsData.fromObject(obj.settings) : new DefaultSettingsData();
      game.items = obj.items ? DefaultItemsData.fromObject(obj.items) : new DefaultItemsData();
      game.dungeons = obj.dungeons ? DefaultDungeonsData.fromObject(obj.dungeons) : new DefaultDungeonsData();
      game.map = obj.map ? (game.settings.gameMode === 'inverted' ? InvertedMapData.fromObject(obj.map) : StandardMapData.fromObject(obj.map) ) : new DefaultMapData();
      game.versions = new GameVersions(
        (obj.versions && obj.versions.items) ? obj.versions.items : new DefaultItems().version,
        (obj.versions && obj.versions.dungeons) ? obj.versions.dungeons : new DefaultDungeons().version,
        (obj.versions && obj.versions.map) ? obj.versions.map : new DefaultMap().version,
        (obj.versions && obj.versions.settings) ? obj.versions.items : new DefaultSettings().version,
      );
    }
    return game;
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
