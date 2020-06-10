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

export class ModelManager  {
    items = {};
    constructor() {
        this.items = hasKey('items') ? getString('items') : defaultItems;
    }
    getItems() {
        return this.items;
    }
    getItem(key) {
        if(Object.keys(this.items).indexOf(key) > -1) {
            return this.items[key];
        } else {
            console.error('no item with that key!');
        }
    }
    setItem(key, value) {
        this.items[key] = value;
        this.saveItems();
    }
    saveItems() {
        setString('items', JSON.stringify(this.items));
    }
}
