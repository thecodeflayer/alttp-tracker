export class DefaultMap {
  version = '0.0.1';
  data: DefaultMapData;
  toJSONString():string{
    throw new Error('override this method.');
  };
  static fromJSON(str: string):DefaultMap{
    throw new Error('override this method.');
  }
}
export class DefaultMapData {
  lightworld = new MapWorld();
  darkworld = new MapWorld();
  constructor() {
    this.lightworld.addLocation('uncle');
    this.lightworld.addLocation('secretPassage');
    this.lightworld.addLocation('backOfEscape');
    this.lightworld.addLocation('sahashralaHut');
    this.lightworld.addLocation('sahashrala');
    this.lightworld.addLocation('potionShop');
    this.lightworld.addLocation('zora');
    this.lightworld.addLocation('zoraLedge');
    this.lightworld.addLocation('waterfallFairy');
    this.lightworld.addLocation('pedestal');
    this.lightworld.addLocation('kingTomb');
    this.lightworld.addLocation('tavern');
    this.lightworld.addLocation('chickenHut');
    this.lightworld.addLocation('well');
    this.lightworld.addLocation('blindhouse');
    this.lightworld.addLocation('pegasusRock');
    this.lightworld.addLocation('bottleMerchant');
    this.lightworld.addLocation('magicBat');
    this.lightworld.addLocation('sickKid');
    this.lightworld.addLocation('lwHideout');
    this.lightworld.addLocation('lumberjackTree');
    this.lightworld.addLocation('graveyardLedge');
    this.lightworld.addLocation('lwMushroom');
    this.lightworld.addLocation('floodChest');
    this.lightworld.addLocation('floodTreasure');
    this.lightworld.addLocation('linkHouse');
    this.lightworld.addLocation('sanctuary');
    this.lightworld.addLocation('aginahCave');
    this.lightworld.addLocation('moldormCave');
    this.lightworld.addLocation('iceRodCave');
    this.lightworld.addLocation('hobo');
    this.lightworld.addLocation('bombosTablet');
    this.lightworld.addLocation('cave45');
    this.lightworld.addLocation('checkerCave');
    this.lightworld.addLocation('library');
    this.lightworld.addLocation('mazeRace');
    this.lightworld.addLocation('desertLedge');
    this.lightworld.addLocation('lakeIsland');
    this.lightworld.addLocation('fluteSpot');
    this.lightworld.addLocation('spectacleRockCave');
    this.lightworld.addLocation('etherTablet');
    this.lightworld.addLocation('spectacleRock');
    this.lightworld.addLocation('spiralCave');
    this.lightworld.addLocation('mimicCave');
    this.lightworld.addLocation('paradoxCave');
    this.lightworld.addLocation('floatingIsland');

    this.lightworld.addDungeon('ep');
    this.lightworld.addDungeon('dp');
    this.lightworld.addDungeon('toh');

    this.lightworld.addBoss('ep');
    this.lightworld.addBoss('dp');
    this.lightworld.addBoss('toh');

    this.darkworld.addLocation('superbunnyCave');
    this.darkworld.addLocation('hookshotCave');
    this.darkworld.addLocation('spikeCave');
    this.darkworld.addLocation('catfish');
    this.darkworld.addLocation('pyramid');
    this.darkworld.addLocation('pyramidFairy');
    this.darkworld.addLocation('brewery');
    this.darkworld.addLocation('cShapeHouse');
    this.darkworld.addLocation('chestGame');
    this.darkworld.addLocation('hammerPegs');
    this.darkworld.addLocation('blacksmith');
    this.darkworld.addLocation('purpleChest');
    this.darkworld.addLocation('hypeCave');
    this.darkworld.addLocation('stumpy');
    this.darkworld.addLocation('diggingGame');
    this.darkworld.addLocation('mireShed');

    this.darkworld.addDungeon('pod');
    this.darkworld.addDungeon('sp');
    this.darkworld.addDungeon('sw');
    this.darkworld.addDungeon('tt');
    this.darkworld.addDungeon('ip');
    this.darkworld.addDungeon('mm');
    this.darkworld.addDungeon('tr');


    this.darkworld.addBoss('pod');
    this.darkworld.addBoss('sp');
    this.darkworld.addBoss('sw');
    this.darkworld.addBoss('tt');
    this.darkworld.addBoss('ip');
    this.darkworld.addBoss('mm');
    this.darkworld.addBoss('tr');

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
  addLocation(key: string) {
    this.locations[key] = {
      klass: 'locale-red',
      checked: false
    };
  }
  addDungeon(key: string) {
    this.dungeons[key] = {klass: 'locale-red'};
  }
  addBoss(key: string) {
    this.bosses[key] = {klass: 'locale-red'};
  }
}
