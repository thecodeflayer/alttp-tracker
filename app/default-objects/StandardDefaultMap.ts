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
  static fromObject(obj:any):StandardMapData {
    const data = new StandardMapData();
    const keys = Object.keys(obj);
    for(const key of keys){
      data[key] = obj[key];
    }
    return data;
  }
}
