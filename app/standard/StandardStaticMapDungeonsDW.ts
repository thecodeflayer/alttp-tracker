import {StandardRegionHelper} from '@/standard/StandardRegionHelper';

export class StandardStaticMapDungeonsDW {
  pod = {x:1438, y:603,
    validate(items, dungeons){
      return items.moonpearl && StandardRegionHelper.northEastDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.hammer && items.moonpearl && items.bow && StandardRegionHelper.northEastDW(items, dungeons);
    }}; // palace of darkness
  sp = {x:703, y:1402,
    validate(items, dungeons){
      return items.flippers && items.moonpearl && items.mirror && StandardRegionHelper.southDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.flippers && items.moonpearl && items.mirror && items.hookshot && StandardRegionHelper.southDW(items, dungeons);
    }}; // swamp palace
  sw = {x:149, y:164,
    validate(items, dungeons){
      return items.moonpearl && StandardRegionHelper.northWestDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.moonpearl && items.firerod && StandardRegionHelper.northWestDW(items, dungeons);
    }}; // skull woods
  tt = {x:190, y:717,
    validate(items, dungeons){
      return items.moonpearl && StandardRegionHelper.northWestDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.moonpearl && StandardRegionHelper.northWestDW(items, dungeons);
    }}; // thieves town
  ip = {x:1195, y:1294,
    validate(items, dungeons){
      return items.firerod && items.moonpearl && items.flippers && items.glove === 2 && StandardRegionHelper.southDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.hammer && items.glove === 2 && items.firerod && items.moonpearl && items.flippers && StandardRegionHelper.southDW(items, dungeons);
    }}; // ice palace
  mm = {x:110, y:1247,
    validate(items, dungeons){
      return StandardRegionHelper.mm(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.redcane && items.lantern && StandardRegionHelper.mm(items, dungeons);
    }}; // misery mire
  tr = {x:1411, y:90,
    validate(items, dungeons){
      return StandardRegionHelper.tr(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.firerod && items.icerod && StandardRegionHelper.tr(items, dungeons);
    }}; // turtle rock
  gt = {x:844, y:35,
    validate(items, dungeons){
      return StandardRegionHelper.gt(items, dungeons);
    },
    validateBoss(items, dungeons){
      return (items.sword > 0 || items.net) && StandardRegionHelper.gt(items, dungeons);
    }};
}
