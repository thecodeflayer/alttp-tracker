import {InvertedRegionHelper} from '@/inverted/InvertedRegionHelper';

export class InvertedStaticMapDungeonsDW {
  pod = {x:1438, y:603,
    validate(items, dungeons){
      return InvertedRegionHelper.northEastDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.hammer && items.bow && InvertedRegionHelper.northEastDW(items, dungeons);
    }}; // palace of darkness
  sp = {x:703, y:1402,
    validate(items, dungeons){
      return items.flippers && items.moonpearl && items.mirror && InvertedRegionHelper.southDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.flippers && items.moonpearl && items.mirror && items.hookshot && InvertedRegionHelper.southDW(items, dungeons);
    }}; // swamp palace
  sw = {x:149, y:164,
    validate(items, dungeons){
      return InvertedRegionHelper.northWestDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.firerod && InvertedRegionHelper.northWestDW(items, dungeons);
    }}; // skull woods
  tt = {x:190, y:717,
    validate(items, dungeons){
      return InvertedRegionHelper.northWestDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return InvertedRegionHelper.northWestDW(items, dungeons);
    }}; // thieves town
  ip = {x:1195, y:1294,
    validate(items, dungeons){
      return items.firerod && items.flippers && InvertedRegionHelper.southDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.hammer && items.glove > 0 && items.firerod && items.flippers && InvertedRegionHelper.southDW(items, dungeons);
    }}; // ice palace
  mm = {x:110, y:1247,
    validate(items, dungeons){
      return InvertedRegionHelper.mm(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.redcane && items.lantern && InvertedRegionHelper.mm(items, dungeons);
    }}; // misery mire
  tr = {x:1411, y:90,
    validate(items, dungeons){
      return InvertedRegionHelper.tr(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.firerod && items.icerod && InvertedRegionHelper.tr(items, dungeons);
    }}; // turtle rock
  aga = {x:844, y:35,
    validate(items, dungeons){
      return InvertedRegionHelper.deathMtnEastDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return (items.sword > 0 || items.net) && InvertedRegionHelper.deathMtnEastDW(items, dungeons);
    }};
}
