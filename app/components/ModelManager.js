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
import {defaultMap} from "~/defaultMap";
import {defaultSettings} from "~/defaultSettings";

import {StaticObjectLoader} from "~/components/StaticObjectLoader";
import {defaultGameSaves} from "~/defaultGameSaves";

export class ModelManager  {
    items = {};
    dungeons = {};
    map = {};
    appVersion = '0.9.3'
    itemsVersion = '0.0.1';
    dungeonsVersion = '0.0.2';
    mapVersion = '0.0.1';
    settingsVersion = '0.0.1';
    gameSavesVersion = '0.0.1';

    constructor() {
        this.items = this.validateItemsFromStorage();
        this.dungeons = this.validateDungeonsFromStorage();
        this.map = this.validateMapFromStorage();
        this.settings = this.validateSettingsFromStorage();
        this.gameSaves = this.validateGameSavesFromStorage();
        this.initEmptyGameSave();
        this.sol = new StaticObjectLoader();

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
    validateMapFromStorage() {
        let retval = JSON.parse(JSON.stringify(defaultMap.data));
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
                    console.log('settings versions do not match got:',stored.version, 'wanted:', this.mapVersion);
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
                if(stored.version && stored.version === this.settingsVersion) {
                    retval = stored.data;
                    console.log('successfully got game saves from storage!')
                } else {
                    console.log('game saves versions do not match got:',stored.version, 'wanted:', this.mapVersion);
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
        const dungeons = this.sol.getStaticDungeons(this.settings.gameMode);
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
            return 152;
        }
    }
    saveItems() {
        const d = JSON.parse(JSON.stringify(defaultItems));
        d.data = this.items;
        setString('items', JSON.stringify(d));
    }
    resetDungeons() {
        this.dungeons = JSON.parse(JSON.stringify(defaultDungeons.data));
        const staticDungeons = this.sol.getStaticDungeons(this.settings.gameMode);
        const keys = Object.keys(this.dungeons);
        for(const key of keys){
            this.dungeons[key].smallkeys = staticDungeons[key].maxSmallkeys;
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
    }
    resetMap() {
        this.map = defaultMap.data;
        this.saveMap();
    }
    saveMap() {
        const d = JSON.parse(JSON.stringify(defaultMap));
        d.data = this.map;
        setString('map', JSON.stringify(d));
    }
    validateLocales() {
        const lkeys = Object.keys(this.sol.getStaticMapLW(this.settings.gameMode));
        const ldkeys = Object.keys(this.sol.getStaticMapDungeonsLW(this.settings.gameMode));
        const dkeys = Object.keys(this.sol.getStaticMapDW(this.settings.gameMode));
        const ddkeys = Object.keys(this.sol.getStaticMapDungeonsDW(this.settings.gameMode));
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
    }
    getGameMode() {
        return this.settings.gameMode;
    }
    getGameModeMap() {
        if(this.settings.gameMode === this.sol.STANDARD) {
            return this.sol.STANDARD;
        }
    }
    saveGameStates() {
        const n = this.settings.gameSlot +'';
        this.gameSaves['game'+n].items = JSON.parse(JSON.stringify(this.items));
        this.gameSaves['game'+n].dungeons = JSON.parse(JSON.stringify(this.dungeons));
        this.gameSaves['game'+n].map = JSON.parse(JSON.stringify(this.map));
        this.gameSaves['game'+n].settings = JSON.parse(JSON.stringify(this.settings));
        this.gameSaves['game'+n].ts = Date.now();
        this.gameSaves['game'+n].versions = {
            items: JSON.parse(JSON.stringify(this.itemsVersion)),
            dungeons: JSON.parse(JSON.stringify(this.dungeonsVersion)),
            map: JSON.parse(JSON.stringify(this.mapVersion)),
            settings: JSON.parse(JSON.stringify(this.settingsVersion)),
        };
        this.gameSaves.fromDefault = false;
        const d = JSON.parse(JSON.stringify(defaultGameSaves));
        d.data = this.gameSaves;
        setString('gameSaves', JSON.stringify(d));
    }
    initEmptyGameSave() {
        if (this.gameSaves.fromDefault) {
            console.log('init from default game saves');
            if(isNaN(this.settings.gameSlot)) {
                this.settings.gameSlot = 0;
            }
            //game saves loaded from default so init first slot with loaded values
            this.saveGameStates();
        } else {
            console.log('not from default game saves!');
        }
    }
}
