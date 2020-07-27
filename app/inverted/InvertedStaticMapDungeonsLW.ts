import {InvertedRegionHelper} from '@/inverted/InvertedRegionHelper';

export class InvertedStaticMapDungeonsLW {
  ep = {x:1437, y:610, title:'Eastern Palace', boss:'Armos Knights',
    validate(items, dungeons){
      return items.moonpearl && InvertedRegionHelper.northEastLW(items, dungeons);
    },
    validateBoss(items, dungeons){
      return  items.moonpearl && InvertedRegionHelper.northEastLW(items, dungeons)
            && items.bow > 0 && (items.lantern || items.firerod);
    },
    req:[['items/moonpearl1', InvertedRegionHelper.reqNorthEastLW]],
    reqBoss:[
      ['items/moonpearl1', InvertedRegionHelper.reqNorthEastLW, 'items/bow1', 'items/lantern1'],
      ['items/moonpearl1', InvertedRegionHelper.reqNorthEastLW, 'items/bow1', 'items/firerod1']
    ]

  };
  dp = {x:111, y:1270, title:'Desert Palace', boss:'Lanmolas',
    validate(items, dungeons){
      return InvertedRegionHelper.southLW(items, dungeons) && items.moonpearl && items.book;
    },
    validateBoss(items, dungeons){
      return InvertedRegionHelper.southLW(items, dungeons) && items.moonpearl && items.book
                && items.glove > 0 && (items.lantern || items.firerod);
    },
    req:[['items/book1', 'items/moonpearl1', InvertedRegionHelper.reqSouthLW]],
    reqBoss:[
      ['items/book1', 'items/moonpearl1', InvertedRegionHelper.reqSouthLW, 'items/glove1', 'items/lantern1'],
      ['items/book1', 'items/moonpearl1', InvertedRegionHelper.reqSouthLW, 'items/glove1', 'items/firerod1'],
    ]
  };
  toh = {x:840, y:40, title:'Tower of Hera', boss:'Moldorm',
    validate(items, dungeons){
      return InvertedRegionHelper.toh(items, dungeons) && items.moonpearl;
    },
    validateBoss(items, dungeons){
      return InvertedRegionHelper.toh(items, dungeons) && items.moonpearl;
    },
    req:[['items/moonpearl1', InvertedRegionHelper.reqToh]],
    reqBoss:[['items/moonpearl1', InvertedRegionHelper.reqToh]]
  };
  gt = {x:750, y:577, title:'Ganon\'s Tower', boss:'Agahnim II',
    validate(items, dungeons, settings){
      return InvertedRegionHelper.gt(items, dungeons, settings);
    },
    validateBoss(items, dungeons, settings){
      return (items.sword > 0 || items.net) && items.bow > 0
        && (items.lantern || items.firerod) && items.hookshot
        && InvertedRegionHelper.gt(items, dungeons, settings);
    },
    req:[[InvertedRegionHelper.reqGt]],
    reqBoss:[
      ['items/bow1', 'items/hookshot1', InvertedRegionHelper.reqGt, 'items/sword1', 'items/lantern1'],
      ['items/bow1', 'items/hookshot1', InvertedRegionHelper.reqGt, 'items/sword1', 'items/firerod1'],
      ['items/bow1', 'items/hookshot1', InvertedRegionHelper.reqGt, 'items/net1', 'items/lantern1'],
      ['items/bow1', 'items/hookshot1', InvertedRegionHelper.reqGt, 'items/net1', 'items/firerod1']
    ]
  };
}
