import {
  getString,
  setString,
  hasKey
} from 'tns-core-modules/application-settings';

import {StaticObjectLoader} from '@/utils/StaticObjectLoader';
import {GameEditObj, GameSaveHelper} from '@/utils/GameSaveHelper';

import {DefaultItems, DefaultItemsData} from '@/default-objects/DefaultItems';
import {DefaultSettings, DefaultSettingsData} from '@/default-objects/DefaultSettings';
import {DefaultDungeons, DefaultDungeonsData} from '@/default-objects/DefaultDungeons';
import {StandardDefaultMap, StandardMapData} from '@/default-objects/StandardDefaultMap';
import {InvertedDefaultMap, InvertedMapData} from '@/default-objects/InvertedDefaultMap';
import {IDefaultMapData} from '@/default-objects/DefaultMap';
import {DefaultGameSaves, DefaultGameSavesData, GameVersions, Game} from '@/default-objects/DefaultGameSaves';
import {RetroDefaultMap, RetroMapData} from '@/default-objects/RetroDefaultMap';
import {DefaultEntranceData, DefaultEntrances} from '@/default-objects/DefaultEntrances';

export class ModelManager {
  items: DefaultItemsData;
  dungeons: DefaultDungeonsData;
  map: IDefaultMapData;
  settings: DefaultSettingsData;
  gameSaves: DefaultGameSavesData;
  editGame: GameEditObj;
  entrances: DefaultEntranceData;

  appVersion = '1.1.1';
  itemsVersion = '0.0.1';
  dungeonsVersion = '0.0.2';
  mapVersion = '0.0.1';
  settingsVersion = '0.0.1';
  gameSavesVersion = '0.0.1';
  entrancesVersion = '0.0.1';

  sol: StaticObjectLoader;

  constructor() {
    this.sol = new StaticObjectLoader();
    this.gameSaves = this.validateGameSavesFromStorage();
    this.settings = this.validateSettingsFromStorage();
    this.items = this.validateItemsFromStorage();
    this.dungeons = this.validateDungeonsFromStorage();
    this.map = this.validateMapFromStorage();
    this.entrances = this.validateEntrancesFromStorage();
    this.initEmptyGameSave();
  }

  validateItemsFromStorage() : DefaultItemsData{
    let retval = new DefaultItemsData();
    let stored = undefined;
    if (hasKey('items')) {
      try {
        stored = DefaultItems.fromJSON(getString('items'));
        if (stored.version && stored.version === this.itemsVersion) {
          retval = stored.data;
          console.log('successfully got items from storage!');
        } else {
          console.log('item versions do not match got:', stored.version, 'wanted:', this.itemsVersion);
        }
      } catch (err) {
        console.error('error getting items from storage', err);
      }
    } else {
      console.log('no items found in storage, loading default');
    }
    return retval;
  }

  validateDungeonsFromStorage() :DefaultDungeonsData{
    let retval = new DefaultDungeonsData();
    let stored = undefined;
    if (hasKey('dungeons')) {
      try {
        stored = DefaultDungeons.fromJSON(getString('dungeons'));
        if (stored.version && stored.version === this.dungeonsVersion) {
          retval = stored.data;
          console.log('successfully got dungeons from storage!');
        } else {
          console.log('dungeon versions do not match got:', stored.version, 'wanted:', this.dungeonsVersion);
        }
      } catch (err) {
        console.error('error getting dungeons from storage', err);
      }
    } else {
      console.log('no dungeons found in storage, loading default');
    }
    return retval;
  }

  validateEntrancesFromStorage() :DefaultEntranceData {
    if(this.settings.entranceShuffle === undefined || this.settings.entranceShuffle === 'none'){
      console.log('No entrances required. Setting to undefined.');
      return undefined;
    }
    let retval = new DefaultEntranceData();
    let stored = undefined;
    if (hasKey('entrances')) {
      try {
        stored = DefaultEntrances.fromJSON(getString('entrances'));
        if (stored.version && stored.version === this.entrancesVersion) {
          retval = stored.data;
          console.log('successfully got entrances from storage!');
        } else {
          console.log('entrances versions do not match got:', stored.version, 'wanted:', this.dungeonsVersion);
        }
      } catch (err) {
        console.error('error getting entrances from storage', err);
      }
    } else {
      console.log('no entrances found in storage, loading default');
    }
    return retval;
  }

