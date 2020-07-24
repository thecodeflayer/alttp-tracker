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
  it('should load json and fill in missing items', () => {
    const json = {
      version:'1.0.0',
      data:{
        lightworld:{},
        darkworld:{scrollY:10, mode:1, x:10, y:10,
          dungeons:{pod:{klass:'locale-green', checked:true}}
        }
      }
    };
    const map = InvertedDefaultMap.fromJSON(JSON.stringify(json));
    expect(map.version).toEqual('1.0.0');
    expect(map.data.lightworld.locations.bumperCave.checked).toBeFalse();
    expect(map.data.lightworld.mode).toEqual(0);
    expect(map.data.lightworld.scale).toEqual(1);
    expect(map.data.lightworld.centerKey).toBeUndefined();
    expect(map.data.lightworld.showMode).toEqual('locations');
    expect(map.data.darkworld.scrollY).toEqual(10);
    expect(map.data.darkworld.mode).toEqual(1);
    expect(map.data.darkworld.x).toEqual(10);
    expect(map.data.darkworld.y).toEqual(10);
    expect(map.data.darkworld.dungeons.pod.checked).toBeTrue();
    expect(map.data.darkworld.dungeons.sp.klass).toEqual('locale-red');
    expect(map.data.darkworld.bosses.ip.klass).toEqual('locale-red');
    expect(map.data.darkworld.locations.oldMan.checked).toBeFalse();
  });
});
