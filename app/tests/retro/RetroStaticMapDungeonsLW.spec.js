import {RetroStaticMapDungeonsLW} from '~/retro/RetroStaticMapDungeonsLW';
import {TestLocationHelper} from '~/tests/TestLocationHelper';

describe('RetroStaticMapDungeonsLW', () => {

  //only test for bow changes in retro since all the rest are covered by standard tests
  const bossTests = [
    ['ep', false, {}, {}],
    ['ep', false, {lantern:false, firerod:false}, {}, true],
    ['ep', false, {bow:0}, {}, true],
    ['ep', false, {quiver:false}, {}, true],
    ['ep', true, {lantern:true, bow:1, quiver:true}, {}],
  ];

  TestLocationHelper.doTests(bossTests, 'boss', new RetroStaticMapDungeonsLW(), true);

});
