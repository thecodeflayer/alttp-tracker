import {RetroRegionHelper} from '@/retro/RetroRegionHelper';
import {StandardStaticMapDungeonsDW} from '@/standard/StandardStaticMapDungeonsDW';
import {StandardRegionHelper} from '@/standard/StandardRegionHelper';

export class RetroStaticMapDungeonsDW extends StandardStaticMapDungeonsDW{
  pod = {x:1438, y:603, title:'Palace of Darkness', boss:'Helmasaur King',
    validate(items, dungeons){
      return items.moonpearl && RetroRegionHelper.northEastDW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return items.hammer && items.moonpearl && (items.bow > 0 && items.quiver)
        && (items.lantern || items.firerod) && RetroRegionHelper.northEastDW(items, dungeons);
    },
    req:[['items/moonpearl1', StandardRegionHelper.reqNorthEastDW]],
    reqBoss:[
      ['items/hammer1', 'items/moonpearl1', 'items/bow1', 'items/quiver1', StandardRegionHelper.reqNorthEastDW, 'items/lantern1'],
      ['items/hammer1', 'items/moonpearl1', 'items/bow1', 'items/quiver1', StandardRegionHelper.reqNorthEastDW, 'items/firerod1']
    ]
  }; // palace of darkness
  gt = {x:844, y:35, title:'Ganon\'s Tower', boss:'Agahnim II',
    validate(items, dungeons, settings){
      return RetroRegionHelper.gt(items, dungeons, settings);
    },
    validateBoss(items, dungeons, settings){
      return (items.sword > 0 || items.net) && (items.bow > 0 && items.quiver)
        && (items.lantern || items.firerod) && items.hookshot
        && RetroRegionHelper.gt(items, dungeons, settings);
    },
    req:[[StandardRegionHelper.reqGt]],
    reqBoss:[
      ['items/bow1', 'items/quiver1', 'items/hookshot1', StandardRegionHelper.reqGt, 'items/sword1', 'items/lantern1'],
      ['items/bow1', 'items/quiver1', 'items/hookshot1', StandardRegionHelper.reqGt, 'items/sword1', 'items/firerod1'],
      ['items/bow1', 'items/quiver1', 'items/hookshot1', StandardRegionHelper.reqGt, 'items/net1', 'items/lantern1'],
      ['items/bow1', 'items/quiver1', 'items/hookshot1', StandardRegionHelper.reqGt, 'items/net1', 'items/firerod1']
    ]
  };
}