  validateMapFromStorage() :IDefaultMapData{
    let retval = this.settings.gameMode == this.sol.RETRO ? new RetroMapData()
      : this.settings.gameMode == this.sol.INVERTED ? new InvertedMapData()
        : new StandardMapData();
    let stored = undefined;
    if (hasKey('map')) {
      try {
        stored = this.settings.gameMode == this.sol.RETRO ? RetroDefaultMap.fromJSON(getString('map'))
          : this.settings.gameMode == this.sol.INVERTED ? InvertedDefaultMap.fromJSON(getString('map'))
            : StandardDefaultMap.fromJSON(getString('map'));
        if (stored.version && stored.version === this.mapVersion) {
          retval = stored.data;
          console.log('successfully got map from storage!');
        } else {
          console.log('map versions do not match got:', stored.version, 'wanted:', this.mapVersion);
        }
      } catch (err) {
        console.error('error getting map from storage', err);
      }
    } else {
      console.log('no map found in storage, loading default');
    }
    return retval;
  }

  validateSettingsFromStorage() :DefaultSettingsData{
    let retval = new DefaultSettingsData();
    let stored = undefined;
    if (hasKey('settings')) {
      try {
        stored = DefaultSettings.fromJSON(getString('settings'));
        if (stored.version && stored.version === this.settingsVersion) {
          retval = stored.data;
          console.log('successfully got settings from storage!');
        } else {
          console.log('settings versions do not match got:', stored.version, 'wanted:', this.settingsVersion);
        }
      } catch (err) {
        console.error('error getting settings from storage', err);
      }
    } else {
      console.log('no settings found in storage, loading default');
    }
    return retval;
  }

  validateGameSavesFromStorage() :DefaultGameSavesData{
    let retval = new DefaultGameSavesData();
    let stored = undefined;
    if (hasKey('gameSaves')) {
      try {
        stored = DefaultGameSaves.fromJSON(getString('gameSaves'));
        if (stored.version && stored.version === this.gameSavesVersion) {
          retval = stored.data;
          console.log('successfully got game saves from storage!');
        } else {
          console.log('game saves versions do not match got:', stored.version, 'wanted:', this.gameSavesVersion);
        }
      } catch (err) {
        console.error('error getting game saves from storage', err);
      }
    } else {
      console.log('no game saves found in storage, loading default');
    }
    return retval;
  }

  resetItems() :void{
    this.items = new DefaultItemsData();
    this.saveItems();
  }

  getItems() :DefaultItemsData {
    return this.items;
  }

  getItemKeys() {
    const retval = Object.keys(this.items);
    // For handling RETRO
    if(retval.indexOf('quiver') > -1 && (this.settings.gameMode == this.sol.INVERTED || this.settings.gameMode == this.sol.STANDARD)) {
      retval.splice(retval.indexOf('quiver'), 1);
    }
    return retval;
  }

  getItem(key) {
    if (Object.keys(this.items).indexOf(key) > -1) {
      return this.items[key];
    } else {
      console.error('no item with that key!', key);
    }
  }

  setItem(key, value) {
    this.items[key] = value;
    this.saveItems();
  }

  getItemCount() {
    let retval = 0;
    const lwMap = this.sol.getStaticMapLW(this.settings.gameMode);
    const lwKeys = Object.keys(lwMap);
    const savedLW = this.map.lightworld.locations;
    for (const key of lwKeys) {
      if (savedLW[key].checked) {
        retval = retval + lwMap[key].itemCount;
      }
    }
    const dwMap = this.sol.getStaticMapDW(this.settings.gameMode);
    const dwKeys = Object.keys(dwMap);
    const savedDW = this.map.darkworld.locations;
    for (const key of dwKeys) {
      if (savedDW[key].checked) {
        retval = retval + dwMap[key].itemCount;
      }
    }
    const dungeons = this.sol.getStaticDungeons(this.settings.gameMode, this.settings.itemShuffle);
    const dgnKeys = Object.keys(dungeons);
    const savedDgn = this.dungeons;
    for (const key of dgnKeys) {
      const chests = dungeons[key].maxChests - savedDgn[key].chests;
      retval = retval + chests;
    }
    return retval;
  }

