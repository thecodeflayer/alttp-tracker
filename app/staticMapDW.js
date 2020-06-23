import {regionHelper} from "~/regionHelper";

export const staticMapDW = {
    superbunnyCave: {x: 1265, y: 223,title: 'Superbunny Cave', desc: '',
        req:['items/moonpearl1','items/glove2',
            'lp','items/hookshot1','or','items/hammer1','items/mirror1','rp',
            'and','lp','items/flute1','or','items/lantern1','rp'],
        validate(items, dungeons){
            return items.moonpearl && regionHelper.deathMtnEastDW(items, dungeons);
    }},
    hookshotCave: {x: 1247, y: 99,title: 'Hookshot Cave', desc: '',
        req:['items/hookshot1','items/moonpearl1','items/glove2',
            'and','lp','items/flute1','or','items/lantern1','rp'],
        validate(items, dungeons){
        return items.hookshot && items.moonpearl && regionHelper.deathMtnEastDW(items, dungeons);
    }},
    spikeCave: {x: 862, y: 221,title: 'Spike Cave', desc: '',
        req:['items/hammer1','items/moonpearl1','items/glove2',
            'lp','items/hookshot1','or','items/mirror1','rp',
            'and','lp','items/flute1','or','items/lantern1','rp'],
        validate(items, dungeons){
        return items.hammer && items.moonpearl && regionHelper.deathMtnEastDW(items, dungeons);
    }},
    catfish: {x: 1341, y: 257,title: 'Catfish', desc: '',
        req:['items/moonpearl1','items/glove1','and',
            'dungeons/aga_boss0','or','items/hammer1'],
        validate(items, dungeons){
        return items.moonpearl && items.glove > 0 && regionHelper.northEastDW(items, dungeons);
    }},
    pyramid: {x: 870, y: 670,title: 'Pyramid', desc: '',
        req:['dungeons/aga_boss0',
            'or','items/hammer1','items/glove1'],
        validate(items, dungeons){
        return regionHelper.northEastDW(items, dungeons);
    }},
    pyramidFairy: {x: 703, y: 733,title: 'Pyramid Fairy', desc: '',
        req:['dungeons/crystal4','dungeons/crystal4',
            'items/moonpearl1','and','items/glove2','or',
            'lp','items/hammer1','or','items/flippers1',
            'and','dungeons/aga_boss0','or','items/glove1','rp'],
        validate(items, dungeons){
        let c = 0;
        const keys = Object.keys(dungeons);
        for(const key of keys){
            if(dungeons[key].crystal === 4 && dungeons[key].boss) {
                c = c + 1;
            }
        }
        return c === 2 && regionHelper.southDW(items, dungeons)
            && ((items.hammer && items.moonpearl)
                || (items.mirror && dungeons.aga.boss));
    }},
    brewery: {x: 163, y: 878,title: 'Brewery', desc: '',
        req:['items/bombs1','items/moonpearl1','and',
            'items/glove2','or','items/hammer1','items/glove1','or',
            'lp','dungeons/aga_boss0','and','items/hammer1','or','items/flippers1','rp'],
        validate(items, dungeons){
        return items.bombs && items.moonpearl && regionHelper.northWestDW(items, dungeons);
    }},
    cShapeHouse: {x: 310, y: 726,title: 'C-Shaped House', desc: '',
        req:['items/moonpearl1','and',
            'items/glove2','or','items/hammer1','items/glove1','or',
            'lp','dungeons/aga_boss0','and','items/hammer1','or','items/flippers1','rp'],
        validate(items, dungeons){
        return items.moonpearl && regionHelper.northWestDW(items, dungeons);
    }},
    chestGame: {x: 76, y: 702,title: 'Chest Game', desc: '',
        req:['items/moonpearl1','and',
            'items/glove2','or','items/hammer1','items/glove1','or',
            'lp','dungeons/aga_boss0','and','items/hammer1','or','items/flippers1','rp'],
        validate(items, dungeons){
        return items.moonpearl && regionHelper.northWestDW(items, dungeons);
    }},
    hammerPegs: {x: 474, y: 908,title: 'Hammer Pegs', desc: '',
        req:['items/moonpearl1','items/hammer1','items/glove2'],
        validate(items, dungeons){
        return items.moonpearl && items.hammer && items.glove === 2 && regionHelper.northWestDW(items, dungeons);
    }},
    bumperCave: {x: 532, y: 268,title: '​Bumper Cave', desc: '',
        req:['items/moonpearl1','and','lp','items/hammer1','or','items/flippers1','rp','and',
            'lp','items/glove1','or','dungeons/aga_boss0','rp'],
        validate(items, dungeons){
        return items.moonpearl && items.hookshot && items.glove > 0 && items.cape
            &&regionHelper.northWestDW(items, dungeons);
    }},
    blacksmith: {x: 223, y: 994,title: 'Blacksmith', desc: '',
        req:['items/mirror1','items/moonpearl1','items/glove2'],
        validate(items, dungeons){
        return items.mirror && items.moonpearl && items.glove === 2
            && regionHelper.northWestDW(items, dungeons);
    }},
    purpleChest: {x: 457, y: 802,title: 'Purple Chest', desc: '',
        req:['items/mirror1','items/moonpearl1','items/glove2'],
        validate(items, dungeons){
        return items.mirror && items.moonpearl && items.glove === 2
            && regionHelper.northWestDW(items, dungeons);
    }},
    hypeCave: {x: 896, y: 1168,title: 'Hype Cave', desc: '',
        req:['items/moonpearl1','and','items/glove2','or',
            'lp','items/hammer1','or','items/flippers1',
            'and','dungeons/aga_boss0','or','items/glove1','rp'],
        validate(items, dungeons){
        return items.moonpearl && items.bombs && regionHelper.southDW(items, dungeons);
    }},
    stumpy: {x: 463, y: 1024,title: 'Stumpy', desc: '',
        req:['items/moonpearl1','and','items/glove2','or',
            'lp','items/hammer1','or','items/flippers1',
            'and','dungeons/aga_boss0','or','items/glove1','rp'],
        validate(items, dungeons){
        return items.moonpearl && regionHelper.southDW(items, dungeons);
    }},
    diggingGame: {x: 85, y: 1043,title: 'Digging Game', desc: '',
        req:['items/moonpearl1','and','items/glove2','or',
            'lp','items/hammer1','or','items/flippers1',
            'and','dungeons/aga_boss0','or','items/glove1','rp'],
        validate(items, dungeons){
        return items.moonpearl && regionHelper.southDW(items, dungeons);
    }},
    mireShed: {x: 59, y: 1205,title: 'Mire Shed', desc: '',
        req:['items/mirror1','items/glove2','items/flute1'],
        validate(items, dungeons){
        return items.moonpearl && regionHelper.mireDW(items, dungeons);
    }},
}
