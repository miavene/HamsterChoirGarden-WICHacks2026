
class Hamster{

    levelsByExp = [24, 74, 199, 499, 1999];
    State = {
        NORMAL: "NORMAL",
        FULL: "FULL",
        AGITATED: "AGITATED",
        HAPPY: "HAPPY",
        SLEEPING: "SLEEPING"
    }

    constructor(id, name){
        this.id = id;
        this.name = name;
        level = 0;
        stage = 0;
        multiplier = 1;
        exp = 0;
        stage = seed;

    }


    water(){
        gainExp(15);
    }

    pet(){
        gainExp(15);
    }

    eat(){
        gainExp(50);

    }

    gainExp(amount){
        exp += amount;
        //if reach level up threshold, levelUp(){}
        if (exp > expNeeded[level]){
            levelUp();
        }
    }

    levelUp(){
        //if certain level reached, stageUp
        level += 1;
    }

    stageUp(){
        //milestone tracker
        stage += 1;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getLevel(){
        return this.level;
    }

    getExp(){
        return this.exp;
    }

    getMultiplier(){
        return this.multiplier;
    }



  













}