import {InvertedRegionHelper} from '@/inverted/InvertedRegionHelper';

export class InvertedStaticMapDungeonsLW {
  ep = {x:1437, y:610,
    validate(items, dungeons){
      return items.moonpearl && InvertedRegionHelper.northEastLW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return  items.moonpearl && InvertedRegionHelper.northEastLW(items, dungeons)
            && items.bow > 0 && (items.lantern || items.firerod);
    }
  };
  dp = {x:111, y:1270,
    validate(items, dungeons){
      return InvertedRegionHelper.southLW(items, dungeons) && items.moonpearl && items.book;
    },
    validateBoss(items, dungeons){
      return InvertedRegionHelper.southLW(items, dungeons) && items.moonpearl && items.book
                && items.glove > 0 && (items.lantern || items.firerod);
    }
  };
  toh = {x:840, y:40,
    validate(items, dungeons){
      return InvertedRegionHelper.toh(items, dungeons) && items.moonpearl;
    },
    validateBoss(items, dungeons){
      return InvertedRegionHelper.toh(items, dungeons) && items.moonpearl;
    }
  };
  gt = {x:750, y:577,
    validate(items, dungeons, settings){
      return InvertedRegionHelper.gt(items, dungeons, settings);
    },
    validateBoss(items, dungeons, settings){
      return (items.sword > 0 || items.net) && items.bow > 0
        && (items.lantern || items.firerod) && items.hookshot
        && InvertedRegionHelper.gt(items, dungeons, settings);
    }
  };
}
