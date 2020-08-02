import {StaticEntrancesLW} from '@/entrance/StaticEntrancesLW';
import {StaticEntrancesDW} from '@/entrance/StaticEntrancesDW';
import {IDefaultMapData} from '@/default-objects/DefaultMap';

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
    const keys = Object.keys(new StaticEntrancesLW()).concat(Object.keys(new StaticEntrancesDW()));
    for(const key of keys){
      this[key] = new EntranceObj(key);
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
  constructor(id: string) {
    this.id = id;
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
