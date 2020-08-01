import {ModelManager} from '@/utils/ModelManager';
import {StaticObjectLoader} from '@/utils/StaticObjectLoader';

export class EntranceHelper {
  sol: StaticObjectLoader;
  modelManager: ModelManager;
  lwEntranceKeys: Array<string>;
  dwEntranceKeys: Array<string>;
  lwStaticEntrances: any;
  dwStaticEntrances: any;
  dwIndex: number;
  allKeys: Array<string>;

  constructor(sol, modelManager) {
    this.sol = sol;
    this.modelManager = modelManager;
    this.lwStaticEntrances = this.sol.getStaticEntrancesLW(this.modelManager.getEntranceShuffleMode());
    this.dwStaticEntrances = this.sol.getStaticEntrancesDW(this.modelManager.getEntranceShuffleMode());
    this.lwEntranceKeys = Object.keys(this.lwStaticEntrances);
    this.dwEntranceKeys = Object.keys(this.dwStaticEntrances);
    this.dwIndex = this.lwEntranceKeys.length;
    this.allKeys = this.lwEntranceKeys.concat(this.dwEntranceKeys);
  }

  resetLink(link, action) {
    this.modelManager.entrances[link][action] = undefined;
  }

  getReverseAction(action) {
    return action === 'enterLink' ? 'enterLinkedTo'
      : action === 'exitLink' ? 'exitLinkedTo'
        : action === 'enterLinkedTo' ? 'enterLink' : 'exitLink';
  }

  createLink(fromLink: string, toLink: string, action: string) {
    const reverseAction = this.getReverseAction(action);
    //check if a fromLink already linked to something else. If so, clear it.
    if(this.modelManager.entrances[fromLink][action]) {
      this.resetLink(this.modelManager.entrances[fromLink][action], reverseAction);
    }
    const retval = this.modelManager.entrances[fromLink][action] = toLink;
    //check if toLink already linked to something else. If so, clear it.
    if(this.modelManager.entrances[toLink][reverseAction]){
      this.resetLink(this.modelManager.entrances[toLink][reverseAction], action);
    }
    //save linked object
    this.modelManager.entrances[toLink][reverseAction] = fromLink;
    const staticEntrance = this.getStaticEntrance(fromLink);
    const staticLink = this.getStaticEntrance(toLink);
    // do single cave
    if(staticEntrance.isSingleCave && (action === 'exitLink' || action === 'enterLinkedTo')) {
      const caveAction = action === 'exitLink' ? 'enterLinkedTo' : 'exitLink';
      const caveReverseAction = caveAction === 'exitLink' ? 'exitLinkedTo' : 'enterLink';
      //check if already linked
      if(this.modelManager.entrances[fromLink][caveAction]) {
        this.resetLink(this.modelManager.entrances[fromLink][caveAction], this.getReverseAction(caveAction));
      }
      this.modelManager.entrances[fromLink][caveAction] = toLink;
      //check if already linked
      if(this.modelManager.entrances[toLink][caveReverseAction]){
        this.resetLink(this.modelManager.entrances[toLink][caveReverseAction], this.getReverseAction(caveReverseAction));
      }
      this.modelManager.entrances[toLink][caveReverseAction] = fromLink;
    }
    if(staticLink.isSingleCave && (reverseAction ===  'exitLink' || reverseAction === 'enterLinkedTo')){
      const caveAction = reverseAction === 'exitLink' ? 'enterLinkedTo' : 'exitLink';
      const caveReverseAction = caveAction === 'exitLink' ? 'exitLinkedTo' : 'enterLink';
      //check if already linked
      if(this.modelManager.entrances[toLink][caveAction]) {
        this.resetLink(this.modelManager.entrances[toLink][caveAction], this.getReverseAction(caveAction));
      }
      this.modelManager.entrances[toLink][caveAction] = fromLink;
      //check if already linked
      if(this.modelManager.entrances[fromLink][caveReverseAction]){
        this.resetLink(this.modelManager.entrances[fromLink][caveReverseAction], this.getReverseAction(caveReverseAction));
      }
      this.modelManager.entrances[fromLink][caveReverseAction] = toLink;
    }
    return retval;
  }

  getStaticEntrance(id) {
    return id
      ? (this.allKeys.indexOf(id)>=this.dwIndex ? this.dwStaticEntrances[id]
        : this.lwStaticEntrances[id] ) : {name:'???'};
  }
  getEntrance(id) {
    return this.modelManager.entrances[id];
  }
  getLightWorldRegionObject() {
    const retval = {
      dungeon:{},
      deathmtn:{},
      kakariko:{},
      northwest:{},
      south:{},
      other:{}
    };
    for(const key of this.lwEntranceKeys) {
      const region = this.lwStaticEntrances[key].region === 'northeast' || this.lwStaticEntrances[key].region === 'desert' ? 'other' : this.lwStaticEntrances[key].region;
      retval[region][key] = {id:key, name:this.lwStaticEntrances[key].name};
    }
    return retval;
  }
  getDarkWorldRegionObject() {
    const retval = {
      dungeon:{},
      deathmtn:{},
      village:{},
      northwest:{},
      south:{},
      other:{}
    };
    for(const key of this.dwEntranceKeys) {
      const region = this.dwStaticEntrances[key].region === 'northeast' || this.dwStaticEntrances[key].region === 'mire' ? 'other' : this.dwStaticEntrances[key].region;
      retval[region][key] = {id:key, name:this.dwStaticEntrances[key].name};
    }
    return retval;
  }
  isKeyDarkWorld(key) {
    return this.allKeys.indexOf(key)>=this.dwIndex;
  }
  getLogicText(staticEntrance, staticLink, action){
    if(!staticEntrance || !staticLink) {
      return '';
    }
    if(action === 'enterLink') {
      return 'Entering '+staticEntrance.name+' overworld door leads to ' + staticLink.name;
    } else if(action === 'exitLink') {
      return 'Exiting '+staticEntrance.name+' leads to '+staticLink.name+' overworld door';
    } else if(action === 'enterLinkedTo') {
      return 'Entering '+staticLink.name+' overworld door leads to '+staticEntrance.name;
    } else {
      return 'Exiting '+staticLink.name+' leads to '+staticEntrance.name+' overworld door';
    }
  }
}
