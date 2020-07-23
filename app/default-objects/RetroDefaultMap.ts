import {DefaultMap, DefaultMapData} from '@/default-objects/DefaultMap';

export class RetroDefaultMap extends DefaultMap{
  data = new RetroMapData();

  toJSONString() :string {
    return JSON.stringify(this);
  }
  static fromJSON(str: string) :RetroDefaultMap {
    const obj = JSON.parse(str);
    const retval =  new RetroDefaultMap();
    retval.version = obj.version;
    retval.data = RetroMapData.fromObject(obj.data);
    return (retval as DefaultMap);
  }
}
export class RetroMapData extends DefaultMapData{
  constructor() {
    super();
    this.lightworld.addLocation('oldMan');
    this.lightworld.addDungeon('aga');
    this.lightworld.addBoss('aga');
    this.lightworld.addLocation('linkHouse');
    this.darkworld.addLocation('bumperCave');
    this.darkworld.addDungeon('gt');
    this.darkworld.addBoss('gt');

    this.darkworld.addShop('dwDeathMtnShop');
    this.darkworld.addShop('dwDeathMtnFairy', true);
    this.darkworld.addShop('dwDesertFairy', true);
    this.darkworld.addShop('dwDesertHint', true);
    this.darkworld.addShop('dwPotionShop');
    this.darkworld.addShop('dwLakeHyliaFairy', true);
    this.darkworld.addShop('dwEastHint', true);
    this.darkworld.addShop('podHint', true);
    this.darkworld.addShop('dwForestShop');
    this.darkworld.addShop('dwLumberjackHutShop');
    this.darkworld.addShop('dwOutcastShop');
    this.darkworld.addShop('dwSanctuaryHint', true);
    this.darkworld.addShop('dwFortuneTeller', true);
    this.darkworld.addShop('dwLakeHyliaShop');
    this.darkworld.addShop('archeryGame', true);
    this.darkworld.addShop('dwBonkFairy', true);
    this.darkworld.addShop('dwLakeLedgeFairy', true);
    this.darkworld.addShop('dwLakeLedgeHint', true);
    this.darkworld.addShop('dwLakeLedgeSpikeCave', true);

    this.lightworld.addShop('lwDeathMtnShop');
    this.lightworld.addShop('hookshotFairy', true);
    this.lightworld.addShop('longFairyCave', true);
    this.lightworld.addShop('lwLakeHyliaFairy', true);
    this.lightworld.addShop('kakarikoShop');
    this.lightworld.addShop('lwFortuneTeller', true);
    this.lightworld.addShop('bushCoveredHouse', true);
    this.lightworld.addShop('lostWoodsGamble', true);
    this.lightworld.addShop('lumberjackHouse', true);
    this.lightworld.addShop('snitchLadyEast', true);
    this.lightworld.addShop('snitchLadyWest', true);
    this.lightworld.addShop('bombHut', true);

  }
  private static fromObjectHelper(data: RetroMapData, obj: any, world: string, mapkey: string) {
    const keys = Object.keys(data[world][mapkey]);
    for(const key of keys) {
      if(obj[world] && obj[world][mapkey] && obj[world][mapkey][key]) {
        data[world][mapkey][key] = obj[world][mapkey][key];
      }
    }
  }

  static fromObject(obj:any):RetroMapData {
    const data = new RetroMapData();
    //do locations
    RetroMapData.fromObjectHelper(data, obj, 'lightworld', 'locations');
    RetroMapData.fromObjectHelper(data, obj, 'darkworld', 'locations');
    //do dungeons
    RetroMapData.fromObjectHelper(data, obj, 'lightworld', 'dungeons');
    RetroMapData.fromObjectHelper(data, obj, 'darkworld', 'dungeons');
    //do bosses
    RetroMapData.fromObjectHelper(data, obj, 'lightworld', 'bosses');
    RetroMapData.fromObjectHelper(data, obj, 'darkworld', 'bosses');
    //do shops
    RetroMapData.fromObjectHelper(data, obj, 'lightworld', 'shops');
    RetroMapData.fromObjectHelper(data, obj, 'darkworld', 'shops');

    return data;
  }
}
