import {invertedRegionHelper} from "~/inverted/regionHelper";

export const invertedStaticMapDungeonsLW = {
    ep:{x:1437, y:610,
        validate(items, dungeons){
            return items.moonpearl && invertedRegionHelper.northEastLW(items, dungeons);
        },
        validateBoss(items, dungeons){
            return  items.moonpearl && invertedRegionHelper.northEastLW(items, dungeons)
            && items.bow && (items.lantern || items.firerod);
        }
    },
    dp:{x:111, y:1270,
        validate(items, dungeons){
            return invertedRegionHelper.southLW(items, dungeons) && items.moonpearl;
        },
        validateBoss(items, dungeons){
            return invertedRegionHelper.southLW(items, dungeons) && items.moonpearl
                && items.glove > 0 && (items.lantern || items.firerod);
        }
    },
    toh:{x:840, y:40,
        validate(items, dungeons){
            return invertedRegionHelper.deathMtnWestLW(items, dungeons) && items.moonpearl;
        },
        validateBoss(items, dungeons){
            return invertedRegionHelper.deathMtnWestLW(items, dungeons) && items.moonpearl;
        }
    },
    gt:{x:750, y:577,
        validate(items, dungeons){
            return invertedRegionHelper.gt(items, dungeons);
        },
        validateBoss(items, dungeons){
            return (items.sword > 0 || items.net) && invertedRegionHelper.gt(items, dungeons);
        }
    }
}
