import {invertedRegionHelper} from '@/inverted/regionHelper';

export const invertedStaticMapDungeonsDW = {
  pod: {x:1438, y:603,
    validate(items, dungeons){
      return invertedRegionHelper.northEastDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.hammer && invertedRegionHelper.northEastDW(items, dungeons);
    }}, // palace of darkness
  sp: {x:703, y:1402,
    validate(items, dungeons){
      return items.flippers && invertedRegionHelper.southDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.flippers && invertedRegionHelper.southDW(items, dungeons);
    }}, // swamp palace
  sw: {x:149, y:164,
    validate(items, dungeons){
      return invertedRegionHelper.northWestDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.firerod && invertedRegionHelper.northWestDW(items, dungeons);
    }}, // skull woods
  tt: {x:190, y:717,
    validate(items, dungeons){
      return invertedRegionHelper.northWestDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return invertedRegionHelper.northWestDW(items, dungeons);
    }}, // thieves town
  ip: {x:1195, y:1294,
    validate(items, dungeons){
      return items.firerod && items.flippers && items.glove === 2 && invertedRegionHelper.southDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.hammer && items.glove === 2 && items.firerod && items.flippers && invertedRegionHelper.southDW(items, dungeons);
    }}, // ice palace
  mm: {x:110, y:1247,
    validate(items, dungeons){
      return invertedRegionHelper.mm(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.redcane && items.lantern && invertedRegionHelper.mm(items, dungeons);
    }}, // misery mire
  tr: {x:1411, y:90,
    validate(items, dungeons){
      return invertedRegionHelper.tr(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.firerod && items.icerod && invertedRegionHelper.tr(items, dungeons);
    }}, // turtle rock
  aga: {x:844, y:35,
    validate(items, dungeons){
      return invertedRegionHelper.gt(items, dungeons);
    },
    validateBoss(items, dungeons){
      return (items.sword > 0 || items.net) && invertedRegionHelper.gt(items, dungeons);
    }}
};
