import {ModelManager} from '@/utils/ModelManager';
import {StaticObjectLoader} from '@/utils/StaticObjectLoader';
import {GameSaveHelper} from '@/utils/GameSaveHelper';

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
    known:'#2aa52a',
    junk: '#ffb700'
  };

  static junkLinks = ['junkCave', 'darkCave'];
  static junkLinkObjects = {
    junkCave:{id:'junkCave', name: 'Junk Cave', intImg:'~/img/interior/junkCave.png', extImg:'~/img/interior/junkCave.png'},
    darkCave:{id:'darkCave', name: 'Unknown Dark Cave', intImg:'~/img/interior/darkCave.png', extImg:'~/img/interior/darkCave.png'}
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
      const oldToLink = this.modelManager.entrances[fromLink][action];
      //manually clean up junk cave since that's easier than looping through everything.
      if(EntranceHelper.junkLinks.indexOf(oldToLink)>-1) {
        this.modelManager.entrances[fromLink].enterLink = this.modelManager.entrances[fromLink].enterLink === 'junkCave'
          ? undefined :  this.modelManager.entrances[fromLink].enterLink;
        this.modelManager.entrances[fromLink].exitLinkedTo = this.modelManager.entrances[fromLink].exitLinkedTo === 'junkCave'
          ? undefined :  this.modelManager.entrances[fromLink].enterLink;
      } else {
        //remove existing oldToLink
        this.createLinkR(oldToLink, undefined, reverseAction);
      }
    }
    const retval = this.modelManager.entrances[fromLink][action] = toLink;
    console.log('setting', fromLink, action, toLink);
    //link back
    if ((this.modelManager.settings.entranceShuffle !== GameSaveHelper.entranceShuffleOptions.insanity.id || this.getStaticEntrance(fromLink).isSingleCave)
      && (action === 'exitLink' || action === 'enterLinkedTo')) {
      const caveAction = action === 'exitLink' ? 'enterLinkedTo' : 'exitLink';
      //check if already linked
      if (this.modelManager.entrances[fromLink][caveAction] && this.modelManager.entrances[fromLink][caveAction] !== toLink) {
        this.createLinkR(fromLink, undefined, caveAction);
      }
      this.createLinkR(fromLink, toLink, caveAction);
    }
    //handle junk links
    if((toLink==='junkCave' || (toLink === 'darkCave' && this.modelManager.settings.entranceShuffle !== GameSaveHelper.entranceShuffleOptions.insanity.id))
      && (action ==='enterLink' || action === 'exitLinkedTo')){
      const junkAction = action === 'enterLink' ? 'exitLinkedTo' : 'enterLink';
      this.createLinkR(fromLink, toLink, junkAction);
    }
    if(toLink && EntranceHelper.junkLinks.indexOf(toLink)<0){
      this.createLinkR(toLink, fromLink, reverseAction);
    }
    return retval;
  }

  getStaticEntrance(id) {
    return id
      ? EntranceHelper.junkLinks.indexOf(id)>-1 ? EntranceHelper.junkLinkObjects[id]
        : (this.allKeys.indexOf(id)>=this.dwIndex ? this.dwStaticEntrances[id] : this.lwStaticEntrances[id] ) : {name:'???'};
  }
  getEntrance(id) {
    return this.modelManager.entrances[id];
  }
  getAvailableLinks(entrance, action, path = [], alreadyLinked=false):Array<any> {
    const retval = [];
    let showAlreadyLinked = false;
    if(entrance.isHoleExit && entrance.isSkullWoods) {
      const keys = Object.keys(this.dwStaticEntrances);

      for(const key of keys) {
        if(this.dwStaticEntrances[key].isHoleExit && this.dwStaticEntrances[key].isSkullWoods && (!!this.modelManager.entrances[key][action] === alreadyLinked)){
          retval.push(
            {
              isLink: true,
              klass: 'standard',
              id:key,
              isHole:!!this.dwStaticEntrances[key].isHole,
              isHoleExit:!!this.dwStaticEntrances[key].isHoleExit,
              isSkullWoods:!!this.dwStaticEntrances[key].isSkullWoods,
              name:this.dwStaticEntrances[key].name,
              intImg:this.dwStaticEntrances[key].intImg,
              extImg:this.dwStaticEntrances[key].extImg,
              junk:!!this.dwStaticEntrances[key].junk
            }
          );
        } else if(this.dwStaticEntrances[key].isHoleExit && this.dwStaticEntrances[key].isSkullWoods && (!!this.modelManager.entrances[key][action] !== alreadyLinked)) {
          showAlreadyLinked = true;
        }
      }
      if(!alreadyLinked && showAlreadyLinked) {
        retval.push({
          isLink:false,
          klass: 'danger',
          id:'alreadyLinked',
          name: 'Previously Linked'
        });
      }
    } else if(entrance.isHole && entrance.isSkullWoods && this.modelManager.settings.entranceShuffle !== GameSaveHelper.entranceShuffleOptions.insanity.id) {
      const keys = Object.keys(this.dwStaticEntrances);
      for(const key of keys) {
        if(this.dwStaticEntrances[key].isHole && this.dwStaticEntrances[key].isSkullWoods && (!!this.modelManager.entrances[key][action] === alreadyLinked)){
          retval.push(
            {
              isLink: true,
              klass: 'standard',
              id:key,
              isHole:!!this.dwStaticEntrances[key].isHole,
              isHoleExit:!!this.dwStaticEntrances[key].isHoleExit,
              isSkullWoods:!!this.dwStaticEntrances[key].isSkullWoods,
              name:this.dwStaticEntrances[key].name,
              intImg:this.dwStaticEntrances[key].intImg,
              extImg:this.dwStaticEntrances[key].extImg,
              junk:!!this.dwStaticEntrances[key].junk
            }
          );
        } else if(this.dwStaticEntrances[key].isHole && this.dwStaticEntrances[key].isSkullWoods && (!!this.modelManager.entrances[key][action] !== alreadyLinked)) {
          showAlreadyLinked = true;
        }
      }
      if(!alreadyLinked && showAlreadyLinked) {
        retval.push({
          isLink:false,
          klass: 'danger',
          id:'alreadyLinked',
          name: 'Previously Linked'
        });
      }
    } else if(entrance.isHole && this.modelManager.settings.entranceShuffle !== GameSaveHelper.entranceShuffleOptions.insanity.id) {
      const keys = Object.keys(this.lwStaticEntrances).concat(Object.keys(this.dwStaticEntrances));
      for(const key of keys){
        const e = this.getStaticEntrance(key);
        if(e.isHole && !e.isSkullWoods && (!!this.modelManager.entrances[key][action] === alreadyLinked)) {
          retval.push(
            {
              isLink: true,
              klass: 'standard',
              id:key,
              isHole:!!e.isHole,
              isHoleExit:!!e.isHoleExit,
              isSkullWoods:!!e.isSkullWoods,
              name:e.name,
              intImg:e.intImg,
              extImg:e.extImg,
              junk:!!e.junk
            }
          );
        } else if (e.isHole && !e.isSkullWoods && (!!this.modelManager.entrances[key][action] !== alreadyLinked)) {
          showAlreadyLinked = true;
        }
      }
      if(!alreadyLinked && showAlreadyLinked){
        retval.push({
          isLink:false,
          klass: 'danger',
          id:'alreadyLinked',
          name: 'Previously Linked'
        });
      }
    } else if(entrance.isHoleExit && this.modelManager.settings.entranceShuffle !== GameSaveHelper.entranceShuffleOptions.insanity.id){
      const keys = Object.keys(this.lwStaticEntrances).concat(Object.keys(this.dwStaticEntrances));
      for(const key of keys){
        const e = this.getStaticEntrance(key);
        if(e.isHoleExit && !e.isSkullWoods && (!!this.modelManager.entrances[key][action] === alreadyLinked)) {
          retval.push(
            {
              isLink: true,
              klass: 'standard',
              id:key,
              isHole:!!e.isHole,
              isHoleExit:!!e.isHoleExit,
              isSkullWoods:!!e.isSkullWoods,
              name:e.name,
              intImg:e.intImg,
              extImg:e.extImg,
              junk:!!e.junk
            }
          );
        } else if (e.isHoleExit && !e.isSkullWoods && (!!this.modelManager.entrances[key][action] !== alreadyLinked)) {
          showAlreadyLinked = true;
        }
      }
      if(!alreadyLinked && showAlreadyLinked){
        retval.push({
          isLink:false,
          klass: 'danger',
          id:'alreadyLinked',
          name: 'Previously Linked'
        });
      }
    } else if(entrance.isSingleEntranceDungeon
      && (this.modelManager.settings.entranceShuffle === GameSaveHelper.entranceShuffleOptions.restricted.id || this.modelManager.settings.entranceShuffle === GameSaveHelper.entranceShuffleOptions.simple.id)) {
      const keys = Object.keys(this.lwStaticEntrances).concat(Object.keys(this.dwStaticEntrances));
      for(const key of keys){
        const e = this.getStaticEntrance(key);
        if(e.isSingleEntranceDungeon && (!!this.modelManager.entrances[key][action] === alreadyLinked)) {
          retval.push(
            {
              isLink: true,
              klass: 'standard',
              id:key,
              isHole:!!e.isHole,
              isHoleExit:!!e.isHoleExit,
              isSkullWoods:!!e.isSkullWoods,
              name:e.name,
              intImg:e.intImg,
              extImg:e.extImg,
              junk:!!e.junk
            }
          );
        } else if (e.isSingleEntranceDungeon && (!!this.modelManager.entrances[key][action] !== alreadyLinked)) {
          showAlreadyLinked = true;
        }
      }
      if(!alreadyLinked && showAlreadyLinked){
        retval.push({
          isLink:false,
          klass: 'danger',
          id:'alreadyLinked',
          name: 'Previously Linked'
        });
      }
    } else if(entrance.isMultiEntranceDungeon
      && (this.modelManager.settings.entranceShuffle === GameSaveHelper.entranceShuffleOptions.restricted.id || this.modelManager.settings.entranceShuffle === GameSaveHelper.entranceShuffleOptions.simple.id)) {
      const keys = Object.keys(this.lwStaticEntrances).concat(Object.keys(this.dwStaticEntrances));
      for(const key of keys){
        const e = this.getStaticEntrance(key);
        if(e.isMultiEntranceDungeon && (!!this.modelManager.entrances[key][action] === alreadyLinked)) {
          retval.push(
            {
              isLink: true,
              klass: 'standard',
              id:key,
              isHole:!!e.isHole,
              isHoleExit:!!e.isHoleExit,
              isSkullWoods:!!e.isSkullWoods,
              name:e.name,
              intImg:e.intImg,
              extImg:e.extImg,
              junk:!!e.junk
            }
          );
        } else if (e.isMultiEntranceDungeon && (!!this.modelManager.entrances[key][action] !== alreadyLinked)) {
          showAlreadyLinked = true;
        }
      }
      if(!alreadyLinked && showAlreadyLinked){
        retval.push({
          isLink:false,
          klass: 'danger',
          id:'alreadyLinked',
          name: 'Previously Linked'
        });
      }
    } else if(this.modelManager.settings.entranceShuffle === GameSaveHelper.entranceShuffleOptions.simple.id) {

    } else if(this.modelManager.settings.entranceShuffle === GameSaveHelper.entranceShuffleOptions.restricted.id) {
      if(path.length === 0) {
        retval.push({isLink:false, klass:'standard', id:'lightworld', name:'Light World'});
        retval.push({isLink:false, klass:'standard', id:'darkworld', name:'Dark World'});
        if(action === 'enterLinkedTo') {
          retval.push({isLink:true, klass:'ugly', id:'junkCave', name: 'Junk Cave', extImg:'~/img/interior/junkCave.png'});
          retval.push({isLink:true, klass:'ugly', id:'darkCave', name: 'Unknown Dark Cave', extImg:'~/img/interior/darkCave.png'});
        }
      } else if(path.length === 1 && path[0] === 'lightworld') {
        retval.push({isLink:false, klass:'standard', id:'deathmtn', name:'Death Mountain'});
        retval.push({isLink:false, klass:'standard', id:'kakariko', name:'Kakariko'});
        retval.push({isLink:false, klass:'standard', id:'northwest', name:'North West'});
        retval.push({isLink:false, klass:'standard', id:'south', name:'Desert and South'});
        retval.push({isLink:false, klass:'standard', id:'northeast', name:'North East'});
      } else if(path.length === 1 && path[0] === 'darkworld') {
        retval.push({isLink:false, klass:'standard', id:'deathmtn', name:'Death Mountain'});
        retval.push({isLink:false, klass:'standard', id:'village', name:'Village of Outcasts'});
        retval.push({isLink:false, klass:'standard', id:'northwest', name:'North West'});
        retval.push({isLink:false, klass:'standard', id:'south', name:'South'});
        retval.push({isLink:false, klass:'standard', id:'northeast', name:'Mire and North East'});
      } else if(path.length === 2) {
        const keys = path[0] === 'lightworld' ? Object.keys(this.lwStaticEntrances) : Object.keys(this.dwStaticEntrances);
        for(const key of keys) {
          const e = this.getStaticEntrance(key);
          if(!(e.isHole || e.isHoleExit)
            && (e.region === path[1] || (e.region === 'mire' && path[1] === 'northeast') || (e.region === 'desert' && path[1] === 'south'))
            && (!!this.modelManager.entrances[key][action] === alreadyLinked)) {
            retval.push(
              {
                isLink: true,
                klass: 'standard',
                id:key,
                isHole:!!e.isHole,
                isHoleExit:!!e.isHoleExit,
                isSkullWoods:!!e.isSkullWoods,
                name:e.name,
                intImg:e.intImg,
                extImg:e.extImg,
                junk:!!e.junk
              }
            );
          } else if(!(e.isHole || e.isHoleExit)
            && (e.region === path[1] || (e.region === 'mire' && path[1] === 'northeast') || (e.region === 'desert' && path[1] === 'south'))
            && (!!this.modelManager.entrances[key][action] !== alreadyLinked)) {
            showAlreadyLinked = true;
          }
        }
        if(!alreadyLinked && showAlreadyLinked){
          retval.push({
            isLink:false,
            klass: 'danger',
            id:'alreadyLinked',
            name: 'Previously Linked'
          });
        }
      }
    } else if(this.modelManager.settings.entranceShuffle === GameSaveHelper.entranceShuffleOptions.crossed.id || this.modelManager.settings.entranceShuffle === GameSaveHelper.entranceShuffleOptions.full.id) {
      if(path.length === 0) {
        retval.push({isLink:false, klass:'standard', id:'lightworld', name:'Light World'});
        retval.push({isLink:false, klass:'standard', id:'darkworld', name:'Dark World'});
        if(action === 'enterLinkedTo') {
          retval.push({isLink:true, klass:'ugly', id:'junkCave', name: 'Junk Cave', extImg:'~/img/interior/junkCave.png'});
          retval.push({isLink:true, klass:'ugly', id:'darkCave', name: 'Unknown Dark Cave', extImg:'~/img/interior/darkCave.png'});
        }
      } else if(path.length === 1 && path[0] === 'lightworld') {
        retval.push({isLink:false, klass:'standard', id:'dungeon', name:'Dungeons'});
        retval.push({isLink:false, klass:'standard', id:'deathmtn', name:'Death Mountain'});
        retval.push({isLink:false, klass:'standard', id:'kakariko', name:'Kakariko'});
        retval.push({isLink:false, klass:'standard', id:'northwest', name:'North West'});
        retval.push({isLink:false, klass:'standard', id:'south', name:'Desert and South'});
        retval.push({isLink:false, klass:'standard', id:'northeast', name:'Hyrule Castle and North East'});
      } else if(path.length === 1 && path[0] === 'darkworld') {
        retval.push({isLink:false, klass:'standard', id:'dungeon', name:'Dungeons'});
        retval.push({isLink:false, klass:'standard', id:'deathmtn', name:'Death Mountain'});
        retval.push({isLink:false, klass:'standard', id:'village', name:'Village of Outcasts'});
        retval.push({isLink:false, klass:'standard', id:'northwest', name:'North West'});
        retval.push({isLink:false, klass:'standard', id:'south', name:'South'});
        retval.push({isLink:false, klass:'standard', id:'northeast', name:'Mire and North East'});
      } else if(path.length === 2) {
        const keys = path[0] === 'lightworld' ? Object.keys(this.lwStaticEntrances) : Object.keys(this.dwStaticEntrances);
        for(const key of keys) {
          const e = this.getStaticEntrance(key);
          if(!(e.isHole || e.isHoleExit)
            && (e.region === path[1] || ((e.region === 'mire' || e.region === 'castle') || (e.region === 'desert' && path[1] === 'south') && path[1] === 'northeast'))
            && (!!this.modelManager.entrances[key][action] === alreadyLinked)) {
            retval.push(
              {
                isLink: true,
                klass: 'standard',
                id:key,
                isHole:!!e.isHole,
                isHoleExit:!!e.isHoleExit,
                isSkullWoods:!!e.isSkullWoods,
                name:e.name,
                intImg:e.intImg,
                extImg:e.extImg,
                junk:!!e.junk
              }
            );
          } else if(!(e.isHole || e.isHoleExit)
            && (e.region === path[1] || ((e.region === 'mire' || e.region === 'castle') || (e.region === 'desert' && path[1] === 'south') && path[1] === 'northeast'))
            && (!!this.modelManager.entrances[key][action] !== alreadyLinked)) {
            showAlreadyLinked = true;
          }
        }
        if(!alreadyLinked && showAlreadyLinked){
          retval.push({
            isLink:false,
            klass: 'danger',
            id:'alreadyLinked',
            name: 'Previously Linked'
          });
        }
      }
    } else if(this.modelManager.settings.entranceShuffle === GameSaveHelper.entranceShuffleOptions.insanity.id) {
      if(entrance.isHole) {
        const keys = Object.keys(this.lwStaticEntrances).concat(Object.keys(this.dwStaticEntrances));
        for(const key of keys){
          const e = this.getStaticEntrance(key);
          if(e.isHole && (!!this.modelManager.entrances[key][action] === alreadyLinked)) {
            retval.push(
              {
                isLink: true,
                klass: 'standard',
                id:key,
                isHole:!!e.isHole,
                isHoleExit:!!e.isHoleExit,
                isSkullWoods:!!e.isSkullWoods,
                name:e.name,
                intImg:e.intImg,
                extImg:e.extImg,
                junk:!!e.junk
              }
            );
          } else if (e.isHole && (!!this.modelManager.entrances[key][action] !== alreadyLinked)) {
            showAlreadyLinked = true;
          }
        }
        if(!alreadyLinked && showAlreadyLinked){
          retval.push({
            isLink:false,
            klass: 'danger',
            id:'alreadyLinked',
            name: 'Previously Linked'
          });
        }
      } else if(path.length === 0) {
        retval.push({isLink:false, klass:'standard', id:'lightworld', name:'Light World'});
        retval.push({isLink:false, klass:'standard', id:'darkworld', name:'Dark World'});
        if(action === 'enterLinkedTo') {
          retval.push({isLink:true, klass:'ugly', id:'junkCave', name: 'Junk Cave', extImg:'~/img/interior/junkCave.png'});
          retval.push({isLink:true, klass:'ugly', id:'darkCave', name: 'Unknown Dark Cave', extImg:'~/img/interior/darkCave.png'});
        }
      } else if(path.length === 1 && path[0] === 'lightworld') {
        retval.push({isLink:false, klass:'standard', id:'dungeon', name:'Dungeons'});
        retval.push({isLink:false, klass:'standard', id:'deathmtn', name:'Death Mountain'});
        retval.push({isLink:false, klass:'standard', id:'kakariko', name:'Kakariko'});
        retval.push({isLink:false, klass:'standard', id:'northwest', name:'North West'});
        retval.push({isLink:false, klass:'standard', id:'south', name:'Desert and South'});
        retval.push({isLink:false, klass:'standard', id:'northeast', name:'Hyrule Castle and North East'});
        retval.push({isLink:false, klass:'standard', id:'holeExits', name:'Hole Exits'});
      } else if(path.length === 1 && path[0] === 'darkworld') {
        retval.push({isLink:false, klass:'standard', id:'dungeon', name:'Dungeons'});
        retval.push({isLink:false, klass:'standard', id:'deathmtn', name:'Death Mountain'});
        retval.push({isLink:false, klass:'standard', id:'village', name:'Village of Outcasts'});
        retval.push({isLink:false, klass:'standard', id:'northwest', name:'North West'});
        retval.push({isLink:false, klass:'standard', id:'south', name:'South'});
        retval.push({isLink:false, klass:'standard', id:'northeast', name:'Mire and North East'});
        retval.push({isLink:false, klass:'standard', id:'holeExits', name:'Hole Exits'});
      } else if(path.length === 2) {
        const keys = path[0] === 'lightworld' ? Object.keys(this.lwStaticEntrances) : Object.keys(this.dwStaticEntrances);
        for(const key of keys) {
          const e = this.getStaticEntrance(key);
          if(!(e.isHole || e.isSkullWoods && e.isHoleExit)
            && (e.region === path[1] || ((e.region === 'mire' || e.region === 'castle') && path[1] === 'northeast') || (e.region === 'desert' && path[1] === 'south') || (e.isHoleExit && path[1] ==='holeExits'))
            && (!!this.modelManager.entrances[key][action] === alreadyLinked)) {
            retval.push(
              {
                isLink: true,
                klass: 'standard',
                id:key,
                isHole:!!e.isHole,
                isHoleExit:!!e.isHoleExit,
                isSkullWoods:!!e.isSkullWoods,
                name:e.name,
                intImg:e.intImg,
                extImg:e.extImg,
                junk:!!e.junk
              }
            );
          } else if(!(e.isHole || (e.isSkullWoods && e.isHoleExit))
            && (e.region === path[1] || ((e.region === 'mire' || e.region === 'castle') && path[1] === 'northeast') || (e.region === 'desert' && path[1] === 'south') || (e.isHoleExit && path[1] === 'holeExits'))
            && (!!this.modelManager.entrances[key][action] !== alreadyLinked)) {
            showAlreadyLinked = true;
          }
        }
        if(!alreadyLinked && showAlreadyLinked){
          retval.push({
            isLink:false,
            klass: 'danger',
            id:'alreadyLinked',
            name: 'Previously Linked'
          });
        }
      }
    }
    return retval;
  }
  getLightWorldRegionObject(action) {
    const retval = {
      dungeon:{},
      deathmtn:{},
      kakariko:{},
      northwest:{},
      south:{},
      northeast:{},
      holes:{},
      holeExits:{},
      alreadySet:{}
    };
    for(const key of this.lwEntranceKeys) {
      const region = this.modelManager.entrances[key][action] ? 'alreadySet'
        :this.lwStaticEntrances[key].isHole ? 'holes'
          : this.lwStaticEntrances[key].isHoleExit ? 'holeExits'
            : this.lwStaticEntrances[key].region === 'castle' ? 'northeast'
              : this.lwStaticEntrances[key].region === 'desert' ? 'south' : this.lwStaticEntrances[key].region;
      retval[region][key] = {
        id:key,
        isHole:!!this.lwStaticEntrances[key].isHole,
        isHoleExit:!!this.lwStaticEntrances[key].isHoleExit,
        isSkullWoods:!!this.lwStaticEntrances[key].isSkullWoods,
        name:this.lwStaticEntrances[key].name,
        intImg:this.lwStaticEntrances[key].intImg,
        extImg:this.lwStaticEntrances[key].extImg,
        junk:!!this.lwStaticEntrances[key].junk
      };
    }
    return retval;
  }
  getDarkWorldRegionObject(action) {
    const retval = {
      dungeon:{},
      deathmtn:{},
      village:{},
      northwest:{},
      south:{},
      other:{},
      holes:{},
      holeExits:{},
      skullWoodsExits:{},
      alreadySet:{}
    };
    for(const key of this.dwEntranceKeys) {
      const region = this.modelManager.entrances[key][action] ? 'alreadySet'
        : this.dwStaticEntrances[key].isHole? 'holes'
          : this.dwStaticEntrances[key].isSkullWoods && this.dwStaticEntrances[key].isHoleExit ? 'skullWoodsExits'
            : this.dwStaticEntrances[key].isHoleExit ? 'holeExits'
              :this.dwStaticEntrances[key].region === 'northeast' || this.dwStaticEntrances[key].region === 'mire' ? 'other'
                : this.dwStaticEntrances[key].region;
      retval[region][key] = {
        id:key,
        isHole:!!this.dwStaticEntrances[key].isHole,
        isHoleExit:!!this.dwStaticEntrances[key].isHoleExit,
        isSkullWoods:!!this.dwStaticEntrances[key].isSkullWoods,
        name:this.dwStaticEntrances[key].name,
        intImg:this.dwStaticEntrances[key].intImg,
        extImg:this.dwStaticEntrances[key].extImg,
        junk:!!this.dwStaticEntrances[key].junk
      };
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
        {text:staticLink.name, color:staticLink.region?this.logicTextColors.known: EntranceHelper.junkLinks.indexOf(staticLink.id)>-1 ? this.logicTextColors.junk : this.logicTextColors.unknown}];
    } else if(action === 'enterLink') {
      return [{text:'Entering ', color:this.logicTextColors.basic},
        {text:staticEntrance.name, color:this.logicTextColors.entrance},
        {text:' overworld door leads to ', color:this.logicTextColors.basic},
        {text:staticLink.name, color:staticLink.region?this.logicTextColors.known:EntranceHelper.junkLinks.indexOf(staticLink.id)>-1 ? this.logicTextColors.junk :this.logicTextColors.unknown}];
    } else if(action === 'exitLink') {
      return [{text:'Exiting ', color:this.logicTextColors.basic},
        {text:staticEntrance.name, color:this.logicTextColors.entrance},
        {text:' leads to ', color:this.logicTextColors.basic},
        {text:staticLink.name, color:staticLink.region?this.logicTextColors.known:EntranceHelper.junkLinks.indexOf(staticLink.id)>-1 ? this.logicTextColors.junk :this.logicTextColors.unknown},
        {text:' overworld door', color:this.logicTextColors.basic}];
    } else if(staticEntrance.isHole && action === 'enterLinkedTo') {
      return [{text:'Falling in ', color:this.logicTextColors.basic},
        {text:staticLink.name, color:staticLink.region?this.logicTextColors.known:EntranceHelper.junkLinks.indexOf(staticLink.id)>-1 ? this.logicTextColors.junk :this.logicTextColors.unknown},
        {text:' overworld hole leads to ', color:this.logicTextColors.basic},
        {text:staticEntrance.name, color:this.logicTextColors.entrance}];
    } else if(action === 'enterLinkedTo') {
      return [{text:'Entering ', color:this.logicTextColors.basic},
        {text:staticLink.name, color:staticLink.region?this.logicTextColors.known:EntranceHelper.junkLinks.indexOf(staticLink.id)>-1 ? this.logicTextColors.junk :this.logicTextColors.unknown},
        {text:' overworld door leads to ', color:this.logicTextColors.basic},
        {text:staticEntrance.name, color:this.logicTextColors.entrance}];
    } else {
      return [{text:'Exiting ', color:this.logicTextColors.basic},
        {text:staticLink.name, color:staticLink.region?this.logicTextColors.known:EntranceHelper.junkLinks.indexOf(staticLink.id)>-1 ? this.logicTextColors.junk :this.logicTextColors.unknown},
        {text:' leads to ', color:this.logicTextColors.basic},
        {text:staticEntrance.name, color:this.logicTextColors.entrance},
        {text:' overworld door', color:this.logicTextColors.basic}];
    }
  }
  static getPinSource(pin){
    return pin === 'moonpearl' ? '~/img/items/moonpearl1.png'
      : pin === 'mirror' ? '~/img/items/mirror1.png'
        : pin === 'crystal' ? '~/img/dungeons/crystal3.png'
          : pin === 'ganon' ? '~/img/items/ganon.png'
            :pin === 'chest' ? '~/img/chest.png'
              : pin === 'glove' ? '~/img/items/glove2.png'
                : pin === 'flute' ? '~/img/items/flute1.png'
                  : pin === 'shovel' ? '~/img/items/shovel1.png'
                    : pin === 'fairy' ? '~/img/navbar/home.png'
                      : pin === 'shop' ? '~/img/shopLW.png' : '~/img/dungeons/blank.png';
  }
}
