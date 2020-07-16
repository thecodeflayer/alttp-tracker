import {MapLocation, MapWorld, MapDungeon, MapBoss, DefaultMap, DefaultMapData} from '@/default-objects/DefaultMap';

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
  lightworld = new MapWorld();
  darkworld = new MapWorld();
  constructor() {
    super();
    this.lightworld.addLocation('oldMan', new MapLocation());
    this.lightworld.addDungeon('aga', new MapDungeon());
    this.lightworld.addBoss('aga',new MapBoss());
    this.darkworld.addLocation('bumperCave', new MapLocation());
    this.darkworld.addDungeon('gt', new MapDungeon());
    this.darkworld.addBoss('gt', new MapBoss());
  }
}
