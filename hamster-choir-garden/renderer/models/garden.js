
import {HAMSTER_TYPES} from "../data/hamsterData";
import user from "./user.js"
const {createHamster} = require('./hamsterFactory')


class Garden{

    constructor(maxCapacity){
        this.maxCapacity = maxCapacity
        this.hamsters = new Set();

    }

    addHamster(){

        if (this.hamsters.length >= this.maxCapacity){
            return
        }

        var rand = Math.floor(Math.random() * Object.keys(HAMSTER_TYPES).length);
        var randHamster = HAMSTER[Object.keys(HAMSTER_TYPES)[rand]];
        while (hamsters.has(randHamster)){
            var rand = Math.floor(Math.random() * Object.keys(HAMSTER_TYPES).length);
            var randHamster = HAMSTER[Object.keys(HAMSTER_TYPES)[rand]];
        }
        createHamster(randHamster);
        this.hamsters.add(randHamster);

    }

    collectRevenue(){}





}