  getItemMax() {
    if (this.settings.gameMode === this.sol.STANDARD || this.settings.gameMode === this.sol.INVERTED) {
      return this.settings.itemShuffle === GameSaveHelper.itemShuffleOptions.standard.id ? 153
        : this.settings.itemShuffle === GameSaveHelper.itemShuffleOptions.mc.id ? (153 + 22)
          : this.settings.itemShuffle === GameSaveHelper.itemShuffleOptions.mcsk.id ? (153 + 22 + 28)
            : (153 + 33 + 28);
    } else if(this.settings.gameMode === this.sol.RETRO) {
      return this.settings.itemShuffle === GameSaveHelper.itemShuffleOptions.standard.id ? (153 + 28)
        : this.settings.itemShuffle === GameSaveHelper.itemShuffleOptions.mc.id ? (153 + 22 + 28)
          : this.settings.itemShuffle === GameSaveHelper.itemShuffleOptions.mcsk.id ? (153 + 22 + 28)
            : (153 + 33 + 28);
    }
  }

  saveItems(skipGameSave?:boolean) {
    const d = new DefaultItems();
    d.data = this.items;
    setString('items', d.toJSONString());
    if(!skipGameSave){
      this.saveCurrentGame();
    }
  }

  resetDungeons() {
    this.dungeons = new DefaultDungeonsData();
    const staticDungeons = this.sol.getStaticDungeons(this.settings.gameMode, this.settings.itemShuffle);
    const keys = Object.keys(this.dungeons);
    for (const key of keys) {
      this.dungeons[key].smallkeys = this.settings.itemShuffle === GameSaveHelper.itemShuffleOptions.standard.id ? staticDungeons[key].maxSmallkeys : 0;
      this.dungeons[key].chests = staticDungeons[key].maxChests;
    }

    this.saveDungeons();
  }

  getDungeons() {
    return this.dungeons;
  }

  getDungeonKeys() {
    return Object.keys(this.dungeons);
  }

  getDungeon(key) {
    if (Object.keys(this.dungeons).indexOf(key) > -1) {
      return this.dungeons[key];
    } else {
      console.error('no dungeon with that key!', key);
    }
  }

  getDungeonValue(dungeonKey, key) {
    return this.dungeons[dungeonKey][key];
  }

  setDungeonValue(dungeonKey, key, value) {
    this.dungeons[dungeonKey][key] = value;
    this.saveDungeons();
  }

  saveDungeons(skipGameSave?:boolean) {
    const d = new DefaultDungeons();
    d.data = this.dungeons;
    setString('dungeons', d.toJSONString());
    if(!skipGameSave){
      this.saveCurrentGame();
    }
  }

  resetMap() {
    this.map = this.settings.gameMode == this.sol.RETRO ? new RetroMapData()
      : this.settings.gameMode == this.sol.INVERTED ? new InvertedMapData() : new StandardMapData();
    this.saveMap();
  }

  saveMap(skipGameSave?:boolean) {
    const d = this.settings.gameMode == this.sol.RETRO ? new RetroDefaultMap()
      : this.settings.gameMode == this.sol.INVERTED ? new InvertedDefaultMap() : new StandardDefaultMap();
    d.data = this.map;
    setString('map', d.toJSONString());
    if(!skipGameSave){
      this.saveCurrentGame();
    }
  }

