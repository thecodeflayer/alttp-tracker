export class DefaultItems {
  version = '0.0.1';
  data = new DefaultItemsData();

  toJSONString() :string {
    return JSON.stringify(this);
  }
  static fromJSON(str: string) :DefaultItems {
    const obj = JSON.parse(str);
    const retval =  new DefaultItems();
    retval.version = obj.version;
    retval.data = DefaultItemsData.fromObject(obj.data);
    return retval;
  }
}
export class DefaultItemsData {
  bow = 0; // 0 - 2 to indicate bow level
  boomerang = 0; // 0 - 3 to indicate boomerang level
  hookshot = false;
  bombs = false;
  powder = false;
  mushroom = false;
  firerod = false;
  icerod = false;
  bombos = false;
  ether = false;
  quake = false;
  shovel = false;
  lantern = false;
  hammer = false;
  flute = false;
  net = false;
  book = false;
  moonpearl = false;
  jar = 0; // 0 - 4 to indicate jar count
  redcane = false;
  bluecane = false;
  cape = false;
  mirror = false;
  glove = 0; // 0 - 2 to indicate glove level
  boots = false;
  flippers = false;
  halfmagic = false;
  sword = 0; // 0 - 4 to indicate sword level
  shield = 0; // 0 - 3 to indicate shield level
  tunic = 0;

  static fromObject(obj:any):DefaultItemsData {
    const data = new DefaultItemsData();
    const keys = Object.keys(obj);
    for(const key of keys){
      data[key] = obj[key];
    }
    return data;
  }
  getCopy(): DefaultItemsData {
    return JSON.parse(JSON.stringify(this));
  }
}
