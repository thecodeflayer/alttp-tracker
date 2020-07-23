import {InvertedStaticMapDungeonsDW} from '~/inverted/InvertedStaticMapDungeonsDW';
import {TestLocationHelper} from '~/tests/TestLocationHelper';

describe('InvertedStaticMapDuneonsDW', () => {

  const tests = [
    ['pod', false, {}, {}],
    ['pod', false, {hammer:false, flippers:false, flute:false, mirror: false}, {aga:{boss:true}}, true],
    ['pod', true, {flippers:true}, {}],
    ['pod', true, {hammer:true}, {}],
    ['pod', true, {flute:true, moonpearl:true, glove:2}, {}],
    ['pod', true, {flute:true, moonpearl:true}, {aga:{boss:true}}],
    ['pod', true, {hammer:true, flippers:true, flute:true, mirror:true}, {}],
    ['pod', true, {mirror:true, moonpearl:true, glove:2}, {}],
    ['pod', true, {mirror:true}, {aga:{boss:true}}],

    ['sp', false, {}, {}],
    ['sp', false, {mirror:false}, {aga:{boss:true}}, true],
    ['sp', false, {moonpearl:false}, {aga:{boss:true}}, true],
    ['sp', false, {flippers:false}, {aga:{boss:true}}, true],
    ['sp', true, {mirror: true, moonpearl: true, flippers: true, glove:2}, {}],
    ['sp', true, {mirror: true, moonpearl: true, flippers: true, glove:1, hammer: true}, {}],
    ['sp', true, {mirror: true, moonpearl: true, flippers: true}, {aga:{boss:true}}],

    ['sw', true, {}, {}],

    ['tt', true, {}, {}],

    ['ip', false, {}, {}],
    ['ip', false, {flippers: false}, {aga:{boss:true}}, true],
    ['ip', false, {firerod:false, bombos:false}, {aga:{boss:true}}, true],
    ['ip', true, {flippers: true, firerod: true}, {}],
    ['ip', true, {flippers: true, bombos: true}, {}],

    ['mm', false, {}, {}],
    ['mm', false, {flute:false, mirror:false}, {aga:true}, true],
    ['mm', false, {boots:false, hookshot:false}, {aga:true}, true],
    ['mm', true, {moonpearl: true, flute: true, glove:2, bombos: true, boots:true}, {mm:{medallion:1}}],
    ['mm', true, {moonpearl: true, flute: true, glove:2, bombos: true, hookshot:true}, {mm:{medallion:1}}],
    ['mm', true, {moonpearl: true, flute: true, glove:1, hammer:true, bombos: true, boots:true}, {mm:{medallion:1}}],
    ['mm', true, {moonpearl: true, flute: true, glove:1, hammer:true, bombos: true, hookshot:true}, {mm:{medallion:1}}],
    ['mm', true, {moonpearl: true, flute: true, bombos: true, boots:true}, {mm:{medallion:1}, aga:{boss:true}}],
    ['mm', true, {moonpearl: true, flute: true, bombos: true, hookshot:true}, {mm:{medallion:1}, aga:{boss:true}}],

    ['mm', true, {moonpearl: true, mirror: true, glove:2, bombos: true, boots:true}, {mm:{medallion:1}}],
    ['mm', true, {moonpearl: true, mirror: true, glove:2, bombos: true, hookshot:true}, {mm:{medallion:1}}],
    ['mm', true, {moonpearl: true, mirror: true, glove:1, hammer:true, bombos: true, boots:true}, {mm:{medallion:1}}],
    ['mm', true, {moonpearl: true, mirror: true, glove:1, hammer:true, bombos: true, hookshot:true}, {mm:{medallion:1}}],
    ['mm', true, {moonpearl: true, mirror: true, bombos: true, boots:true}, {mm:{medallion:1}, aga:{boss:true}}],
    ['mm', true, {moonpearl: true, mirror: true, bombos: true, hookshot:true}, {mm:{medallion:1}, aga:{boss:true}}],
    ['mm', true, {mirror: true, bombos: true, boots:true}, {mm:{medallion:1}, aga:{boss:true}}],
    ['mm', true, {mirror: true, bombos: true, hookshot:true}, {mm:{medallion:1}, aga:{boss:true}}],

    ['tr', false, {}, {}],
    ['tr', false, {redcane:false}, {aga:{boss:true}}, true],
    ['tr', true, {moonpearl: true, flute:true, mirror: true, glove:2, hammer:true, bombos:true, redcane: true}, {tr:{medallion:1}}],
    ['tr', true, {moonpearl: true, lantern:true, mirror: true, glove:2, hammer:true, bombos:true, redcane: true}, {tr:{medallion:1}}],
    // spiral cave route
    ['tr', false, {moonpearl: false}, {aga:{boss:true}}, true],
    ['tr', false, {glove:0, flute:false}, {aga:{boss:true}}, true],
    ['tr', false, {lantern:false, flute:false}, {aga:{boss:true}}, true],
    ['tr', false, {hookshot: false, glove:1}, {aga:{boss:true}}, true],
    ['tr', false, {glove:1, lantern: true, moonpearl: true}, {}],
    ['tr', false, {glove:1, hookshot: true, moonpearl: true}, {}],
    ['tr', false, {flute:true, moonpearl: true, glove:1, hammer:true}, {}],
    ['tr', false, {flute:true, hookshot:true, moonpearl: true}, {}],
    ['tr', true, {redcane:true, mirror:true, flute:true, hookshot:true, moonpearl: true, glove:1, hammer:true}, {}],
    ['tr', true, {redcane:true, mirror:true, glove:1, lantern: true, moonpearl: true, hookshot: true}, {}],
    ['tr', true, {redcane:true, mirror:true, glove:2, lantern: true, moonpearl: true, hookshot: true}, {}],
    ['tr', true, {redcane:true, mirror:true, glove:2, lantern: true, moonpearl: true}, {}],
    ['tr', true, {redcane:true, mirror:true, flute:true, glove:2, moonpearl: true}, {}],
    ['tr', true, {redcane:true, mirror:true, flute:true, glove:2, moonpearl: true}, {}],

    ['aga', false, {}, {}],
    ['aga', false, {flute:false, glove:0}, {}, true],
    ['aga', false, {flute:false, lantern:false}, {}, true],
    ['aga', true, {flute:true, moonpearl: true, glove:1, hammer:true}, {}],
    ['aga', true, {flute:true, moonpearl: true, glove:2}, {}],
    ['aga', true, {glove:1, lantern:true}, {}],
    ['aga', true, {glove:2, lantern:true}, {}],
  ];

  const bossTests = [
    ['pod', false, {}, {}],
    ['pod', false, {hammer:false, flippers:false, flute:false, mirror:false}, {}, true],
    ['pod', false, {lantern:false}, {}, true],
    ['pod', false, {hammer:false}, {}, true],
    ['pod', false, {bow:0}, {}, true],
    ['pod', true, {lantern: true, hammer: true, bow:1}, {}],

    ['sp', false, {}, {}],
    ['sp', false, {mirror:false}, {aga:{boss:true}}, true],
    ['sp', false, {moonpearl:false}, {aga:{boss:true}}, true],
    ['sp', false, {flippers:false}, {aga:{boss:true}}, true],
    ['sp', false, {hammer:false}, {aga:{boss:true}}, true],
    ['sp', false, {hookshot:false}, {aga:{boss:true}}, true],
    ['sp', true, {mirror:true, moonpearl: true, flippers:true, glove:2, hammer: true, hookshot: true}, {}],
    ['sp', true, {mirror:true, moonpearl: true, flippers:true, glove:1, hammer: true, hookshot: true}, {}],
    ['sp', true, {mirror:true, moonpearl: true, flippers:true, hammer: true, hookshot: true}, {aga:{boss:true}}],

    ['sw', false, {}, {}],
    ['sw', false, {firerod:false}, {}, true],
    ['sw', true, {firerod: true}, {}],

    ['tt', true, {}, {}],

    ['ip', false, {}, {}],
    ['ip', false, {flippers: false}, {aga:{boss:true}}, true],
    ['ip', false, {hammer:false}, {aga:{boss:true}}, true],
    ['ip', false, {glove:0}, {aga:{boss:true}}, true],
    ['ip', false, {firerod:false, bombos:false}, {aga:{boss:true}}, true],
    ['ip', true, {glove:1, flippers: true, firerod: true, hammer:true}, {}],
    ['ip', true, {glove:1, flippers: true, bombos: true, hammer:true}, {}],
    ['ip', true, {glove:2, flippers: true, firerod: true, hammer:true}, {}],
    ['ip', true, {glove:2, flippers: true, bombos: true, hammer:true}, {}],

    ['mm', false, {}, {}],
    ['mm', false, {flute:false, mirror:false}, {mm:{medallion: 1}, aga:{boss:true}}, true],
    ['mm', false, {lantern:false}, {mm:{medallion: 1}, aga:{boss:true}}, true],
    ['mm', false, {redcane:false}, {mm:{medallion: 1}, aga:{boss:true}}, true],
    ['mm', true, {lantern:true, redcane: true, moonpearl: true, flute:true, glove:2, bombos: true, boots:true}, {mm:{medallion:1}}],
    ['mm', true, {lantern:true, redcane: true, moonpearl: true, flute:true, glove:2, bombos: true, hookshot:true}, {mm:{medallion:1}}],
    ['mm', true, {lantern:true, redcane: true, moonpearl: true, flute:true, glove:1, hammer:true, bombos: true, boots:true}, {mm:{medallion:1}}],
    ['mm', true, {lantern:true, redcane: true, moonpearl: true, flute:true, glove:1, hammer:true, bombos: true, hookshot:true}, {mm:{medallion:1}}],
    ['mm', true, {lantern:true, redcane: true, moonpearl: true, flute:true, bombos: true, boots:true}, {mm:{medallion:1}, aga:{boss:true}}],
    ['mm', true, {lantern:true, redcane: true, moonpearl: true, flute:true, bombos: true, hookshot:true}, {mm:{medallion:1}, aga:{boss:true}}],
    ['mm', true, {lantern:true, redcane: true, moonpearl: true, mirror:true, glove:2, bombos: true, boots:true}, {mm:{medallion:1}}],
    ['mm', true, {lantern:true, redcane: true, moonpearl: true, mirror:true, glove:2, bombos: true, hookshot:true}, {mm:{medallion:1}}],
    ['mm', true, {lantern:true, redcane: true, moonpearl: true, mirror:true, glove:1, hammer:true, bombos: true, boots:true}, {mm:{medallion:1}}],
    ['mm', true, {lantern:true, redcane: true, moonpearl: true, mirror:true, glove:1, hammer:true, bombos: true, hookshot:true}, {mm:{medallion:1}}],
    ['mm', true, {lantern:true, redcane: true, moonpearl: true, mirror:true, bombos: true, boots:true}, {mm:{medallion:1}, aga:{boss:true}}],
    ['mm', true, {lantern:true, redcane: true, moonpearl: true, mirror:true, bombos: true, hookshot:true}, {mm:{medallion:1}, aga:{boss:true}}],
    ['mm', true, {lantern:true, redcane: true, mirror: true, boots:true, bombos: true}, {mm:{medallion:1}, aga:{boss:true}}],
    ['mm', true, {lantern:true, redcane: true, mirror: true, hookshot:true, bombos: true}, {mm:{medallion:1}, aga:{boss:true}}],

    ['tr', false, {}, {}],
    ['tr', false, {redcane:false}, {tr:{medallion: 1}, aga:{boss:true}}, true],
    ['tr', false, {icerod:false}, {tr:{medallion: 1}, aga:{boss:true}}, true],
    ['tr', false, {firerod:false}, {tr:{medallion: 1}, aga:{boss:true}}, true],
    ['tr', true, {icerod:true, firerod:true, redcane:true, mirror:true, glove:1, lantern: true, moonpearl: true, hookshot: true}, {}],
    ['tr', true, {icerod:true, firerod:true, redcane:true, mirror:true, glove:2, lantern: true, moonpearl: true}, {}],
    ['tr', true, {icerod: true, firerod: true, lantern:true, mirror: true, glove:2, redcane: true, bombos: true}, {tr:{medallion: 1}}],
    ['tr', true, {icerod:true, firerod:true, lantern:true, hookshot:true, glove:2, hammer:true, bombos:true, redcane:true}, {tr:{medallion: 1}}],

    ['aga', false, {}, {}],
    ['aga', false, {lantern:false}, {}, true],
    ['aga', true, {glove:1, lantern: true, sword:1}, {}],
    ['aga', true, {glove:1, lantern: true, net:true}, {}],
  ];

  TestLocationHelper.doTests(tests, 'dungeon', new InvertedStaticMapDungeonsDW());
  TestLocationHelper.doTests(bossTests, 'boss', new InvertedStaticMapDungeonsDW(), true);
});
