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

  getReverseAction(action) {
    return action === 'enterLink' ? 'enterLinkedTo'
      : action === 'exitLink' ? 'exitLinkedTo'
        : action === 'enterLinkedTo' ? 'enterLink' : 'exitLink';
  }

  createLinkR(fromLink:string, toLink: string, action: string) {
    console.log('from', fromLink, 'to', toLink, 'action', action);
    if (this.modelManager.entrances[fromLink][action] === toLink){
      console.log('already set, exiting');
      return; //already set
    }
    const reverseAction = this.getReverseAction(action);
    //clean up fromLink existing links
    if (toLink !== undefined && this.modelManager.entrances[fromLink][action] && this.modelManager.entrances[fromLink][action] !== toLink) {
      const oldFromLink = this.modelManager.entrances[fromLink][action];
      //remove existing oldFromLink
      this.createLinkR(oldFromLink, undefined, reverseAction);
    }
    const retval = this.modelManager.entrances[fromLink][action] = toLink;
    console.log('setting', fromLink, action, toLink);
    if (this.getStaticEntrance(fromLink).isSingleCave && (action === 'exitLink' || action === 'enterLinkedTo')) {
      const caveAction = action === 'exitLink' ? 'enterLinkedTo' : 'exitLink';
      //check if already linked
      if (this.modelManager.entrances[fromLink][caveAction] && this.modelManager.entrances[fromLink][caveAction] !== toLink) {
        this.createLinkR(fromLink, undefined, caveAction);
      }
      this.createLinkR(fromLink, toLink, caveAction);
    }
    if(toLink){
      this.createLinkR(toLink, fromLink, reverseAction);
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
