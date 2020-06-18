export const regionHelper = {
    // light world
    northEastLW() {return true;},
    northWestLW() {return true;},
    southLW() {return true;},
    deathMtnEastLW(items) {
        return items.hammer && this.toh(items);
    },
    deathMtnWestLW(items) {
        return items.flute || (items.glove > 0 && items.lantern);
    },
    // dark world
    mireDW(items) {
        return items.glove > 0 && items.flute;
    },
    northEastDW(items, dungeons) {
        return dungeons.aga.boss ||
            (items.hammer && items.glove > 0 && items.moonpearl);
    },
    northWestDW(items, dungeons) {
        return items.moonpearl
            && (this.northEastDW(items, dungeons)
                && ((items.hookshot
                    && (items.glove > 0 || items.hammer)
                    || items.flippers))
                || (items.hammer && items.glove > 0)
                || items.glove === 2);
    },
    southDW(items, dungeons) {
        return (items.moonpearl && (this.northEastDW(items, dungeons)
            && (items.hammer || items.flippers)))
            || this.northWestDW(items, dungeons);
    },
    deathMtnEastDW(items) {
        return items.glove === 2 && this.deathMtnEastLW();
    },
    deathMtnWestDW(items) {
        return this.deathMtnWestLW(items);
    },
    // dungeons
    dp(items, dungeons) {
        return items.book || (items.mirror && this.mireDW(items, dungeons));
    },
    toh(items) {
        return (items.mirror || (items.hookshot && items.hammer))
            && this.deathMtnWestLW(items);
    },
    mm(items, dungeons) {
        const m = (dungeons.mm.medallion === 1 && items.bombos) ||
            (dungeons.mm.medallion === 2 && items.ether) ||
            (dungeons.mm.medallion === 3 && items.quake)
        return m && items.moonpearl && this.mireDW(items, dungeons);
    },
    tr(items, dungeons) {
        const m = (dungeons.tr.medallion === 1 && items.bombos) ||
            (dungeons.tr.medallion === 2 && items.ether) ||
            (dungeons.tr.medallion === 3 && items.quake)
        return m && items.moonpearl && items.redcane && items.hammer && items.glove === 2 && this.deathMtnEastLW(items, dungeons);
    },
    gt(items, dungeons) {
        let c = 0;
        const keys = Object.keys(dungeons);
        for(const key of keys) {
            if(dungeons[key].crystal > 2){
                c = c +1;
            }
        }
        return c === 7 && items.moonpearl && this.deathMtnEastDW(items, dungeons);
    }
}
