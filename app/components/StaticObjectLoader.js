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
    getStaticDungeons(gm, iShuff) {
        if(!iShuff) {throw new Error('itemShuffle value required!')}
        let retval = undefined;
        if(gm === this.STANDARD) {
            retval = JSON.parse(JSON.stringify(standardStaticDungeons));
        }
        if(iShuff === 'standard'){
            return retval;
        } else if(iShuff === 'mc') {
            const keys = Object.keys(retval);
            for(const key of keys) {
                if(key !== 'aga') {
                    retval[key].maxChests = retval[key].maxChests + 2;
                }
            }
            return retval;
        } else if(iShuff === 'mcsk') {
            const keys = Object.keys(retval);
            for(const key of keys) {
                if(key !== 'aga') {
                    retval[key].maxChests = retval[key].maxChests + 2;
                }
                retval[key].maxChests = retval[key].maxChests + retval[key].chestSmallkeys;
            }
            return retval;
        } else if(iShuff === 'keysanity') {
            const keys = Object.keys(retval);
            for(const key of keys) {
                if(key !== 'aga') {
                    retval[key].maxChests = retval[key].maxChests + 3;
                }
                retval[key].maxChests = retval[key].maxChests + retval[key].chestSmallkeys;
            }
            return retval;
        }
    }
    getStaticItems(gm) {
        if(gm === this.STANDARD) {
            return standardStaticItems;
        }
    }
}
