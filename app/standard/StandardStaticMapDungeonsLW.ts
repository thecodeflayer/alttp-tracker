import {StandardRegionHelper} from '@/standard/StandardRegionHelper';

export class StandardStaticMapDungeonsLW {
  ep = {x:1437, y:610,
    validate(){
      return true;
    },
    validateBoss(items){
      return  items.bow > 0 && (items.lantern || items.firerod);
    }
  };
  dp = {x:111, y:1270,
    validate(items, dungeons){
      return StandardRegionHelper.dp(items, dungeons);
    },
    validateBoss(items, dungeons){
      return StandardRegionHelper.dp(items, dungeons)
                && (items.glove > 0 || (items.mirror && StandardRegionHelper.mireDW(items, dungeons)))
                && (items.lantern || items.firerod);
    }
  };
  toh = {x:840, y:40,
    validate(items, dungeons){
      return StandardRegionHelper.toh(items, dungeons);
    },
    validateBoss(items, dungeons){
      return StandardRegionHelper.toh(items, dungeons);
    }
  };
  aga = {x:750, y:577,
    validate(items){
      return (items.cape || items.sword > 1);
    },
    validateBoss(items){
      return items.lantern && (items.cape || items.sword > 1) && (items.sword > 0 || items.net);
    }
  };
}
