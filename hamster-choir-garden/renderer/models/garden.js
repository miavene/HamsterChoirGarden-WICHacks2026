
import {HAMSTER_TYPES} from "../data/hamsterData.js";
import user from "./user.js"
import createHamster from "./hamsterFactory.js"

class Garden{

    constructor(maxCapacity){
        this.maxCapacity = maxCapacity
        this.hamsters = new Set();
        this.hamsterCost = 50;

    }

    addHamster(){

        if (this.hamsters.size >= this.maxCapacity){
            return null; //can't buy, not enough space
        }

        if (user.getCoinCount() < this.hamsterCost){
            return null; //can't buy, not enough money
        }

        user.removeFromCoins(this.hamsterCost);
        this.hamsterCost = this.hamsterCost * 2; 

        let rand = Math.floor(Math.random() * Object.keys(HAMSTER_TYPES).length);
        let randHamster = HAMSTER_TYPES[Object.keys(HAMSTER_TYPES)[rand]];
        while (this.hamsters.has(randHamster)){
            rand = Math.floor(Math.random() * Object.keys(HAMSTER_TYPES).length);
            randHamster = HAMSTER_TYPES[Object.keys(HAMSTER_TYPES)[rand]];
        }
        const hamster = createHamster(randHamster);
        this.hamsters.add(hamster);

    }

    collectRevenue(){
        for (const hamster of this.hamsters){
            const revenue = hamster.getTotalRevenue();
            user.addToCoins(revenue);
        }
        
    }

    getGarden(){
        return this;
    }





}

export default Garden;