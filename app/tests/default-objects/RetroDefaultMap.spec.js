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
  it('should load json and fill in missing items', () => {
    const json = {
      version:'1.0.0',
      data:{
        darkworld:{},
        lightworld:{scrollY:10, mode:1, x:10, y:10,
          dungeons:{ep:{klass:'locale-green', checked:true}},
          shops:{snitchLadyEast:{klass:'locale-green', checked:true}}
        }
      }
    };
    const map = RetroDefaultMap.fromJSON(JSON.stringify(json));
    expect(map.version).toEqual('1.0.0');
    expect(map.data.darkworld.locations.bumperCave.checked).toBeFalse();
    expect(map.data.darkworld.mode).toEqual(0);
    expect(map.data.lightworld.scale).toEqual(1);
    expect(map.data.darkworld.centerKey).toBeUndefined();
    expect(map.data.darkworld.showMode).toEqual('locations');
    expect(map.data.lightworld.scrollY).toEqual(10);
    expect(map.data.lightworld.mode).toEqual(1);
    expect(map.data.lightworld.x).toEqual(10);
    expect(map.data.lightworld.y).toEqual(10);
    expect(map.data.lightworld.dungeons.ep.checked).toBeTrue();
    expect(map.data.darkworld.dungeons.sp.klass).toEqual('locale-red');
    expect(map.data.darkworld.bosses.ip.klass).toEqual('locale-red');
    expect(map.data.lightworld.locations.oldMan.checked).toBeFalse();
    expect(map.data.lightworld.shops.snitchLadyEast.checked).toBeTrue();
    expect(map.data.lightworld.shops.snitchLadyWest.checked).toBeFalse();
    expect(map.data.darkworld.shops.dwDeathMtnFairy.checked).toBeFalse();
  });
});
