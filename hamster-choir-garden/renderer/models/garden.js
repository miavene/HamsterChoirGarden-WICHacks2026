
import {HAMSTER_TYPES} from "../data/hamsterData.js";
import user from "./user.js"
const {createHamster} = require('./hamsterFactory')


class Garden{

    constructor(maxCapacity){
        this.maxCapacity = maxCapacity
        this.hamsters = new Set();
        this.hamsterCost = 50;

    }

    addHamster(){

        if (this.hamsters.length >= this.maxCapacity){
            return //can't buy, not enough space
        }

        if (user.getCoinCount() < this.hamsterCost){
            return //can't buy, not enough money
        }

        user.removeFromCoins(this.hamsterCost);
        this.hamsterCost = this.hamsterCost * 2; 

        var rand = Math.floor(Math.random() * Object.keys(HAMSTER_TYPES).length);
        var randHamster = HAMSTER[Object.keys(HAMSTER_TYPES)[rand]];
        while (hamsters.has(randHamster)){
            var rand = Math.floor(Math.random() * Object.keys(HAMSTER_TYPES).length);
            var randHamster = HAMSTER[Object.keys(HAMSTER_TYPES)[rand]];
        }
        createHamster(randHamster);
        this.hamsters.add(randHamster);

    }

    collectRevenue(){
        
    }





}