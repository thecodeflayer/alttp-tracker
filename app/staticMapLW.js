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
    lumberjackTree:{x:0,y:0, desc:'Lumberjack Tree', validate(items, dungeons){
        return dungeons.aga.boss;
    }},
    graveyardLedge:{x:855,y:416, desc:'Graveyard Ledge', validate(items){
        return items.mirror && items.moonpearl && items.glove === 2;
    }},
    lwMushroom:{x:185,y:135, desc:'Lost Woods Mushroom Location', validate(){return true;}},
    floodChest:{x:703,y:1405, desc:'Floodgate Chest', validate(){return true;}},
    floodTreasure:{x:677,y:1394, desc:'Floodgate Sunken Treasure', validate(){return true;}},

}
