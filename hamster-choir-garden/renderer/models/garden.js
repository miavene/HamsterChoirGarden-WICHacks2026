
import {HAMSTER_TYPES} from "../data/hamsterData";
const {createHampster} = require('./hamsterFactory')


class Garden{

    constructor(maxCapacity){
        this.maxCapacity = maxCapacity
        this.hamsters = new Set();

    }

    addHamster(){

        var rand = Math.floor(Math.random() * Object.keys(HAMSTER_TYPES).length);
        var randHamster = HAMSTER[Object.keys(HAMSTER_TYPES)[rand]];
        if (!hamsters.has(randHamster)){
            createHampster(randHamster);
            this.hamsters.add(randHamster);
        }


    }



}