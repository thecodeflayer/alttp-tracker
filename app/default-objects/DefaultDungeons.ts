export class DefaultDungeons {
  version = '0.0.2';
  data = new DefaultDungeonsData();

  toJSONString() :string {
    return JSON.stringify(this);
  }
  static fromJSON(str: string) :DefaultDungeons {
    const obj = JSON.parse(str);
    const retval =  new DefaultDungeons();
    retval.version = obj.version;
    retval.data = DefaultDungeonsData.fromObject(obj.data);
    return retval;
  }
}
export class DefaultDungeonsData {
  ep = new Dungeon(false, 0, 3, false, false, false, 0, 0);
  dp = new Dungeon(false, 0, 2, false, false, false, 0, 0);
  toh = new Dungeon(false, 0, 2, false, false, false, 0, 0);
  aga = new Dungeon(false, 0, 0, false, false, false, 0, 0);
  pod = new Dungeon(false, 0, 5, false, false, false, 0, 0);
  sp = new Dungeon(false, 0, 6, false, false, false, 0, 0);
  sw = new Dungeon(false, 0, 2, false, false, false, 0, 0);
  tt = new Dungeon(false, 0, 4, false, false, false, 0, 0);
  ip = new Dungeon(false, 0, 3, false, false, false, 0, 0);
  mm = new Dungeon(false, 0, 2, false, false, false, 0, 0);
  tr = new Dungeon(false, 0, 5, false, false, false, 0, 0);
  gt = new Dungeon(false, 0, 20, false, false, false, 0, 0);

  static fromObject(obj:any):DefaultDungeonsData {
    const data = new DefaultDungeonsData();
    const keys = Object.keys(obj);
    for(const key of keys){
      data[key] = obj[key];
    }
    return data;
  }
  getCopy(): DefaultDungeonsData {
    return JSON.parse(JSON.stringify(this));
  }
}

export class Dungeon {
  boss: boolean;
  crystal: number;
  chests: number;
  map: boolean;
  compass: boolean;
  bosskey: boolean;
  smallkeys: number;
  medallion: number;
  constructor(
    boss: boolean,
    crystal: number,
    chests: number,
    map: boolean,
    compass: boolean,
    bosskey: boolean,
    smallkeys: number,
    medallion: number) {
    this.boss = boss;
    this.crystal = crystal;
    this.chests = chests;
    this.map = map;
    this.compass = compass;
    this.bosskey = bosskey;
    this.smallkeys = smallkeys;
    this.medallion = medallion;
  }
}
