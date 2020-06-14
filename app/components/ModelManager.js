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
import {screen} from 'tns-core-modules/platform'

import {defaultItems} from "~/defaultItems";
import {defaultDungeons} from "~/defaultDungeons";

export class ModelManager  {
    items = {};
    dungeons = {};
    itemsVersion = '0.0.1';
    dungeonsVersion = '0.0.1';
    constructor() {
        this.items = this.validateItemsFromStorage(); //hasKey('items') ? JSON.parse(getString('items')).data : defaultItems.data;
        this.dungeons = this.validateDungeonsFromStorage(); //hasKey('dungeons') ? JSON.parse(getString('dungeons')).data : defaultDungeons.data;
        this.screen = screen;
    }
    validateItemsFromStorage() {
        let retval = defaultItems.data;
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
        let retval = defaultDungeons.data;
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
}
