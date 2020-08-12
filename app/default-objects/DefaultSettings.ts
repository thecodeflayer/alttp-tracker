export class DefaultSettings {
  version = '0.0.1';
  data = new DefaultSettingsData();

  toJSONString() :string {
    return JSON.stringify(this);
  }
  static fromJSON(str:string) :DefaultSettings{
    const obj = JSON.parse(str);
    const retval =  new DefaultSettings();
    retval.version = obj.version;
    retval.data = DefaultSettingsData.fromObject(obj.data);
    return retval;
  }
}

export class DefaultSettingsData {
  gameMode = 'standard';
  itemShuffle = 'standard';
  gameSlot = 'game0';
  goal = 'ganon';
  openGT = 7;
  openGanon = 7;
  triforceGoal = 20;
  triforceCount = 0;
  entranceShuffle = 'none';

  static fromObject(obj:any):DefaultSettingsData {
    const data = new DefaultSettingsData();
    const keys = Object.keys(data);
    for(const key of keys){
      if(obj[key]!==undefined) {
        data[key] = obj[key];
      }
    }
    return data;
  }
  getCopy(): DefaultSettingsData {
    return JSON.parse(JSON.stringify(this));
  }

}
