export class DefaultMap {
  version = '0.0.1';
  data: DefaultMapData;
  toJSONString():string{
    return JSON.stringify(this);
  };
  static fromJSON(str: string):DefaultMap{
    throw new Error('override this method.');
  };
}
export class DefaultMapData {
  lightworld = new MapWorld();
  darkworld = new MapWorld();
  constructor() {
    this.lightworld.addLocation('uncle', new MapLocation());
    this.lightworld.addLocation('secretPassage', new MapLocation());
    this.lightworld.addLocation('backOfEscape', new MapLocation());
    this.lightworld.addLocation('sahashralaHut', new MapLocation());
    this.lightworld.addLocation('sahashrala', new MapLocation());
    this.lightworld.addLocation('potionShop', new MapLocation());
    this.lightworld.addLocation('zora', new MapLocation());
    this.lightworld.addLocation('zoraLedge', new MapLocation());
    this.lightworld.addLocation('waterfallFairy', new MapLocation());
    this.lightworld.addLocation('pedestal', new MapLocation());
    this.lightworld.addLocation('kingTomb', new MapLocation());
    this.lightworld.addLocation('tavern', new MapLocation());
    this.lightworld.addLocation('chickenHut', new MapLocation());
    this.lightworld.addLocation('well', new MapLocation());
    this.lightworld.addLocation('blindhouse', new MapLocation());
    this.lightworld.addLocation('pegasusRock', new MapLocation());
    this.lightworld.addLocation('bottleMerchant', new MapLocation());
    this.lightworld.addLocation('magicBat', new MapLocation());
    this.lightworld.addLocation('sickKid', new MapLocation());
    this.lightworld.addLocation('lwHideout', new MapLocation());
    this.lightworld.addLocation('lumberjackTree', new MapLocation());
    this.lightworld.addLocation('graveyardLedge', new MapLocation());
    this.lightworld.addLocation('lwMushroom', new MapLocation());
    this.lightworld.addLocation('floodChest', new MapLocation());
    this.lightworld.addLocation('floodTreasure', new MapLocation());
    this.lightworld.addLocation('linkHouse', new MapLocation());
    this.lightworld.addLocation('sanctuary', new MapLocation());
    this.lightworld.addLocation('aginahCave', new MapLocation());
    this.lightworld.addLocation('moldormCave', new MapLocation());
    this.lightworld.addLocation('iceRodCave', new MapLocation());
    this.lightworld.addLocation('hobo', new MapLocation());
    this.lightworld.addLocation('bombosTablet', new MapLocation());
    this.lightworld.addLocation('cave45', new MapLocation());
    this.lightworld.addLocation('checkerCave', new MapLocation());
    this.lightworld.addLocation('library', new MapLocation());
    this.lightworld.addLocation('mazeRace', new MapLocation());
    this.lightworld.addLocation('desertLedge', new MapLocation());
    this.lightworld.addLocation('lakeIsland', new MapLocation());
    this.lightworld.addLocation('fluteSpot', new MapLocation());
    this.lightworld.addLocation('spectacleRockCave', new MapLocation());
    this.lightworld.addLocation('etherTablet', new MapLocation());
    this.lightworld.addLocation('spectacleRock', new MapLocation());
    this.lightworld.addLocation('spiralCave', new MapLocation());
    this.lightworld.addLocation('mimicCave', new MapLocation());
    this.lightworld.addLocation('paradoxCave', new MapLocation());
    this.lightworld.addLocation('floatingIsland', new MapLocation());

    this.lightworld.addDungeon('ep', new MapDungeon());
    this.lightworld.addDungeon('dp', new MapDungeon());
    this.lightworld.addDungeon('toh', new MapDungeon());

    this.lightworld.addBoss('ep',new MapBoss());
    this.lightworld.addBoss('dp',new MapBoss());
    this.lightworld.addBoss('toh',new MapBoss());

    this.darkworld.addLocation('superbunnyCave', new MapLocation());
    this.darkworld.addLocation('hookshotCave', new MapLocation());
    this.darkworld.addLocation('spikeCave', new MapLocation());
    this.darkworld.addLocation('catfish', new MapLocation());
    this.darkworld.addLocation('pyramid', new MapLocation());
    this.darkworld.addLocation('pyramidFairy', new MapLocation());
    this.darkworld.addLocation('brewery', new MapLocation());
    this.darkworld.addLocation('cShapeHouse', new MapLocation());
    this.darkworld.addLocation('chestGame', new MapLocation());
    this.darkworld.addLocation('hammerPegs', new MapLocation());
    this.darkworld.addLocation('blacksmith', new MapLocation());
    this.darkworld.addLocation('purpleChest', new MapLocation());
    this.darkworld.addLocation('hypeCave', new MapLocation());
    this.darkworld.addLocation('stumpy', new MapLocation());
    this.darkworld.addLocation('diggingGame', new MapLocation());
    this.darkworld.addLocation('mireShed', new MapLocation());

    this.darkworld.addDungeon('pod', new MapDungeon());
    this.darkworld.addDungeon('sp', new MapDungeon());
    this.darkworld.addDungeon('sw', new MapDungeon());
    this.darkworld.addDungeon('tt', new MapDungeon());
    this.darkworld.addDungeon('ip', new MapDungeon());
    this.darkworld.addDungeon('mm', new MapDungeon());
    this.darkworld.addDungeon('tr', new MapDungeon());


    this.darkworld.addBoss('pod', new MapBoss());
    this.darkworld.addBoss('sp', new MapBoss());
    this.darkworld.addBoss('sw', new MapBoss());
    this.darkworld.addBoss('tt', new MapBoss());
    this.darkworld.addBoss('ip', new MapBoss());
    this.darkworld.addBoss('mm', new MapBoss());
    this.darkworld.addBoss('tr', new MapBoss());

  }
  static fromObject(obj:any):DefaultMapData {
    const data = new DefaultMapData();
    const keys = Object.keys(obj);
    for(const key of keys){
      data[key] = obj[key];
    }
    return data;
  }
  getCopy(): DefaultMapData {
    return JSON.parse(JSON.stringify(this));
  }
}
export class MapWorld {
  mode = 0; //0 for map, 1 for location list
  scale = 1;
  x = 0;
  y = 0;
  centerKey = undefined;
  scrollY = 0;
  filterList = 0;
  locations = {};
  dungeons ={};
  bosses ={};
  addLocation(key: string, location: MapLocation) {
    this.locations[key] = location;
  }
  addDungeon(key: string, dungeon: MapDungeon) {
    this.dungeons[key] = dungeon;
  }
  addBoss(key: string, boss: MapBoss) {
    this.bosses[key] = boss;
  }
}
export class MapLocation {
  klass: 'locale-red';
  checked: false;
}
export class MapDungeon {
  klass: 'locale-red';
}
export class MapBoss {
  klass: 'locale-red';
}
