import {StandardStaticMapLW} from '~/standard/StandardStaticMapLW';
import {DefaultItemsData} from '~/default-objects/DefaultItems';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';

describe('StaticMapLW', () => {

  const tests = [
    ['pedestal', false, {}, {}],
    ['pedestal', false, {}, {ep:{'boss':true, crystal:1}}],
    ['pedestal', false, {}, {ep:{'boss':true, crystal:2}}],
    ['pedestal', false, {}, {ep:{'boss':true, crystal:1}, dp:{'boss':true, crystal:2}}],
    ['pedestal', true, {}, {ep:{'boss':true, crystal:1}, dp:{'boss':true, crystal:2}, toh:{'boss':true, crystal:2}}],

    ['uncle', true, {}, {}],
    ['secretPassage', true, {}, {}],

    ['kingTomb', false, {}, {}],
    ['kingTomb', false, {boots:true}, {}],
    ['kingTomb', false, {boots:true, glove:1}, {}],
    ['kingTomb', true, {boots:true, glove:2}, {}],
    ['kingTomb', true, {boots:true, glove:2}, {}],
    ['kingTomb', true, {boots:true, glove:1, hammer:true, moonpearl:true, mirror:true}, {}],
    ['kingTomb', true, {boots:true, glove:1, hammer:true, moonpearl:true, mirror:true}, {}],
    ['kingTomb', true, {boots:true, glove:1, hookshot:true, moonpearl:true, mirror:true}, {aga:{boss:true}}],
    ['kingTomb', true, {boots:true, hammer:true, hookshot:true, moonpearl:true, mirror:true}, {aga:{boss:true}}],
    ['kingTomb', true, {boots:true, flippers:true, hookshot:true, moonpearl:true, mirror:true}, {aga:{boss:true}}],

    ['floodChest', true, {}, {}],

    ['linkHouse', true, {}, {}],

    ['tavern', true, {}, {}],

    ['chickenHut', false, {}, {}],
    ['chickenHut', true, {bombs:true}, {}],

    ['aginahCave', false, {}, {}],
    ['aginahCave', true, {bombs:true}, {}],

    ['sahashralaHut', false, {}, {}],
    ['sahashralaHut', true, {bombs:true}, {}],

    ['well', false, {}, {}],
    ['well', true, {bombs:true}, {}],

    ['blindhouse', false, {}, {}],
    ['blindhouse', true, {bombs:true}, {}],

    ['pegasusRock', false, {}, {}],
    ['pegasusRock', true, {boots:true}, {}],

    ['moldormCave', false, {}, {}],
    ['moldormCave', true, {bombs:true}, {}],

    ['iceRodCave', false, {}, {}],
    ['iceRodCave', true, {bombs:true}, {}],

    ['bottleMerchant', true, {}, {}],

    ['sahashrala', false, {}, {}],
    ['sahashrala', false, {}, {ep:{crystal:1}}],
    ['sahashrala', true, {}, {ep:{crystal:1, boss:true}}],

    ['magicBat', false, {}, {}],
    ['magicBat', false, {powder:true}, {}],
    ['magicBat', true, {powder:true, hammer:true}, {}],
    ['magicBat', true, {powder:true, glove:2, moonpearl:true, mirror:true}, {}],

    ['sickKid', false, {}, {}],
    ['sickKid', true, {jar:1}, {}],
    ['sickKid', true, {jar:2}, {}],
    ['sickKid', true, {jar:3}, {}],
    ['sickKid', true, {jar:4}, {}],

    ['hobo', false, {}, {}],
    ['hobo', true, {flippers:true}, {}],

    ['bombosTablet', false, {}, {}],
    ['bombosTablet', false, {mirror:true}, {}],
    ['bombosTablet', false, {sword:2}, {}],
    ['bombosTablet', false, {book:true}, {}],
    ['bombosTablet', false, {moonpearl:true}, {}],
    ['bombosTablet', false, {moonpearl:true, mirror:true, book:true, sword:1, glove:2}, {}],
    ['bombosTablet', true, {moonpearl:true, mirror:true, book:true, sword:2, glove:2}, {}],
    ['bombosTablet', true, {moonpearl:true, mirror:true, book:true, sword:3, glove:2}, {}],
    ['bombosTablet', true, {moonpearl:true, mirror:true, book:true, sword:4, glove:2}, {}],
    ['bombosTablet', false, {moonpearl:true, mirror:true, book:true, sword:1, glove:1, hammer:true}, {}],
    ['bombosTablet', true, {moonpearl:true, mirror:true, book:true, sword:2, glove:1, hammer:true}, {}],
    ['bombosTablet', true, {moonpearl:true, mirror:true, book:true, sword:3, glove:1, hammer:true}, {}],
    ['bombosTablet', true, {moonpearl:true, mirror:true, book:true, sword:4, glove:1, hammer:true}, {}],
    ['bombosTablet', false, {moonpearl:true, mirror:true, book:true, sword:1, hammer:true}, {aga:{boss:true}}],
    ['bombosTablet', true, {moonpearl:true, mirror:true, book:true, sword:2, hammer:true}, {aga:{boss:true}}],
    ['bombosTablet', true, {moonpearl:true, mirror:true, book:true, sword:3, hammer:true}, {aga:{boss:true}}],
    ['bombosTablet', true, {moonpearl:true, mirror:true, book:true, sword:4, hammer:true}, {aga:{boss:true}}],
    ['bombosTablet', false, {moonpearl:true, mirror:true, book:true, sword:1, hookshot:true, glove: 1}, {aga:{boss:true}}],
    ['bombosTablet', true, {moonpearl:true, mirror:true, book:true, sword:2, hookshot:true, glove: 1}, {aga:{boss:true}}],
    ['bombosTablet', true, {moonpearl:true, mirror:true, book:true, sword:3, hookshot:true, glove: 1}, {aga:{boss:true}}],
    ['bombosTablet', true, {moonpearl:true, mirror:true, book:true, sword:4, hookshot:true, glove: 1}, {aga:{boss:true}}],
    ['bombosTablet', false, {moonpearl:true, mirror:true, book:true, sword:1, hookshot:true, flippers:true}, {aga:{boss:true}}],
    ['bombosTablet', true, {moonpearl:true, mirror:true, book:true, sword:2, hookshot:true, flippers:true}, {aga:{boss:true}}],
    ['bombosTablet', true, {moonpearl:true, mirror:true, book:true, sword:3, hookshot:true, flippers:true}, {aga:{boss:true}}],
    ['bombosTablet', true, {moonpearl:true, mirror:true, book:true, sword:4, hookshot:true, flippers:true}, {aga:{boss:true}}],

    ['zora', false, {}, {}],
    ['zora', true, {glove:1}, {}],
    ['zora', true, {flippers:true}, {}],

    ['lwHideout', true, {}, {}],

    ['lumberjackTree', false, {}, {}],
    ['lumberjackTree', false, {boots:true}, {}],
    ['lumberjackTree', false, {}, {aga:{boss:true}}],
    ['lumberjackTree', true, {boots:true}, {aga:{boss:true}}],

    ['cave45', false, {}, {}],
    ['cave45', false, {mirror:true}, {}],
    ['cave45', false, {moonpearl:true}, {}],
    ['cave45', true, {moonpearl:true, mirror:true, glove:2}, {}],
    ['cave45', true, {moonpearl:true, mirror:true, glove:1, hammer:true}, {}],
    ['cave45', true, {moonpearl:true, mirror:true, hammer:true}, {aga:{boss:true}}],
    ['cave45', true, {moonpearl:true, mirror:true, glove:1, hookshot:true}, {aga:{boss:true}}],
    ['cave45', true, {moonpearl:true, mirror:true, flippers:true, hookshot:true}, {aga:{boss:true}}],

    ['graveyardLedge', false, {}, {}],
    ['graveyardLedge', false, {mirror:true}, {}],
    ['graveyardLedge', false, {moonpearl:true}, {}],
    ['graveyardLedge', true, {moonpearl:true, mirror:true, glove:2}, {}],
    ['graveyardLedge', true, {moonpearl:true, mirror:true, glove:1, hammer:true}, {}],
    ['graveyardLedge', true, {moonpearl:true, mirror:true, hookshot:true, hammer:true}, {aga:{boss:true}}],
    ['graveyardLedge', true, {moonpearl:true, mirror:true, glove:1, hookshot:true}, {aga:{boss:true}}],
    ['graveyardLedge', true, {moonpearl:true, mirror:true, hookshot:1, flippers:true}, {aga:{boss:true}}],

    ['checkerCave', false, {}, {}],
    ['checkerCave', false, {glove:2}, {}],
    ['checkerCave', false, {flute:true}, {}],
    ['checkerCave', false, {mirror:true}, {}],
    ['checkerCave', true, {flute:true, mirror:true, glove:2}, {}],

    ['library', false, {}, {}],
    ['library', true, {boots:true}, {}],

    ['lwMushroom', true, {}, {}],

    ['potionShop', false, {}, {}],
    ['potionShop', true, {mushroom:true}, {}],

    ['mazeRace', false, {}, {}],
    ['mazeRace', true, {bombs:true}, {}],

    ['desertLedge', false, {}, {}],
    ['desertLedge', true, {book:true}, {}],
    ['desertLedge', true, {flute:true, mirror:true, glove:2}, {}],

    ['lakeIsland', false, {}, {}],
    ['lakeIsland', false, {mirror:true}, {}],
    ['lakeIsland', false, {moonpearl:true}, {}],
    ['lakeIsland', false, {flippers:true}, {}],
    ['lakeIsland', true, {flippers:true, moonpearl: true, mirror:true, glove:2}, {}],
    ['lakeIsland', true, {flippers:true, moonpearl: true, mirror:true, glove:1, hammer:true}, {}],
    ['lakeIsland', true, {flippers:true, moonpearl: true, mirror:true}, {aga:{boss:true}}],

    ['floodTreasure', true, {}, {}],

    ['zoraLedge', false, {}, {}],
    ['zoraLedge', true, {flippers:true}, {}],

    ['fluteSpot', false, {}, {}],
    ['fluteSpot', true, {shovel:true}, {}],

    ['waterfallFairy', false, {}, {}],
    ['waterfallFairy', true, {flippers:true}, {}],

    ['mimicCave', false, {}, {}],
    ['mimicCave', false, {bombos:true}, {}],
    ['mimicCave', false, {ether:true}, {}],
    ['mimicCave', false, {quake:true}, {}],

    ['spiralCave', false, {}, {}],
    ['spiralCave', false, {glove:1, lantern:true, mirror:true}, {}],
    ['spiralCave', false, {glove:1, hookshot:true}, {}],
    ['spiralCave', false, {flute:true, mirror:true}, {}],
    ['spiralCave', true, {flute:true, hookshot: true}, {}],
    ['spiralCave', true, {glove:1, lantern:true, hookshot:true}, {}],
    ['spiralCave', true, {glove:2, lantern:true, hookshot:true}, {}],
    ['spiralCave', true, {glove:1, lantern:true, mirror:true, hammer:true}, {}],
    ['spiralCave', true, {glove:2, lantern:true, mirror:true, hammer:true}, {}],
    ['spiralCave', true, {flute:true, mirror:true, hammer:true}, {}],

    ['paradoxCave', false, {}, {}],
    ['paradoxCave', false, {glove:1, lantern:true, mirror:true}, {}],
    ['paradoxCave', false, {glove:1, hookshot:true}, {}],
    ['paradoxCave', false, {flute:true, mirror:true}, {}],
    ['paradoxCave', false, {flute:true, hammer:true}, {}],
    ['paradoxCave', true, {flute:true, hookshot: true}, {}],
    ['paradoxCave', true, {glove:1, lantern: true, hookshot: true}, {}],
    ['paradoxCave', true, {glove:2, lantern: true, hookshot: true}, {}],
    ['paradoxCave', true, {glove:1, lantern:true, mirror:true, hammer:true}, {}],
    ['paradoxCave', true, {glove:2, lantern:true, mirror:true, hammer:true}, {}],
    ['paradoxCave', true, {flute:true, mirror:true, hammer:true}, {}],

    ['etherTablet', false, {}, {}],
    ['etherTablet', false, {flute:true, mirror:true, book:true, sword:1}, {}],
    ['etherTablet', true, {flute:true, mirror:true, book:true, sword:2}, {}],
    ['etherTablet', true, {flute:true, mirror:true, book:true, sword:3}, {}],
    ['etherTablet', true, {flute:true, mirror:true, book:true, sword:4}, {}],
    ['etherTablet', false, {glove:1, lantern:true, mirror:true, book:true, sword:1}, {}],
    ['etherTablet', true, {glove:1, lantern:true, mirror:true, book:true, sword:2}, {}],
    ['etherTablet', true, {glove:1, lantern:true, mirror:true, book:true, sword:3}, {}],
    ['etherTablet', true, {glove:1, lantern:true, mirror:true, book:true, sword:4}, {}],
    ['etherTablet', false, {glove:2, lantern:true, mirror:true, book:true, sword:1}, {}],
    ['etherTablet', true, {glove:2, lantern:true, mirror:true, book:true, sword:2}, {}],
    ['etherTablet', true, {glove:2, lantern:true, mirror:true, book:true, sword:3}, {}],
    ['etherTablet', true, {glove:2, lantern:true, mirror:true, book:true, sword:4}, {}],
    ['etherTablet', false, {flute:true, hammer:true, hookshot:true, book:true, sword:1}, {}],
    ['etherTablet', true, {flute:true, hammer:true, hookshot:true, book:true, sword:2}, {}],
    ['etherTablet', true, {flute:true, hammer:true, hookshot:true, book:true, sword:3}, {}],
    ['etherTablet', true, {flute:true, hammer:true, hookshot:true, book:true, sword:4}, {}],
    ['etherTablet', false, {glove:1, lantern:true, hammer:true, hookshot:true, book:true, sword:1}, {}],
    ['etherTablet', true, {glove:1, lantern:true, hammer:true, hookshot:true, book:true, sword:2}, {}],
    ['etherTablet', true, {glove:1, lantern:true, hammer:true, hookshot:true, book:true, sword:3}, {}],
    ['etherTablet', true, {glove:1, lantern:true, hammer:true, hookshot:true, book:true, sword:4}, {}],
    ['etherTablet', false, {glove:2, lantern:true, hammer:true, hookshot:true, book:true, sword:1}, {}],
    ['etherTablet', true, {glove:2, lantern:true, hammer:true, hookshot:true, book:true, sword:2}, {}],
    ['etherTablet', true, {glove:2, lantern:true, hammer:true, hookshot:true, book:true, sword:3}, {}],
    ['etherTablet', true, {glove:2, lantern:true, hammer:true, hookshot:true, book:true, sword:4}, {}],

    ['oldMan', false, {}, {}],
    ['oldMan', true, {flute:true, lantern:true}, {}],
    ['oldMan', true, {glove:1, lantern:true}, {}],
    ['oldMan', true, {glove:2, lantern: true}, {}],

    ['spectacleRockCave', false, {}, {}],
    ['spectacleRockCave', true, {flute:true}, {}],
    ['spectacleRockCave', true, {glove:1, lantern:true}, {}],
    ['spectacleRockCave', true, {glove:2, lantern:true}, {}],

    ['spectacleRock', false, {}, {}],
    ['spectacleRock', true, {flute:true, mirror:true}, {}],
    ['spectacleRock', true, {glove:1, lantern: true, mirror:true}, {}],
    ['spectacleRock', true, {glove:2, lantern: true, mirror: true}, {}],

    //negative tests

    ['pedestal', false, {}, {}, true],
    ['kingTomb', false, {boots:false}, {}, true],
    ['pegasusRock', false, {boots:false}, {}, true],
    ['sahashrala', false, {}, {}, true],
    ['magicBat', false, {powder:false}, {}, true],
    ['sickKid', false, {jar:0}, {}, true],
    ['hobo', false, {flippers:false}, {}, true],
    ['bombosTablet', false, {mirror:false}, {}, true],
    ['bombosTablet', false, {sword:1}, {}, true],
    ['bombosTablet', false, {book:false}, {}, true],
    ['bombosTablet', false, {moonpearl:false}, {}, true],
    ['zora', false, {glove:0, flippers:false}, {}, true],
    ['lumberjackTree', false, {boots:false}, {aga:{boss:true}}, true],
    ['lumberjackTree', false, {}, {aga:{boss:false}}, true],
    ['cave45', false, {mirror:false}, {}, true],
    ['cave45', false, {moonpearl: false}, {}, true],
    ['graveyardLedge', false, {mirror:false}, {}, true],
    ['graveyardLedge', false, {moonpearl:false}, {}, true],
    ['checkerCave', false, {glove:0}, {}, true],
    ['checkerCave', false, {flute:false}, {}, true],
    ['checkerCave', false, {mirror:false}, {}, true],
    ['library', false, {boots:false}, {}, true],
    ['potionShop', false, {mushroom:false}, {}, true],
    ['lakeIsland', false, {mirror:false}, {}, true],
    ['lakeIsland', false, {moonpearl:false}, {}, true],
    ['lakeIsland', false, {flippers:false}, {}, true],
    ['zoraLedge', false, {flippers:false}, {}, true],
    ['fluteSpot', false, {shovel:false}, {}, true],
    ['waterfallFairy', false, {flippers:false}, {}, true],
    ['mimicCave', true, {ether:true}, {tr:{medallion:2}}, true],
    ['mimicCave', true, {bombos:true}, {tr:{medallion:1}}, true],
    ['mimicCave', true, {quake:true}, {tr:{medallion:3}}, true],
    ['mimicCave', false, {ether:true, glove:0, flute:false}, {tr:{medallion:2}}, true],
    ['mimicCave', false, {ether:true, hammer:false}, {tr:{medallion:2}}, true],
    ['mimicCave', false, {ether:true, mirror:false}, {tr:{medallion:2}}, true],
    ['mimicCave', false, {ether:true, moonpearl:false}, {tr:{medallion:2}}, true],
    ['mimicCave', false, {ether:true, redcane:false}, {tr:{medallion:2}}, true],

    ['spiralCave', false, {glove:0, flute:false}, {}, true],
    ['spiralCave', false, {mirror:false, hammer:false, hookshot: false}, {}, true],
    ['spiralCave', false, {mirror:false, hookshot: false}, {}, true],
    ['spiralCave', false, {hammer:false, hookshot:false}, {}, true],

    ['paradoxCave', false, {glove:0, flute:false}, {}, true],
    ['paradoxCave', false, {mirror:false, hammer:false, hookshot: false}, {}, true],
    ['paradoxCave', false, {mirror:false, hookshot: false}, {}, true],
    ['paradoxCave', false, {hammer:false, hookshot: false}, {}, true],

    ['etherTablet', false, {glove:0, flute:false}, {}, true],
    ['etherTablet', false, {lantern:false, flute:false}, {}, true],
    ['etherTablet', false, {mirror:false, hookshot: false}, {}, true],
    ['etherTablet', false, {mirror:false, hammer: false}, {}, true],
    ['etherTablet', false, {sword:0}, {}, true],
    ['etherTablet', false, {book:false}, {}, true],

    ['oldMan', false, {glove:0, flute:false}, {}, true],
    ['oldMan', false, {lantern:false}, {}, true],

    ['spectacleRockCave', false, {glove:0, flute:false}, {}, true],
    ['spectacleRock', false, {glove:0, flute:false}, {}, true],
    ['spectacleRock', false, {mirror:false}, {}, true],
  ];

  tests.forEach((test)=> {
    const items =  test[2];
    const dungeons = test[3];
    const result = test[1];
    const isNeg = test[4] ? true : false;
    const location = new StandardStaticMapLW()[test[0]];
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