  validateLocales() {
    const lkeys = Object.keys(this.sol.getStaticMapLW(this.settings.gameMode));
    const ldkeys = Object.keys(this.sol.getStaticMapDungeonsLW(this.settings.gameMode));
    const dkeys = Object.keys(this.sol.getStaticMapDW(this.settings.gameMode));
    const ddkeys = Object.keys(this.sol.getStaticMapDungeonsDW(this.settings.gameMode));
    const lskeys = Object.keys(this.sol.getStaticMapShopsLW(this.settings.gameMode));
    const dskeys = Object.keys(this.sol.getStaticMapShopsDW(this.settings.gameMode));
    for (const key of lkeys) {
      this.map.lightworld.locations[key].klass = this.sol.getStaticMapLW(this.settings.gameMode)[key].validate(this.items, this.dungeons) ? 'locale-green' : 'locale-red';
    }
    for (const key of ldkeys) {
      this.map.lightworld.dungeons[key].klass = this.sol.getStaticMapDungeonsLW(this.settings.gameMode)[key].validate(this.items, this.dungeons, this.settings) ? 'locale-green' : 'locale-red';
      this.map.lightworld.bosses[key].klass = this.sol.getStaticMapDungeonsLW(this.settings.gameMode)[key].validateBoss(this.items, this.dungeons, this.settings) ? 'locale-green' : 'locale-red';
    }
    for (const key of dkeys) {
      this.map.darkworld.locations[key].klass = this.sol.getStaticMapDW(this.settings.gameMode)[key].validate(this.items, this.dungeons) ? 'locale-green' : 'locale-red';
    }
    for (const key of ddkeys) {
      this.map.darkworld.dungeons[key].klass = this.sol.getStaticMapDungeonsDW(this.settings.gameMode)[key].validate(this.items, this.dungeons, this.settings) ? 'locale-green' : 'locale-red';
      this.map.darkworld.bosses[key].klass = this.sol.getStaticMapDungeonsDW(this.settings.gameMode)[key].validateBoss(this.items, this.dungeons, this.settings) ? 'locale-green' : 'locale-red';
    }
    for(const key of lskeys) {
      this.map.lightworld.shops[key].klass = this.sol.getStaticMapShopsLW(this.settings.gameMode)[key].validate(this.items, this.dungeons, this.settings) ? 'locale-green' : 'locale-red';
    }
    for(const key of dskeys) {
      this.map.darkworld.shops[key].klass = this.sol.getStaticMapShopsDW(this.settings.gameMode)[key].validate(this.items, this.dungeons, this.settings) ? 'locale-green' : 'locale-red';
    }
  }

  resetSettings() {
    this.settings = new DefaultSettingsData();
    this.saveSettings();
  }

  saveSettings(skipGameSave?:boolean) {
    const d = new DefaultSettings();
    d.data = this.settings;
    //console.log('saving game', d.toJSONString());
    setString('settings', d.toJSONString());
    if(!skipGameSave) {
      this.saveCurrentGame();
    }
  }

  getGameMode() {
    return this.settings.gameMode;
  }

  getItemShuffle() {
    return this.settings.itemShuffle;
  }

  getGameModeMap() {
    if (this.settings.gameMode === this.sol.STANDARD || this.settings.gameMode === this.sol.RETRO) {
      return this.sol.STANDARD;
    } else if (this.settings.gameMode === this.sol.INVERTED) {
      return this.sol.INVERTED;
    }
  }

