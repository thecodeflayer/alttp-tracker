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
}
