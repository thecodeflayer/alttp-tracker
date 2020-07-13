import {
    getBoolean,
    setBoolean,
    getNumber,
    setNumber,
    getString,
    setString,
    hasKey,
    remove,
    clear
} from "tns-core-modules/application-settings";

import {defaultItems} from "~/defaultItems";
import {defaultDungeons} from "~/defaultDungeons";
import {standardDefaultMap} from "~/standard/defaultMap";
import {invertedDefaultMap} from "~/inverted/defaultMap";
import {defaultSettings} from "~/defaultSettings";

import {StaticObjectLoader} from "~/components/StaticObjectLoader";
import {defaultGameSaves} from "~/defaultGameSaves";
import {GameSaveHelper} from "~/GameSaveHelper";

export class ModelManager  {
    items = {};
    dungeons = {};
    map = {};
    appVersion = '0.9.5'
    itemsVersion = '0.0.1';
    dungeonsVersion = '0.0.2';
    mapVersion = '0.1.0';
    settingsVersion = '0.0.1';
    gameSavesVersion = '0.0.1';

    constructor() {
        this.sol = new StaticObjectLoader();
        this.gameSaves = this.validateGameSavesFromStorage();
        this.settings = this.validateSettingsFromStorage();
        this.items = this.validateItemsFromStorage();
        this.dungeons = this.validateDungeonsFromStorage();
        this.map = this.validateMapFromStorage();
        this.initEmptyGameSave();

    }
    validateItemsFromStorage() {
        let retval = JSON.parse(JSON.stringify(defaultItems.data));
        let stored = undefined;
        if(hasKey('items')){
            try {
                stored = JSON.parse(getString('items'));
                if(stored.version && stored.version === this.itemsVersion) {
                    retval = stored.data;
                    console.log('successfully got items from storage!')
                } else {
                    console.log('item versions do not match got:',stored.version, 'wanted:', this.itemsVersion);
                }
            } catch(err) {
                console.error('error getting items from storage', err);
            }
        } else {
            console.log('no items found in storage, loading default');
        }
        return retval;
    }
    validateDungeonsFromStorage() {
        let retval = JSON.parse(JSON.stringify(defaultDungeons.data));
        let stored = undefined;
        if(hasKey('dungeons')){
            try {
                stored = JSON.parse(getString('dungeons'));
                if(stored.version && stored.version === this.dungeonsVersion) {
                    retval = stored.data;
                    console.log('successfully got dungeons from storage!')
                } else {
                    console.log('dungeon versions do not match got:',stored.version, 'wanted:', this.dungeonsVersion);
                }
            } catch(err) {
                console.error('error getting dungeons from storage', err);
            }
        } else {
            console.log('no dungeons found in storage, loading default');
        }
        return retval;
    }
    validateMapFromStorage(gameMode) {
        let retval = JSON.parse(JSON.stringify(this.settings.gameMode == this.sol.STANDARD ? standardDefaultMap.data : invertedDefaultMap.data));
        let stored = undefined;
        if(hasKey('map')){
            try {
                stored = JSON.parse(getString('map'));
                if(stored.version && stored.version === this.mapVersion) {
                    retval = stored.data;
                    console.log('successfully got map from storage!')
                } else {
                    console.log('map versions do not match got:',stored.version, 'wanted:', this.mapVersion);
                }
            } catch(err) {
                console.error('error getting map from storage', err);
            }
        } else {
            console.log('no map found in storage, loading default');
        }
        return retval;
    }
    validateSettingsFromStorage() {
        let retval = JSON.parse(JSON.stringify(defaultSettings.data));
        let stored = undefined;
        if(hasKey('settings')){
            try {
                stored = JSON.parse(getString('settings'));
                if(stored.version && stored.version === this.settingsVersion) {
                    retval = stored.data;
                    console.log('successfully got settings from storage!')
                } else {
                    console.log('settings versions do not match got:',stored.version, 'wanted:', this.settingsVersion);
                }
            } catch(err) {
                console.error('error getting settings from storage', err);
            }
        } else {
            console.log('no settings found in storage, loading default');
        }
        return retval;
    }
    validateGameSavesFromStorage() {
        let retval = JSON.parse(JSON.stringify(defaultGameSaves.data));
        let stored = undefined;
        if(hasKey('gameSaves')){
            try {
                stored = JSON.parse(getString('gameSaves'));
                if(stored.version && stored.version === this.gameSavesVersion) {
                    retval = stored.data;
                    console.log('successfully got game saves from storage!')
                } else {
                    console.log('game saves versions do not match got:',stored.version, 'wanted:', this.gameSavesVersion);
                }
            } catch(err) {
                console.error('error getting game saves from storage', err);
            }
        } else {
            console.log('no game saves found in storage, loading default');
        }
        return retval;
    }
    resetItems() {
        this.items = defaultItems.data;
        this.saveItems();
    }
    getItems() {
        return this.items;
    }
    getItemKeys() {
        return Object.keys(this.items);
    }
    getItem(key) {
        if(Object.keys(this.items).indexOf(key) > -1) {
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
        for(const key of lwKeys) {
            if(savedLW[key].checked) {
                retval = retval + lwMap[key].itemCount;
            }
        }
        const dwMap = this.sol.getStaticMapDW(this.settings.gameMode);
        const dwKeys = Object.keys(dwMap);
        const savedDW = this.map.darkworld.locations;
        for(const key of dwKeys) {
            if(savedDW[key].checked) {
                retval = retval + dwMap[key].itemCount;
            }
        }
        const dungeons = this.sol.getStaticDungeons(this.settings.gameMode, this.settings.itemShuffle);
        const dgnKeys = Object.keys(dungeons);
        const savedDgn = this.dungeons;
        for(const key of dgnKeys) {
            const chests = dungeons[key].maxChests - savedDgn[key].chests;
            retval = retval + chests;
            // if(key !== 'aga' && key !== 'gt' && savedDgn[key].boss){
            //     retval = retval +1;
            // }
            // retval = retval + savedDgn[key].smallkeys;
            // if(savedDgn[key].bosskey) {
            //     retval = retval+1;
            // }
            // if(savedDgn[key].compass) {
            //     retval = retval+1;
            // }
            // if(savedDgn[key].map) {
            //     retval = retval+1;
            // }
        }
        return retval;
    }
    getItemMax() {
        if(this.settings.gameMode === this.sol.STANDARD) {
            return this.settings.itemShuffle === GameSaveHelper.itemShuffleOptions.standard.id ? 155
                : this.settings.itemShuffle === GameSaveHelper.itemShuffleOptions.mc.id ? (155 + 20)
                : this.settings.itemShuffle === GameSaveHelper.itemShuffleOptions.mcsk.id ? (155 + 20 + 28)
                : (155 + 30 + 28);
        } else if(this.settings.gameMode === this.sol.INVERTED) {
            return this.settings.itemShuffle === GameSaveHelper.itemShuffleOptions.standard.id ? 155
                : this.settings.itemShuffle === GameSaveHelper.itemShuffleOptions.mc.id ? (155 + 20)
                    : this.settings.itemShuffle === GameSaveHelper.itemShuffleOptions.mcsk.id ? (155 + 20 + 28)
                        : (155 + 30 + 28);
        }
    }
    saveItems() {
        const d = JSON.parse(JSON.stringify(defaultItems));
        d.data = this.items;
        setString('items', JSON.stringify(d));
        this.saveCurrentGame();
    }
    resetDungeons() {
        this.dungeons = JSON.parse(JSON.stringify(defaultDungeons.data));
        const staticDungeons = this.sol.getStaticDungeons(this.settings.gameMode, this.settings.itemShuffle);
        const keys = Object.keys(this.dungeons);
        for(const key of keys){
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
        if(Object.keys(this.dungeons).indexOf(key) > -1) {
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
    saveDungeons() {
        const d = JSON.parse(JSON.stringify(defaultDungeons));
        d.data = this.dungeons;
        setString('dungeons', JSON.stringify(d));
        this.saveCurrentGame();
    }
    resetMap() {
        this.map = this.settings.gameMode == this.sol.STANDARD ? standardDefaultMap.data : invertedDefaultMap.data;
        this.saveMap();
    }
    saveMap() {
        const d = JSON.parse(JSON.stringify(this.settings.gameMode == this.sol.STANDARD ? standardDefaultMap : invertedDefaultMap));
        d.data = this.map;
        setString('map', JSON.stringify(d));
        this.saveCurrentGame();
    }
    validateLocales() {
        const lkeys = Object.keys(this.sol.getStaticMapLW(this.settings.gameMode));
        const ldkeys = Object.keys(this.sol.getStaticMapDungeonsLW(this.settings.gameMode));
        const dkeys = Object.keys(this.sol.getStaticMapDW(this.settings.gameMode));
        const ddkeys = Object.keys(this.sol.getStaticMapDungeonsDW(this.settings.gameMode));
        console.log(JSON.stringify(this.dungeons));
        for(const key of lkeys){
            this.map.lightworld.locations[key].klass = this.sol.getStaticMapLW(this.settings.gameMode)[key].validate(this.items,this.dungeons) ? 'locale-green' : 'locale-red';
        }
        for(const key of ldkeys){
            this.map.lightworld.dungeons[key].klass = this.sol.getStaticMapDungeonsLW(this.settings.gameMode)[key].validate(this.items,this.dungeons) ? 'locale-green' : 'locale-red';
            this.map.lightworld.bosses[key].klass = this.sol.getStaticMapDungeonsLW(this.settings.gameMode)[key].validateBoss(this.items,this.dungeons) ? 'locale-green' : 'locale-red';
        }
        for(const key of dkeys){
            this.map.darkworld.locations[key].klass = this.sol.getStaticMapDW(this.settings.gameMode)[key].validate(this.items,this.dungeons) ? 'locale-green' : 'locale-red';
        }
        for(const key of ddkeys){
            this.map.darkworld.dungeons[key].klass = this.sol.getStaticMapDungeonsDW(this.settings.gameMode)[key].validate(this.items,this.dungeons) ? 'locale-green' : 'locale-red';
            this.map.darkworld.bosses[key].klass = this.sol.getStaticMapDungeonsDW(this.settings.gameMode)[key].validateBoss(this.items,this.dungeons) ? 'locale-green' : 'locale-red';
        }
    }
    resetSettings() {
        this.settings = defaultSettings.data;
        this.saveSettings();
    }
    saveSettings() {
        const d = JSON.parse(JSON.stringify(defaultSettings));
        d.data = this.settings;
        setString('settings', JSON.stringify(d));
        this.saveCurrentGame();
    }
    getGameMode() {
        return this.settings.gameMode;
    }
    getItemShuffle() {
        return this.settings.itemShuffle;
    }
    getGameModeMap() {
        if(this.settings.gameMode === this.sol.STANDARD) {
            return this.sol.STANDARD;
        } else if(this.settings.gameMode === this.sol.INVERTED) {
            return this.sol.INVERTED;
        }
    }
    createGame(id, itemShuffle, gameMode) {
        console.log(id,itemShuffle,gameMode);
        if(!id || !itemShuffle || !gameMode) {throw new Error('create game failed!')}
        const game = {
            items: JSON.parse(JSON.stringify(defaultItems.data)),
            dungeons: JSON.parse(JSON.stringify(defaultDungeons.data)),
            map: JSON.parse(JSON.stringify(gameMode == this.sol.STANDARD ? standardDefaultMap.data : invertedDefaultMap.data)),
            settings: JSON.parse(JSON.stringify(defaultSettings.data)),
            timestamp: Date.now(),
            versions: {
                items: JSON.parse(JSON.stringify(this.itemsVersion)),
                dungeons: JSON.parse(JSON.stringify(this.dungeonsVersion)),
                map: JSON.parse(JSON.stringify(this.mapVersion)),
                settings: JSON.parse(JSON.stringify(this.settingsVersion)),
            }
        };
        game.settings.gameSlot = id;
        game.settings.itemShuffle = itemShuffle;
        game.settings.gameMode = gameMode;
        const staticDungeons = this.sol.getStaticDungeons(game.settings.gameMode, game.settings.itemShuffle);
        const keys = Object.keys(game.dungeons);
        for(const key of keys){
            game.dungeons[key].smallkeys = game.settings.itemShuffle === GameSaveHelper.itemShuffleOptions.standard.id ? staticDungeons[key].maxSmallkeys : 0;
            game.dungeons[key].chests = staticDungeons[key].maxChests;
        }
        this.gameSaves[id]=game;
        const d = JSON.parse(JSON.stringify(defaultGameSaves));
        d.data = this.gameSaves;
        setString('gameSaves', JSON.stringify(d));
    }
    loadGame(id) {
        if(!this.validateGame(this.gameSaves[id])) {
            console.log('invalid game, cannot load');
            return;
        }
        this.settings = JSON.parse(JSON.stringify(this.gameSaves[id].settings));
        this.map = JSON.parse(JSON.stringify(this.gameSaves[id].map));
        this.dungeons = JSON.parse(JSON.stringify(this.gameSaves[id].dungeons));
        this.items = JSON.parse(JSON.stringify(this.gameSaves[id].items));
        this.saveSettings();
        this.saveCurrentGame();
    }
    deleteGame(id) {
        if(!this.allowGameDelete() || this.settings.gameSlot === id){
            console.log('cannot delete game');
            return;
        }
        this.gameSaves[id] = {};
        const d = JSON.parse(JSON.stringify(defaultGameSaves));
        d.data = this.gameSaves;
        setString('gameSaves', JSON.stringify(d));
    }
    allowGameDelete() {
        let saves = 0;
        const keys = Object.keys(this.gameSaves);
        for(const key of keys) {
            if(this.gameSaves[key].timestamp){
                saves++;
            }
        }
        return saves > 1;
    }
    saveCurrentGame() {
        const game = this.settings.gameSlot;
        this.gameSaves[game].items = JSON.parse(JSON.stringify(this.items));
        this.gameSaves[game].dungeons = JSON.parse(JSON.stringify(this.dungeons));
        this.gameSaves[game].map = JSON.parse(JSON.stringify(this.map));
        this.gameSaves[game].settings = JSON.parse(JSON.stringify(this.settings));
        this.gameSaves[game].timestamp = Date.now();
        this.gameSaves[game].versions = {
            items: JSON.parse(JSON.stringify(this.itemsVersion)),
            dungeons: JSON.parse(JSON.stringify(this.dungeonsVersion)),
            map: JSON.parse(JSON.stringify(this.mapVersion)),
            settings: JSON.parse(JSON.stringify(this.settingsVersion)),
        };
        const d = JSON.parse(JSON.stringify(defaultGameSaves));
        d.data = this.gameSaves;
        setString('gameSaves', JSON.stringify(d));
    }
    validateGame(game) { // validate versions are currently acceptable
        return (game.versions.items === this.itemsVersion)
                && (game.versions.dungeons === this.dungeonsVersion)
                && (game.versions.map  === this.mapVersion)
                && (game.versions.settings === this.settingsVersion);
    }
    initEmptyGameSave() {
        if (!this.gameSaves.game0.timestamp) {
            console.log('init from default game saves');
            if(!this.settings.gameSlot) {
                this.settings.gameSlot = 'game0';
            }
            //game saves loaded from default so init first slot with loaded values
            this.saveCurrentGame();
        }
    }
}
