import {HAMSTER_TYPES} from "./data";

class hamsterFactory{

    createHampster(hamsterData){
        var id = hamsterData.id;
        var name = hamsterData.name;
        var baseRevenue = hamsterData.baseRevenue;

        return new Hamster(id, name, baseRevenue)


    }
}