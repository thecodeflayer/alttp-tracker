export class StandardRegionHelper {
  // light world
  static northEastLW() {
    return true;
  }
  static northWestLW() {
    return true;
  }
  static southLW() {
    return true;
  }
  static deathMtnEastLW(items, dungeons) {
    return (items.hookshot && this.deathMtnWestLW(items, dungeons))
            || (items.hammer && this.toh(items, dungeons));
  }
  static deathMtnWestLW(items, dungeons) {
    return items.flute || (items.glove > 0 && items.lantern);
  }
  // dark world
  static mireDW(items, dungeons) {
    return items.glove === 2 && items.flute;
  }
  static northEastDW(items, dungeons) {
    return dungeons.aga.boss ||
            (items.hammer && items.glove > 0 && items.moonpearl) ||
            (items.glove === 2 && items.moonpearl &&
            (items.hammer || items.flippers));
  }
  static northWestDW(items, dungeons) {
    return items.moonpearl
            && (this.northEastDW(items, dungeons)
                && ((items.hookshot
                    && (items.glove > 0 || items.hammer)
                    || items.flippers))
                || (items.hammer && items.glove > 0)
                || items.glove === 2);
  }
  static southDW(items, dungeons) {
    return (items.moonpearl && (this.northEastDW(items, dungeons)
            && (items.hammer || items.flippers)))
            || this.northWestDW(items, dungeons);
  }
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
    return c === 7 && items.moonpearl && this.deathMtnEastDW(items, dungeons);
  }
}
