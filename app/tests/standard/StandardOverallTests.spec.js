import {StandardStaticMapLW} from '~/standard/StandardStaticMapLW';
import {StandardStaticMapDW} from '~/standard/StandardStaticMapDW';

describe('Overall Tests for Standard', () => {
  it('should count the items', () => {
    const lws = new StandardStaticMapLW();
    const dws = new StandardStaticMapDW();
    const lwk = Object.keys(lws);
    const dwk = Object.keys(dws);

    let lwCount = 0;
    let dwCount = 0;
    for(const k of lwk){
      lwCount = lwCount + lws[k].itemCount;
    }
    for(const k of dwk){
      dwCount = dwCount + dws[k].itemCount;
    }
    console.log('lwCount', lwCount);
    console.log('dwCount', dwCount);
    console.log('total', lwCount + dwCount);
  });
});
