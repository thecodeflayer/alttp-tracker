import {DefaultGameSaves, DefaultGameSavesData} from '~/default-objects/DefaultGameSaves';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';
import {DefaultSettingsData} from '~/default-objects/DefaultSettings';
const defaultJSON = require('./data/GameSaves/game-saves.json');
const missingJSON = require('./data/GameSaves/game-saves-missing-fields.json');

describe('DefaultGameSaves', () => {
  it('should create new DefaultGameSaves', () => {
    const gameSaves = new DefaultGameSaves();
    expect(gameSaves.data).toBeDefined();
  });
  it('should create new gameSave with JSON', () => {
    const gameSaves = DefaultGameSaves.fromJSON(JSON.stringify(defaultJSON));
    expect(gameSaves.data.game0).toBeDefined();
    expect(gameSaves.data.game0.dungeons).toBeInstanceOf(DefaultDungeonsData);
  });
  it('should create new gameSave with JSON missing fields', () => {
    const gameSaves = DefaultGameSaves.fromJSON(JSON.stringify(missingJSON));
    expect(gameSaves.data.game0).toBeDefined();
    expect(gameSaves.data.game1.timestamp).toEqual(1595073896963);
    expect(gameSaves.data.game2.timestamp).toBeUndefined();
    expect(gameSaves.data.game1.settings).toBeInstanceOf(DefaultSettingsData);
    expect(gameSaves.data.game2.settings).toBeUndefined();
  });
});
