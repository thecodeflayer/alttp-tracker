export class GameSaveHelper {
  static labels = {
    standard: 'Standard',
    inverted: 'Inverted'
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
  constructor() {
  }

  static parseGameSaves(modelManager) {
    const retval = {};
    const keys = Object.keys(modelManager.gameSaves);
    let i = 0;
    for(const key of keys) {
      const g = {
        id:key,
        name:'Game '+(i+1),
        timestamp: undefined,
        valid: undefined,
        loaded: undefined,
        gameMode: undefined,
        itemShuffle: undefined
      };
      if(modelManager.gameSaves[key].timestamp){
        g.timestamp = this.parseDate(modelManager.gameSaves[key].timestamp);
        g.valid = modelManager.validateGame(modelManager.gameSaves[key]);
        g.loaded = modelManager.settings.gameSlot === key;
        g.gameMode = this.labels[modelManager.gameSaves[key].settings.gameMode];
        g.itemShuffle = this.itemShuffleOptions[modelManager.gameSaves[key].settings.itemShuffle].id;
      }
      retval[key]=g;
      i++;
    }
    return retval;
  }
  static parseDate(ts){
    if(!ts){return ''; }
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
