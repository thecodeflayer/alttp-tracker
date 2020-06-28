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

export class ModelManager  {
    items = {};
    dungeons = {};
    map = {};
    itemsVersion = '0.0.1';
    dungeonsVersion = '0.0.2';
    mapVersion = '0.0.1';
    settingsVersion = '0.0.1';

    constructor() {
        this.items = this.validateItemsFromStorage();
        this.dungeons = this.validateDungeonsFromStorage();
        this.map = this.validateMapFromStorage();
        this.settings = this.validateSettingsFromStorage();
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
    saveItems() {
        const d = JSON.parse(JSON.stringify(defaultItems));
        d.data = this.items;
        setString('items', JSON.stringify(d));
    }
    resetDungeons() {
        this.dungeons = defaultDungeons.data;
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
}
