import {staticMapLW as standardStaticMapLW} from "~/standard/staticMapLW";
import {staticMapDungeonsLW as standardStaticMapDungeonsLW} from "~/standard/staticMapDungeonsLW";
import {staticMapDW as standardStaticMapDW} from "~/standard/staticMapDW";
import {staticMapDungeonsDW as standardStaticMapDungeonsDW} from "~/standard/staticMapDungeonsDW";
import {staticDungeons as standardStaticDungeons} from "~/standard/staticDungeons";
import {staticItems as standardStaticItems} from '~/standard/staticItems';

export class StaticObjectLoader {
    STANDARD = 'standard';

    constructor() {
        this.dgm = this.STANDARD;
    }

    getStaticMapLW(gm) {
        if(gm === this.STANDARD){
            return standardStaticMapLW;
        }
    }
    getStaticMapDungeonsLW(gm) {
        if(gm === this.STANDARD){
            return standardStaticMapDungeonsLW;
        }
    }
    getStaticMapDW(gm) {
        if(gm === this.STANDARD) {
            return standardStaticMapDW;
        }
    }
    getStaticMapDungeonsDW(gm) {
        if(gm === this.STANDARD) {
            return standardStaticMapDungeonsDW;
        }
    }
    getStaticDungeons(gm) {
        if(gm === this.STANDARD) {
            return standardStaticDungeons;
        }
    }
    getStaticItems(gm) {
        if(gm === this.STANDARD) {
            return standardStaticItems;
        }
    }
}
