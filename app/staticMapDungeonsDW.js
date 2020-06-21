import {regionHelper} from "~/regionHelper";

export const staticMapDungeonsDW = {
    pod: {x:1438, y:603,
        validate(items, dungeons){
            return items.moonpearl && regionHelper.northEastDW(items, dungeons);
        },
        validateBoss(items, dungeons){
            return items.hammer && items.moonpearl && regionHelper.northEastDW(items, dungeons);
        }}, // palace of darkness
    sp: {x:703, y:1402,
        validate(items, dungeons){
            return items.flippers && items.moonpearl && items.mirror && regionHelper.southDW(items, dungeons);
        },
        validateBoss(items, dungeons){
            return items.flippers && items.moonpearl && items.mirror && regionHelper.southDW(items, dungeons);
        }}, // swamp palace
    sw: {x:59, y:74,
        validate(items, dungeons){
            return items.moonpearl && regionHelper.northWestDW(items, dungeons);
        },
        validateBoss(items, dungeons){
            return items.moonpearl && items.firerod && regionHelper.northWestDW(items, dungeons);
        }}, // skull woods
    tt: {x:190, y:717,
        validate(items, dungeons){
            return items.moonpearl && regionHelper.northWestDW(items, dungeons);
        },
        validateBoss(items, dungeons){
            return items.moonpearl && regionHelper.northWestDW(items, dungeons);
        }}, // thieves town
    ip: {x:1195, y:1294,
        validate(items, dungeons){
            return items.firerod && items.moonpearl && items.flippers && items.glove === 2 && regionHelper.southDW(items, dungeons);
        },
        validateBoss(items, dungeons){
            return items.hammer && items.glove === 2 && items.firerod && items.moonpearl && items.flippers && regionHelper.southDW(items, dungeons);
        }}, // ice palace
    mm: {x:110, y:1247,
        validate(items, dungeons){
            return regionHelper.mm(items, dungeons);
        },
        validateBoss(items, dungeons){
            return items.redcane && items.lantern && regionHelper.mm(items, dungeons);
        }}, // misery mire
    tr: {x:1411, y:90,
        validate(items, dungeons){
            return regionHelper.tr(items, dungeons);
        },
        validateBoss(items, dungeons){
            return items.firerod && items.icerod && regionHelper.tr(items, dungeons);
        }}, // turtle rock
    gt: {x:844, y:35,
        validate(items, dungeons){
            return regionHelper.gt(items, dungeons);
        },
        validateBoss(items, dungeons){
            return (items.sword > 0 || items.net) && regionHelper.gt(items, dungeons);
        }}
}
