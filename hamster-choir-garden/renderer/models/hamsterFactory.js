import {HAMSTER_TYPES} from "../data/hamsterData";

class hamsterFactory{

    createHamster(hamsterData){
        var id = hamsterData.id;
        var name = hamsterData.name;
        var baseRevenue = hamsterData.baseRevenue;
        var song = hamsterData.song

        return new Hamster(id, name, baseRevenue, song)


    }
}