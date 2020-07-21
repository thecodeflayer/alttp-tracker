import {InvertedStaticMapLW} from '~/inverted/InvertedStaticMapLW';
import {DefaultItemsData} from '~/default-objects/DefaultItems';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';

fdescribe('StaticMapLW', () => {

  const tests = [
    ['bumperCave', false, {}, {}],
    ['bumperCave', false, {moonpearl:false}, {}, true],
    ['bumperCave', false, {glove:0}, {}, true],
    ['bumperCave', false, {mirror:false}, {}, true],
    ['bumperCave', true, {moonpearl:true, cape:true, mirror:true, glove:2}, {}],
    ['bumperCave', true, {moonpearl:true, cape:true, mirror:true, glove:1, hammer:true}, {}],
    ['bumperCave', true, {moonpearl:true, cape:true, mirror:true, glove:1}, {aga:{boss:true}}],

    ['pedestal', false, {}, {}],
    ['pedestal', false, {moonpearl:false}, {ep:{'boss':true, crystal:1}, dp:{'boss':true, crystal:2}, toh:{'boss':true, crystal:2}}, true],
    ['pedestal', true, {}, {aga:{boss:true}, ep:{'boss':true, crystal:1}, dp:{'boss':true, crystal:2}, toh:{'boss':true, crystal:2}}],
    ['pedestal', true, {moonpearl: true, glove:1, hammer: true}, {ep:{'boss':true, crystal:1}, dp:{'boss':true, crystal:2}, toh:{'boss':true, crystal:2}}],
    ['pedestal', true, {moonpearl: true, glove:2}, {ep:{'boss':true, crystal:1}, dp:{'boss':true, crystal:2}, toh:{'boss':true, crystal:2}}],

    ['uncle', false, {}, {}],
    ['uncle', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['uncle', true, {moonpearl: true}, {aga:{boss: true}}],
    ['uncle', true, {moonpearl: true, glove: 1, hammer: true}, {}],
    ['uncle', true, {moonpearl: true, glove:2}, {}],

    ['secretPassage', false, {}, {}],
    ['secretPassage', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['secretPassage', true, {moonpearl: true}, {aga:{boss: true}}],
    ['secretPassage', true, {moonpearl: true, glove: 1, hammer: true}, {}],
    ['secretPassage', true, {moonpearl: true, glove:2}, {}],

    ['kingTomb', false, {}, {}],
    ['kingTomb', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['kingTomb', false, {boots: false}, {}, true],
    ['kingTomb', false, {glove:1}, {}, true],
    ['kingTomb', true, {moonpearl: true, boots: true, glove:2}, {}],

    ['floodChest', false, {}, {}],
    ['floodChest', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['floodChest', true, {moonpearl: true}, {aga:{boss: true}}],
    ['floodChest', true, {moonpearl: true, glove: 1, hammer: true}, {}],
    ['floodChest', true, {moonpearl: true, glove:2}, {}],

    ['floodTreasure', false, {}, {}],
    ['floodTreasure', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['floodTreasure', true, {moonpearl: true}, {aga:{boss: true}}],
    ['floodTreasure', true, {moonpearl: true, glove: 1, hammer: true}, {}],
    ['floodTreasure', true, {moonpearl: true, glove:2}, {}],

    ['tavern', false, {}, {}],
    ['tavern', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['tavern', true, {moonpearl: true}, {aga:{boss: true}}],
    ['tavern', true, {moonpearl: true, glove: 1, hammer: true}, {}],
    ['tavern', true, {moonpearl: true, glove:2}, {}],

    ['chickenHut', false, {}, {}],
    ['chickenHut', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['chickenHut', true, {bombs:true, moonpearl: true}, {aga:{boss: true}}],
    ['chickenHut', true, {bombs:true, moonpearl: true, glove: 1, hammer: true}, {}],
    ['chickenHut', true, {bombs:true, moonpearl: true, glove:2}, {}],

    ['aginahCave', false, {}, {}],
    ['aginahCave', false, {moonpearl: false}, {}, true],
    ['aginahCave', true, {bombs:true, moonpearl: true}, {aga:{boss: true}}],
    ['aginahCave', true, {bombs:true, moonpearl: true, glove: 1, hammer: true}, {}],
    ['aginahCave', true, {bombs:true, moonpearl: true, glove:2}, {}],

    ['sahashralaHut', false, {}, {}],
    ['sahashralaHut', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['sahashralaHut', true, {bombs:true, moonpearl: true}, {aga:{boss: true}}],
    ['sahashralaHut', true, {bombs:true, moonpearl: true, glove: 1, hammer: true}, {}],
    ['sahashralaHut', true, {bombs:true, moonpearl: true, glove:2}, {}],

    ['well', false, {}, {}],
    ['well', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['well', true, {bombs:true, moonpearl: true}, {aga:{boss: true}}],
    ['well', true, {bombs:true, moonpearl: true, glove: 1, hammer: true}, {}],
    ['well', true, {bombs:true, moonpearl: true, glove:2}, {}],

    ['blindhouse', false, {}, {}],
    ['blindhouse', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['blindhouse', true, {bombs:true, moonpearl: true}, {aga:{boss: true}}],
    ['blindhouse', true, {bombs:true, moonpearl: true, glove: 1, hammer: true}, {}],
    ['blindhouse', true, {bombs:true, moonpearl: true, glove:2}, {}],

    ['pegasusRock', false, {}, {}],
    ['pegasusRock', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['pegasusRock', false, {boots: false}, {aga:{boss: true}}, true],
    ['pegasusRock', true, {boots:true, moonpearl: true}, {aga:{boss: true}}],
    ['pegasusRock', true, {boots:true, moonpearl: true, glove: 1, hammer: true}, {}],
    ['pegasusRock', true, {boots:true, moonpearl: true, glove:2}, {}],

    ['moldormCave', false, {}, {}],
    ['moldormCave', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['moldormCave', true, {bombs:true, moonpearl: true}, {aga:{boss: true}}],
    ['moldormCave', true, {bombs:true, moonpearl: true, glove: 1, hammer: true}, {}],
    ['moldormCave', true, {bombs:true, moonpearl: true, glove:2}, {}],

    ['iceRodCave', false, {}, {}],
    ['iceRodCave', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['iceRodCave', true, {bombs:true, moonpearl: true}, {aga:{boss: true}}],
    ['iceRodCave', true, {bombs:true, moonpearl: true, glove: 1, hammer: true}, {}],
    ['iceRodCave', true, {bombs:true, moonpearl: true, glove:2}, {}],

    ['bottleMerchant', false, {}, {}],
    ['bottleMerchant', true, {}, {aga:{boss: true}}],
    ['bottleMerchant', true, {moonpearl: true, glove: 1, hammer: true}, {}],
    ['bottleMerchant', true, {moonpearl: true, glove:2}, {}],

    ['sahashrala', false, {}, {}],
    ['sahashrala', true, {}, {aga:{boss: true}, ep:{crystal:1, boss:true}}],
    ['sahashrala', true, {moonpearl: true, glove: 1, hammer: true}, {ep:{crystal:1, boss:true}}],
    ['sahashrala', true, {moonpearl: true, glove:2}, {ep:{crystal:1, boss:true}}],

    ['magicBat', false, {}, {}],
    ['magicBat', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['magicBat', false, {powder: false}, {aga:{boss: true}}, true],
    ['magicBat', false, {hammer: false}, {aga:{boss: true}}, true],
    ['magicBat', true, {powder:true, hammer:true, bombs:true, moonpearl: true}, {aga:{boss: true}}],
    ['magicBat', true, {powder:true, hammer:true, bombs:true, moonpearl: true, glove: 1}, {}],
    ['magicBat', true, {powder:true, hammer:true, bombs:true, moonpearl: true, glove:2}, {}],

    ['sickKid', false, {}, {}],
    ['sickKid', false, {jar:0}, {aga:{boss: true}}, true],
    ['sickKid', true, {jar:1}, {aga:{boss: true}}],
    ['sickKid', true, {jar:1, moonpearl: true, glove: 1, hammer: true}, {}],
    ['sickKid', true, {jar:1, moonpearl: true, glove:2}, {}],

    ['hobo', false, {}, {}],
    ['hobo', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['hobo', false, {flippers: false}, {aga:{boss: true}}, true],
    ['hobo', true, {flippers:true, moonpearl: true}, {aga:{boss: true}}],
    ['hobo', true, {flippers:true, moonpearl: true, glove: 1, hammer: true}, {}],
    ['hobo', true, {flippers:true, moonpearl: true, glove:2}, {}],

    ['bombosTablet', false, {}, {}],
    ['bombosTablet', false, {moonpearl: false}, {aga:{boss: false}}, true],
    ['bombosTablet', false, {book: false}, {aga:{boss: true}}, true],
    ['bombosTablet', false, {sword:1}, {aga:{boss: true}}, true],
    ['bombosTablet', true, {sword:2, book:true}, {aga:{boss: true}}],
    ['bombosTablet', true, {sword:2, book:true, glove: 1, moonpearl:true, hammer: true}, {}],
    ['bombosTablet', true, {sword:2, book:true, moonpearl:true, glove:2}, {}],

    ['zora', false, {}, {}],
    ['zora', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['zora', false, {flippers: false, glove:0}, {aga:{boss: true}}, true],
    ['zora', true, {flippers:true, moonpearl: true}, {aga:{boss: true}}],
    ['zora', true, {moonpearl: true, glove: 1, hammer: true}, {}],
    ['zora', true, {moonpearl: true, glove:2}, {}],

    ['lwHideout', false, {}, {}],
    ['lwHideout', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['lwHideout', true, {moonpearl: true}, {aga:{boss: true}}],
    ['lwHideout', true, {moonpearl: true, glove: 1, hammer: true}, {}],
    ['lwHideout', true, {moonpearl: true, glove:2}, {}],

    ['lumberjackTree', false, {}, {}],
    ['lumberjackTree', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['lumberjackTree', false, {boots: false}, {aga:{boss: true}}, true],
    ['lumberjackTree', true, {moonpearl: true, boots: true}, {aga:{boss: true}}],

    ['cave45', false, {}, {}],
    ['cave45', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['cave45', true, {moonpearl: true}, {aga:{boss: true}}],
    ['cave45', true, {moonpearl: true, glove: 1, hammer: true}, {}],
    ['cave45', true, {moonpearl: true, glove:2}, {}],

    ['graveyardLedge', false, {}, {}],
    ['graveyardLedge', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['graveyardLedge', true, {bombs:true, moonpearl: true}, {aga:{boss: true}}],
    ['graveyardLedge', true, {bombs:true, moonpearl: true, glove: 1, hammer: true}, {}],
    ['graveyardLedge', true, {bombs:true, moonpearl: true, glove:2}, {}],

    ['checkerCave', false, {}, {}],
    ['checkerCave', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['checkerCave', false, {glove:0}, {aga:{boss: true}}, true],
    ['checkerCave', true, {glove:1, moonpearl: true}, {aga:{boss: true}}],
    ['checkerCave', true, {moonpearl: true, glove: 1, hammer: true}, {}],
    ['checkerCave', true, {moonpearl: true, glove:2}, {}],

    ['library', false, {}, {}],
    ['library', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['library', false, {boots: false}, {aga:{boss: true}}, true],
    ['library', true, {boots:true, moonpearl: true}, {aga:{boss: true}}],
    ['library', true, {boots:true, moonpearl: true, glove: 1, hammer: true}, {}],
    ['library', true, {boots:true, moonpearl: true, glove:2}, {}],


    ['lwMushroom', false, {}, {}],
    ['lwMushroom', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['lwMushroom', true, {moonpearl: true}, {aga:{boss: true}}],
    ['lwMushroom', true, {moonpearl: true, glove: 1, hammer: true}, {}],
    ['lwMushroom', true, {moonpearl: true, glove:2}, {}],

    ['potionShop', false, {}, {}],
    ['potionShop', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['potionShop', false, {mushroom: false}, {aga:{boss: true}}, true],
    ['potionShop', true, {mushroom:true, moonpearl: true}, {aga:{boss: true}}],
    ['potionShop', true, {mushroom:true, moonpearl: true, glove: 1, hammer: true}, {}],
    ['potionShop', true, {mushroom:true, moonpearl: true, glove:2}, {}],

    ['mazeRace', false, {}, {}],
    ['mazeRace', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['mazeRace', false, {bombs: false}, {aga:{boss: true}}, true],
    ['mazeRace', true, {bombs:true, moonpearl: true}, {aga:{boss: true}}],
    ['mazeRace', true, {bombs:true, moonpearl: true, glove: 1, hammer: true}, {}],
    ['mazeRace', true, {bombs:true, moonpearl: true, glove:2}, {}],

    ['desertLedge', false, {}, {}],
    ['desertLedge', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['desertLedge', false, {book: false}, {aga:{boss: true}}, true],
    ['desertLedge', true, {book:true, moonpearl: true}, {aga:{boss: true}}],
    ['desertLedge', true, {book:true, moonpearl: true, glove: 1, hammer: true}, {}],
    ['desertLedge', true, {book:true, moonpearl: true, glove:2}, {}],

    ['lakeIsland', false, {}, {}],
    ['lakeIsland', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['lakeIsland', false, {flippers: false}, {aga:{boss: true}}, true],
    ['lakeIsland', true, {flippers:true, moonpearl: true}, {aga:{boss: true}}],
    ['lakeIsland', true, {flippers:true, moonpearl: true, glove: 1, hammer: true}, {}],
    ['lakeIsland', true, {flippers:true, moonpearl: true, glove:2}, {}],

    ['zoraLedge', false, {}, {}],
    ['zoraLedge', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['zoraLedge', false, {flippers: false}, {aga:{boss: true}}, true],
    ['zoraLedge', true, {flippers:true, moonpearl: true}, {aga:{boss: true}}],
    ['zoraLedge', true, {flippers:true, moonpearl: true, glove: 1, hammer: true}, {}],
    ['zoraLedge', true, {flippers:true, moonpearl: true, glove:2}, {}],

    ['fluteSpot', false, {}, {}],
    ['fluteSpot', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['fluteSpot', false, {shovel: false}, {aga:{boss: true}}, true],
    ['fluteSpot', true, {shovel:true, moonpearl: true}, {aga:{boss: true}}],
    ['fluteSpot', true, {shovel:true, moonpearl: true, glove: 1, hammer: true}, {}],
    ['fluteSpot', true, {shovel:true, moonpearl: true, glove:2}, {}],

    ['waterfallFairy', false, {}, {}],
    ['waterfallFairy', false, {moonpearl: false}, {aga:{boss: true}}, true],
    ['waterfallFairy', false, {flippers: false}, {aga:{boss: true}}, true],
    ['waterfallFairy', true, {flippers:true, moonpearl: true}, {aga:{boss: true}}],
    ['waterfallFairy', true, {flippers:true, moonpearl: true, glove: 1, hammer: true}, {}],
    ['waterfallFairy', true, {flippers:true, moonpearl: true, glove:2}, {}],

    ['spectacleRockCave', false, {}, {}],
    ['spectacleRockCave', false, {glove:0, flute:false}, {}, true],
    ['spectacleRockCave', false, {lantern:false, flute:false}, {}, true],
    ['spectacleRockCave', false, {glove:1, flute:true, hammer: true}, {}],
    ['spectacleRockCave', false, {glove:2, flute:true, hammer: true}, {}],
    ['spectacleRockCave', false, {glove:2, flute:true}, {}],
    ['spectacleRockCave', true, {flute:true, moonpearl:true, glove:1, hammer: true}, {}],
    ['spectacleRockCave', true, {flute:true, moonpearl:true, glove:2}, {}],
    ['spectacleRockCave', true, {glove:1, lantern: true}, {}],
    ['spectacleRockCave', true, {glove:2, lantern: true}, {}],

    ['spiralCave', false, {}, {}],
    ['spiralCave', false, {moonpearl: false}, {aga:{boss:true}}, true],
    ['spiralCave', false, {glove:0, flute:false}, {aga:{boss:true}}, true],
    ['spiralCave', false, {lantern:false, flute:false}, {aga:{boss:true}}, true],
    ['spiralCave', false, {hookshot: false, glove:1}, {aga:{boss:true}}, true],
    ['spiralCave', false, {glove:1, lantern: true, moonpearl: true}, {}],
    ['spiralCave', false, {glove:1, hookshot: true, moonpearl: true}, {}],
    ['spiralCave', false, {flute:true, moonpearl: true, glove:1, hammer:true}, {}],
    ['spiralCave', false, {flute:true, hookshot:true, moonpearl: true}, {}],
    ['spiralCave', true, {flute:true, hookshot:true, moonpearl: true, glove:1, hammer:true}, {}],
    ['spiralCave', true, {glove:1, lantern: true, moonpearl: true, hookshot: true}, {}],
    ['spiralCave', true, {glove:2, lantern: true, moonpearl: true, hookshot: true}, {}],
    ['spiralCave', true, {glove:2, lantern: true, moonpearl: true}, {}],
    ['spiralCave', true, {flute:true, glove:2, moonpearl: true}, {}],
    ['spiralCave', true, {flute:true, glove:2, moonpearl: true}, {}],

    ['paradoxCave', false, {}, {}],
    ['paradoxCave', false, {moonpearl:false}, {aga:{boss:true}}, true],
    ['paradoxCave', false, {glove:0, flute:false}, {aga:{boss:true}}, true],
    ['paradoxCave', false, {lantern:false, flute:false}, {aga:{boss:true}}, true],
    ['paradoxCave', false, {hookshot: false, glove:1}, {aga:{boss:true}}, true],
    ['paradoxCave', false, {glove:1, hookshot: true, moonpearl: true}, {}],
    ['paradoxCave', false, {flute:true, moonpearl: true, glove:1, hammer:true}, {}],
    ['paradoxCave', true, {bombs:true, flute:true, hookshot:true, moonpearl: true, glove:1, hammer:true}, {}],
    ['paradoxCave', true, {bombs:true, lantern:true, hookshot:true, moonpearl: true, glove:1}, {}],
    ['paradoxCave', true, {bombs:true, lantern:true, moonpearl: true, glove:2}, {}],
    ['paradoxCave', true, {bombs:true, flute:true, moonpearl: true, glove:2}, {}],

    ['mimicCave', false, {}, {}],
    ['mimicCave', false, {moonpearl: false}, {aga:{boss:true}}, true],
    ['mimicCave', false, {hammer: false}, {aga:{boss:true}}, true],
    ['mimicCave', false, {glove:0, flute: false}, {aga:{boss:true}}, true],
    ['mimicCave', false, {lantern: false, flute: false}, {aga:{boss:true}}, true],

    // ["Mimic Cave", true, ['Flute', 'MoonPearl', 'ProgressiveGlove', 'Hammer', 'Hookshot']],
    // ["Mimic Cave", true, ['Flute', 'MoonPearl', 'PowerGlove', 'Hammer', 'Hookshot']],
    // ["Mimic Cave", true, ['Flute', 'MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'Hammer']],
    // ["Mimic Cave", true, ['Flute', 'MoonPearl', 'TitansMitt', 'Hammer']],
    // ["Mimic Cave", true, ['ProgressiveGlove', 'Lamp', 'MoonPearl', 'Hammer', 'Hookshot']],
    // ["Mimic Cave", true, ['PowerGlove', 'Lamp', 'MoonPearl', 'Hammer', 'Hookshot']],
    // ["Mimic Cave", true, ['ProgressiveGlove', 'ProgressiveGlove', 'Lamp', 'MoonPearl', 'Hammer']],
    // ["Mimic Cave", true, ['TitansMitt', 'Lamp', 'MoonPearl', 'Hammer']],
    //
    // ["Ether Tablet", false, []],
    // ["Ether Tablet", false, [], ['MoonPearl']],
    // ["Ether Tablet", false, [], ['Gloves', 'Flute']],
    // ["Ether Tablet", false, [], ['Lamp', 'Flute']],
    // ["Ether Tablet", false, [], ['TitansMitt', 'Hookshot']],
    // ["Ether Tablet", false, [], ['Hammer']],
    // ["Ether Tablet", false, [], ['UpgradedSword']],
    // ["Ether Tablet", false, [], ['BookOfMudora']],
    // ["Ether Tablet", true, ['Flute', 'MoonPearl', 'ProgressiveGlove', 'Hammer', 'Hookshot', 'BookOfMudora', 'ProgressiveSword', 'ProgressiveSword']],
    // ["Ether Tablet", true, ['Flute', 'MoonPearl', 'ProgressiveGlove', 'Hammer', 'Hookshot', 'BookOfMudora', 'L2Sword']],
    // ["Ether Tablet", true, ['Flute', 'MoonPearl', 'ProgressiveGlove', 'Hammer', 'Hookshot', 'BookOfMudora', 'L3Sword']],
    // ["Ether Tablet", true, ['Flute', 'MoonPearl', 'ProgressiveGlove', 'Hammer', 'Hookshot', 'BookOfMudora', 'L4Sword']],
    // ["Ether Tablet", true, ['Flute', 'MoonPearl', 'PowerGlove', 'Hammer', 'Hookshot', 'BookOfMudora', 'ProgressiveSword', 'ProgressiveSword']],
    // ["Ether Tablet", true, ['Flute', 'MoonPearl', 'PowerGlove', 'Hammer', 'Hookshot', 'BookOfMudora', 'L2Sword']],
    // ["Ether Tablet", true, ['Flute', 'MoonPearl', 'PowerGlove', 'Hammer', 'Hookshot', 'BookOfMudora', 'L3Sword']],
    // ["Ether Tablet", true, ['Flute', 'MoonPearl', 'PowerGlove', 'Hammer', 'Hookshot', 'BookOfMudora', 'L4Sword']],
    // ["Ether Tablet", true, ['Flute', 'MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'Hammer', 'BookOfMudora', 'ProgressiveSword', 'ProgressiveSword']],
    // ["Ether Tablet", true, ['Flute', 'MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'Hammer', 'BookOfMudora', 'L2Sword']],
    // ["Ether Tablet", true, ['Flute', 'MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'Hammer', 'BookOfMudora', 'L3Sword']],
    // ["Ether Tablet", true, ['Flute', 'MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'Hammer', 'BookOfMudora', 'L4Sword']],
    // ["Ether Tablet", true, ['Flute', 'MoonPearl', 'TitansMitt', 'Hammer', 'BookOfMudora', 'ProgressiveSword', 'ProgressiveSword']],
    // ["Ether Tablet", true, ['Flute', 'MoonPearl', 'TitansMitt', 'Hammer', 'BookOfMudora', 'L2Sword']],
    // ["Ether Tablet", true, ['Flute', 'MoonPearl', 'TitansMitt', 'Hammer', 'BookOfMudora', 'L3Sword']],
    // ["Ether Tablet", true, ['Flute', 'MoonPearl', 'TitansMitt', 'Hammer', 'BookOfMudora', 'L4Sword']],
    // ["Ether Tablet", true, ['ProgressiveGlove', 'Lamp', 'MoonPearl', 'Hammer', 'Hookshot', 'BookOfMudora', 'ProgressiveSword', 'ProgressiveSword']],
    // ["Ether Tablet", true, ['ProgressiveGlove', 'Lamp', 'MoonPearl', 'Hammer', 'Hookshot', 'BookOfMudora', 'L2Sword']],
    // ["Ether Tablet", true, ['ProgressiveGlove', 'Lamp', 'MoonPearl', 'Hammer', 'Hookshot', 'BookOfMudora', 'L3Sword']],
    // ["Ether Tablet", true, ['ProgressiveGlove', 'Lamp', 'MoonPearl', 'Hammer', 'Hookshot', 'BookOfMudora', 'L4Sword']],
    // ["Ether Tablet", true, ['PowerGlove', 'Lamp', 'MoonPearl', 'Hammer', 'Hookshot', 'BookOfMudora', 'ProgressiveSword', 'ProgressiveSword']],
    // ["Ether Tablet", true, ['PowerGlove', 'Lamp', 'MoonPearl', 'Hammer', 'Hookshot', 'BookOfMudora', 'L2Sword']],
    // ["Ether Tablet", true, ['PowerGlove', 'Lamp', 'MoonPearl', 'Hammer', 'Hookshot', 'BookOfMudora', 'L3Sword']],
    // ["Ether Tablet", true, ['PowerGlove', 'Lamp', 'MoonPearl', 'Hammer', 'Hookshot', 'BookOfMudora', 'L4Sword']],
    // ["Ether Tablet", true, ['ProgressiveGlove', 'ProgressiveGlove', 'Lamp', 'MoonPearl', 'Hammer', 'BookOfMudora', 'ProgressiveSword', 'ProgressiveSword']],
    // ["Ether Tablet", true, ['ProgressiveGlove', 'ProgressiveGlove', 'Lamp', 'MoonPearl', 'Hammer', 'BookOfMudora', 'L2Sword']],
    // ["Ether Tablet", true, ['ProgressiveGlove', 'ProgressiveGlove', 'Lamp', 'MoonPearl', 'Hammer', 'BookOfMudora', 'L3Sword']],
    // ["Ether Tablet", true, ['ProgressiveGlove', 'ProgressiveGlove', 'Lamp', 'MoonPearl', 'Hammer', 'BookOfMudora', 'L4Sword']],
    // ["Ether Tablet", true, ['TitansMitt', 'Lamp', 'MoonPearl', 'Hammer', 'BookOfMudora', 'ProgressiveSword', 'ProgressiveSword']],
    // ["Ether Tablet", true, ['TitansMitt', 'Lamp', 'MoonPearl', 'Hammer', 'BookOfMudora', 'L2Sword']],
    // ["Ether Tablet", true, ['TitansMitt', 'Lamp', 'MoonPearl', 'Hammer', 'BookOfMudora', 'L3Sword']],
    // ["Ether Tablet", true, ['TitansMitt', 'Lamp', 'MoonPearl', 'Hammer', 'BookOfMudora', 'L4Sword']],
    //
    // ["Spectacle Rock", false, []],
    // ["Spectacle Rock", false, [], ['MoonPearl']],
    // ["Spectacle Rock", false, [], ['Gloves', 'Flute']],
    // ["Spectacle Rock", false, [], ['Lamp', 'Flute']],
    // ["Spectacle Rock", false, [], ['TitansMitt', 'Hookshot']],
    // ["Spectacle Rock", false, [], ['Hammer']],
    // ["Spectacle Rock", true, ['Flute', 'MoonPearl', 'ProgressiveGlove', 'Hammer', 'Hookshot']],
    // ["Spectacle Rock", true, ['Flute', 'MoonPearl', 'PowerGlove', 'Hammer', 'Hookshot']],
    // ["Spectacle Rock", true, ['Flute', 'MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'Hammer']],
    // ["Spectacle Rock", true, ['Flute', 'MoonPearl', 'TitansMitt', 'Hammer']],
    // ["Spectacle Rock", true, ['ProgressiveGlove', 'Lamp', 'MoonPearl', 'Hammer', 'Hookshot']],
    // ["Spectacle Rock", true, ['PowerGlove', 'Lamp', 'MoonPearl', 'Hammer', 'Hookshot']],
    // ["Spectacle Rock", true, ['ProgressiveGlove', 'ProgressiveGlove', 'Lamp', 'MoonPearl', 'Hammer']],
    // ["Spectacle Rock", true, ['TitansMitt', 'Lamp', 'MoonPearl', 'Hammer']],

  ];

  const negTests = [];

  tests.forEach((test)=> {
    const items =  test[2];
    const dungeons = test[3];
    const result = test[1];
    const isNeg = test[4] ? true : false;
    const location = new InvertedStaticMapLW()[test[0]];
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
  return retval;
}
