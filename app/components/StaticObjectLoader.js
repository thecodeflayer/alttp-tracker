import {staticMapLW as standardStaticMapLW} from "~/standard/staticMapLW";
import {staticMapDungeonsLW as standardStaticMapDungeonsLW} from "~/standard/staticMapDungeonsLW";
import {staticMapDW as standardStaticMapDW} from "~/standard/staticMapDW";
import {staticMapDungeonsDW as standardStaticMapDungeonsDW} from "~/standard/staticMapDungeonsDW";
import {staticDungeons as standardStaticDungeons} from "~/standard/staticDungeons";
import {staticItems as standardStaticItems} from '~/standard/staticItems';

import {staticMapLW as invertedStaticMapLW} from "~/inverted/staticMapLW";
import {staticMapDungeonsLW as invertedStaticMapDungeonsLW} from "~/inverted/staticMapDungeonsLW";
import {staticMapDW as invertedStaticMapDW} from "~/inverted/staticMapDW";
import {staticMapDungeonsDW as invertedStaticMapDungeonsDW} from "~/inverted/staticMapDungeonsDW";
import {staticDungeons as invertedStaticDungeons} from "~/inverted/staticDungeons";
import {staticItems as invertedStaticItems} from '~/inverted/staticItems';

export class StaticObjectLoader {
    STANDARD = 'standard';
    INVERTED = 'inverted';

    constructor() {
        this.dgm = this.STANDARD;
    }

    getStaticMapLW(gm) {
        if(!gm) {throw new Error('game mode not provided!')}
        if(gm === this.STANDARD){
            return standardStaticMapLW;
        } else if(gm === this.INVERTED) {
            return invertedStaticMapLW;
        }
    }
    getStaticMapDungeonsLW(gm) {
        if(!gm) {throw new Error('game mode not provided!')}
        if(gm === this.STANDARD){
            return standardStaticMapDungeonsLW;
        } else if(gm === this.INVERTED){
            return invertedStaticMapDungeonsLW;
        }
    }
    getStaticMapDW(gm) {
        if(!gm) {throw new Error('game mode not provided!')}
        if(gm === this.STANDARD) {
            return standardStaticMapDW;
        } else if(gm === this.INVERTED){
            return invertedStaticMapDW;
        }
    }
    getStaticMapDungeonsDW(gm) {
        if(!gm) {throw new Error('game mode not provided!')}
        if(gm === this.STANDARD) {
            return standardStaticMapDungeonsDW;
        } else if(gm === this.INVERTED){
            return invertedStaticMapDungeonsDW;
        }
    }
    getStaticDungeons(gm, iShuff) {
        if(!gm) {throw new Error('game mode not provided!')}
        if(!iShuff) {throw new Error('itemShuffle value required!')}
        let retval = undefined;
        if(gm === this.STANDARD) {
            retval = JSON.parse(JSON.stringify(standardStaticDungeons));
        } else if(gm === this.INVERTED){
            retval = JSON.parse(JSON.stringify(invertedStaticDungeons));
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
        if(!gm) {throw new Error('game mode not provided!')}
        if(gm === this.STANDARD) {
            return standardStaticItems;
        } else if(gm === this.INVERTED) {
            return invertedStaticItems;
        }
    }
}
