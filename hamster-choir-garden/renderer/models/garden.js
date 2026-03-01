
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
        if (this.hamsters.length >= this.maxCapacity) return null;
        if (user.getCoinCount() < this.hamsterCost) return null;

        let rand = Math.floor(Math.random() * Object.keys(HAMSTER_TYPES).length);
        let randHamsterData = HAMSTER_TYPES[Object.keys(HAMSTER_TYPES)[rand]];

        const existing = this.hamsters.find(h => h.getId() === randHamsterData.id);
        if (existing) {
            user.removeFromCoins(this.hamsterCost); // still costs coins
            this.hamsterCost = Math.floor(this.hamsterCost * 1.1);
            return { hamster: existing, isDuplicate: true };
        }

        user.removeFromCoins(this.hamsterCost);
        this.hamsterCost = this.hamsterCost * 2;
        const hamster = createHamster(randHamsterData);
        this.hamsters.push(hamster);
        return { hamster, isDuplicate: false };
    }

    collectRevenue(){
        for (const hamster of this.hamsters){
            const revenue = hamster.getTotalRevenue();
            user.addToCoins(revenue);
        }
        
    }




}

export default Garden;