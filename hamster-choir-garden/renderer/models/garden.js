
import {HAMSTER_TYPES} from "../data/hamsterData.js";
import user from "./user.js"
import createHamster from "./hamsterFactory.js"

class Garden{

    constructor(maxCapacity){
        this.maxCapacity = maxCapacity
        this.hamsters = [];
        this.hamsterCost = 50;

    }

    addHamster() {
        if (this.hamsters.length >= this.maxCapacity) {
            return null; // no space
        }

        if (user.getCoinCount() < this.hamsterCost) {
            return null; // not enough coins
        }

        user.removeFromCoins(this.hamsterCost);
        this.hamsterCost = this.hamsterCost * 2;

        let rand = Math.floor(Math.random() * Object.keys(HAMSTER_TYPES).length);
        let randHamster = HAMSTER_TYPES[Object.keys(HAMSTER_TYPES)[rand]];
        while (this.hamsters.includes(randHamster)) {
            rand = Math.floor(Math.random() * Object.keys(HAMSTER_TYPES).length);
            randHamster = HAMSTER_TYPES[Object.keys(HAMSTER_TYPES)[rand]];
        }

        const hamster = createHamster(randHamster);
        this.hamsters.push(hamster);
        return hamster;
    }

    collectRevenue(){
        for (const hamster of this.hamsters){
            const revenue = hamster.getTotalRevenue();
            user.addToCoins(revenue);
        }
        
    }




}

export default Garden;