import {StandardRegionHelper} from '@/standard/StandardRegionHelper';

export class StandardStaticMapDungeonsLW {
  ep = {x:1437, y:610, title:'Eastern Palace', boss:'Armos Knights',
    validate(){
      return true;
    },
    validateBoss(items){
      return  items.bow > 0 && (items.lantern || items.firerod);
    },
    req:[],
    reqBoss:[
      ['items/bow1', 'items/lantern1'],
      ['items/bow1', 'items/firerod1'],
    ]
  };
  dp = {x:111, y:1270, title:'Desert Palace', boss:'Lanmolas',
    validate(items, dungeons){
      return StandardRegionHelper.dp(items, dungeons);
    },
    validateBoss(items, dungeons){
      return StandardRegionHelper.dp(items, dungeons)
                && (items.glove > 0 || (items.mirror && StandardRegionHelper.mireDW(items, dungeons)))
                && (items.lantern || items.firerod);
    },
    req:[[StandardRegionHelper.reqDp]],
    reqBoss:[
      ['items/book1', 'items/glove1', 'items/lantern1'],
      ['items/book1', 'items/glove1', 'items/firerod1'],
      ['items/mirror1', StandardRegionHelper.reqMireDW, 'items/lantern1'],
      ['items/mirror1', StandardRegionHelper.reqMireDW, 'items/firerod1'],
    ]
  };
  toh = {x:840, y:40, title:'Tower of Hera', boss:'Moldorm',
    validate(items, dungeons){
      return StandardRegionHelper.toh(items, dungeons);
    },
    validateBoss(items, dungeons){
      return StandardRegionHelper.toh(items, dungeons);
    },
    req:[[StandardRegionHelper.reqToh]],
    reqBoss:[[StandardRegionHelper.reqToh]]
  };
  aga = {x:750, y:577, title:'Agahnim\'s Tower', boss:'Agahnim',
    validate(items){
      return (items.cape || items.sword > 1);
    },
    validateBoss(items){
      return items.lantern && (items.cape || items.sword > 1) && (items.sword > 0 || items.net);
    },
    req:[['items/cape1'], ['items/sword2']],
    reqBoss:[
      ['items/lantern1', 'items/sword2'],
      ['items/lantern1', 'items/cape1', 'items/sword1'],
      ['items/lantern1', 'items/cape1', 'items/net1'],
    ]
  };
}
