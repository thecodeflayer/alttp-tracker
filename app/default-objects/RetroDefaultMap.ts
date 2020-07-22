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

    return data;
  }
}
