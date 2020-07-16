import {standardStaticMapLW} from '@/standard/staticMapLW';
import {standardStaticMapDungeonsLW} from '@/standard/staticMapDungeonsLW';
import {standardStaticMapDW} from '@/standard/staticMapDW';
import {standardStaticMapDungeonsDW} from '@/standard/staticMapDungeonsDW';
import {standardStaticDungeons} from '@/standard/staticDungeons';
import {standardStaticItems} from '@/standard/staticItems';

import {invertedStaticMapLW} from '@/inverted/staticMapLW';
import {invertedStaticMapDungeonsLW} from '@/inverted/staticMapDungeonsLW';
import {invertedStaticMapDW} from '@/inverted/staticMapDW';
import {invertedStaticMapDungeonsDW} from '@/inverted/staticMapDungeonsDW';
import {invertedStaticDungeons} from '@/inverted/staticDungeons';
import {invertedStaticItems} from '@/inverted/staticItems';

export class StaticObjectLoader {
    STANDARD = 'standard';
    INVERTED = 'inverted';
    dgm: string;

    constructor() {
      this.dgm = this.STANDARD;
    }

    getStaticMapLW(gm) {
      if(!gm) {throw new Error('game mode not provided!');}
      if(gm === this.STANDARD){
        return standardStaticMapLW;
      } else if(gm === this.INVERTED) {
        return invertedStaticMapLW;
      }
    }
    getStaticMapDungeonsLW(gm) {
      if(!gm) {throw new Error('game mode not provided!');}
      if(gm === this.STANDARD){
        return standardStaticMapDungeonsLW;
      } else if(gm === this.INVERTED){
        return invertedStaticMapDungeonsLW;
      }
    }
    getStaticMapDW(gm) {
      if(!gm) {throw new Error('game mode not provided!');}
      if(gm === this.STANDARD) {
        return standardStaticMapDW;
      } else if(gm === this.INVERTED){
        return invertedStaticMapDW;
      }
    }
    getStaticMapDungeonsDW(gm) {
      if(!gm) {throw new Error('game mode not provided!');}
      if(gm === this.STANDARD) {
        return standardStaticMapDungeonsDW;
      } else if(gm === this.INVERTED){
        return invertedStaticMapDungeonsDW;
      }
    }
    getStaticDungeons(gm, iShuff) {
      if(!gm) {throw new Error('game mode not provided!');}
      if(!iShuff) {throw new Error('itemShuffle value required!');}
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
      if(!gm) {throw new Error('game mode not provided!');}
      if(gm === this.STANDARD) {
        return standardStaticItems;
      } else if(gm === this.INVERTED) {
        return invertedStaticItems;
      }
    }
}
