import {MapLocation, MapWorld, MapDungeon, MapBoss, DefaultMap, DefaultMapData} from '@/default-objects/DefaultMap';

export class InvertedDefaultMap extends DefaultMap{
  data = new InvertedMapData();
  static fromJSON(str: string) :InvertedDefaultMap {
    const obj = JSON.parse(str);
    const retval =  new InvertedDefaultMap();
    retval.version = obj.version;
    retval.data = InvertedMapData.fromObject(obj.data);
    return retval;
  }
}

export class InvertedMapData extends DefaultMapData{
  lightworld = new MapWorld();
  darkworld = new MapWorld();
  constructor() {
    super();
    this.darkworld.addLocation('oldMan', new MapLocation());
    this.darkworld.addDungeon('aga', new MapDungeon());
    this.darkworld.addBoss('aga',new MapBoss());
    this.lightworld.addLocation('bumperCave', new MapLocation());
    this.lightworld.addDungeon('gt', new MapDungeon());
    this.lightworld.addBoss('gt', new MapBoss());
  }

}
