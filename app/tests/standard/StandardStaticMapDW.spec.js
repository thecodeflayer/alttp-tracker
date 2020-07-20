import {StandardStaticMapDW} from '~/standard/StandardStaticMapDW';
import {DefaultItemsData} from '~/default-objects/DefaultItems';
import {DefaultDungeonsData} from '~/default-objects/DefaultDungeons';

describe('StaticMapDW', () => {

  const tests = [
    //['pedestal', false, {}, {}],

    // ["Mire Shed - Left", false, []],
    // ["Mire Shed - Left", true, ['MoonPearl', 'Flute', 'ProgressiveGlove', 'ProgressiveGlove']],
    // ["Mire Shed - Left", true, ['MoonPearl', 'Flute', 'TitansMitt']],

    // ["Catfish", false, []],
    // ["Catfish", true, ['MoonPearl', 'DefeatAgahnim', 'ProgressiveGlove']],
    // ["Catfish", true, ['MoonPearl', 'DefeatAgahnim', 'PowerGlove']],
    // ["Catfish", true, ['MoonPearl', 'DefeatAgahnim', 'TitansMitt']],
    // ["Catfish", true, ['MoonPearl', 'ProgressiveGlove', 'Hammer']],
    // ["Catfish", true, ['MoonPearl', 'PowerGlove', 'Hammer']],
    // ["Catfish", true, ['MoonPearl', 'TitansMitt', 'Flippers']],
    //
    // ["Pyramid", false, []],
    // ["Pyramid", true, ['DefeatAgahnim']],
    // ["Pyramid", true, ['MoonPearl', 'ProgressiveGlove', 'Hammer']],
    // ["Pyramid", true, ['MoonPearl', 'PowerGlove', 'Hammer']],
    // ["Pyramid", true, ['MoonPearl', 'TitansMitt', 'Flippers']],
    //
    // ["Pyramid Fairy - Sword", false, []],
    // ["Pyramid Fairy - Sword", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'UncleSword', 'DefeatAgahnim', 'Hammer']],
    // ["Pyramid Fairy - Sword", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'UncleSword', 'TitansMitt', 'Hammer']],
    // ["Pyramid Fairy - Sword", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'UncleSword', 'ProgressiveGlove', 'Hammer']],
    // ["Pyramid Fairy - Sword", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'UncleSword', 'PowerGlove', 'Hammer']],
    // ["Pyramid Fairy - Sword", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'UncleSword', 'DefeatAgahnim', 'TitansMitt', 'MagicMirror']],
    // ["Pyramid Fairy - Sword", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'UncleSword', 'DefeatAgahnim', 'ProgressiveGlove', 'ProgressiveGlove', 'MagicMirror']],
    // ["Pyramid Fairy - Sword", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'UncleSword', 'DefeatAgahnim', 'ProgressiveGlove', 'Hookshot', 'MagicMirror']],
    // ["Pyramid Fairy - Sword", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'UncleSword', 'DefeatAgahnim', 'PowerGlove', 'Hookshot', 'MagicMirror']],
    // ["Pyramid Fairy - Sword", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'UncleSword', 'DefeatAgahnim', 'Flippers', 'Hookshot', 'MagicMirror']],
    // ["Pyramid Fairy - Sword", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'ProgressiveSword', 'DefeatAgahnim', 'Hammer']],
    // ["Pyramid Fairy - Sword", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'ProgressiveSword', 'TitansMitt', 'Hammer']],
    // ["Pyramid Fairy - Sword", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'ProgressiveSword', 'ProgressiveGlove', 'Hammer']],
    // ["Pyramid Fairy - Sword", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'ProgressiveSword', 'PowerGlove', 'Hammer']],
    // ["Pyramid Fairy - Sword", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'ProgressiveSword', 'DefeatAgahnim', 'TitansMitt', 'MagicMirror']],
    // ["Pyramid Fairy - Sword", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'ProgressiveSword', 'DefeatAgahnim', 'ProgressiveGlove', 'ProgressiveGlove', 'MagicMirror']],
    // ["Pyramid Fairy - Sword", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'ProgressiveSword', 'DefeatAgahnim', 'ProgressiveGlove', 'Hookshot', 'MagicMirror']],
    // ["Pyramid Fairy - Sword", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'ProgressiveSword', 'DefeatAgahnim', 'PowerGlove', 'Hookshot', 'MagicMirror']],
    // ["Pyramid Fairy - Sword", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'ProgressiveSword', 'DefeatAgahnim', 'Flippers', 'Hookshot', 'MagicMirror']],
    //
    // ["Pyramid Fairy - Bow", false, []],
    // ["Pyramid Fairy - Bow", false, [], ['MoonPearl']],
    // ["Pyramid Fairy - Bow", false, [], ['Crystal5']],
    // ["Pyramid Fairy - Bow", false, [], ['Crystal6']],
    // ["Pyramid Fairy - Bow", false, [], ['AnyBow']],
    // ["Pyramid Fairy - Bow", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'BowAndArrows', 'DefeatAgahnim', 'Hammer']],
    // ["Pyramid Fairy - Bow", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'BowAndArrows', 'TitansMitt', 'Hammer']],
    // ["Pyramid Fairy - Bow", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'BowAndArrows', 'ProgressiveGlove', 'Hammer']],
    // ["Pyramid Fairy - Bow", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'BowAndArrows', 'PowerGlove', 'Hammer']],
    // ["Pyramid Fairy - Bow", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'BowAndArrows', 'DefeatAgahnim', 'TitansMitt', 'MagicMirror']],
    // ["Pyramid Fairy - Bow", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'BowAndArrows', 'DefeatAgahnim', 'ProgressiveGlove', 'ProgressiveGlove', 'MagicMirror']],
    // ["Pyramid Fairy - Bow", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'BowAndArrows', 'DefeatAgahnim', 'ProgressiveGlove', 'Hookshot', 'MagicMirror']],
    // ["Pyramid Fairy - Bow", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'BowAndArrows', 'DefeatAgahnim', 'PowerGlove', 'Hookshot', 'MagicMirror']],
    // ["Pyramid Fairy - Bow", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'BowAndArrows', 'DefeatAgahnim', 'Flippers', 'Hookshot', 'MagicMirror']],
    //
    // ["Pyramid Fairy - Left", false, []],
    // ["Pyramid Fairy - Left", false, [], ['MoonPearl']],
    // ["Pyramid Fairy - Left", false, [], ['Crystal5']],
    // ["Pyramid Fairy - Left", false, [], ['Crystal6']],
    // ["Pyramid Fairy - Left", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'DefeatAgahnim', 'Hammer']],
    // ["Pyramid Fairy - Left", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'TitansMitt', 'Hammer']],
    // ["Pyramid Fairy - Left", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'ProgressiveGlove', 'Hammer']],
    // ["Pyramid Fairy - Left", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'PowerGlove', 'Hammer']],
    // ["Pyramid Fairy - Left", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'DefeatAgahnim', 'TitansMitt', 'MagicMirror']],
    // ["Pyramid Fairy - Left", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'DefeatAgahnim', 'ProgressiveGlove', 'ProgressiveGlove', 'MagicMirror']],
    // ["Pyramid Fairy - Left", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'DefeatAgahnim', 'ProgressiveGlove', 'Hookshot', 'MagicMirror']],
    // ["Pyramid Fairy - Left", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'DefeatAgahnim', 'PowerGlove', 'Hookshot', 'MagicMirror']],
    // ["Pyramid Fairy - Left", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'DefeatAgahnim', 'Flippers', 'Hookshot', 'MagicMirror']],
    //
    // ["Pyramid Fairy - Right", false, []],
    // ["Pyramid Fairy - Right", false, [], ['MoonPearl']],
    // ["Pyramid Fairy - Right", false, [], ['Crystal5']],
    // ["Pyramid Fairy - Right", false, [], ['Crystal6']],
    // ["Pyramid Fairy - Right", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'DefeatAgahnim', 'Hammer']],
    // ["Pyramid Fairy - Right", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'TitansMitt', 'Hammer']],
    // ["Pyramid Fairy - Right", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'ProgressiveGlove', 'Hammer']],
    // ["Pyramid Fairy - Right", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'PowerGlove', 'Hammer']],
    // ["Pyramid Fairy - Right", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'DefeatAgahnim', 'TitansMitt', 'MagicMirror']],
    // ["Pyramid Fairy - Right", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'DefeatAgahnim', 'ProgressiveGlove', 'ProgressiveGlove', 'MagicMirror']],
    // ["Pyramid Fairy - Right", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'DefeatAgahnim', 'ProgressiveGlove', 'Hookshot', 'MagicMirror']],
    // ["Pyramid Fairy - Right", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'DefeatAgahnim', 'PowerGlove', 'Hookshot', 'MagicMirror']],
    // ["Pyramid Fairy - Right", true, ['MoonPearl', 'Crystal5', 'Crystal6', 'DefeatAgahnim', 'Flippers', 'Hookshot', 'MagicMirror']],

    // ["Brewery", false, []],
    // ["Brewery", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove']],
    // ["Brewery", true, ['MoonPearl', 'TitansMitt']],
    // ["Brewery", true, ['MoonPearl', 'ProgressiveGlove', 'Hammer']],
    // ["Brewery", true, ['MoonPearl', 'PowerGlove', 'Hammer']],
    // ["Brewery", true, ['MoonPearl', 'DefeatAgahnim', 'ProgressiveGlove', 'Hookshot']],
    // ["Brewery", true, ['MoonPearl', 'DefeatAgahnim', 'PowerGlove', 'Hookshot']],
    // ["Brewery", true, ['MoonPearl', 'DefeatAgahnim', 'Flippers', 'Hookshot']],
    //
    // ["C-Shaped House", false, []],
    // ["C-Shaped House", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove']],
    // ["C-Shaped House", true, ['MoonPearl', 'TitansMitt']],
    // ["C-Shaped House", true, ['MoonPearl', 'ProgressiveGlove', 'Hammer']],
    // ["C-Shaped House", true, ['MoonPearl', 'PowerGlove', 'Hammer']],
    // ["C-Shaped House", true, ['MoonPearl', 'DefeatAgahnim', 'ProgressiveGlove', 'Hookshot']],
    // ["C-Shaped House", true, ['MoonPearl', 'DefeatAgahnim', 'PowerGlove', 'Hookshot']],
    // ["C-Shaped House", true, ['MoonPearl', 'DefeatAgahnim', 'Flippers', 'Hookshot']],
    //
    // ["Chest Game", false, []],
    // ["Chest Game", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove']],
    // ["Chest Game", true, ['MoonPearl', 'TitansMitt']],
    // ["Chest Game", true, ['MoonPearl', 'ProgressiveGlove', 'Hammer']],
    // ["Chest Game", true, ['MoonPearl', 'PowerGlove', 'Hammer']],
    // ["Chest Game", true, ['MoonPearl', 'DefeatAgahnim', 'ProgressiveGlove', 'Hookshot']],
    // ["Chest Game", true, ['MoonPearl', 'DefeatAgahnim', 'PowerGlove', 'Hookshot']],
    // ["Chest Game", true, ['MoonPearl', 'DefeatAgahnim', 'Flippers', 'Hookshot']],
    //
    // ["Hammer Pegs", false, []],
    // ["Hammer Pegs", true, ['MoonPearl', 'Hammer', 'ProgressiveGlove', 'ProgressiveGlove']],
    // ["Hammer Pegs", true, ['MoonPearl', 'Hammer', 'TitansMitt']],
    //
    // ["Bumper Cave", false, []],
    // ["Bumper Cave", true, ['MoonPearl', 'Cape', 'ProgressiveGlove', 'ProgressiveGlove']],
    // ["Bumper Cave", true, ['MoonPearl', 'Cape', 'TitansMitt']],
    // ["Bumper Cave", true, ['MoonPearl', 'Cape', 'ProgressiveGlove', 'Hammer']],
    // ["Bumper Cave", true, ['MoonPearl', 'Cape', 'PowerGlove', 'Hammer']],
    // ["Bumper Cave", true, ['MoonPearl', 'Cape', 'DefeatAgahnim', 'ProgressiveGlove', 'Hookshot']],
    // ["Bumper Cave", true, ['MoonPearl', 'Cape', 'DefeatAgahnim', 'PowerGlove', 'Hookshot']],
    //
    // ["Blacksmith", false, []],
    // ["Blacksmith", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove']],
    // ["Blacksmith", true, ['MoonPearl', 'TitansMitt']],
    //
    // ["Purple Chest", false, []],
    // ["Purple Chest", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove']],
    // ["Purple Chest", true, ['MoonPearl', 'TitansMitt']],

    // ["Hype Cave - Top", false, []],
    // ["Hype Cave - Top", true, ['MoonPearl', 'DefeatAgahnim', 'Hammer']],
    // ["Hype Cave - Top", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove']],
    // ["Hype Cave - Top", true, ['MoonPearl', 'TitansMitt']],
    // ["Hype Cave - Top", true, ['MoonPearl', 'ProgressiveGlove', 'Hammer']],
    // ["Hype Cave - Top", true, ['MoonPearl', 'PowerGlove', 'Hammer']],
    // ["Hype Cave - Top", true, ['MoonPearl', 'DefeatAgahnim', 'ProgressiveGlove', 'Hookshot']],
    // ["Hype Cave - Top", true, ['MoonPearl', 'DefeatAgahnim', 'PowerGlove', 'Hookshot']],
    // ["Hype Cave - Top", true, ['MoonPearl', 'DefeatAgahnim', 'Flippers', 'Hookshot']],

    // ["Stumpy", false, []],
    // ["Stumpy", true, ['MoonPearl', 'DefeatAgahnim', 'Hammer']],
    // ["Stumpy", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove']],
    // ["Stumpy", true, ['MoonPearl', 'TitansMitt']],
    // ["Stumpy", true, ['MoonPearl', 'ProgressiveGlove', 'Hammer']],
    // ["Stumpy", true, ['MoonPearl', 'PowerGlove', 'Hammer']],
    // ["Stumpy", true, ['MoonPearl', 'DefeatAgahnim', 'ProgressiveGlove', 'Hookshot']],
    // ["Stumpy", true, ['MoonPearl', 'DefeatAgahnim', 'PowerGlove', 'Hookshot']],
    // ["Stumpy", true, ['MoonPearl', 'DefeatAgahnim', 'Flippers', 'Hookshot']],
    //
    // ["Digging Game", false, []],
    // ["Digging Game", true, ['MoonPearl', 'DefeatAgahnim', 'Hammer']],
    // ["Digging Game", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove']],
    // ["Digging Game", true, ['MoonPearl', 'TitansMitt']],
    // ["Digging Game", true, ['MoonPearl', 'ProgressiveGlove', 'Hammer']],
    // ["Digging Game", true, ['MoonPearl', 'PowerGlove', 'Hammer']],
    // ["Digging Game", true, ['MoonPearl', 'DefeatAgahnim', 'ProgressiveGlove', 'Hookshot']],
    // ["Digging Game", true, ['MoonPearl', 'DefeatAgahnim', 'PowerGlove', 'Hookshot']],
    // ["Digging Game", true, ['MoonPearl', 'DefeatAgahnim', 'Flippers', 'Hookshot']],

    // ["Superbunny Cave - Top", false, []],
    // ["Superbunny Cave - Top", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'Hookshot', 'Flute']],
    // ["Superbunny Cave - Top", true, ['MoonPearl', 'TitansMitt', 'Hookshot', 'Flute']],
    // ["Superbunny Cave - Top", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'MagicMirror', 'Hammer', 'Flute']],
    // ["Superbunny Cave - Top", true, ['MoonPearl', 'TitansMitt', 'MagicMirror', 'Hammer', 'Flute']],
    // ["Superbunny Cave - Top", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'Hookshot', 'Lamp']],
    // ["Superbunny Cave - Top", true, ['MoonPearl', 'TitansMitt', 'Hookshot', 'Lamp']],
    // ["Superbunny Cave - Top", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'MagicMirror', 'Hammer', 'Lamp']],
    // ["Superbunny Cave - Top", true, ['MoonPearl', 'TitansMitt', 'MagicMirror', 'Hammer', 'Lamp']],
    //
    // ["Superbunny Cave - Bottom", false, []],
    // ["Superbunny Cave - Bottom", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'Hookshot', 'Flute']],
    // ["Superbunny Cave - Bottom", true, ['MoonPearl', 'TitansMitt', 'Hookshot', 'Flute']],
    // ["Superbunny Cave - Bottom", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'MagicMirror', 'Hammer', 'Flute']],
    // ["Superbunny Cave - Bottom", true, ['MoonPearl', 'TitansMitt', 'MagicMirror', 'Hammer', 'Flute']],
    // ["Superbunny Cave - Bottom", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'Hookshot', 'Lamp']],
    // ["Superbunny Cave - Bottom", true, ['MoonPearl', 'TitansMitt', 'Hookshot', 'Lamp']],
    // ["Superbunny Cave - Bottom", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'MagicMirror', 'Hammer', 'Lamp']],
    // ["Superbunny Cave - Bottom", true, ['MoonPearl', 'TitansMitt', 'MagicMirror', 'Hammer', 'Lamp']],
    //
    // ["Hookshot Cave - Bottom Right", false, []],
    // ["Hookshot Cave - Bottom Right", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'Hookshot', 'Flute']],
    // ["Hookshot Cave - Bottom Right", true, ['MoonPearl', 'TitansMitt', 'Hookshot', 'Flute']],
    // ["Hookshot Cave - Bottom Right", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'MagicMirror', 'Hammer', 'Flute', 'PegasusBoots']],
    // ["Hookshot Cave - Bottom Right", true, ['MoonPearl', 'TitansMitt', 'MagicMirror', 'Hammer', 'Flute', 'PegasusBoots']],
    // ["Hookshot Cave - Bottom Right", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'Hookshot', 'Lamp']],
    // ["Hookshot Cave - Bottom Right", true, ['MoonPearl', 'TitansMitt', 'Hookshot', 'Lamp']],
    // ["Hookshot Cave - Bottom Right", true, ['MoonPearl', 'ProgressiveGlove', 'ProgressiveGlove', 'MagicMirror', 'Hammer', 'Lamp', 'PegasusBoots']],
    // ["Hookshot Cave - Bottom Right", true, ['MoonPearl', 'TitansMitt', 'MagicMirror', 'Hammer', 'Lamp', 'PegasusBoots']],

    // ["Spike Cave", false, []],
    // ["Spike Cave", true, ['Bottle', 'MoonPearl', 'Hammer', 'ProgressiveGlove', 'Lamp', 'Cape']],
    // ["Spike Cave", true, ['Bottle', 'MoonPearl', 'Hammer', 'PowerGlove', 'Lamp', 'Cape']],
    // ["Spike Cave", true, ['Bottle', 'MoonPearl', 'Hammer', 'TitansMitt', 'Lamp', 'Cape']],
    // ["Spike Cave", true, ['Bottle', 'MoonPearl', 'Hammer', 'ProgressiveGlove', 'Flute', 'Cape']],
    // ["Spike Cave", true, ['Bottle', 'MoonPearl', 'Hammer', 'PowerGlove', 'Flute', 'Cape']],
    // ["Spike Cave", true, ['Bottle', 'MoonPearl', 'Hammer', 'TitansMitt', 'Flute', 'Cape']],
    // ["Spike Cave", true, ['Bottle', 'MoonPearl', 'Hammer', 'ProgressiveGlove', 'Lamp', 'CaneOfByrna']],
    // ["Spike Cave", true, ['Bottle', 'MoonPearl', 'Hammer', 'PowerGlove', 'Lamp', 'CaneOfByrna']],
    // ["Spike Cave", true, ['Bottle', 'MoonPearl', 'Hammer', 'TitansMitt', 'Lamp', 'CaneOfByrna']],
    // ["Spike Cave", true, ['Bottle', 'MoonPearl', 'Hammer', 'ProgressiveGlove', 'Flute', 'CaneOfByrna']],
    // ["Spike Cave", true, ['Bottle', 'MoonPearl', 'Hammer', 'PowerGlove', 'Flute', 'CaneOfByrna']],
    // ["Spike Cave", true, ['Bottle', 'MoonPearl', 'Hammer', 'TitansMitt', 'Flute', 'CaneOfByrna']],
    // ["Spike Cave", true, ['HalfMagic', 'MoonPearl', 'Hammer', 'ProgressiveGlove', 'Lamp', 'Cape']],
    // ["Spike Cave", true, ['HalfMagic', 'MoonPearl', 'Hammer', 'PowerGlove', 'Lamp', 'Cape']],
    // ["Spike Cave", true, ['HalfMagic', 'MoonPearl', 'Hammer', 'TitansMitt', 'Lamp', 'Cape']],
    // ["Spike Cave", true, ['HalfMagic', 'MoonPearl', 'Hammer', 'ProgressiveGlove', 'Flute', 'Cape']],
    // ["Spike Cave", true, ['HalfMagic', 'MoonPearl', 'Hammer', 'PowerGlove', 'Flute', 'Cape']],
    // ["Spike Cave", true, ['HalfMagic', 'MoonPearl', 'Hammer', 'TitansMitt', 'Flute', 'Cape']],
    // ["Spike Cave", true, ['HalfMagic', 'MoonPearl', 'Hammer', 'ProgressiveGlove', 'Lamp', 'CaneOfByrna']],
    // ["Spike Cave", true, ['HalfMagic', 'MoonPearl', 'Hammer', 'PowerGlove', 'Lamp', 'CaneOfByrna']],
    // ["Spike Cave", true, ['HalfMagic', 'MoonPearl', 'Hammer', 'TitansMitt', 'Lamp', 'CaneOfByrna']],
    // ["Spike Cave", true, ['HalfMagic', 'MoonPearl', 'Hammer', 'ProgressiveGlove', 'Flute', 'CaneOfByrna']],
    // ["Spike Cave", true, ['HalfMagic', 'MoonPearl', 'Hammer', 'PowerGlove', 'Flute', 'CaneOfByrna']],
    // ["Spike Cave", true, ['HalfMagic', 'MoonPearl', 'Hammer', 'TitansMitt', 'Flute', 'CaneOfByrna']],
    // ["Spike Cave", true, ['QuarterMagic', 'MoonPearl', 'Hammer', 'ProgressiveGlove', 'Lamp', 'Cape']],
    // ["Spike Cave", true, ['QuarterMagic', 'MoonPearl', 'Hammer', 'PowerGlove', 'Lamp', 'Cape']],
    // ["Spike Cave", true, ['QuarterMagic', 'MoonPearl', 'Hammer', 'TitansMitt', 'Lamp', 'Cape']],
    // ["Spike Cave", true, ['QuarterMagic', 'MoonPearl', 'Hammer', 'ProgressiveGlove', 'Flute', 'Cape']],
    // ["Spike Cave", true, ['QuarterMagic', 'MoonPearl', 'Hammer', 'PowerGlove', 'Flute', 'Cape']],
    // ["Spike Cave", true, ['QuarterMagic', 'MoonPearl', 'Hammer', 'TitansMitt', 'Flute', 'Cape']],
    // ["Spike Cave", true, ['QuarterMagic', 'MoonPearl', 'Hammer', 'ProgressiveGlove', 'Lamp', 'CaneOfByrna']],
    // ["Spike Cave", true, ['QuarterMagic', 'MoonPearl', 'Hammer', 'PowerGlove', 'Lamp', 'CaneOfByrna']],
    // ["Spike Cave", true, ['QuarterMagic', 'MoonPearl', 'Hammer', 'TitansMitt', 'Lamp', 'CaneOfByrna']],
    // ["Spike Cave", true, ['QuarterMagic', 'MoonPearl', 'Hammer', 'ProgressiveGlove', 'Flute', 'CaneOfByrna']],
    // ["Spike Cave", true, ['QuarterMagic', 'MoonPearl', 'Hammer', 'PowerGlove', 'Flute', 'CaneOfByrna']],
    // ["Spike Cave", true, ['QuarterMagic', 'MoonPearl', 'Hammer', 'TitansMitt', 'Flute', 'CaneOfByrna']],

    //negative tests

    //['pedestal', false, {}, {}, true],

    // ["Mire Shed - Left", false, [], ['Gloves']],
    // ["Mire Shed - Left", false, [], ['MoonPearl']],
    // ["Mire Shed - Left", false, [], ['Flute']],
    // ["Catfish", false, [], ['Gloves']],
    // ["Catfish", false, [], ['MoonPearl']],
    // ["Pyramid Fairy - Sword", false, [], ['MoonPearl']],
    // ["Pyramid Fairy - Sword", false, [], ['Crystal5']],
    // ["Pyramid Fairy - Sword", false, [], ['Crystal6']],
    // ["Pyramid Fairy - Sword", false, [], ['AnySword']],
    // ["Brewery", false, [], ['MoonPearl']],
    // ["C-Shaped House", false, [], ['MoonPearl']],
    // ["Chest Game", false, [], ['MoonPearl']],
    // ["Hammer Pegs", false, [], ['MoonPearl']],
    // ["Hammer Pegs", false, [], ['Hammer']],
    // ["Hammer Pegs", false, [], ['Gloves']],
    // ["Bumper Cave", false, [], ['MoonPearl']],
    // ["Bumper Cave", false, [], ['Cape']],
    // ["Bumper Cave", false, [], ['Gloves']],
    // ["Blacksmith", false, [], ['Gloves']],
    // ["Blacksmith", false, [], ['MoonPearl']],
    // ["Purple Chest", false, [], ['Gloves']],
    // ["Purple Chest", false, [], ['MoonPearl']],
    // ["Hype Cave - Top", false, [], ['MoonPearl']],
    // ["Stumpy", false, [], ['MoonPearl']],
    // ["Digging Game", false, [], ['MoonPearl']],
    // ["Superbunny Cave - Top", false, [], ['Gloves']],
    // ["Superbunny Cave - Top", false, [], ['MoonPearl']],
    // ["Hookshot Cave - Bottom Right", false, [], ['Gloves']],
    // ["Hookshot Cave - Bottom Right", false, [], ['MoonPearl']],
    // ["Spike Cave", false, [], ['Gloves']],
    // ["Spike Cave", false, [], ['MoonPearl']],
    // ["Spike Cave", false, [], ['Hammer']],
    // ["Spike Cave", false, [], ['Cape', 'CaneOfByrna']],

  ];

  const negTests = [];

  tests.forEach((test)=> {
    const items =  test[2];
    const dungeons = test[3];
    const result = test[1];
    const isNeg = test[4] ? true : false;
    const location = new StandardStaticMapDW()[test[0]];
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
