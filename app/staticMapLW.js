export const staticMapLW = {
    uncle :{x:894,y:624, desc:'Dead Uncle', validate() {return true;}},
    secretPassage:{x:826,y:644, desc:'Front of Escape', validate() {return true;}},
    sahashralaHut:{x:1216,y:660, desc:'Sahashrala\'s Hut',validate(items) {
        return items.bombs;
    }},
    sahashrala:{x:1216,y:680, desc:'Sahashrala',validate(items, dungeons) {
        let retval = false;
        const keys = Object.keys(dungeons);
        for(const key of keys) {
            if(dungeons[key].crystal === 1 && dungeons[key].boss === true){
                retval = true;
                break;
            }
        }
        return retval;
    }},
    potionShop:{x:1201, y:502, desc:'Potion Shop', validate(items){
            return items.mushroom;
    }},
    zora:{x:1457, y:187, desc:'King Zora (500 Rupees)', validate(){return true;}},
    zoraLedge:{x:1427, y:187, desc:'Zora Ledge', validate(items){
        return items.flippers;
    }},
    waterfallFairy: {x:1350, y:208, desc:'Waterfall Fairy', validate(items){
        return items.flippers;
    }},
    pedestal: {x:62, y:74, desc:'Master Sword Pedestal', validate(items, dungeons){
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
    kingTomb: {x: 902, y: 444, desc:'King\'s Tomb', validate(items){
        return items.glove === 2 && items.boots;
    }},
    tavern:{x: 240, y:850, desc:'Kakariko Tavern', validate(){return true;}},
    chickenHut: {x: 814, y:146, desc:'Chicken Hut', validate(items){
        return items.bombs;
    }},
    well: {x: 38, y:639, desc:'Kakariko Well', validate(items){
        return items.bombs;
    }},
    blindhouse: {x: 193, y:632, desc:'Blind\'s House', validate(items){
        return items.bombs;
    }},
    pegasusRock:{x:595,y:440, desc:'Pegasus Rocks', validate(items){
        return items.boots;
    }},
    bottleMerchant: {x:144,y:698, desc:'Bottle Merchant (100 Rupees)', validate(){return true;}},
    magicBat:{x:486,y:844, desc:'Magic Bat', validate(items){
        return items.powder && (items.hammer || items.mirror);
    }},
    sickKid:{x:234,y:807, desc:'Sick Kid', validate(items){
        return items.jar > 0;
    }},
    lwHideout:{x:283,y:194, desc:'Lost Woods Hideout', validate(){return true;}},
    lumberjackTree:{x:115,y:451, desc:'Lumberjack Tree', validate(items, dungeons){
        return dungeons.aga.boss;
    }},
    graveyardLedge:{x:855,y:416, desc:'Graveyard Ledge', validate(items){
        return items.mirror && items.moonpearl && items.glove === 2;
    }},
    lwMushroom:{x:185,y:135, desc:'Lost Woods Mushroom Location', validate(){return true;}},
    floodChest:{x:703,y:1405, desc:'Floodgate Chest', validate(){return true;}},
    floodTreasure:{x:677,y:1394, desc:'Floodgate Sunken Treasure', validate(){return true;}},
    linkHouse: {x:820,y:1037, desc:'Link\'s House', validate(){return true;}},
    aginahCave: {x:298,y:1242, desc:'Aginah Cave', validate(items){
        return items.bombs;
    }},
    moldormCave: {x:978,y:1412, desc:'Mini-Moldorm Cave', validate(items){
        return items.bombs;
    }},
    iceRodCave: {x:1342,y:1160, desc:'Ice Rod Cave', validate(items){
        return items.bombs;
    }},
    hobo: {x:1059,y:1045, desc:'Hobo Under the Bridge', validate(items){
        return items.flippers;
    }},
    bombosTablet: {x:328,y:1380, desc:'Bombos Tablet', validate(items){
        return items.glove === 2 && items.moonpearl && items.mirror && items.book;
    }},
    cave45: {x:399,y:1242, desc:'Cave 45', validate(items){
        return items.glove === 2 && items.moonpearl && items.mirror;
    }},
    checkerCave: {x:263,y:1165, desc:'Checkerboard Cave', validate(items){
        return items.glove === 2 && items.moonpearl && items.mirror && items.flute;
    }},
    library: {x:243,y:990, desc:'Library', validate(items){
        return items.boots;
    }},
    mazeRace: {x:148,y:1080, desc:'Maze Race', validate(items){
        return items.bombs;
    }},
    desertLedge: {x:38,y:1375, desc:'Desert Ledge', validate(items){
        return items.book;
    }},
    lakeIsland: {x:1091,y:1244, desc:'Lake Hylia Island', validate(items){
        return items.glove === 2 && items.moonpearl && items.mirror && items.flippers;
    }},
    fluteSpot: {x:435,y:992, desc:'Flute Spot', validate(items){
        return items.shovel;
    }},
    oldMan: {x:609,y:286, desc:'Rescue Old Man', validate(items){
        return items.glove > 0 && items.lantern;
    }},
    spectacleRockCave: {x:732,y:220, desc:'Spectacle Rock Cave', validate(items){
        return items.glove > 0 && items.lantern;
    }},
    etherTablet: {x:630,y:28, desc:'Ether Tablet', validate(items){
        return items.glove > 0 && items.moonpearl && items.mirror && items.book && items.lantern;
    }},
    spectacleRock: {x:761,y:121, desc:'Spectacle Rock', validate(items){
        return items.glove > 0 && items.mirror && items.lantern;
    }},
    spiralCave: {x:1195,y:140, desc:'Spiral Cave', validate(items){
        return items.glove > 0 && items.lantern && items.hookshot;
    }},
    mimicCave: {x:1266,y:140, desc:'Mimic Cave', validate(items, dungeons){
        const m = (dungeons.tr.medallion === 1 && items.bombos) ||
            (dungeons.tr.medallion === 2 && items.ether) ||
            (dungeons.tr.medallion === 3 && items.quake)
        return m && items.hammer && items.glove === 2 && items.firerod && items.moonpearl && items.mirror && items.redcane && items.lantern;
    }},
    paradoxCave: {x:1283,y:222, desc:'Paradox', validate(items){
        return items.hammer && items.glove > 0 && items.mirror && items.lantern;
    }},
    floatingIsland: {x:1220,y:26, desc:'Floating Island', validate(items){
        return items.glove === 2 && items.mirror && items.moonpearl && items.lantern && items.hookshot;
    }}
}
