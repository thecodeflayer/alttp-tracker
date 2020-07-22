import {InvertedRegionHelper} from '~/inverted/InvertedRegionHelper';
import {DefaultSettingsData} from '~/default-objects/DefaultSettings';
import {DefaultItemsData} from '~/default-objects/DefaultItems';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';

describe('InvertedRegionHelper', () => {
  it('should test gt access with different Settings.openGT values', () => {
    const settings = new DefaultSettingsData();
    const items = new DefaultItemsData();
    const dungeons = new DefaultDungeonsData();
    items.moonpearl = true;
    items.glove = 2;
    items.hookshot = true;
    items.flute = true;

    settings.openGT = 0;
    expect(InvertedRegionHelper.gt(items, dungeons, settings)).toBe(true);

    settings.openGT = 1;
    expect(InvertedRegionHelper.gt(items, dungeons, settings)).toBe(false);
    dungeons.ep.crystal = 3;
    dungeons.ep.boss = true;
    expect(InvertedRegionHelper.gt(items, dungeons, settings)).toBe(true);

    settings.openGT = 2;
    expect(InvertedRegionHelper.gt(items, dungeons, settings)).toBe(false);
    dungeons.dp.crystal = 3;
    dungeons.dp.boss = true;
    expect(InvertedRegionHelper.gt(items, dungeons, settings)).toBe(true);

    settings.openGT = 3;
    expect(InvertedRegionHelper.gt(items, dungeons, settings)).toBe(false);
    dungeons.toh.crystal = 3;
    dungeons.toh.boss = true;
    expect(InvertedRegionHelper.gt(items, dungeons, settings)).toBe(true);

    settings.openGT = 4;
    expect(InvertedRegionHelper.gt(items, dungeons, settings)).toBe(false);
    dungeons.pod.crystal = 3;
    dungeons.pod.boss = true;
    expect(InvertedRegionHelper.gt(items, dungeons, settings)).toBe(true);

    settings.openGT = 5;
    expect(InvertedRegionHelper.gt(items, dungeons, settings)).toBe(false);
    dungeons.sp.crystal = 3;
    dungeons.sp.boss = true;
    expect(InvertedRegionHelper.gt(items, dungeons, settings)).toBe(true);

    settings.openGT = 6;
    expect(InvertedRegionHelper.gt(items, dungeons, settings)).toBe(false);
    dungeons.tt.crystal = 3;
    dungeons.tt.boss = true;
    expect(InvertedRegionHelper.gt(items, dungeons, settings)).toBe(true);

    settings.openGT = 7;
    expect(InvertedRegionHelper.gt(items, dungeons, settings)).toBe(false);
    dungeons.ip.crystal = 3;
    dungeons.ip.boss = true;
    expect(InvertedRegionHelper.gt(items, dungeons, settings)).toBe(true);
  });
});
