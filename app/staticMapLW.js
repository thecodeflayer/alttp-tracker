import {regionHelper} from "~/regionHelper";

export const staticMapLW = {
    uncle :{x:894,y:624, title:'Uncle', desc: '~/locales/uncle.html', req:[], validate() {return true;}},
    secretPassage:{x:826,y:644, title:'Secret Passage', desc: '', req:[],  validate() {return true;}},
    backOfEscape:{x:778,y:439, title:'Back of Escape',
        desc: '', req:['items/glove1'],
        validate(items) {return items.glove > 0;}},
    sahashralaHut:{x:1216,y:660, title:'Sahashrala\'s Hut',
        req: ['items/bombs1'],
        validate(items) {
            return items.bombs;
        }
    },
    sahashrala:{x:1216,y:680, title:'Sahashrala',
        req: ['dungeons/crystal1'],
        validate(items, dungeons) {
            let retval = false;
            const keys = Object.keys(dungeons);
            for(const key of keys) {
                if(dungeons[key].crystal === 1 && dungeons[key].boss === true){
                    retval = true;
                    break;
                }
            }
            return retval;
        }
    },
    potionShop:{x:1201, y:502, title:'Potion Shop',
        desc: '', req:['items/mushroom1'],
        validate(items){
            return items.mushroom;
    }},
    zora:{x:1457, y:187, title:'King Zora (500 Rupees)', desc: '',
        req:['items/glove1','or','items/flippers1'],
        validate(items){
            return items.glove > 0 || items.flippers;
        }
    },
    zoraLedge:{x:1427, y:187, title:'Zora Ledge',
        desc: '', req:['items/flippers1'],
        validate(items){
        return items.flippers;
    }},
    waterfallFairy: {x:1350, y:208, title:'Waterfall Fairy',
        desc: '', req:['items/flippers1'],
        validate(items){
        return items.flippers;
    }},
    pedestal: {x:62, y:74, title:'Master Sword Pedestal',
        desc: '', req:['crystal-green','crystal-blue','crystal-red'],
        validate(items, dungeons){
            let rb = 0;
            let g = false;
            const keys = Object.keys(dungeons);
            for(const key of keys) {
                if(dungeons[key].crystal === 1 && dungeons[key].boss === true){
                    g = true;
                } else if(dungeons[key].crystal === 2 && dungeons[key].boss === true) {
                    rb = rb + 1;
                }
            }
            return rb === 2 && g;
    }},
    kingTomb: {x: 902, y: 444, title:'King\'s Tomb', desc: '',
        req:['items/boots1','items/glove2','or','items/boots1','items/mirror1','items/moonpearl1',
            'lp','dungeons/aga_boss0','items/hookshot1','items/flippers1','rp','or',
            'lp','items/glove1','items/hammer1','rp'],
        validate(items, dungeons){
            return items.boots
                && (items.glove === 2
                || (items.mirror && regionHelper.northWestDW(items, dungeons)) && items.moonpearl);
    }},
    tavern:{x: 240, y:850, title:'Kakariko Tavern', desc: '', req:[], validate(){return true;}},
    chickenHut: {x: 146, y:814, title:'Chicken Hut', desc: '',
        req:['items/bombs1'], validate(items){
        return items.bombs;
    }},
    well: {x: 38, y:639, title:'Kakariko Well', desc: '',
        req:['items/bombs1'], validate(items){
        return items.bombs;
    }},
    blindhouse: {x: 193, y:632, title:'Blind\'s House', desc: '',
        req:['items/bombs1'], validate(items){
        return items.bombs;
    }},
    pegasusRock:{x:595,y:440, title:'Pegasus Rocks', desc: '',
        req:['items/boots1'], validate(items){
        return items.boots;
    }},
    bottleMerchant: {x:144,y:698, title:'Bottle Merchant (100 Rupees)', desc: '', req:[], validate(){return true;}},
    magicBat:{x:486,y:844, title:'Magic Bat', desc: '',
        req:['items/powder1','items/hammer1','or',
            'items/powder1', 'items/moonpearl1', 'dungeons/aga_boss0','items/hookshot1','items/flippers1','items/glove2'],
        validate(items, dungeons){
            return items.powder
                && (items.hammer
                    || (items.mirror && items.moonpearl
                        && (items.glove === 2 && regionHelper.northWestDW(items, dungeons))));
    }},
    sickKid:{x:234,y:807, title:'Sick Kid', desc: '',
        req:['items/jar1'], validate(items){
        return items.jar > 0;
    }},
    lwHideout:{x:283,y:194, title:'Lost Woods Hideout', desc: '', req:[], validate(){return true;}},
    lumberjackTree:{x:450,y:110, title:'Lumberjack Tree', desc: '',
        req:['dungeons/aga_boss0','items/boots1'], validate(items, dungeons){
        return dungeons.aga.boss && items.boots;
    }},
    graveyardLedge:{x:855,y:416, title:'Graveyard Ledge', desc: '',
        req:['items/mirror1','items/moonpearl1','lp','dungeons/aga_boss0','items/hookshot1','items/flippers1','rp','or',
            'lp','items/hammer1','items/glove1','rp','or','items/glove2'],
        validate(items, dungeons){
        return items.mirror && items.moonpearl && regionHelper.northWestDW(items, dungeons);
    }},
    lwMushroom:{x:185,y:135, title:'Lost Woods Mushroom Location', desc: '', req:[], validate(){return true;}},
    floodChest:{x:703,y:1405, title:'Floodgate Chest', desc: '', req:[], validate(){return true;}},
    floodTreasure:{x:677,y:1394, title:'Floodgate Sunken Treasure', desc: '', req:[], validate(){return true;}},
    linkHouse: {x:820,y:1037, title:'Link\'s House', desc: '', req:[], validate(){return true;}},
    sanctuary:{x:691, y:410, title:'Sanctuary', desc: '', req:[], validate(){return true;}},
    aginahCave: {x:298,y:1242, title:'Aginah Cave', desc: 'Not the other guy',
        req:['items/bombs1'], validate(items){
        return items.bombs;
    }},
    moldormCave: {x:978,y:1412, title:'Mini-Moldorm Cave', desc: '',
        req:['items/bombs1'], validate(items){
        return items.bombs;
    }},
    iceRodCave: {x:1342,y:1160, title:'Ice Rod Cave', desc: '',
        req:['items/bombs1'], validate(items){
        return items.bombs;
    }},
    hobo: {x:1059,y:1045, title:'Hobo Under the Bridge', desc: '',
        req:['items/flippers1'], validate(items){
        return items.flippers;
    }},
    bombosTablet: {x:328,y:1380, title:'Bombos Tablet', desc: '',
        req:['items/book1','items/sword2','items/mirror1', 'items/moonpearl1',
            'lp', 'dungeons/aga_boss0','items/hookshot1','items/flippers1',
            'rp','or',
            'lp','items/hammer1','items/glove1','rp'],
        validate(items, dungeons){
            return items.book && items.sword > 1 && items.mirror && regionHelper.southDW(items, dungeons);
    }},
    cave45: {x:399,y:1242, title:'Cave 45', desc: '',
        req:['items/mirror1', 'items/moonpearl1',
            'lp', 'dungeons/aga_boss0','items/hookshot1','items/flippers1',
            'rp','or',
            'lp','items/hammer1','items/glove1','rp'],
        validate(items, dungeons){
        return items.mirror && regionHelper.southDW(items, dungeons);
    }},
    checkerCave: {x:263,y:1165, title:'Checkerboard Cave', desc: '',
        req:['items/mirror1','items/glove2','items/flute1'],
        validate(items, dungeons){
            return items.mirror && regionHelper.mireDW(items, dungeons);
    }},
    library: {x:243,y:990, title:'Library', desc: '',
        req:['items/boots1'], validate(items){
        return items.boots;
    }},
    mazeRace: {x:148,y:1080, title:'Maze Race', desc: '',
        req:['items/bombs1'], validate(items){
        return items.bombs;
    }},
    desertLedge: {x:38,y:1375, title:'Desert Ledge', desc: '',
        req:['items/book1','or','items/mirror1','items/glove2','items/flute1'],
        validate(items, dungeons){
            return regionHelper.dp(items, dungeons);
    }},
    lakeIsland: {x:1091,y:1244, title:'Lake Hylia Island', desc: '',
        req:['item/mirror1','items/flippers1','items/moonpearl1','lp','dungeons/aga_boss0','rp',
            'or','lp','items/hammer1','items/glove1','rp'],
        validate(items, dungeons){
            return items.mirror && items.flippers && items.moonpearl && regionHelper.northEastDW(items, dungeons);
    }},
    fluteSpot: {x:435,y:992, title:'Flute Spot', desc: '',
        req:['items/shovel1'], validate(items){
        return items.shovel;
    }},
    oldMan: {x:609,y:286, title:'Rescue Old Man', desc: '',
        req:['items/flute1','or','items/glove1','items/lantern1'],
        validate(items, dungeons){
            return items.lantern && regionHelper.deathMtnWestLW(items, dungeons);
    }},
    spectacleRockCave: {x:732,y:220, title:'Spectacle Rock Cave', desc: '',
        req:['lp','items/hookshot1','or','items/hammer1','items/mirror1','rp',
            'and','lp','items/flute1','or','items/glove1','items/lantern1','rp'],
        validate(items, dungeons){
        return regionHelper.deathMtnEastLW(items, dungeons);
    }},
    etherTablet: {x:630,y:28, title:'Ether Tablet', desc: '',
        req:['lp','items/mirror1','or','items/hookshot1','items/hammer1','rp','and','lp','items/flute1','or','items/glove1','items/lantern1','rp'],
        validate(items, dungeons){
        return items.book && items.sword > 1 && regionHelper.toh(items, dungeons);
    }},
    spectacleRock: {x:761,y:121, title:'Spectacle Rock', desc: '',
        req:['items/mirror1','and','items/flute1','or','items/glove1','items/lantern1'],
        validate(items, dungeons){
        return items.mirror && regionHelper.deathMtnWestLW(items, dungeons);
    }},
    spiralCave: {x:1195,y:140, title:'Spiral Cave', desc: '',
        req:['lp','items/hookshot1','or','items/hammer1','items/mirror1','rp',
            'and','lp','items/flute1','or','items/glove1','items/lantern1','rp'],
        validate(items, dungeons){
        return regionHelper.deathMtnEastLW(items, dungeons);
    }},
    mimicCave: {x:1266,y:140, title:'Mimic Cave', desc: '',
        req:['dungeons/medallion0','items/moonpearl1','items/redcane1','items/hammer1','items/glove2',
            'lp','items/hookshot1','or','items/mirror1','rp',
            'lp','items/flute1','or','items/lantern1','rp'],
        validate(items, dungeons){
        return items.hammer && items.mirror && regionHelper.tr(items, dungeons);
    }},
    paradoxCave: {x:1283,y:222, title:'Paradox Cave', desc: '',
        req:['lp','items/hookshot1','or','items/hammer1','items/mirror1','rp',
            'and','lp','items/flute1','or','items/glove1','items/lantern1','rp'],
        validate(items, dungeons){
        return regionHelper.deathMtnEastLW(items, dungeons);
    }},
    floatingIsland: {x:1220,y:26, title:'Floating Island', desc: '',
        req:['items/mirror1','items/bombs1','items/glove1',
            'and','lp','items/hookshot1','or','items/hammer1','rp',
            'and','lp','items/flute1','or','items/lantern1','rp'],
        validate(items, dungeons){
        return items.mirror && items.bombs && items.glove > 0
            && regionHelper.deathMtnEastDW(items, dungeons);
    }}
}
