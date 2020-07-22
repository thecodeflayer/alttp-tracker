export class InvertedRegionHelper {
  // light world
  static northEastLW(items, dungeons) {
    return dungeons.aga.boss
            || items.moonpearl && (items.hammer && items.glove > 0 || items.glove === 2);
  }
  static northWestLW(items, dungeons) {
    return this.northEastLW(items, dungeons);
  }
  static southLW(items, dungeons) {
    return this.northEastLW(items, dungeons);
  }
  static deathMtnEastLW(items, dungeons) {
    return (items.glove === 2 && this.deathMtnEastDW(items, dungeons))
      || (this.deathMtnWestLW(items, dungeons)
      && items.moonpearl && items.hookshot);
  }
  static deathMtnWestLW(items, dungeons) {
    return (this.activeFlute(items, dungeons) || (items.glove > 0 && items.lantern));
  }
  // dark world
  static mireDW(items, dungeons) {
    return this.activeFlute(items, dungeons) || (items.mirror && this.southLW(items, dungeons));
  }
  static northEastDW(items, dungeons) {
    return this.activeFlute(items, dungeons) || items.hammer || items.flippers || (items.mirror && this.northEastLW(items, dungeons));
  }
  static northWestDW(items, dungeons) {
    return true;
  }
  static southDW(items, dungeons) {
    return true;
  }
  static deathMtnEastDW(items, dungeons) {
    return (this.deathMtnWestDW(items, dungeons))
      || (items.mirror && items.moonpearl && items.hookshot && this.deathMtnWestLW(items, dungeons));
  }
  static deathMtnWestDW(items, dungeons) {
    return (this.activeFlute(items, dungeons) || (items.glove > 0 && items.lantern));
  }
  static toh(items, dungeons) {
    return (items.hookshot || items.glove === 2) && items.hammer
            && this.deathMtnWestLW(items, dungeons);
  }
  static mm(items, dungeons) {
    const m = (dungeons.mm.medallion === 1 && items.bombos) ||
            (dungeons.mm.medallion === 2 && items.ether) ||
            (dungeons.mm.medallion === 3 && items.quake);
    return m && this.mireDW(items, dungeons);
  }
  static tr(items, dungeons) {
    const m = (dungeons.tr.medallion === 1 && items.bombos) ||
      (dungeons.tr.medallion === 2 && items.ether) ||
      (dungeons.tr.medallion === 3 && items.quake);
    return (m && items.redcane && this.deathMtnEastDW(items, dungeons))
      || (items.redcane && items.moonpearl && items.mirror && InvertedRegionHelper.deathMtnEastLW(items, dungeons));
  }
  static gt(items, dungeons, settings) {
    let c = 0;
    const keys = Object.keys(dungeons);
    for(const key of keys) {
      if(dungeons[key].crystal > 2 && dungeons[key].boss){
        c = c +1;
      }
    }
    return c >= settings.openGT && items.moonpearl && this.northEastLW(items, dungeons);
  }
  static activeFlute(items, dungeons) {
    return items.flute && (dungeons.aga.boss
    || items.moonpearl && (items.hammer && items.glove > 0 || items.glove === 2));
  }
}
