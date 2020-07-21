import {InvertedStaticMapDungeonsDW} from '~/inverted/InvertedStaticMapDungeonsDW';
import {DefaultItemsData} from '~/default-objects/DefaultItems';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';
import {DefaultSettingsData} from '~/default-objects/DefaultSettings';

describe('InvertedStaticMapDuneonsDW', () => {

  const tests = [
    ['pod', false, {}, {}],
    // ["Palace of Darkness - Shooter Room", false, []],
    // ["Palace of Darkness - Shooter Room", false, [], ['Hammer', 'Flippers', 'Flute', 'MagicMirror']],
    // ["Palace of Darkness - Shooter Room", true, ['Flippers']],
    // ["Palace of Darkness - Shooter Room", true, ['Hammer']],
    // ["Palace of Darkness - Shooter Room", true, ['Flute', 'MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove']],
    // ["Palace of Darkness - Shooter Room", true, ['Flute', 'MoonPearl', 'TitansMitt']],
    // ["Palace of Darkness - Shooter Room", true, ['Flute', 'MoonPearl', 'DefeatAgahnim']],
    // ["Palace of Darkness - Shooter Room", true, ['MagicMirror', 'MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove']],
    // ["Palace of Darkness - Shooter Room", true, ['MagicMirror', 'MoonPearl', 'TitansMitt']],
    // ["Palace of Darkness - Shooter Room", true, ['MagicMirror', 'DefeatAgahnim']],

    ['sp', false, {}, {}],
    // ["Swamp Palace - Entrance", false, []],
    // ["Swamp Palace - Entrance", false, [], ['MagicMirror']],
    // ["Swamp Palace - Entrance", false, [], ['MoonPearl']],
    // ["Swamp Palace - Entrance", false, [], ['Flippers']],
    // ["Swamp Palace - Entrance", true, ['MagicMirror', 'MoonPearl', 'Flippers', 'TitansMitt']],
    // ["Swamp Palace - Entrance", true, ['MagicMirror', 'MoonPearl', 'Flippers', 'ProgressiveGlove', 'ProgressiveGlove']],
    // ["Swamp Palace - Entrance", true, ['MagicMirror', 'MoonPearl', 'Flippers', 'ProgressiveGlove', 'Hammer']],
    // ["Swamp Palace - Entrance", true, ['MagicMirror', 'MoonPearl', 'Flippers', 'PowerGlove', 'Hammer']],
    // ["Swamp Palace - Entrance", true, ['MagicMirror', 'MoonPearl', 'Flippers', 'DefeatAgahnim']],

    ['sw', true, {}, {}],
    // ["Skull Woods - Big Chest", false, []],
    // ["Skull Woods - Big Chest", false, [], ['BigKeyD3']],
    // ["Skull Woods - Big Chest", true, ['BigKeyD3']],


    ['tt', true, {}, {}],
    // ["Thieves' Town - Big Key Chest", true, []],

    ['ip', false, {}, {}],
    // ["Ice Palace - Compass Chest", false, []],
    // ["Ice Palace - Compass Chest", false, [], ['Flippers']],
    // ["Ice Palace - Compass Chest", false, [], ['FireRod', 'Bombos']],
    // ["Ice Palace - Compass Chest", false, [], ['FireRod', 'AnySword']],
    // ["Ice Palace - Compass Chest", true, ['Flippers', 'FireRod']],
    // ["Ice Palace - Compass Chest", true, ['Flippers', 'Bombos', 'UncleSword']],
    // ["Ice Palace - Compass Chest", true, ['Flippers', 'Bombos', 'ProgressiveSword']],
    // ["Ice Palace - Compass Chest", true, ['Flippers', 'Bombos', 'MasterSword']],
    // ["Ice Palace - Compass Chest", true, ['Flippers', 'Bombos', 'L3Sword']],
    // ["Ice Palace - Compass Chest", true, ['Flippers', 'Bombos', 'L4Sword']],

    ['mm', false, {}, {}],
    // ["Misery Mire - Bridge Chest", false, []],
    // ["Misery Mire - Bridge Chest", false, [], ['Flute', 'MagicMirror']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'UncleSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'UncleSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'ProgressiveSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'ProgressiveSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'MasterSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'MasterSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'L3Sword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'L3Sword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'L4Sword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'L4Sword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'UncleSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'UncleSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'ProgressiveSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'ProgressiveSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'MasterSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'MasterSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'L3Sword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'L3Sword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'L4Sword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'L4Sword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'UncleSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'UncleSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'ProgressiveSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'ProgressiveSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'MasterSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'MasterSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'L3Sword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'L3Sword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'L4Sword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'L4Sword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'UncleSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'UncleSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'ProgressiveSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'ProgressiveSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'MasterSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'MasterSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'L3Sword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'L3Sword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'L4Sword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'L4Sword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'UncleSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'UncleSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'ProgressiveSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'ProgressiveSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'MasterSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'MasterSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'L3Sword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'L3Sword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'L4Sword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'L4Sword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'UncleSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'UncleSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'ProgressiveSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'ProgressiveSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'MasterSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'MasterSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'L3Sword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'L3Sword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'L4Sword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'L4Sword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'UncleSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'UncleSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'ProgressiveSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'ProgressiveSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'MasterSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'MasterSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'L3Sword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'L3Sword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'L4Sword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'L4Sword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MagicMirror', 'DefeatAgahnim', 'Ether', 'UncleSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MagicMirror', 'DefeatAgahnim', 'Ether', 'UncleSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MagicMirror', 'DefeatAgahnim', 'Ether', 'ProgressiveSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MagicMirror', 'DefeatAgahnim', 'Ether', 'ProgressiveSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MagicMirror', 'DefeatAgahnim', 'Ether', 'MasterSword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MagicMirror', 'DefeatAgahnim', 'Ether', 'MasterSword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MagicMirror', 'DefeatAgahnim', 'Ether', 'L3Sword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MagicMirror', 'DefeatAgahnim', 'Ether', 'L3Sword', 'Hookshot']],
    // ["Misery Mire - Bridge Chest", true, ['MagicMirror', 'DefeatAgahnim', 'Ether', 'L4Sword', 'PegasusBoots']],
    // ["Misery Mire - Bridge Chest", true, ['MagicMirror', 'DefeatAgahnim', 'Ether', 'L4Sword', 'Hookshot']],


    ['tr', false, {}, {}],
    // ["Turtle Rock - Compass Chest", false, []],
    // ["Turtle Rock - Compass Chest", false, [], ['CaneOfSomaria']],
    // ["Turtle Rock - Compass Chest", true, ['MoonPearl', 'Flute', 'MagicMirror', 'TitansMitt', 'Hammer', 'Quake', 'UncleSword', 'CaneOfSomaria']],
    // ["Turtle Rock - Compass Chest", true, ['Lamp', 'MagicMirror', 'TitansMitt', 'Hammer', 'Quake', 'UncleSword', 'CaneOfSomaria']],
    // ["Turtle Rock - Compass Chest", true, ['MoonPearl', 'Flute', 'MagicMirror', 'TitansMitt', 'Hammer', 'Quake', 'ProgressiveSword', 'CaneOfSomaria']],
    // ["Turtle Rock - Compass Chest", true, ['Lamp', 'MagicMirror', 'TitansMitt', 'Hammer', 'Quake', 'ProgressiveSword', 'CaneOfSomaria']],
    // ["Turtle Rock - Compass Chest", true, ['MoonPearl', 'Flute', 'Hookshot', 'TitansMitt', 'Hammer', 'Quake', 'UncleSword', 'CaneOfSomaria']],
    // ["Turtle Rock - Compass Chest", true, ['Lamp', 'Hookshot', 'TitansMitt', 'Hammer', 'Quake', 'UncleSword', 'CaneOfSomaria']],
    // ["Turtle Rock - Compass Chest", true, ['MoonPearl', 'Flute', 'Hookshot', 'TitansMitt', 'Hammer', 'Quake', 'ProgressiveSword', 'CaneOfSomaria']],
    // ["Turtle Rock - Compass Chest", true, ['Lamp', 'Hookshot', 'TitansMitt', 'Hammer', 'Quake', 'ProgressiveSword', 'CaneOfSomaria']],


    ['aga', false, {}, {}],
    // [false, []],
    // [false, [], ['Flute', 'Gloves']],
    // [false, [], ['Flute', 'Lamp']],
    // [true, ['Flute', 'MoonPearl', 'ProgressiveGlove', 'Hammer']],
    // [true, ['Flute', 'MoonPearl', 'PowerGlove', 'Hammer']],
    // [true, ['Flute', 'MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'UncleSword']],
    // [true, ['Flute', 'MoonPearl', 'TitansMitt', 'UncleSword']],
    // [true, ['ProgressiveGlove', 'Lamp', 'UncleSword']],
    // [true, ['PowerGlove', 'Lamp', 'UncleSword']],
    // [true, ['TitansMitt', 'Lamp', 'UncleSword']],
  ];

  const bossTests = [
    ['pod', false, {}, {}],
    // ["Palace of Darkness - Boss", false, []],
    // ["Palace of Darkness - Boss", false, [], ['Hammer', 'Flippers', 'Flute', 'MagicMirror']],
    // ["Palace of Darkness - Boss", false, [], ['Lamp']],
    // ["Palace of Darkness - Boss", false, [], ['Hammer']],
    // ["Palace of Darkness - Boss", false, [], ['AnyBow']],
    // ["Palace of Darkness - Boss", false, [], ['BigKeyD1']],
    // ["Palace of Darkness - Boss", true, ['KeyD1', 'KeyD1', 'KeyD1', 'KeyD1', 'KeyD1', 'KeyD1', 'BigKeyD1', 'Lamp', 'Hammer', 'BowAndArrows']],

    ['sp', false, {}, {}],
    // ["Swamp Palace - Boss", false, []],
    // ["Swamp Palace - Boss", false, [], ['MagicMirror']],
    // ["Swamp Palace - Boss", false, [], ['MoonPearl']],
    // ["Swamp Palace - Boss", false, [], ['Flippers']],
    // ["Swamp Palace - Boss", false, [], ['Hammer']],
    // ["Swamp Palace - Boss", false, [], ['Hookshot']],
    // ["Swamp Palace - Boss", true, ['KeyD2', 'MagicMirror', 'MoonPearl', 'Flippers', 'TitansMitt', 'Hammer', 'Hookshot']],
    // ["Swamp Palace - Boss", true, ['KeyD2', 'MagicMirror', 'MoonPearl', 'Flippers', 'ProgressiveGlove', 'Hammer', 'Hookshot']],
    // ["Swamp Palace - Boss", true, ['KeyD2', 'MagicMirror', 'MoonPearl', 'Flippers', 'PowerGlove', 'Hammer', 'Hookshot']],
    // ["Swamp Palace - Boss", true, ['KeyD2', 'MagicMirror', 'MoonPearl', 'Flippers', 'DefeatAgahnim', 'Hammer', 'Hookshot']],

    ['sw', false, {}, {}],
    // ["Skull Woods - Boss", false, []],
    // ["Skull Woods - Boss", false, [], ['FireRod']],
    // ["Skull Woods - Boss", false, [], ['AnySword']],
    // ["Skull Woods - Boss", true, ['KeyD3', 'KeyD3', 'KeyD3', 'FireRod', 'UncleSword']],
    // ["Skull Woods - Boss", true, ['KeyD3', 'KeyD3', 'KeyD3', 'FireRod', 'MasterSword']],
    // ["Skull Woods - Boss", true, ['KeyD3', 'KeyD3', 'KeyD3', 'FireRod', 'L3Sword']],
    // ["Skull Woods - Boss", true, ['KeyD3', 'KeyD3', 'KeyD3', 'FireRod', 'L4Sword']],

    ['tt', true, {}, {}],
    // ["Thieves' Town - Boss", false, []],
    // ["Thieves' Town - Boss", false, [], ['BigKeyD4']],
    // ["Thieves' Town - Boss", false, [], ['KeyD4']],
    // ["Thieves' Town - Boss", true, ['KeyD4', 'BigKeyD4']],

    ['ip', false, {}, {}],
    // ["Ice Palace - Boss", false, []],
    // ["Ice Palace - Boss", false, [], ['Flippers']],
    // ["Ice Palace - Boss", false, [], ['Hammer']],
    // ["Ice Palace - Boss", false, [], ['Gloves']],
    // ["Ice Palace - Boss", false, [], ['BigKeyD5']],
    // ["Ice Palace - Boss", false, [], ['FireRod', 'Bombos']],
    // ["Ice Palace - Boss", false, [], ['FireRod', 'AnySword']],
    // ["Ice Palace - Boss", true, ['ProgressiveGlove', 'BigKeyD5', 'Flippers', 'FireRod', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['ProgressiveGlove', 'BigKeyD5', 'Flippers', 'FireRod', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['ProgressiveGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'UncleSword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['ProgressiveGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'UncleSword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['ProgressiveGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'ProgressiveSword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['ProgressiveGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'ProgressiveSword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['ProgressiveGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'MasterSword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['ProgressiveGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'MasterSword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['ProgressiveGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'L3Sword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['ProgressiveGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'L3Sword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['ProgressiveGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'L4Sword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['ProgressiveGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'L4Sword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['PowerGlove', 'BigKeyD5', 'Flippers', 'FireRod', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['PowerGlove', 'BigKeyD5', 'Flippers', 'FireRod', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['PowerGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'UncleSword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['PowerGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'UncleSword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['PowerGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'ProgressiveSword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['PowerGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'ProgressiveSword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['PowerGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'MasterSword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['PowerGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'MasterSword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['PowerGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'L3Sword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['PowerGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'L3Sword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['PowerGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'L4Sword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['PowerGlove', 'BigKeyD5', 'Flippers', 'Bombos', 'L4Sword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['TitansMitt', 'BigKeyD5', 'Flippers', 'FireRod', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['TitansMitt', 'BigKeyD5', 'Flippers', 'FireRod', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['TitansMitt', 'BigKeyD5', 'Flippers', 'Bombos', 'UncleSword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['TitansMitt', 'BigKeyD5', 'Flippers', 'Bombos', 'UncleSword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['TitansMitt', 'BigKeyD5', 'Flippers', 'Bombos', 'ProgressiveSword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['TitansMitt', 'BigKeyD5', 'Flippers', 'Bombos', 'ProgressiveSword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['TitansMitt', 'BigKeyD5', 'Flippers', 'Bombos', 'MasterSword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['TitansMitt', 'BigKeyD5', 'Flippers', 'Bombos', 'MasterSword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['TitansMitt', 'BigKeyD5', 'Flippers', 'Bombos', 'L3Sword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['TitansMitt', 'BigKeyD5', 'Flippers', 'Bombos', 'L3Sword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['TitansMitt', 'BigKeyD5', 'Flippers', 'Bombos', 'L4Sword', 'Hammer', 'KeyD5', 'KeyD5']],
    // ["Ice Palace - Boss", true, ['TitansMitt', 'BigKeyD5', 'Flippers', 'Bombos', 'L4Sword', 'Hammer', 'CaneOfSomaria', 'KeyD5']],

    ['mm', false, {}, {}],
    // ["Misery Mire - Boss", false, []],
    // ["Misery Mire - Boss", false, [], ['Flute', 'MagicMirror']],
    // ["Misery Mire - Boss", false, [], ['Lamp']],
    // ["Misery Mire - Boss", false, [], ['CaneOfSomaria']],
    // ["Misery Mire - Boss", false, [], ['BigKeyD6']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'UncleSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'UncleSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'ProgressiveSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'ProgressiveSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'MasterSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'MasterSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'L3Sword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'L3Sword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'L4Sword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'TitansMitt', 'Ether', 'L4Sword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'UncleSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'UncleSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'ProgressiveSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'ProgressiveSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'MasterSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'MasterSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'L3Sword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'L3Sword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'L4Sword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'L4Sword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'UncleSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'UncleSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'ProgressiveSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'ProgressiveSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'MasterSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'MasterSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'L3Sword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'L3Sword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'L4Sword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'ProgressiveGlove', 'Hammer', 'Ether', 'L4Sword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'UncleSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'UncleSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'ProgressiveSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'ProgressiveSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'MasterSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'MasterSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'L3Sword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'L3Sword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'L4Sword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'Flute', 'DefeatAgahnim', 'Ether', 'L4Sword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'UncleSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'UncleSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'ProgressiveSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'ProgressiveSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'MasterSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'MasterSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'L3Sword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'L3Sword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'L4Sword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'TitansMitt', 'Ether', 'L4Sword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'UncleSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'UncleSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'ProgressiveSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'ProgressiveSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'MasterSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'MasterSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'L3Sword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'L3Sword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'L4Sword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'ProgressiveGlove', 'Ether', 'L4Sword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'UncleSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'UncleSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'ProgressiveSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'ProgressiveSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'MasterSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'MasterSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'L3Sword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'L3Sword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'L4Sword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MoonPearl', 'MagicMirror', 'ProgressiveGlove', 'Hammer', 'Ether', 'L4Sword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MagicMirror', 'DefeatAgahnim', 'Ether', 'UncleSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MagicMirror', 'DefeatAgahnim', 'Ether', 'UncleSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MagicMirror', 'DefeatAgahnim', 'Ether', 'ProgressiveSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MagicMirror', 'DefeatAgahnim', 'Ether', 'ProgressiveSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MagicMirror', 'DefeatAgahnim', 'Ether', 'MasterSword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MagicMirror', 'DefeatAgahnim', 'Ether', 'MasterSword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MagicMirror', 'DefeatAgahnim', 'Ether', 'L3Sword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MagicMirror', 'DefeatAgahnim', 'Ether', 'L3Sword', 'Hookshot']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MagicMirror', 'DefeatAgahnim', 'Ether', 'L4Sword', 'PegasusBoots']],
    // ["Misery Mire - Boss", true, ['KeyD6', 'KeyD6', 'BigKeyD6', 'Lamp', 'CaneOfSomaria', 'MagicMirror', 'DefeatAgahnim', 'Ether', 'L4Sword', 'Hookshot']],

    ['tr', false, {}, {}],
    // ["Turtle Rock - Boss", false, []],
    // ["Turtle Rock - Boss", false, [], ['CaneOfSomaria']],
    // ["Turtle Rock - Boss", false, [], ['IceRod']],
    // ["Turtle Rock - Boss", false, [], ['FireRod']],
    // ["Turtle Rock - Boss", false, [], ['AnySword', 'Hammer']],
    // ["Turtle Rock - Boss", false, [], ['BigKeyD7']],
    // ["Turtle Rock - Boss", true, ['IceRod', 'FireRod', 'Lamp', 'MagicMirror', 'TitansMitt', 'Quake', 'UncleSword', 'Bottle', 'Bottle', 'Bottle', 'Bottle', 'CaneOfSomaria', 'KeyD7', 'KeyD7', 'KeyD7', 'KeyD7', 'BigKeyD7']],
    // ["Turtle Rock - Boss", true, ['IceRod', 'FireRod', 'Lamp', 'MagicMirror', 'TitansMitt', 'Quake', 'ProgressiveSword', 'Bottle', 'Bottle', 'Bottle', 'Bottle', 'CaneOfSomaria', 'KeyD7', 'KeyD7', 'KeyD7', 'KeyD7', 'BigKeyD7']],
    // ["Turtle Rock - Boss", true, ['IceRod', 'FireRod', 'Lamp', 'MagicMirror', 'TitansMitt', 'Quake', 'MasterSword', 'Bottle', 'Bottle', 'CaneOfSomaria', 'KeyD7', 'KeyD7', 'KeyD7', 'KeyD7', 'BigKeyD7']],
    // ["Turtle Rock - Boss", true, ['IceRod', 'FireRod', 'Lamp', 'MagicMirror', 'TitansMitt', 'Quake', 'ProgressiveSword', 'ProgressiveSword', 'Bottle', 'Bottle', 'CaneOfSomaria', 'KeyD7', 'KeyD7', 'KeyD7', 'KeyD7', 'BigKeyD7']],
    // ["Turtle Rock - Boss", true, ['IceRod', 'FireRod', 'Lamp', 'MagicMirror', 'TitansMitt', 'Quake', 'L3Sword', 'CaneOfSomaria', 'KeyD7', 'KeyD7', 'KeyD7', 'KeyD7', 'BigKeyD7']],
    // ["Turtle Rock - Boss", true, ['IceRod', 'FireRod', 'Lamp', 'MagicMirror', 'TitansMitt', 'Quake', 'L4Sword', 'CaneOfSomaria', 'KeyD7', 'KeyD7', 'KeyD7', 'KeyD7', 'BigKeyD7']],
    // ["Turtle Rock - Boss", true, ['IceRod', 'FireRod', 'Lamp', 'MagicMirror', 'TitansMitt', 'Quake', 'Hammer', 'CaneOfSomaria', 'KeyD7', 'KeyD7', 'KeyD7', 'KeyD7', 'BigKeyD7']],
    // ["Turtle Rock - Boss", true, ['IceRod', 'FireRod', 'Lamp', 'Hookshot', 'TitansMitt', 'Hammer', 'Quake', 'UncleSword', 'CaneOfSomaria', 'KeyD7', 'KeyD7', 'KeyD7', 'KeyD7', 'BigKeyD7']],
    // ["Turtle Rock - Boss", true, ['IceRod', 'FireRod', 'Lamp', 'Hookshot', 'TitansMitt', 'Hammer', 'Quake', 'ProgressiveSword', 'CaneOfSomaria', 'KeyD7', 'KeyD7', 'KeyD7', 'KeyD7', 'BigKeyD7']],

    ['aga', false, {}, {}],
    // [false, []],
    // [false, [], ['Lamp']],
    // [false, [], ['AnySword']],
    // [true, ['KeyA1', 'KeyA1', 'ProgressiveGlove', 'Lamp', 'UncleSword']],
    // [true, ['KeyA1', 'KeyA1', 'PowerGlove', 'Lamp', 'UncleSword']],
    // [true, ['KeyA1', 'KeyA1', 'TitansMitt', 'Lamp', 'UncleSword']],
    // [true, ['KeyA1', 'KeyA1', 'ProgressiveGlove', 'Lamp', 'ProgressiveSword']],
    // [true, ['KeyA1', 'KeyA1', 'PowerGlove', 'Lamp', 'ProgressiveSword']],
    // [true, ['KeyA1', 'KeyA1', 'TitansMitt', 'Lamp', 'ProgressiveSword']],
    // [true, ['KeyA1', 'KeyA1', 'ProgressiveGlove', 'Lamp', 'MasterSword']],
    // [true, ['KeyA1', 'KeyA1', 'PowerGlove', 'Lamp', 'MasterSword']],
    // [true, ['KeyA1', 'KeyA1', 'TitansMitt', 'Lamp', 'MasterSword']],
    // [true, ['KeyA1', 'KeyA1', 'ProgressiveGlove', 'Lamp', 'L3Sword']],
    // [true, ['KeyA1', 'KeyA1', 'PowerGlove', 'Lamp', 'L3Sword']],
    // [true, ['KeyA1', 'KeyA1', 'TitansMitt', 'Lamp', 'L3Sword']],
    // [true, ['KeyA1', 'KeyA1', 'ProgressiveGlove', 'Lamp', 'L4Sword']],
    // [true, ['KeyA1', 'KeyA1', 'PowerGlove', 'Lamp', 'L4Sword']],
    // [true, ['KeyA1', 'KeyA1', 'TitansMitt', 'Lamp', 'L4Sword']],
  ];

  const negTests = [];

  tests.forEach((test)=> {
    const items =  test[2];
    const dungeons = test[3];
    const result = test[1];
    const isNeg = test[4] ? true : false;
    const location = new InvertedStaticMapDungeonsDW()[test[0]];
    const itemKeys = Object.keys(test[2]);
    const dungeonKeys = Object.keys(test[3]);
    const itemsObj = new DefaultItemsData();
    const settingsObj = new DefaultSettingsData();
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
    it('should'+(isNeg?' negative':'')+' test dungeon access for '+test[0]+' with '+
      (itemKeys.length>0 ? ('items '+stringifyItem(items)): 'no items')+' and '+
      (dungeonKeys.length>0 ? ('dungeons '+stringifyDungeon(dungeons)): 'no dungeons')+' and expect '+result, () => {
      //load items
      for(const key of itemKeys) {
        itemsObj[key] = items[key];
      }
      //load dungeons
      for(const key of dungeonKeys) {
        dungeonsObj[key] = dungeons[key];
      }
      expect(location.validate(itemsObj, dungeonsObj, settingsObj)).toBe(result);
    });
  });

  bossTests.forEach((test)=> {
    const items =  test[2];
    const dungeons = test[3];
    const result = test[1];
    const isNeg = test[4] ? true : false;
    const location = new InvertedStaticMapDungeonsDW()[test[0]];
    const itemKeys = Object.keys(test[2]);
    const dungeonKeys = Object.keys(test[3]);
    const itemsObj = new DefaultItemsData();
    const settingsObj = new DefaultSettingsData();
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
    it('should'+(isNeg?' negative':'')+' test boss access for '+test[0]+' with '+
      (itemKeys.length>0 ? ('items '+stringifyItem(items)): 'no items')+' and '+
      (dungeonKeys.length>0 ? ('dungeons '+stringifyDungeon(dungeons)): 'no dungeons')+' and expect '+result, () => {
      //load items
      for(const key of itemKeys) {
        itemsObj[key] = items[key];
      }
      //load dungeons
      for(const key of dungeonKeys) {
        dungeonsObj[key] = dungeons[key];
      }
      expect(location.validateBoss(itemsObj, dungeonsObj, settingsObj)).toBe(result);
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
