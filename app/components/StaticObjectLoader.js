import {staticMapLW as standardStaticMapLW} from "~/standard/staticMapLW";
import {staticMapDungeonsLW as standardStaticMapDungeonsLW} from "~/standard/staticMapDungeonsLW";
import {staticMapDW as standardStaticMapDW} from "~/standard/staticMapDW";
import {staticMapDungeonsDW as standardStaticMapDungeonsDW} from "~/standard/staticMapDungeonsDW";
import {staticDungeons as standardStaticDungeons} from "~/standard/staticDungeons";
import {staticItems as standardStaticItems} from '~/standard/staticItems';

const STANDARD = 'standard';

export class StaticObjectLoader {
    dgm = STANDARD;

    constructor() {
    }

    getStaticMapLW(gm) {
        if(gm === STANDARD){
            return standardStaticMapLW;
        }
    }
    getStaticMapDungeonsLW(gm) {
        if(gm === STANDARD){
            return standardStaticMapDungeonsLW;
        }
    }
    getStaticMapDW(gm) {
        if(gm === STANDARD) {
            return standardStaticMapDW;
        }
    }
    getStaticMapDungeonsDW(gm) {
        if(gm === STANDARD) {
            return standardStaticMapDungeonsDW;
        }
    }
    getStaticDungeons(gm) {
        if(gm === STANDARD) {
            return standardStaticDungeons;
        }
    }
    getStaticItems(gm) {
        if(gm === STANDARD) {
            return standardStaticItems;
        }
    }
}
