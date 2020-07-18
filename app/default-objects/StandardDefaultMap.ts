import {DefaultMap, DefaultMapData} from '@/default-objects/DefaultMap';

export class StandardDefaultMap extends DefaultMap{
  data = new StandardMapData();

  toJSONString() :string {
    return JSON.stringify(this);
  }
  static fromJSON(str: string) :StandardDefaultMap {
    const obj = JSON.parse(str);
    const retval =  new StandardDefaultMap();
    retval.version = obj.version;
    retval.data = StandardMapData.fromObject(obj.data);
    return (retval as DefaultMap);
  }
}
export class StandardMapData extends DefaultMapData{
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
  private static fromObjectHelper(data: StandardMapData, obj: any, world: string, mapkey: string) {
    const keys = Object.keys(data[world][mapkey]);
    for(const key of keys) {
      if(obj[world] && obj[world][mapkey] && obj[world][mapkey][key]) {
        data[world][mapkey][key] = obj[world][mapkey][key];
      }
    }
  }

  static fromObject(obj:any):StandardMapData {
    const data = new StandardMapData();
    //do locations
    StandardMapData.fromObjectHelper(data, obj, 'lightworld', 'locations');
    StandardMapData.fromObjectHelper(data, obj, 'darkworld', 'locations');
    //do dungeons
    StandardMapData.fromObjectHelper(data, obj, 'lightworld', 'dungeons');
    StandardMapData.fromObjectHelper(data, obj, 'darkworld', 'dungeons');
    //do bosses
    StandardMapData.fromObjectHelper(data, obj, 'lightworld', 'bosses');
    StandardMapData.fromObjectHelper(data, obj, 'darkworld', 'bosses');

    return data;
  }
}
