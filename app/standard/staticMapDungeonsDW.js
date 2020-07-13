import {standardRegionHelper} from "~/standard/regionHelper";

export const standardStaticMapDungeonsDW = {
    pod: {x:1438, y:603,
        validate(items, dungeons){
            return items.moonpearl && standardRegionHelper.northEastDW(items, dungeons);
        },
        validateBoss(items, dungeons){
            return items.hammer && items.moonpearl && standardRegionHelper.northEastDW(items, dungeons);
        }}, // palace of darkness
    sp: {x:703, y:1402,
        validate(items, dungeons){
            return items.flippers && items.moonpearl && items.mirror && standardRegionHelper.southDW(items, dungeons);
        },
        validateBoss(items, dungeons){
            return items.flippers && items.moonpearl && items.mirror && standardRegionHelper.southDW(items, dungeons);
        }}, // swamp palace
    sw: {x:149, y:164,
        validate(items, dungeons){
            return items.moonpearl && standardRegionHelper.northWestDW(items, dungeons);
        },
        validateBoss(items, dungeons){
            return items.moonpearl && items.firerod && standardRegionHelper.northWestDW(items, dungeons);
        }}, // skull woods
    tt: {x:190, y:717,
        validate(items, dungeons){
            return items.moonpearl && standardRegionHelper.northWestDW(items, dungeons);
        },
        validateBoss(items, dungeons){
            return items.moonpearl && standardRegionHelper.northWestDW(items, dungeons);
        }}, // thieves town
    ip: {x:1195, y:1294,
        validate(items, dungeons){
            return items.firerod && items.moonpearl && items.flippers && items.glove === 2 && standardRegionHelper.southDW(items, dungeons);
        },
        validateBoss(items, dungeons){
            return items.hammer && items.glove === 2 && items.firerod && items.moonpearl && items.flippers && standardRegionHelper.southDW(items, dungeons);
        }}, // ice palace
    mm: {x:110, y:1247,
        validate(items, dungeons){
            return standardRegionHelper.mm(items, dungeons);
        },
        validateBoss(items, dungeons){
            return items.redcane && items.lantern && standardRegionHelper.mm(items, dungeons);
        }}, // misery mire
    tr: {x:1411, y:90,
        validate(items, dungeons){
            return standardRegionHelper.tr(items, dungeons);
        },
        validateBoss(items, dungeons){
            return items.firerod && items.icerod && standardRegionHelper.tr(items, dungeons);
        }}, // turtle rock
    gt: {x:844, y:35,
        validate(items, dungeons){
            return standardRegionHelper.gt(items, dungeons);
        },
        validateBoss(items, dungeons){
            return (items.sword > 0 || items.net) && standardRegionHelper.gt(items, dungeons);
        }}
}
