import {DefaultDungeons, DefaultDungeonsData} from '~/default-objects/DefaultDungeons';

describe('DefaultDungeons', () => {
  it('should create new DefaultDungeons', () => {
    const dungeons = new DefaultDungeons();

    expect(dungeons.data).toBeDefined();
  });

  it('should load items from JSON', () => {
    const json = {'version':'0.0.1', 'data':{'ep':{'boss':true, 'crystal':0, 'chests':5, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'dp':{'boss':false, 'crystal':0, 'chests':4, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'toh':{'boss':false, 'crystal':0, 'chests':4, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'aga':{'boss':false, 'crystal':0, 'chests':0, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'pod':{'boss':false, 'crystal':0, 'chests':7, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'sp':{'boss':false, 'crystal':0, 'chests':8, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'sw':{'boss':false, 'crystal':0, 'chests':4, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'tt':{'boss':false, 'crystal':0, 'chests':6, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'ip':{'boss':false, 'crystal':0, 'chests':5, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'mm':{'boss':false, 'crystal':0, 'chests':4, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'tr':{'boss':false, 'crystal':0, 'chests':7, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'gt':{'boss':false, 'crystal':0, 'chests':22, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}}};
    const dungeons =DefaultDungeons.fromJSON(JSON.stringify(json));
    
    expect(dungeons.data.ep.boss).toEqual(true);
  });
  it('should load items from JSON even if json is incomplete', () => {
    const json = {'version':'0.0.1', 'data':{'dp':{'boss':true, 'crystal':0, 'chests':4, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'toh':{'boss':false, 'crystal':0, 'chests':4, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'aga':{'boss':false, 'crystal':0, 'chests':0, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'pod':{'boss':false, 'crystal':0, 'chests':7, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'sp':{'boss':false, 'crystal':0, 'chests':8, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'sw':{'boss':false, 'crystal':0, 'chests':4, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'tt':{'boss':false, 'crystal':0, 'chests':6, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'ip':{'boss':false, 'crystal':0, 'chests':5, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'mm':{'boss':false, 'crystal':0, 'chests':4, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'tr':{'boss':false, 'crystal':0, 'chests':7, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}, 'gt':{'boss':false, 'crystal':0, 'chests':22, 'map':false, 'compass':false, 'bosskey':false, 'smallkeys':0, 'medallion':0}}};
    const dungeons = DefaultDungeons.fromJSON(JSON.stringify(json));

    expect(dungeons.data.ep).toBeDefined();
    expect(dungeons.data.ep.boss).toEqual(false);
    expect(dungeons.data.dp.boss).toEqual(true);
  });
  it('should make a copy', () => {
    const dungeons1 = new DefaultDungeonsData();
    dungeons1.aga.boss = true;
    const dungeons2 = new DefaultDungeonsData();
    dungeons2.dp.boss = true;
    const dungeons3 = dungeons2.getCopy();
    expect(dungeons2.aga.boss).toEqual(false);
    expect(dungeons3.dp.boss).toEqual(true);
  });
});
