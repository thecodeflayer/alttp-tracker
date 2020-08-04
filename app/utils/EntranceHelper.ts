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
  logicTextColors = {
    basic:'#FFFFFF',
    entrance:'#01a0a0',
    unknown:'#FF0000',
    known:'#2aa52a'
  };

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
    // if(!this.getStaticEntrance(link).isHole){
    //   this.modelManager.entrances[link][action] = undefined;
    // }
  }

  getReverseAction(action) {
    return action === 'enterLink' ? 'enterLinkedTo'
      : action === 'exitLink' ? 'exitLinkedTo'
        : action === 'enterLinkedTo' ? 'enterLink' : 'exitLink';
  }

  createLink(fromLink: string, toLink: string, action: string) {
    const reverseAction = this.getReverseAction(action);
    let oldFromLink = undefined;
    let oldToLink = undefined;
    //check if a fromLink already linked to something else. If so, clear it.
    if(this.modelManager.entrances[fromLink][action]) {
      oldFromLink = this.modelManager.entrances[fromLink][action];
      this.resetLink(oldFromLink, reverseAction);
    }
    const retval = this.modelManager.entrances[fromLink][action] = toLink;
    //check if toLink already linked to something else. If so, clear it.
    if(this.modelManager.entrances[toLink][reverseAction]){
      oldToLink = this.modelManager.entrances[toLink][reverseAction];
      this.resetLink(oldToLink, action);
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
    if(oldToLink) {
      const oldStaticLink = this.getStaticEntrance(oldToLink);
      if (oldStaticLink.isSingleCave && (reverseAction === 'exitLink' || reverseAction === 'enterLinkedTo')) {
        const caveAction = reverseAction === 'exitLink' ? 'enterLinkedTo' : 'exitLink';
        const caveReverseAction = caveAction === 'exitLink' ? 'exitLinkedTo' : 'enterLink';
        //check if already linked
        if (this.modelManager.entrances[oldToLink][caveAction]) {
          this.resetLink(this.modelManager.entrances[oldToLink][caveAction], this.getReverseAction(caveAction));
        }
        if (this.modelManager.entrances[oldToLink][caveReverseAction]) {
          this.resetLink(this.modelManager.entrances[oldToLink][caveReverseAction], this.getReverseAction(caveReverseAction));
        }
      }
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
      northeast:{},
      holes:{},
      holeExits:{}
    };
    for(const key of this.lwEntranceKeys) {
      const region = this.lwStaticEntrances[key].isHole ? 'holes'
        : this.lwStaticEntrances[key].isHoleExit ? 'holeExits'
          : this.lwStaticEntrances[key].region === 'castle' ? 'northeast'
            : this.lwStaticEntrances[key].region === 'desert' ? 'south' : this.lwStaticEntrances[key].region;
      retval[region][key] = {id:key, name:this.lwStaticEntrances[key].name, image:this.lwStaticEntrances[key].image, useless:!!this.lwStaticEntrances[key].useless};
      //add hole exits for hole selection option
      if(this.lwStaticEntrances[key].isHoleExit){
        retval.holeExits[key]={id:key, name:this.lwStaticEntrances[key].name, image:this.lwStaticEntrances[key].image, useless:!!this.lwStaticEntrances[key].useless};
      }
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
      other:{},
      holes:{},
      holeExits:{}
    };
    for(const key of this.dwEntranceKeys) {
      const region = this.dwStaticEntrances[key].isHole? 'holes'
        : this.dwStaticEntrances[key].isHoleExit ? 'holeExits'
          :this.dwStaticEntrances[key].region === 'northeast' || this.dwStaticEntrances[key].region === 'mire' ? 'other'
            : this.dwStaticEntrances[key].region;
      retval[region][key] = {id:key, name:this.dwStaticEntrances[key].name, image:this.dwStaticEntrances[key].image, useless:!!this.dwStaticEntrances[key].useless};
      //add hole exits for hole selection option
      if(this.dwStaticEntrances[key].isHoleExit){
        retval.holeExits[key]={id:key, name:this.dwStaticEntrances[key].name, image:this.dwStaticEntrances[key].image, useless:!!this.dwStaticEntrances[key].useless};
      }
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
    if(staticEntrance.isHole && action === 'enterLink') {
      return [{text:'Falling in ', color:this.logicTextColors.basic},
        {text:staticEntrance.name, color:this.logicTextColors.entrance},
        {text:' overworld hole leads to ', color:this.logicTextColors.basic},
        {text:staticLink.name, color:staticLink.region?this.logicTextColors.known:this.logicTextColors.unknown}];
    } else if(action === 'enterLink') {
      return [{text:'Entering ', color:this.logicTextColors.basic},
        {text:staticEntrance.name, color:this.logicTextColors.entrance},
        {text:' overworld door leads to ', color:this.logicTextColors.basic},
        {text:staticLink.name, color:staticLink.region?this.logicTextColors.known:this.logicTextColors.unknown}];
    } else if(action === 'exitLink') {
      return [{text:'Exiting ', color:this.logicTextColors.basic},
        {text:staticEntrance.name, color:this.logicTextColors.entrance},
        {text:' leads to ', color:this.logicTextColors.basic},
        {text:staticLink.name, color:staticLink.region?this.logicTextColors.known:this.logicTextColors.unknown},
        {text:' overworld door', color:this.logicTextColors.basic}];
    } else if(staticEntrance.isHole && action === 'enterLinkedTo') {
      return [{text:'Falling in ', color:this.logicTextColors.basic},
        {text:staticLink.name, color:staticLink.region?this.logicTextColors.known:this.logicTextColors.unknown},
        {text:' overworld hole leads to ', color:this.logicTextColors.basic},
        {text:staticEntrance.name, color:this.logicTextColors.entrance}];
    } else if(action === 'enterLinkedTo') {
      return [{text:'Entering ', color:this.logicTextColors.basic},
        {text:staticLink.name, color:staticLink.region?this.logicTextColors.known:this.logicTextColors.unknown},
        {text:' overworld door leads to ', color:this.logicTextColors.basic},
        {text:staticEntrance.name, color:this.logicTextColors.entrance}];
    } else {
      return [{text:'Exiting ', color:this.logicTextColors.basic},
        {text:staticLink.name, color:staticLink.region?this.logicTextColors.known:this.logicTextColors.unknown},
        {text:' leads to ', color:this.logicTextColors.basic},
        {text:staticEntrance.name, color:this.logicTextColors.entrance},
        {text:' overworld door', color:this.logicTextColors.basic}];
    }
  }
}
