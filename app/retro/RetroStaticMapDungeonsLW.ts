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
    validateEntrance(items, dungeons, entrances, settings){
      return true;
    },
    validateBossEntrance(items, dungeons, entrances, settings) {
      return true;
    },
    req:[],
    reqBoss:[
      ['items/bow1', 'items/quiver1', 'items/lantern1'],
      ['items/bow1', 'items/quiver1', 'items/firerod1'],
    ]
  };
}
