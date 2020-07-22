import {StandardStaticMapLW} from '@/standard/StandardStaticMapLW';
import {StandardStaticMapDungeonsLW} from '@/standard/StandardStaticMapDungeonsLW';
import {StandardStaticMapDW} from '@/standard/StandardStaticMapDW';
import {StandardStaticMapDungeonsDW} from '@/standard/StandardStaticMapDungeonsDW';
import {StandardStaticDungeons} from '@/standard/StandardStaticDungeons';
import {StandardStaticItems} from '@/standard/StandardStaticItems';

import {InvertedStaticMapLW} from '@/inverted/InvertedStaticMapLW';
import {InvertedStaticMapDungeonsLW} from '@/inverted/InvertedStaticMapDungeonsLW';
import {InvertedStaticMapDW} from '@/inverted/InvertedStaticMapDW';
import {InvertedStaticMapDungeonsDW} from '@/inverted/InvertedStaticMapDungeonsDW';
import {InvertedStaticDungeons} from '@/inverted/InvertedStaticDungeons';
import {InvertedStaticItems} from '@/inverted/InvertedStaticItems';

export class StaticObjectLoader {
  STANDARD = 'standard';
  INVERTED = 'inverted';
  dgm: string;

  constructor() {
    this.dgm = this.STANDARD;
  }

  getStaticMapLW(gm) {
    if(!gm) {
      throw new Error('game mode not provided!');
    }
    if(gm === this.STANDARD){
      return new StandardStaticMapLW();
    } else if(gm === this.INVERTED) {
      return new InvertedStaticMapLW();
    }
  }
  getStaticMapDungeonsLW(gm) {
    if(!gm) {
      throw new Error('game mode not provided!');
    }
    if(gm === this.STANDARD){
      return new StandardStaticMapDungeonsLW();
    } else if(gm === this.INVERTED){
      return new InvertedStaticMapDungeonsLW();
    }
  }
  getStaticMapDW(gm) {
    if(!gm) {
      throw new Error('game mode not provided!');
    }
    if(gm === this.STANDARD) {
      return new StandardStaticMapDW();
    } else if(gm === this.INVERTED){
      return new InvertedStaticMapDW();
    }
  }
  getStaticMapDungeonsDW(gm) {
    if(!gm) {
      throw new Error('game mode not provided!');
    }
    if(gm === this.STANDARD) {
      return new StandardStaticMapDungeonsDW();
    } else if(gm === this.INVERTED){
      return new InvertedStaticMapDungeonsDW();
    }
  }
  getStaticDungeons(gm, iShuff) {
    if(!gm) {
      throw new Error('game mode not provided!');
    }
    if(!iShuff) {
      throw new Error('itemShuffle value required!');
    }
    let retval = undefined;
    if(gm === this.STANDARD) {
      retval = new StandardStaticDungeons();
    } else if(gm === this.INVERTED){
      retval = new InvertedStaticDungeons();
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
    if(!gm) {
      throw new Error('game mode not provided!');
    }
    if(gm === this.STANDARD) {
      return new StandardStaticItems();
    } else if(gm === this.INVERTED) {
      return new InvertedStaticItems();
    }
  }
}