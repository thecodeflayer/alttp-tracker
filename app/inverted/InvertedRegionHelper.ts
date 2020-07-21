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
    return this.activeFlute(items, dungeons) || (items.glove > 0 && items.lantern);
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
    return (this.activeFlute(items, dungeons) && this.northWestLW(items, dungeons)) || (items.glove > 0 && items.lantern);
  }
  static toh(items, dungeons) {
    return (items.mirror || (items.hookshot && items.hammer))
            && this.deathMtnWestLW(items, dungeons);
  }
  static mm(items, dungeons) {
    const m = (dungeons.mm.medallion === 1 && items.bombos) ||
            (dungeons.mm.medallion === 2 && items.ether) ||
            (dungeons.mm.medallion === 3 && items.quake);
    return m && items.moonpearl && this.mireDW(items, dungeons);
  }
  static tr(items, dungeons) {
    return this.deathMtnEastDW(items, dungeons);
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
