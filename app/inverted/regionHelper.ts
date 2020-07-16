export const invertedRegionHelper = {
  // light world
  northEastLW(items, dungeons) {
    return dungeons.aga.boss
            || (items.hammer && items.glove > 0 || items.glove === 2);
  },
  northWestLW(items, dungeons) {return this.northEastLW(items, dungeons);},
  southLW(items, dungeons) {return this.northEastLW(items, dungeons);},
  deathMtnEastLW(items, dungeons) {
    return items.glove === 2 && this.deathMtnWestDW(items, dungeons) && items.moonpearl;
  },
  deathMtnWestLW(items, dungeons) {
    return items.flute || (items.glove > 0 && items.lantern);
  },
  // dark world
  mireDW(items, dungeons) {
    return items.flute || (items.mirror && this.southLW(items, dungeons));
  },
  northEastDW(items, dungeons) {
    return items.flute || items.hammer || items.flippers || (items.mirror && this.northEastLW(items, dungeons));
  },
  northWestDW(items, dungeons) {
    return true;
  },
  southDW(items, dungeons) {
    return true;
  },
  deathMtnEastDW(items, dungeons) {
    return this.deathMtnWestDW(items, dungeons)
            || (items.mirror && items.moonpearl && items.hookshot && this.deathMtnEastLW(items, dungeons));
  },
  deathMtnWestDW(items, dungeons) {
    return items.flute || (items.glove > 0 && items.lantern);
  },
  toh(items, dungeons) {
    return (items.mirror || (items.hookshot && items.hammer))
            && this.deathMtnWestLW(items, dungeons);
  },
  mm(items, dungeons) {
    const m = (dungeons.mm.medallion === 1 && items.bombos) ||
            (dungeons.mm.medallion === 2 && items.ether) ||
            (dungeons.mm.medallion === 3 && items.quake);
    return m && items.moonpearl && this.mireDW(items, dungeons);
  },
  tr(items, dungeons) {
    const m = (dungeons.tr.medallion === 1 && items.bombos) ||
            (dungeons.tr.medallion === 2 && items.ether) ||
            (dungeons.tr.medallion === 3 && items.quake);
    return m && items.moonpearl && items.redcane && items.hammer && items.glove === 2 && this.deathMtnEastLW(items, dungeons);
  },
  gt(items, dungeons) {
    let c = 0;
    const keys = Object.keys(dungeons);
    for(const key of keys) {
      if(dungeons[key].crystal > 2 && dungeons[key].boss){
        c = c +1;
      }
    }
    return c === 7 && items.moonpearl && this.northEastLW(items, dungeons);
  }
};
