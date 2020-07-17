import {DefaultMap, DefaultMapData} from '@/default-objects/DefaultMap';

export class InvertedDefaultMap extends DefaultMap{
  data = new InvertedMapData();
  toJSONString():string{
    return JSON.stringify(this);
  }
  static fromJSON(str: string) :InvertedDefaultMap {
    const obj = JSON.parse(str);
    const retval =  new InvertedDefaultMap();
    retval.version = obj.version;
    retval.data = InvertedMapData.fromObject(obj.data);
    return retval;
  }
}

export class InvertedMapData extends DefaultMapData{
  constructor() {
    super();
    this.darkworld.addLocation('oldMan');
    this.darkworld.addDungeon('aga');
    this.darkworld.addBoss('aga');
    this.lightworld.addLocation('bumperCave');
    this.lightworld.addDungeon('gt');
    this.lightworld.addBoss('gt');
  }
  static fromObject(obj:any):InvertedMapData {
    const data = new InvertedMapData();
    const keys = Object.keys(obj);
    for(const key of keys){
      data[key] = obj[key];
    }
    return data;
  }

}