  createGame(id :string, itemShuffle: string, gameMode: string, goal: string, triforceGoal: number, openGT: number, openGanon:number, entranceShuffle: string) :void{
    console.log(id, itemShuffle, entranceShuffle, gameMode, goal);
    if (!id || !itemShuffle || !gameMode || !goal || !entranceShuffle) {
      throw new Error('create game failed!');
    }
    const game = new Game();
    game.items = new DefaultItemsData();
    game.dungeons = new DefaultDungeonsData();
    game.map = gameMode == this.sol.RETRO ? new RetroMapData()
      : this.sol.INVERTED ? new InvertedMapData() : new StandardMapData();
    game.settings = new DefaultSettingsData();
    game.timestamp = Date.now();
    game.versions = new GameVersions(
      this.itemsVersion,
      this.dungeonsVersion,
      this.mapVersion,
      this.settingsVersion,
      this.entrancesVersion);
    game.settings.gameSlot = id;
    game.settings.itemShuffle = itemShuffle;
    game.settings.gameMode = gameMode;
    game.settings.goal = goal;
    game.settings.triforceGoal = triforceGoal;
    game.settings.openGT = openGT;
    game.settings.openGanon = openGanon;
    game.settings.entranceShuffle = entranceShuffle;
    const staticDungeons = this.sol.getStaticDungeons(game.settings.gameMode, game.settings.itemShuffle);
    const keys = Object.keys(game.dungeons);
    for (const key of keys) {
      game.dungeons[key].smallkeys = game.settings.itemShuffle === GameSaveHelper.itemShuffleOptions.standard.id ? staticDungeons[key].maxSmallkeys : 0;
      game.dungeons[key].chests = staticDungeons[key].maxChests;
    }
    this.gameSaves[id] = game;
    const d = new DefaultGameSaves();
    game.entrances = game.settings.entranceShuffle === GameSaveHelper.entranceShuffleOptions.none.id ? undefined : new DefaultEntranceData();
    d.data = this.gameSaves;
    setString('gameSaves', d.toJSONString());
    this.editGame = GameSaveHelper.parseGameSaves(this)[id];
  }

  loadGame(id) {
    if (!this.validateGame(this.gameSaves[id])) {
      console.log('invalid game, cannot load');
      return;
    }
    this.settings = DefaultSettingsData.fromObject(this.gameSaves[id].settings);
    this.map = this.settings.gameMode == this.sol.RETRO ? RetroMapData.fromObject(this.gameSaves[id].map)
      : this.settings.gameMode == this.sol.INVERTED ? InvertedMapData.fromObject(this.gameSaves[id].map)
        : StandardMapData.fromObject(this.gameSaves[id].map);
    this.dungeons = DefaultDungeonsData.fromObject(this.gameSaves[id].dungeons);
    this.items = DefaultItemsData.fromObject(this.gameSaves[id].items);
    this.entrances = this.settings.entranceShuffle === GameSaveHelper.entranceShuffleOptions.none.id ? undefined : DefaultEntranceData.fromObject(this.gameSaves[id].entrances);
    this.saveSettings();
    this.saveCurrentGame();
  }

  deleteGame(id) {
    if (!this.allowGameDelete() || this.settings.gameSlot === id) {
      console.log('cannot delete game');
      return;
    }
    this.gameSaves[id] = new Game();
    const d = new DefaultGameSaves();
    d.data = this.gameSaves;
    setString('gameSaves', d.toJSONString());
    this.editGame = GameSaveHelper.parseGameSaves(this)[id];
  }

  allowGameDelete() {
    let saves = 0;
    const keys = Object.keys(this.gameSaves);
    for (const key of keys) {
      if (this.gameSaves[key].timestamp) {
        saves++;
      }
    }
    return saves > 1;
  }

  saveCurrentGame() {
    console.log('saving game');
    const game = this.settings.gameSlot;
    this.gameSaves[game].items = this.items.getCopy();
    this.gameSaves[game].dungeons = this.dungeons.getCopy();
    this.gameSaves[game].map = this.map.getCopy();
    this.gameSaves[game].settings = this.settings.getCopy();
    this.gameSaves[game].timestamp = Date.now();
    this.gameSaves[game].versions = new GameVersions(
      this.itemsVersion,
      this.dungeonsVersion,
      this.mapVersion,
      this.settingsVersion,
      this.entrancesVersion
    );
    const d = new DefaultGameSaves();
    d.data = this.gameSaves;
    this.saveSettings(true);
    this.saveItems(true);
    this.saveDungeons(true);
    this.saveMap(true);
    setString('gameSaves', d.toJSONString());
  }

  validateGame(game) { // validate versions are currently acceptable
    return (game.versions.items === this.itemsVersion)
      && (game.versions.dungeons === this.dungeonsVersion)
      && (game.versions.map === this.mapVersion)
      && (game.versions.settings === this.settingsVersion);
  }

  initEmptyGameSave() {
    if (!this.gameSaves.game0.timestamp) {
      console.log('init a default game save in game0');
      this.saveCurrentGame();
    }
  }
}
