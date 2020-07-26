export class GameSaveHelper {
  static labels = {
    standard: 'Standard',
    inverted: 'Inverted',
    retro: 'Retro'
  }
  static itemShuffleOptions = {
    standard : {
      id:'standard',
      label: 'Standard'
    },
    mc: {
      id:'mc',
      label: 'Maps and Compasses'
    },
    mcsk: {
      id: 'mcsk',
      label: 'Maps, Compasses and Small Keys'
    },
    keysanity: {
      id: 'keysanity',
      label: 'Keysanity'
    }
  }
  static goalOptions = {
    ganon: {
      id: 'ganon',
      label: 'Defeat Ganon'
    },
    fastGanon: {
      id: 'fastGanon',
      label: 'Fast Ganon'
    },
    allDungeons: {
      id: 'allDungeons',
      label: 'All Dungeons'
    },
    pedestal: {
      id: 'pedestal',
      label: 'Master Sword Pedestal'
    },
    triforce: {
      id: 'triforce',
      label: 'Triforce Pieces'
    }
  }

  static parseGameSaves(modelManager) {
    const retval = {};
    const keys = Object.keys(modelManager.gameSaves);
    let i = 0;
    for(const key of keys) {
      const g = new GameEditObj(
        key,
        'Game '+(i+1),
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        20, 7, 7);
      if(modelManager.gameSaves[key].timestamp){
        g.timestamp = this.parseDate(modelManager.gameSaves[key].timestamp);
        g.valid = modelManager.validateGame(modelManager.gameSaves[key]);
        g.loaded = modelManager.settings.gameSlot === key;
        g.gameMode = this.labels[modelManager.gameSaves[key].settings.gameMode];
        g.itemShuffle = this.itemShuffleOptions[modelManager.gameSaves[key].settings.itemShuffle].id;
        g.goal = this.goalOptions[modelManager.gameSaves[key].settings.goal].id;
        g.triforceGoal = modelManager.gameSaves[key].settings.triforceGoal;
        g.openGT = modelManager.gameSaves[key].settings.openGT;
        g.openGanon = modelManager.gameSaves[key].settings.openGanon;
      }
      retval[key]=g;
      i++;
    }
    return retval;
  }
  static parseDate(ts){
    if(!ts){
      return '';
    }
    const d = new Date(ts);
    return d.getFullYear()+'-'+
      this.pad(d.getMonth()+1)+
      '-'+this.pad(d.getDate())
      +' '+this.pad(d.getHours())+':'+this.pad(d.getMinutes());
  }
  static pad(n) {
    return n<10 ? '0'+n : n;
  }
}
export class GameEditObj {
  id: string;
  name: string;
  timestamp: string;
  valid: boolean;
  loaded: boolean;
  gameMode: string;
  itemShuffle: string;
  goal: string;
  triforceGoal: number;
  openGT: number;
  openGanon: number;
  constructor(id: string, name: string, timestamp: string, valid: boolean, loaded: boolean,
    gameMode: string, itemShuffle: string, goal: string, triforceGoal: number, openGT: number, openGanon: number) {
    this.id = id;
    this.name = name;
    this.timestamp = timestamp;
    this.valid = valid;
    this.loaded = loaded;
    this.gameMode = gameMode;
    this.itemShuffle = itemShuffle;
    this.goal = goal;
    this.triforceGoal = triforceGoal;
    this.openGT = openGT;
    this.openGanon = openGanon;
  }
}
