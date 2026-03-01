
import {HAMSTER_TYPES} from "./data";

class Garden{



    constructor(maxCapacity){
        this.maxCapacity = maxCapacity
        this.hamsters = new Set();

    }

    getHamster(){

        var rand = Math.floor(Math.random() * Object.keys(HAMSTER_TYPES).length);
        var randHamster = HAMSTER[Object.keys(HAMSTER_TYPES)[rand]];
        if (!hamsters.has(randHamster)){
            //create the hamster with the hamster dataaaaa
            

        }


    }



}