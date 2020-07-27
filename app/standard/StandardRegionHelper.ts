
export class StandardRegionHelper {
  // light world
  static northEastLW(items, dungeons) {
    return true;
  }
  static northWestLW(items, dungeons) {
    return true;
  }
  static southLW(items, dungeons) {
    return true;
  }
  static deathMtnWestLW(items, dungeons) {
    return items.flute || (items.glove > 0 && items.lantern);
  }
  static reqDeathMtnWestLW = [
    ['items/flute1'],
    ['items/glove1', 'items/lantern1']
  ];
  static toh(items, dungeons) {
    return (items.mirror || (items.hookshot && items.hammer))
      && this.deathMtnWestLW(items, dungeons);
  }
  static reqToh = [
    ['items/mirror1', StandardRegionHelper.reqDeathMtnWestLW],
    ['items/hammer1', StandardRegionHelper.reqDeathMtnWestLW],
  ];
  static deathMtnEastLW(items, dungeons) {
    return (items.hookshot && this.deathMtnWestLW(items, dungeons))
            || (items.hammer && this.toh(items, dungeons));
  }
  static reqDeathMtnEastLW = [
    ['items/hookshot1', StandardRegionHelper.reqDeathMtnWestLW],
    ['items/hammer1', StandardRegionHelper.reqToh]
  ];
  // dark world
  static mireDW(items, dungeons) {
    return items.glove === 2 && items.flute;
  }
  static reqMireDW = [
    ['items/glove2', 'items/flute1']
  ];
  static northEastDW(items, dungeons) {
    return dungeons.aga.boss ||
            (items.hammer && items.glove > 0 && items.moonpearl) ||
            (items.glove === 2 && items.moonpearl &&
            (items.hammer || items.flippers));
  }
  static reqNorthEastDW = [
    ['dungeons/aga_boss0'],
    ['items/hammer1', 'items/glove1', 'items/moonpearl1'],
    ['items/glove2', 'items/moonpearl1', 'items/hammer1'],
    ['items/glove2', 'items/moonpearl1', 'items/flippers1']
  ];
  static northWestDW(items, dungeons) {
    return items.moonpearl
            && (this.northEastDW(items, dungeons)
                  && ((items.hookshot && (items.glove > 0 || items.hammer)
                    || items.flippers))
                || (items.hammer && items.glove > 0)
                || items.glove === 2);
  }
  static reqNorthWestDW = [
    ['items/moonpearl1', StandardRegionHelper.reqNorthEastDW, 'items/hookshot1', 'items/hammer1'],
    ['items/moonpearl1', StandardRegionHelper.reqNorthEastDW, 'items/hookshot1', 'items/glove1'],
    ['items/moonpearl1', StandardRegionHelper.reqNorthEastDW, 'items/flippers1'],
    ['items/moonpearl1', 'items/hammer1', 'items/glove1'],
    ['items/moonpearl1', 'items/glove2']
  ];
  static southDW(items, dungeons) {
    return (items.moonpearl
              && (this.northEastDW(items, dungeons)
                && (items.hammer || items.flippers)))
            || this.northWestDW(items, dungeons);
  }
  static reqSouthDW = [
    ['items/moonpearl1', StandardRegionHelper.reqNorthEastDW, 'items/hammer1'],
    ['items/moonpearl1', StandardRegionHelper.reqNorthEastDW, 'items/flippers1'],
    [StandardRegionHelper.reqNorthWestDW]
  ];
  static deathMtnEastDW(items, dungeons) {
    return items.glove === 2 && this.deathMtnEastLW(items, dungeons);
  }
  static deathMtnWestDW(items, dungeons) {
    return this.deathMtnWestLW(items, dungeons);
  }
  // dungeons
  static dp(items, dungeons) {
    return items.book || (items.mirror && this.mireDW(items, dungeons));
  }
  static reqDp = [
    ['items/book1'],
    ['items/mirror1', StandardRegionHelper.reqMireDW]
  ];
  static mm(items, dungeons) {
    const m = (dungeons.mm.medallion === 1 && items.bombos) ||
            (dungeons.mm.medallion === 2 && items.ether) ||
            (dungeons.mm.medallion === 3 && items.quake);
    return m && items.moonpearl && this.mireDW(items, dungeons);
  }
  static reqMm = [
    ['dungeons/medallion0', 'items/moonpearl1', StandardRegionHelper.reqMireDW]
  ];
  static tr(items, dungeons) {
    const m = (dungeons.tr.medallion === 1 && items.bombos) ||
            (dungeons.tr.medallion === 2 && items.ether) ||
            (dungeons.tr.medallion === 3 && items.quake);
    return m && items.moonpearl && items.redcane && items.hammer && items.glove === 2 && this.deathMtnEastLW(items, dungeons);
  }
  static reqTr = [
    ['dungeons/medallion0', 'items/moonpearl1', 'items/redcane1', 'items/hammer1', 'items/glove2', StandardRegionHelper.reqDeathMtnEastLW]
  ];
  static gt(items, dungeons, settings) {
    let c = 0;
    const keys = Object.keys(dungeons);
    for(const key of keys) {
      if(dungeons[key].crystal > 2 && dungeons[key].boss){
        c = c +1;
      }
    }
    return (c >= settings.openGT && items.moonpearl && this.deathMtnEastDW(items, dungeons));
  }
  static reqGt = [['items/moonpearl1', StandardRegionHelper.reqDeathMtnEastLW]];
}
