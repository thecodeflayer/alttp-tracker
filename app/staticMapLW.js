export const staticMapLW = {
    uncle :{x:894,y:624, title:'Dead Uncle', desc: 'Loot the body you animal!', req:[], validate() {return true;}},
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
    zora:{x:1457, y:187, title:'King Zora', desc: 'Bring 500 Rupees', req:[], validate(){return true;}},
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
        desc: '', req:['dungeons/crystal1', 'dungeons/crystal2'],
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
    kingTomb: {x: 902, y: 444, title:'King\'s Tomb', desc: '', req:[], validate(items){
        return items.glove === 2 && items.boots;
    }},
    tavern:{x: 240, y:850, title:'Kakariko Tavern', desc: '', req:[], validate(){return true;}},
    chickenHut: {x: 814, y:146, title:'Chicken Hut', desc: '', req:[], validate(items){
        return items.bombs;
    }},
    well: {x: 38, y:639, title:'Kakariko Well', desc: '', req:[], validate(items){
        return items.bombs;
    }},
    blindhouse: {x: 193, y:632, title:'Blind\'s House', desc: '', req:[], validate(items){
        return items.bombs;
    }},
    pegasusRock:{x:595,y:440, title:'Pegasus Rocks', desc: '', req:[], validate(items){
        return items.boots;
    }},
    bottleMerchant: {x:144,y:698, title:'Bottle Merchant (100 Rupees)', desc: '', req:[], validate(){return true;}},
    magicBat:{x:486,y:844, title:'Magic Bat', desc: '', req:[], validate(items){
        return items.powder && (items.hammer || items.mirror);
    }},
    sickKid:{x:234,y:807, title:'Sick Kid', desc: '', req:[], validate(items){
        return items.jar > 0;
    }},
    lwHideout:{x:283,y:194, title:'Lost Woods Hideout', desc: '', req:[], validate(){return true;}},
    lumberjackTree:{x:115,y:451, title:'Lumberjack Tree', desc: '', req:[], validate(items, dungeons){
        return dungeons.aga.boss;
    }},
    graveyardLedge:{x:855,y:416, title:'Graveyard Ledge', desc: '', req:[], validate(items){
        return items.mirror && items.moonpearl && items.glove === 2;
    }},
    lwMushroom:{x:185,y:135, title:'Lost Woods Mushroom Location', desc: '', req:[], validate(){return true;}},
    floodChest:{x:703,y:1405, title:'Floodgate Chest', desc: '', req:[], validate(){return true;}},
    floodTreasure:{x:677,y:1394, title:'Floodgate Sunken Treasure', desc: '', req:[], validate(){return true;}},
    linkHouse: {x:820,y:1037, title:'Link\'s House', desc: '', req:[], validate(){return true;}},
    aginahCave: {x:298,y:1242, title:'Aginah Cave', desc: '', req:[], validate(items){
        return items.bombs;
    }},
    moldormCave: {x:978,y:1412, title:'Mini-Moldorm Cave', desc: '', req:[], validate(items){
        return items.bombs;
    }},
    iceRodCave: {x:1342,y:1160, title:'Ice Rod Cave', desc: '', req:[], validate(items){
        return items.bombs;
    }},
    hobo: {x:1059,y:1045, title:'Hobo Under the Bridge', desc: '', req:[], validate(items){
        return items.flippers;
    }},
    bombosTablet: {x:328,y:1380, title:'Bombos Tablet', desc: '', req:[], validate(items){
        return items.glove === 2 && items.moonpearl && items.mirror && items.book;
    }},
    cave45: {x:399,y:1242, title:'Cave 45', desc: '', req:[], validate(items){
        return items.glove === 2 && items.moonpearl && items.mirror;
    }},
    checkerCave: {x:263,y:1165, title:'Checkerboard Cave', desc: '', req:[], validate(items){
        return items.glove === 2 && items.moonpearl && items.mirror && items.flute;
    }},
    library: {x:243,y:990, title:'Library', desc: '', req:[], validate(items){
        return items.boots;
    }},
    mazeRace: {x:148,y:1080, title:'Maze Race', desc: '', req:[], validate(items){
        return items.bombs;
    }},
    desertLedge: {x:38,y:1375, title:'Desert Ledge', desc: '', req:[], validate(items){
        return items.book;
    }},
    lakeIsland: {x:1091,y:1244, title:'Lake Hylia Island', desc: '', req:[], validate(items){
        return items.glove === 2 && items.moonpearl && items.mirror && items.flippers;
    }},
    fluteSpot: {x:435,y:992, title:'Flute Spot', desc: '', req:[], validate(items){
        return items.shovel;
    }},
    oldMan: {x:609,y:286, title:'Rescue Old Man', desc: '', req:[], validate(items){
        return items.glove > 0 && items.lantern;
    }},
    spectacleRockCave: {x:732,y:220, title:'Spectacle Rock Cave', desc: '', req:[], validate(items){
        return items.glove > 0 && items.lantern;
    }},
    etherTablet: {x:630,y:28, title:'Ether Tablet', desc: '', req:[], validate(items){
        return items.glove > 0 && items.moonpearl && items.mirror && items.book && items.lantern;
    }},
    spectacleRock: {x:761,y:121, title:'Spectacle Rock', desc: '', req:[], validate(items){
        return items.glove > 0 && items.mirror && items.lantern;
    }},
    spiralCave: {x:1195,y:140, title:'Spiral Cave', desc: '', req:[], validate(items){
        return items.glove > 0 && items.lantern && items.hookshot;
    }},
    mimicCave: {x:1266,y:140, title:'Mimic Cave', desc: '', req:[], validate(items, dungeons){
        const m = (dungeons.tr.medallion === 1 && items.bombos) ||
            (dungeons.tr.medallion === 2 && items.ether) ||
            (dungeons.tr.medallion === 3 && items.quake)
        return m && items.hammer && items.glove === 2 && items.firerod && items.moonpearl && items.mirror && items.redcane && items.lantern;
    }},
    paradoxCave: {x:1283,y:222, title:'Paradox', desc: '', req:[], validate(items){
        return items.hammer && items.glove > 0 && items.mirror && items.lantern;
    }},
    floatingIsland: {x:1220,y:26, title:'Floating Island', desc: '', req:[], validate(items){
        return items.glove === 2 && items.mirror && items.moonpearl && items.lantern && items.hookshot;
    }}
}
