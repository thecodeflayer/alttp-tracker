import {RetroDefaultMap} from '~/default-objects/RetroDefaultMap';

describe('RetroDefaultMap', () => {
  it('should insure object has correct properties', () => {
    const map = new RetroDefaultMap();
    expect(map.data.lightworld.locations.linkHouse).toBeDefined();
    expect(map.data.lightworld.locations.oldMan).toBeDefined();
    expect(map.data.darkworld.locations.bumperCave).toBeDefined();
    expect(map.data.lightworld.dungeons.aga).toBeDefined();
    expect(map.data.darkworld.dungeons.gt).toBeDefined();
    expect(map.data.lightworld.bosses.aga).toBeDefined();
    expect(map.data.darkworld.bosses.gt).toBeDefined();

    expect(map.data.darkworld.locations.linkHouse).toBeUndefined();
    expect(map.data.darkworld.locations.oldMan).toBeUndefined();
    expect(map.data.lightworld.locations.bumperCave).toBeUndefined();
    expect(map.data.darkworld.dungeons.aga).toBeUndefined();
    expect(map.data.lightworld.dungeons.gt).toBeUndefined();
    expect(map.data.darkworld.bosses.aga).toBeUndefined();
    expect(map.data.lightworld.bosses.gt).toBeUndefined();

    expect(Object.keys(map.data.lightworld.shops).length).toBeGreaterThan(0);
    expect(Object.keys(map.data.darkworld.shops).length).toBeGreaterThan(0);
  });
});
