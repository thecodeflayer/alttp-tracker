export class InvertedRegionHelper {
  // light world
  static northEastLW(items, dungeons) {
    return dungeons.aga.boss
            || (items.hammer && items.glove > 0 || items.glove === 2);
  }
  static northWestLW(items, dungeons) {
    return this.northEastLW(items, dungeons);
  }
  static southLW(items, dungeons) {
    return this.northEastLW(items, dungeons);
  }
  static deathMtnEastLW(items, dungeons) {
    return items.glove === 2 && this.deathMtnWestDW(items, dungeons) && items.moonpearl;
  }
  static deathMtnWestLW(items, dungeons) {
    return items.flute || (items.glove > 0 && items.lantern);
  }
  // dark world
  static mireDW(items, dungeons) {
    return items.flute || (items.mirror && this.southLW(items, dungeons));
  }
  static northEastDW(items, dungeons) {
    return items.flute || items.hammer || items.flippers || (items.mirror && this.northEastLW(items, dungeons));
  }
  static northWestDW(items, dungeons) {
    return true;
  }
  static southDW(items, dungeons) {
    return true;
  }
  static deathMtnEastDW(items, dungeons) {
    return this.deathMtnWestDW(items, dungeons)
            || (items.mirror && items.moonpearl && items.hookshot && this.deathMtnEastLW(items, dungeons));
  }
  static deathMtnWestDW(items, dungeons) {
    return items.flute || (items.glove > 0 && items.lantern);
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
    const m = (dungeons.tr.medallion === 1 && items.bombos) ||
            (dungeons.tr.medallion === 2 && items.ether) ||
            (dungeons.tr.medallion === 3 && items.quake);
    return m && items.moonpearl && items.redcane && items.hammer && items.glove === 2 && this.deathMtnEastLW(items, dungeons);
  }
  static gt(items, dungeons) {
    let c = 0;
    const keys = Object.keys(dungeons);
    for(const key of keys) {
      if(dungeons[key].crystal > 2 && dungeons[key].boss){
        c = c +1;
      }
    }
    return c === 7 && items.moonpearl && this.northEastLW(items, dungeons);
  }
}
