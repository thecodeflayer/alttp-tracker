import {InvertedStaticMapDW} from '~/inverted/InvertedStaticMapDW';
import {DefaultItemsData} from '~/default-objects/DefaultItems';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';

describe('StaticMapDW', () => {

  const tests = [
    ['mireShed', false, {}, {}],
    // ["Mire Shed - Left", false, []],
    // ["Mire Shed - Left", false, [], ['Flute', 'MagicMirror']],
    // ["Mire Shed - Left", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove']],
    // ["Mire Shed - Left", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer']],
    // ["Mire Shed - Left", true, ['MoonPearl', 'Flute', 'DefeatAgahnim']],
    // ["Mire Shed - Left", true, ['MagicMirror', 'DefeatAgahnim']],
    //
    // ["Mire Shed - Right", false, []],
    // ["Mire Shed - Right", false, [], ['Flute', 'MagicMirror']],
    // ["Mire Shed - Right", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove']],
    // ["Mire Shed - Right", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer']],
    // ["Mire Shed - Right", true, ['MoonPearl', 'Flute', 'DefeatAgahnim']],
    // ["Mire Shed - Right", true, ['MagicMirror', 'DefeatAgahnim']],
    // ["Catfish", false, []],
    // ["Catfish", false, [], ['Gloves']],
    // ["Catfish", true, ['DefeatAgahnim', 'MagicMirror', 'ProgressiveGlove']],
    // ["Catfish", true, ['DefeatAgahnim', 'MagicMirror',  'PowerGlove']],
    // ["Catfish", true, ['DefeatAgahnim', 'MagicMirror',  'TitansMitt']],
    // ["Catfish", true, ['ProgressiveGlove', 'Hammer']],
    // ["Catfish", true, ['ProgressiveGlove', 'Flippers']],
    // ["Catfish", true, ['ProgressiveGlove', 'ProgressiveGlove', 'MagicMirror', 'MoonPearl']],
    //
    // ["Pyramid", false, []],
    // ["Pyramid", true, ['DefeatAgahnim', 'MagicMirror']],
    // ["Pyramid", true, ['Hammer']],
    // ["Pyramid", true, ['Flippers', 'ProgressiveGlove']],
    // ["Pyramid", true, ['ProgressiveGlove', 'ProgressiveGlove', 'MagicMirror', 'MoonPearl']],
    //
    // ["Pyramid Fairy - Sword", false, []],
    // ["Pyramid Fairy - Sword", false, [], ['MagicMirror']],
    // ["Pyramid Fairy - Sword", false, [], ['BigRedBomb']],
    // ["Pyramid Fairy - Sword", false, [], ['AnySword']],
    // ["Pyramid Fairy - Sword", true, ['BigRedBomb', 'UncleSword', 'MagicMirror', 'Hammer']],
    // ["Pyramid Fairy - Sword", true, ['BigRedBomb', 'UncleSword', 'MagicMirror', 'ProgressiveGlove', 'Flippers']],
    // ["Pyramid Fairy - Sword", true, ['BigRedBomb', 'UncleSword', 'MagicMirror', 'PowerGlove', 'Flippers']],
    // ["Pyramid Fairy - Sword", true, ['BigRedBomb', 'UncleSword', 'MagicMirror', 'TitansMitt', 'Flippers']],
    // ["Pyramid Fairy - Sword", true, ['BigRedBomb', 'ProgressiveSword', 'MagicMirror', 'Hammer']],
    // ["Pyramid Fairy - Sword", true, ['BigRedBomb', 'ProgressiveSword', 'MagicMirror', 'ProgressiveGlove', 'Flippers']],
    // ["Pyramid Fairy - Sword", true, ['BigRedBomb', 'ProgressiveSword', 'MagicMirror', 'PowerGlove', 'Flippers']],
    // ["Pyramid Fairy - Sword", true, ['BigRedBomb', 'ProgressiveSword', 'MagicMirror', 'TitansMitt', 'Flippers']],
    //
    // ["Pyramid Fairy - Bow", false, []],
    // ["Pyramid Fairy - Bow", false, [], ['MagicMirror']],
    // ["Pyramid Fairy - Bow", false, [], ['BigRedBomb']],
    // ["Pyramid Fairy - Bow", false, [], ['AnyBow']],
    // ["Pyramid Fairy - Bow", true, ['BigRedBomb', 'BowAndArrows', 'MagicMirror', 'Hammer']],
    // ["Pyramid Fairy - Bow", true, ['BigRedBomb', 'BowAndArrows', 'MagicMirror', 'ProgressiveGlove', 'Flippers']],
    // ["Pyramid Fairy - Bow", true, ['BigRedBomb', 'BowAndArrows', 'MagicMirror', 'PowerGlove', 'Flippers']],
    // ["Pyramid Fairy - Bow", true, ['BigRedBomb', 'BowAndArrows', 'MagicMirror', 'TitansMitt', 'Flippers']],
    //
    // ["Pyramid Fairy - Left", false, []],
    // ["Pyramid Fairy - Left", false, [], ['MagicMirror']],
    // ["Pyramid Fairy - Left", false, [], ['BigRedBomb']],
    // ["Pyramid Fairy - Left", true, ['BigRedBomb', 'MagicMirror', 'Hammer']],
    // ["Pyramid Fairy - Left", true, ['BigRedBomb', 'MagicMirror', 'ProgressiveGlove', 'Flippers']],
    // ["Pyramid Fairy - Left", true, ['BigRedBomb', 'MagicMirror', 'PowerGlove', 'Flippers']],
    // ["Pyramid Fairy - Left", true, ['BigRedBomb', 'MagicMirror', 'TitansMitt', 'Flippers']],
    //
    // ["Pyramid Fairy - Right", false, []],
    // ["Pyramid Fairy - Right", false, [], ['MagicMirror']],
    // ["Pyramid Fairy - Right", false, [], ['BigRedBomb']],
    // ["Pyramid Fairy - Right", true, ['BigRedBomb', 'MagicMirror', 'Hammer']],
    // ["Pyramid Fairy - Right", true, ['BigRedBomb', 'MagicMirror', 'ProgressiveGlove', 'Flippers']],
    // ["Pyramid Fairy - Right", true, ['BigRedBomb', 'MagicMirror', 'PowerGlove', 'Flippers']],
    // ["Pyramid Fairy - Right", true, ['BigRedBomb', 'MagicMirror', 'TitansMitt', 'Flippers']],

    // ["Brewery", true, []],
    //
    // ["C-Shaped House", true, []],
    //
    // ["Chest Game", true, []],
    //
    // ["Hammer Pegs", false, []],
    // ["Hammer Pegs", false, [], ['Hammer']],
    // ["Hammer Pegs", false, [], ['Gloves', 'MagicMirror']],
    // ["Hammer Pegs", true, ['Hammer', 'ProgressiveGlove', 'ProgressiveGlove']],
    // ["Hammer Pegs", true, ['Hammer', 'TitansMitt']],
    // ["Hammer Pegs", true, ['Hammer', 'ProgressiveGlove', 'MagicMirror', 'MoonPearl']],
    // ["Hammer Pegs", true, ['Hammer', 'DefeatAgahnim', 'MagicMirror']],
    //
    // ["Bumper Cave", false, []],
    // ["Bumper Cave", false, [], ['MoonPearl']],
    // ["Bumper Cave", false, [], ['Cape']],
    // ["Bumper Cave", false, [], ['Gloves']],
    // ["Bumper Cave", false, [], ['MagicMirror']],
    // ["Bumper Cave", true, ['MoonPearl', 'Cape', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove']],
    // ["Bumper Cave", true, ['MoonPearl', 'Cape', 'MagicMirror', 'ProgressiveGlove', 'Hammer']],
    // ["Bumper Cave", true, ['MoonPearl', 'Cape', 'MagicMirror', 'TitansMitt']],
    // ["Bumper Cave", true, ['MoonPearl', 'Cape', 'MagicMirror', 'PowerGlove', 'Hammer']],
    // ["Bumper Cave", true, ['MoonPearl', 'Cape', 'MagicMirror', 'DefeatAgahnim', 'ProgressiveGlove']],
    // ["Bumper Cave", true, ['MoonPearl', 'Cape', 'MagicMirror', 'DefeatAgahnim', 'PowerGlove']],
    //
    // ["Blacksmith", false, []],
    // ["Blacksmith", false, [], ['Gloves', 'MagicMirror']],
    // ["Blacksmith", true, ['ProgressiveGlove', 'ProgressiveGlove', 'MoonPearl']],
    // ["Blacksmith", true, ['TitansMitt', 'MoonPearl']],
    // ["Blacksmith", true, ['DefeatAgahnim', 'MagicMirror']],
    // ["Blacksmith", true, ['ProgressiveGlove', 'Hammer', 'MagicMirror', 'MoonPearl']],
    //
    // ["Purple Chest", false, []],
    // ["Purple Chest", false, [], ['Gloves', 'MagicMirror']],
    // ["Purple Chest", true, ['ProgressiveGlove', 'ProgressiveGlove', 'MoonPearl']],
    // ["Purple Chest", true, ['TitansMitt', 'MoonPearl']],
    // ["Purple Chest", true, ['DefeatAgahnim', 'MagicMirror']],
    // ["Purple Chest", true, ['ProgressiveGlove', 'Hammer', 'MagicMirror', 'MoonPearl']],

    // ["Hype Cave - Top", true, []],
    //
    // ["Hype Cave - Middle Right", true, []],
    //
    // ["Hype Cave - Middle Left", true, []],
    //
    // ["Hype Cave - Bottom", true, []],
    //
    // ["Hype Cave - NPC", true, []],
    //
    // ["Stumpy", true, []],
    //
    // ["Digging Game", true, []],
    //
    // ["Link's House", true, []],

    // ["Superbunny Cave - Top", false, []],
    // ["Superbunny Cave - Top", false, [], ['Gloves', 'Flute']],
    // ["Superbunny Cave - Top", true, ['ProgressiveGlove', 'Lamp']],
    // ["Superbunny Cave - Top", true, ['ProgressiveGlove', 'ProgressiveGlove', 'MoonPearl', 'Flute']],
    // ["Superbunny Cave - Top", true, ['Hammer', 'ProgressiveGlove', 'MoonPearl', 'Flute']],
    //
    // ["Superbunny Cave - Bottom", false, []],
    // ["Superbunny Cave - Bottom", false, [], ['Gloves', 'Flute']],
    // ["Superbunny Cave - Bottom", true, ['ProgressiveGlove', 'Lamp']],
    // ["Superbunny Cave - Bottom", true, ['ProgressiveGlove', 'ProgressiveGlove', 'MoonPearl', 'Flute']],
    // ["Superbunny Cave - Bottom", true, ['Hammer', 'ProgressiveGlove', 'MoonPearl', 'Flute']],
    //
    // ["Hookshot Cave - Bottom Right", false, []],
    // ["Hookshot Cave - Bottom Right", false, [], ['Gloves', 'Flute']],
    // ["Hookshot Cave - Bottom Right", false, [], ['PegasusBoots', 'Hookshot']],
    // ["Hookshot Cave - Bottom Right", true, ['ProgressiveGlove', 'Lamp', 'PegasusBoots']],
    // ["Hookshot Cave - Bottom Right", true, ['ProgressiveGlove', 'ProgressiveGlove', 'MoonPearl', 'Flute', 'PegasusBoots']],
    // ["Hookshot Cave - Bottom Right", true, ['ProgressiveGlove', 'Hammer', 'MoonPearl', 'Flute', 'PegasusBoots']],
    // ["Hookshot Cave - Bottom Right", true, ['ProgressiveGlove', 'Lamp', 'Hookshot']],
    // ["Hookshot Cave - Bottom Right", true, ['ProgressiveGlove', 'ProgressiveGlove', 'MoonPearl', 'Flute', 'Hookshot']],
    // ["Hookshot Cave - Bottom Right", true, ['ProgressiveGlove', 'Hammer', 'MoonPearl', 'Flute', 'Hookshot']],
    //
    // ["Hookshot Cave - Bottom Left", false, []],
    // ["Hookshot Cave - Bottom Left", false, [], ['Gloves', 'Flute']],
    // ["Hookshot Cave - Bottom Left", false, [], ['PegasusBoots', 'Hookshot']],
    // ["Hookshot Cave - Bottom Left", true, ['ProgressiveGlove', 'Lamp', 'Hookshot']],
    // ["Hookshot Cave - Bottom Left", true, ['ProgressiveGlove', 'ProgressiveGlove', 'MoonPearl', 'Flute', 'Hookshot']],
    // ["Hookshot Cave - Bottom Left", true, ['ProgressiveGlove', 'Hammer', 'MoonPearl', 'Flute', 'Hookshot']],
    //
    // ["Hookshot Cave - Top Left", false, []],
    // ["Hookshot Cave - Top Left", false, [], ['Gloves', 'Flute']],
    // ["Hookshot Cave - Top Left", false, [], ['PegasusBoots', 'Hookshot']],
    // ["Hookshot Cave - Top Left", true, ['ProgressiveGlove', 'Lamp', 'Hookshot']],
    // ["Hookshot Cave - Top Left", true, ['ProgressiveGlove', 'ProgressiveGlove', 'MoonPearl', 'Flute', 'Hookshot']],
    // ["Hookshot Cave - Top Left", true, ['ProgressiveGlove', 'Hammer', 'MoonPearl', 'Flute', 'Hookshot']],
    //
    // ["Hookshot Cave - Top Right", false, []],
    // ["Hookshot Cave - Top Right", false, [], ['Gloves', 'Flute']],
    // ["Hookshot Cave - Top Right", false, [], ['PegasusBoots', 'Hookshot']],
    // ["Hookshot Cave - Top Right", true, ['ProgressiveGlove', 'Lamp', 'Hookshot']],
    // ["Hookshot Cave - Top Right", true, ['ProgressiveGlove', 'ProgressiveGlove', 'MoonPearl', 'Flute', 'Hookshot']],
    // ["Hookshot Cave - Top Right", true, ['ProgressiveGlove', 'Hammer', 'MoonPearl', 'Flute', 'Hookshot']],

    // ["Spike Cave", false, []],
    // ["Spike Cave", false, [], ['Gloves']],
    // ["Spike Cave", false, [], ['Hammer']],
    // ["Spike Cave", false, [], ['Cape', 'CaneOfByrna']],
    // ["Spike Cave", true, ['Bottle', 'Hammer', 'ProgressiveGlove', 'Lamp', 'Cape']],
    // ["Spike Cave", true, ['Bottle', 'Hammer', 'PowerGlove', 'Lamp', 'Cape']],
    // ["Spike Cave", true, ['Bottle', 'Hammer', 'TitansMitt', 'Lamp', 'Cape']],
    // ["Spike Cave", true, ['Bottle', 'Hammer', 'ProgressiveGlove', 'Flute', 'MoonPearl', 'Cape']],
    // ["Spike Cave", true, ['Bottle', 'Hammer', 'PowerGlove', 'Flute', 'MoonPearl', 'Cape']],
    // ["Spike Cave", true, ['Bottle', 'Hammer', 'TitansMitt', 'Flute', 'MoonPearl', 'Cape']],
    // ["Spike Cave", true, ['Bottle', 'Hammer', 'ProgressiveGlove', 'Lamp', 'CaneOfByrna']],
    // ["Spike Cave", true, ['Bottle', 'Hammer', 'PowerGlove', 'Lamp', 'CaneOfByrna']],
    // ["Spike Cave", true, ['Bottle', 'Hammer', 'TitansMitt', 'Lamp', 'CaneOfByrna']],
    // ["Spike Cave", true, ['Bottle', 'Hammer', 'ProgressiveGlove', 'Flute', 'MoonPearl', 'CaneOfByrna']],
    // ["Spike Cave", true, ['Bottle', 'Hammer', 'PowerGlove', 'Flute', 'MoonPearl', 'CaneOfByrna']],
    // ["Spike Cave", true, ['Bottle', 'Hammer', 'TitansMitt', 'Flute', 'MoonPearl', 'CaneOfByrna']],
    // ["Spike Cave", true, ['HalfMagic', 'Hammer', 'ProgressiveGlove', 'Lamp', 'Cape']],
    // ["Spike Cave", true, ['HalfMagic', 'Hammer', 'PowerGlove', 'Lamp', 'Cape']],
    // ["Spike Cave", true, ['HalfMagic', 'Hammer', 'TitansMitt', 'Lamp', 'Cape']],
    // ["Spike Cave", true, ['HalfMagic', 'Hammer', 'ProgressiveGlove', 'Flute', 'MoonPearl', 'Cape']],
    // ["Spike Cave", true, ['HalfMagic', 'Hammer', 'PowerGlove', 'Flute', 'MoonPearl', 'Cape']],
    // ["Spike Cave", true, ['HalfMagic', 'Hammer', 'TitansMitt', 'Flute', 'MoonPearl', 'Cape']],
    // ["Spike Cave", true, ['HalfMagic', 'Hammer', 'ProgressiveGlove', 'Lamp', 'CaneOfByrna']],
    // ["Spike Cave", true, ['HalfMagic', 'Hammer', 'PowerGlove', 'Lamp', 'CaneOfByrna']],
    // ["Spike Cave", true, ['HalfMagic', 'Hammer', 'TitansMitt', 'Lamp', 'CaneOfByrna']],
    // ["Spike Cave", true, ['HalfMagic', 'Hammer', 'ProgressiveGlove', 'Flute', 'MoonPearl', 'CaneOfByrna']],
    // ["Spike Cave", true, ['HalfMagic', 'Hammer', 'PowerGlove', 'Flute', 'MoonPearl', 'CaneOfByrna']],
    // ["Spike Cave", true, ['HalfMagic', 'Hammer', 'TitansMitt', 'Flute', 'MoonPearl', 'CaneOfByrna']],
    // ["Spike Cave", true, ['QuarterMagic', 'Hammer', 'ProgressiveGlove', 'Lamp', 'Cape']],
    // ["Spike Cave", true, ['QuarterMagic', 'Hammer', 'PowerGlove', 'Lamp', 'Cape']],
    // ["Spike Cave", true, ['QuarterMagic', 'Hammer', 'TitansMitt', 'Lamp', 'Cape']],
    // ["Spike Cave", true, ['QuarterMagic', 'Hammer', 'ProgressiveGlove', 'Flute', 'MoonPearl', 'Cape']],
    // ["Spike Cave", true, ['QuarterMagic', 'Hammer', 'PowerGlove', 'Flute', 'MoonPearl', 'Cape']],
    // ["Spike Cave", true, ['QuarterMagic', 'Hammer', 'TitansMitt', 'Flute', 'MoonPearl', 'Cape']],
    // ["Spike Cave", true, ['QuarterMagic', 'Hammer', 'ProgressiveGlove', 'Lamp', 'CaneOfByrna']],
    // ["Spike Cave", true, ['QuarterMagic', 'Hammer', 'PowerGlove', 'Lamp', 'CaneOfByrna']],
    // ["Spike Cave", true, ['QuarterMagic', 'Hammer', 'TitansMitt', 'Lamp', 'CaneOfByrna']],
    // ["Spike Cave", true, ['QuarterMagic', 'Hammer', 'ProgressiveGlove', 'Flute', 'MoonPearl', 'CaneOfByrna']],
    // ["Spike Cave", true, ['QuarterMagic', 'Hammer', 'PowerGlove', 'Flute', 'MoonPearl', 'CaneOfByrna']],
    // ["Spike Cave", true, ['QuarterMagic', 'Hammer', 'TitansMitt', 'Flute', 'MoonPearl', 'CaneOfByrna']],
  ];

  const negTests = [];

  tests.forEach((test)=> {
    const items =  test[2];
    const dungeons = test[3];
    const result = test[1];
    const isNeg = test[4] ? true : false;
    const location = new InvertedStaticMapDW()[test[0]];
    const itemKeys = Object.keys(test[2]);
    const dungeonKeys = Object.keys(test[3]);
    it('should'+(isNeg?' negative':'')+' test location access for '+test[0]+' with '+
      (itemKeys.length>0 ? ('items '+stringifyItem(items)): 'no items')+' and '+
      (dungeonKeys.length>0 ? ('dungeons '+stringifyDungeon(dungeons)): 'no dungeons')+' and expect '+result, () => {
      const itemsObj = new DefaultItemsData();
      if(isNeg) {
        itemsObj.bow = 2;
        itemsObj.boomerang = 3;
        itemsObj.hookshot = true;
        itemsObj.bombs = true;
        itemsObj.powder = true;
        itemsObj.mushroom = true;
        itemsObj.firerod = true;
        itemsObj.icerod = true;
        itemsObj.bombos = true;
        itemsObj.ether = true;
        itemsObj.quake = true;
        itemsObj.shovel = true;
        itemsObj.lantern = true;
        itemsObj.hammer = true;
        itemsObj.flute = true;
        itemsObj.net = true;
        itemsObj.book = true;
        itemsObj.moonpearl = true;
        itemsObj.jar = 4;
        itemsObj.bluecane = true;
        itemsObj.redcane = true;
        itemsObj.cape = true;
        itemsObj.mirror = true;
        itemsObj.glove = 2;
        itemsObj.boots = true;
        itemsObj.flippers = true;
        itemsObj.halfmagic = true;
        itemsObj.sword = 4;
        itemsObj.shield = 3;
        itemsObj.tunic = 2;
      }
      const dungeonsObj = new DefaultDungeonsData();
      //load items
      for(const key of itemKeys) {
        itemsObj[key] = items[key];
      }
      //load dungeons
      for(const key of dungeonKeys) {
        dungeonsObj[key] = dungeons[key];
      }
      expect(location.validate(itemsObj, dungeonsObj)).toBe(result);
    });
  });
});

function stringifyItem(obj) {
  let retval = '';
  const keys = Object.keys(obj);
  for(const key of keys) {
    retval = retval + key +':'+obj[key]+',';
  }
  return retval;
}
function stringifyDungeon(obj) {
  let retval = '';
  const keys = Object.keys(obj);
  for(const key of keys) {
    retval = retval + key+'['+stringifyItem(obj[key])+'] ';
  }
}
