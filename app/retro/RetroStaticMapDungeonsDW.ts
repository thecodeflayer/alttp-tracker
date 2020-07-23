import {RetroRegionHelper} from '@/retro/RetroRegionHelper';
import {StandardStaticMapDungeonsDW} from '@/standard/StandardStaticMapDungeonsDW';

export class RetroStaticMapDungeonsDW extends StandardStaticMapDungeonsDW{
  pod = {x:1438, y:603,
    validate(items, dungeons){
      return items.moonpearl && RetroRegionHelper.northEastDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.hammer && items.moonpearl && (items.bow > 0 && items.quiver)
        && (items.lantern || items.firerod) && RetroRegionHelper.northEastDW(items, dungeons);
    }}; // palace of darkness
  sp = {x:703, y:1402,
    validate(items, dungeons){
      return items.flippers && items.moonpearl && items.mirror && RetroRegionHelper.southDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.flippers && items.moonpearl && items.mirror && items.hookshot && items.hammer && RetroRegionHelper.southDW(items, dungeons);
    }}; // swamp palace
  sw = {x:149, y:164,
    validate(items, dungeons){
      return items.moonpearl && RetroRegionHelper.northWestDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.moonpearl && items.firerod && RetroRegionHelper.northWestDW(items, dungeons);
    }}; // skull woods
  tt = {x:190, y:717,
    validate(items, dungeons){
      return items.moonpearl && RetroRegionHelper.northWestDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.moonpearl && RetroRegionHelper.northWestDW(items, dungeons);
    }}; // thieves town
  ip = {x:1195, y:1294,
    validate(items, dungeons){
      return (items.firerod || items.bombos) && items.moonpearl && items.flippers && items.glove === 2 && RetroRegionHelper.southDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.hammer && items.glove === 2 && (items.firerod || items.bombos) && items.moonpearl && items.flippers && RetroRegionHelper.southDW(items, dungeons);
    }}; // ice palace
  mm = {x:110, y:1247,
    validate(items, dungeons){
      return RetroRegionHelper.mm(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.redcane && items.lantern && RetroRegionHelper.mm(items, dungeons);
    }}; // misery mire
  tr = {x:1411, y:90,
    validate(items, dungeons){
      return RetroRegionHelper.tr(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.firerod && items.icerod && RetroRegionHelper.tr(items, dungeons);
    }}; // turtle rock
  gt = {x:844, y:35,
    validate(items, dungeons, settings){
      return RetroRegionHelper.gt(items, dungeons, settings);
    },
    validateBoss(items, dungeons, settings){
      return (items.sword > 0 || items.net) && (items.bow > 0 && items.quiver)
        && (items.lantern || items.firerod) && items.hookshot
        && RetroRegionHelper.gt(items, dungeons, settings);
    }};
}
