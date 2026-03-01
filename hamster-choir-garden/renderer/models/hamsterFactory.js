import Hamster from "./hamster";

export default function createHamster(hamsterData){
        const id = hamsterData.id;
        const name = hamsterData.name;
        const baseRevenue = hamsterData.baseRevenue;
        const song = hamsterData.song;

        return new Hamster(id, name, baseRevenue, song);
    }


