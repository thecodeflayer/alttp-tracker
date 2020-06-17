export const staticMapDungeonsLW = {
    ep:{x:1437, y:610,
        validate(){
            return true;
        },
        validateBoss(items){
            return items.lantern && items.bow;
        }
    },
    dp:{x:111, y:1270,
        validate(items){
            return items.book;
        },
        validateBoss(items){
            return items.book && items.glove > 0;
        }
    },
    toh:{x:840, y:40,
        validate(items){
            return items.mirror && items.moonpearl;
        },
        validateBoss(items){
            return items.mirror && items.moonpearl;
        }
    }
}
