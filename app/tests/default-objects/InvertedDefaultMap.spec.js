import {InvertedDefaultMap} from '~/default-objects/InvertedDefaultMap';

describe('InvertedDefaultMap', () => {
  it('should insure object has correct properties', () => {
    const map = new InvertedDefaultMap();
    expect(map.data.darkworld.locations.linkHouse).toBeDefined();
    expect(map.data.darkworld.locations.oldMan).toBeDefined();
    expect(map.data.lightworld.locations.bumperCave).toBeDefined();
    expect(map.data.darkworld.dungeons.aga).toBeDefined();
    expect(map.data.lightworld.dungeons.gt).toBeDefined();
    expect(map.data.darkworld.bosses.aga).toBeDefined();
    expect(map.data.lightworld.bosses.gt).toBeDefined();

    expect(map.data.lightworld.locations.linkHouse).toBeUndefined();
    expect(map.data.lightworld.locations.oldMan).toBeUndefined();
    expect(map.data.darkworld.locations.bumperCave).toBeUndefined();
    expect(map.data.lightworld.dungeons.aga).toBeUndefined();
    expect(map.data.darkworld.dungeons.gt).toBeUndefined();
    expect(map.data.lightworld.bosses.aga).toBeUndefined();
    expect(map.data.darkworld.bosses.gt).toBeUndefined();
    expect(Object.keys(map.data.lightworld.shops).length).toEqual(0);
    expect(Object.keys(map.data.darkworld.shops).length).toEqual(0);
  });
});
