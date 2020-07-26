import {RequiredItemsHelper} from '~/utils/RequiredItemsHelper';

describe('RequiredItemsHelper', () => {
  fit('should get an array', () => {
    const rih = new RequiredItemsHelper();
    rih.getTestArray();
  });
});
