import {RetroRegionHelper} from '@/retro/RetroRegionHelper';
import {StandardStaticMapDungeonsLW} from '@/standard/StandardStaticMapDungeonsLW';

export class RetroStaticMapDungeonsLW extends StandardStaticMapDungeonsLW{
  ep = {x:1437, y:610, title:'Eastern Palace', boss:'Armos Knights',
    validate(){
      return true;
    },
    validateBoss(items){
      return  (items.bow > 0 && items.quiver) && (items.lantern || items.firerod);
    },
    req:[],
    reqBoss:[]
  };
}
