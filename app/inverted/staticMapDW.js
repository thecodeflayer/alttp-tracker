import {regionHelper} from "~/inverted/regionHelper";

export const staticMapDW = {
    superbunnyCave: {x: 1265, y: 223,title: 'Superbunny Cave', itemCount: 2,
        req:[],
        validate(items, dungeons){
            return regionHelper.deathMtnEastDW(items, dungeons);
    }},
    hookshotCave: {x: 1247, y: 99,title: 'Hookshot Cave', itemCount: 4,
        req:[],
        validate(items, dungeons){
        return items.hookshot && regionHelper.deathMtnEastDW(items, dungeons);
    }},
    spikeCave: {x: 862, y: 221,title: 'Spike Cave', itemCount: 1,
        req:[],
        validate(items, dungeons){
        return items.hammer && items.glove > 0 && regionHelper.deathMtnEastDW(items, dungeons);
    }},
    catfish: {x: 1341, y: 257,title: 'Catfish', itemCount: 1,
        req:[],
        validate(items, dungeons){
        return items.glove && regionHelper.northEastDW(items, dungeons);
    }},
    pyramid: {x: 870, y: 670,title: 'Pyramid', itemCount: 1,
        req:[],
        validate(items, dungeons){
        return regionHelper.northEastDW(items, dungeons);
    }},
    pyramidFairy: {x: 703, y: 733,title: 'Pyramid Fairy', itemCount: 2,
        req:[],
        validate(items, dungeons){
        let c = 0;
        const keys = Object.keys(dungeons);
        for(const key of keys){
            if(dungeons[key].crystal === 4 && dungeons[key].boss) {
                c = c + 1;
            }
        }
        return c === 2 && items.mirror && regionHelper.northEastDW(items, dungeons);
    }},
    brewery: {x: 163, y: 878,title: 'Brewery', itemCount: 1,
        req:[],
        validate(items, dungeons){
        return items.bombs;
    }},
    cShapeHouse: {x: 310, y: 726,title: 'C-Shaped House', itemCount: 1,
        req:[],
        validate(items, dungeons){
        return true;
    }},
    chestGame: {x: 76, y: 702,title: 'Chest Game', itemCount: 1,
        req:[],
        validate(items, dungeons){
        return true;
    }},
    hammerPegs: {x: 474, y: 908,title: 'Hammer Pegs', itemCount: 1,
        req:[],
        validate(items, dungeons){
        return items.hammer && (items.glove === 2
            || (items.mirror && regionHelper.northWestLW(items, dungeons)));
    }},
    oldMan: {x: 532, y: 268,title: 'Rescue Old Man', itemCount: 1,
        req:['items/moonpearl1','and','lp','items/hammer1','or','items/flippers1','rp','and',
            'lp','items/glove1','or','dungeons/aga_boss0','rp'],
        validate(items, dungeons){
        return items.moonpearl && items.hookshot && items.glove > 0 && items.cape
            &&regionHelper.northWestDW(items, dungeons);
    }},
    blacksmith: {x: 223, y: 994,title: 'Blacksmith', itemCount: 1,
        req:[],
        validate(items, dungeons) {
            return (items.glove === 2 || items.mirror) && regionHelper.northWestLW(items, dungeons);
        }
    },
    purpleChest: {x: 457, y: 802,title: 'Purple Chest', itemCount: 1,
        req:[],
        validate(items, dungeons){
        return ((items.glove === 2 || items.mirror) && regionHelper.northWestLW(items, dungeons))
            && regionHelper.southLW(items, dungeons);
    }},
    hypeCave: {x: 896, y: 1168,title: 'Hype Cave', itemCount: 5,
        req:[],
        validate(items, dungeons){
        return items.bombs;
    }},
    stumpy: {x: 463, y: 1024,title: 'Stumpy', itemCount: 1,
        req:[],
        validate(items, dungeons){
        return true;
    }},
    diggingGame: {x: 85, y: 1043,title: 'Digging Game', itemCount: 1,
        req:[],
        validate(items, dungeons){
        return true;
    }},
    mireShed: {x: 59, y: 1205,title: 'Mire Shed', itemCount: 2,
        req:[],
        validate(items, dungeons){
        return regionHelper.mireDW(items, dungeons);
    }},
}
