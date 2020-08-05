import {StaticEntrancesLW} from '@/entrance/StaticEntrancesLW';
import {StaticEntrancesDW} from '@/entrance/StaticEntrancesDW';

export class DefaultEntrances {
  version = '0.0.1';
  data: DefaultEntranceData;
  toJSONString():string {
    return JSON.stringify(this);
  }
  static fromJSON(str: string):DefaultEntrances{
    const obj = JSON.parse(str);
    const retval = new DefaultEntrances();
    retval.version = obj.version;
    retval.data = DefaultEntranceData.fromObject(obj.data);
    return retval;
  }
}
export class DefaultEntranceData {
  constructor() {
    const slw = new StaticEntrancesLW();
    const sdw = new StaticEntrancesDW();
    let keys = Object.keys(slw);
    for(const key of keys){
      this[key] = new EntranceObj(key, slw[key].isHole);
    }
    keys = Object.keys(sdw);
    for(const key of keys){
      this[key] = new EntranceObj(key, sdw[key].isHole);
    }
  }
  getCopy(): DefaultEntranceData {
    return JSON.parse(JSON.stringify(this));
  }
  static fromObject(obj:any) :DefaultEntranceData {
    const data = new DefaultEntranceData();
    const keys = Object.keys(data);
    for(const key of keys){
      if(obj[key]!==undefined) {
        data[key].setFromObject(obj[key]);
      }
    }
    return data;
  }
}
export class EntranceObj {
  id:string;
  enterLink: string;
  exitLink: string;
  enterLinkedTo: string;
  exitLinkedTo: string;
  isHoleFM: boolean;
  constructor(id: string, isHoleFM: boolean) {
    this.id = id;
    this.isHoleFM = isHoleFM;
    this.enterLink = undefined;
    this.exitLink = undefined;
    this.enterLinkedTo = undefined;
    this.exitLinkedTo = undefined;
  }
  setFromObject(obj: any): void {
    const keys = Object.keys(this);
    for(const key of keys){
      if(obj[key]!==undefined) {
        this[key] = obj[key];
      }
    }
  }
}
