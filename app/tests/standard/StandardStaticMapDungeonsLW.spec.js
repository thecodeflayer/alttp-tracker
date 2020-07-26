import {StandardStaticMapDungeonsLW} from '~/standard/StandardStaticMapDungeonsLW';
import {TestLocationHelper} from '~/tests/TestLocationHelper';

describe('StandardStaticMapDungeonsLW', () => {

  const tests = [
    ['ep', true, {}, {}],

    ['dp', false, {}, {}],
    ['dp', true, {book:true}, {}],
    ['dp', true, {flute:true, mirror:true, glove:2}, {}],

    ['toh', false, {}, {}],
    ['toh', true, {flute:true, mirror:true}, {}],
    ['toh', true, {glove:1, lantern:true, mirror:true}, {}],
    ['toh', true, {glove:2, lantern:true, mirror:true}, {}],
    ['toh', true, {flute:true, hookshot:true, hammer:true}, {}],
    ['toh', true, {glove:1, lantern:true, hookshot: true, hammer: true}, {}],
    ['toh', true, {glove:2, lantern:true, hookshot: true, hammer: true}, {}],

    ['aga', false, {}, {}],
    ['aga', true, {sword:2}, {}],
    ['aga', true, {sword:3}, {}],
    ['aga', true, {sword:4}, {}],
    ['aga', true, {cape:true}, {}],

  ];

  const bossTests = [
    ['ep', false, {}, {}],
    ['ep', true, {lantern:true, bow:1}, {}],
    ['ep', false, {lantern:false, firerod:false}, {}, true],
    ['ep', false, {bow:0}, {}],

    ['dp', false, {}, {}],
    ['dp', false, {glove:0}, {}, true],
    ['dp', false, {lantern: false, firerod: false}, {}, true],
    ['dp', true, {book:true, lantern:true, glove: 1}, {}],
    ['dp', true, {book:true, lantern:true, glove: 2}, {}],
    ['dp', true, {book:true, firerod:true, glove: 1}, {}],
    ['dp', true, {book:true, firerod:true, glove: 2}, {}],
    ['dp', true, {flute:true, mirror:true, lantern:true, glove: 2}, {}],
    ['dp', true, {flute:true, mirror:true, firerod:true, glove: 2}, {}],

    ['toh', false, {}, {}],
    ['toh', true, {flute:true, mirror:true}, {}],
    ['toh', true, {glove:1, lantern:true, mirror:true}, {}],
    ['toh', true, {glove:2, lantern:true, mirror:true}, {}],
    ['toh', true, {flute:true, hookshot:true, hammer:true}, {}],
    ['toh', true, {glove:1, lantern:true, hookshot: true, hammer: true}, {}],
    ['toh', true, {glove:2, lantern:true, hookshot: true, hammer: true}, {}],

    ['aga', false, {}, {}],
    ['aga', true, {sword:2, lantern: true}, {}],
    ['aga', true, {sword:3, lantern: true}, {}],
    ['aga', true, {sword:4, lantern: true}, {}],
    ['aga', true, {cape:true, lantern: true, net:true}, {}],

  ];

  TestLocationHelper.doTests(tests, 'dungeon', new StandardStaticMapDungeonsLW());
  TestLocationHelper.doTests(bossTests, 'boss', new StandardStaticMapDungeonsLW(), true);
});
