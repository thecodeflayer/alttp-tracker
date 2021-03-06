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

import {RetroStaticMapLW} from '@/retro/RetroStaticMapLW';
import {RetroStaticMapDungeonsLW} from '@/retro/RetroStaticMapDungeonsLW';
import {RetroStaticMapDW} from '@/retro/RetroStaticMapDW';
import {RetroStaticMapDungeonsDW} from '@/retro/RetroStaticMapDungeonsDW';
import {RetroStaticDungeons} from '@/retro/RetroStaticDungeons';
import {RetroStaticItems} from '@/retro/RetroStaticItems';
import {RetroStaticMapShopsLW} from '@/retro/RetroStaticMapShopsLW';
import {RetroStaticMapShopsDW} from '@/retro/RetroStaticMapShopsDW';
import {GameSaveHelper} from '@/utils/GameSaveHelper';
import {StaticEntrancesLW} from '@/entrance/StaticEntrancesLW';
import {StaticEntrancesDW} from '@/entrance/StaticEntrancesDW';

export class StaticObjectLoader {
  STANDARD = 'standard';
  INVERTED = 'inverted';
  RETRO = 'retro';
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
    } else if(gm === this.RETRO) {
      return new RetroStaticMapLW();
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
    } else if(gm === this.RETRO) {
      return new RetroStaticMapDungeonsLW();
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
    } else if(gm === this.RETRO) {
      return new RetroStaticMapDW();
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
    } else if(gm === this.RETRO){
      return new RetroStaticMapDungeonsDW();
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
    } else if(gm === this.RETRO){
      retval = new RetroStaticDungeons();
    }
    if(iShuff === 'standard'){
      if(gm === this.RETRO) { //add small keys to chest pool since they are automatically scattered in retro.
        const keys = Object.keys(retval);
        for(const key of keys) {
          retval[key].maxChests = retval[key].maxChests + retval[key].chestSmallkeys;
        }
        return retval;
      } else {
        return retval;
      }
    } else if(iShuff === 'mc') {
      const keys = Object.keys(retval);
      for(const key of keys) {
        if(key !== 'aga') {
          retval[key].maxChests = retval[key].maxChests + 2;
        }
        if(gm === this.RETRO) { //add small keys to chest pool since they are automatically scattered in retro.
          retval[key].maxChests = retval[key].maxChests + retval[key].chestSmallkeys;
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
    } else if(gm === this.RETRO) {
      return new RetroStaticItems();
    }
  }
  getStaticMapShopsLW(gm) {
    if(!gm) {
      throw new Error('game mode not provided!');
    }
    if(gm === this.RETRO){
      return new RetroStaticMapShopsLW();
    } else {
      return {};
    }
  }
  getStaticMapShopsDW(gm) {
    if(!gm) {
      throw new Error('game mode not provided!');
    }
    if(gm === this.RETRO){
      return new RetroStaticMapShopsDW();
    } else {
      return {};
    }
  }
  getStaticEntrancesLW(es) {
    if(!es) {
      throw new Error('entrance shuffle not provided');
    }
    if(es === GameSaveHelper.entranceShuffleOptions.none.id){
      return {};
    } else {
      return new StaticEntrancesLW();
    }
  }
  getStaticEntrancesDW(es) {
    if(!es) {
      throw new Error('entrance shuffle not provided');
    }
    if(es === GameSaveHelper.entranceShuffleOptions.none.id){
      return {};
    } else {
      return new StaticEntrancesDW();
    }
  }
}
