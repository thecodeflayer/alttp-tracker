import {RequiredItemsHelper} from '~/utils/RequiredItemsHelper';
import {StandardStaticMapLW} from '~/standard/StandardStaticMapLW';
import {StandardStaticMapDW} from '~/standard/StandardStaticMapDW';

describe('RequiredItemsHelper', () => {
  const standardMapLW = new StandardStaticMapLW();
  const standardMapDW = new StandardStaticMapDW();
  const rih = new RequiredItemsHelper();
  it('should get kings tomb', () => {
    listItems(standardMapLW.kingTomb.title, rih.getRequiredItems(standardMapLW.kingTomb.req));
  });
  it('should get magic bat', () => {
    listItems(standardMapLW.magicBat.title, rih.getRequiredItems(standardMapLW.magicBat.req));
  });
  it('should get bombos tablet', () => {
    listItems(standardMapLW.bombosTablet.title, rih.getRequiredItems(standardMapLW.bombosTablet.req));
  });
  it('should get checker cave', () => {
    listItems(standardMapLW.checkerCave.title, rih.getRequiredItems(standardMapLW.checkerCave.req));
  });
  it('do all light world maps', () => {
    const keys = Object.keys(standardMapLW);
    for(const key of keys) {
      listItems(standardMapLW[key].title, rih.getRequiredItems(standardMapLW[key].req));
    }
  });
  it('should get spike cave', () => {
    listItems(standardMapDW.spikeCave.title, rih.getRequiredItems(standardMapDW.spikeCave.req));
  });
  it('should get pyramid fairy', () => {
    listItems(standardMapDW.pyramidFairy.title, rih.getRequiredItems(standardMapDW.pyramidFairy.req));
  });
  it('do all dark world maps', () => {
    const keys = Object.keys(standardMapDW);
    for(const key of keys) {
      listItems(standardMapDW[key].title, rih.getRequiredItems(standardMapDW[key].req));
    }
  });
});
function listItems(title, arr){
  console.log(title);
  for(const a of arr){
    console.log(a);
  }
}
