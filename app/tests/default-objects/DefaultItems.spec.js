import {DefaultItems, DefaultItemsData} from '~/default-objects/DefaultItems';

describe('DefaultItems', () => {
  it('should create new DefaultItems object', () => {
    const defaultItems = new DefaultItems();

    expect(defaultItems.data).toBeDefined();
  });

  it('should load items from JSON', () => {
    const json = {'version':'0.0.1', 'data':{'bow':0, 'boomerang':0, 'hookshot':false, 'bombs':false, 'powder':true, 'mushroom':false, 'firerod':false, 'icerod':false, 'bombos':false, 'ether':false, 'quake':false, 'shovel':false, 'lantern':false, 'hammer':false, 'flute':false, 'net':false, 'book':false, 'moonpearl':false, 'jar':0, 'redcane':true, 'bluecane':true, 'cape':false, 'mirror':false, 'glove':2, 'boots':false, 'flippers':false, 'halfmagic':false, 'sword':3, 'shield':0, 'tunic':1}};
    const items = DefaultItems.fromJSON(JSON.stringify(json));

    expect(items.data.bow).toEqual(0);
    expect(items.data.tunic).toEqual(1);
  });
  it('should load items from JSON even if json is incomplete', () => {
    const json = {'version':'0.0.1', 'data':{'bow':2}};
    const items = DefaultItems.fromJSON(JSON.stringify(json));

    expect(items.data.bow).toEqual((2));
    expect(items.data.tunic).toEqual(0);
  });
  it('should make a copy', () => {
    const items1 = new DefaultItemsData();
    const items2 = new DefaultItemsData();
    const items3 = items2.getCopy();
    items2.bow = 1;
    items3.bow = 2;

    expect(items1.bow).toEqual(0);
    expect(items2.bow).toEqual(1);
    expect(items3.bow).toEqual(2);

  });
});
