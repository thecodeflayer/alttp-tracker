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
