
class Hamster{

    levelsByExp = [24, 74, 199, 499, 1999]; //Example: level 0: 0-24 exp. Once it goes above 24 exp (25+ exp), it goes to level 1. 
    State = {
        NEW: {id: "NEW", message: "has joined the garden!"},
        NORMAL: {id: "NORMAL", message: "is feeling okay!"},
        FULL: { id: "FULL", message: "is feeling full."},
        AGITATED: {id: "AGITATED", message: "is feeling agitated from being pet TOO much."},
        HAPPY: {id: "HAPPY", message: "is feeling happy!"},
        SLEEPING: {id: "SLEEPING", message: "is sleeping."},
        EATING: {id: "EATING", message: "is eating."},
        DRINKING: {id: "DRINKING", message: "is drinking."},
        BEING_PET: {id: "BEING_PET", message: "is being pet."}
    }

    constructor(id, name, baseRevenue, song){
        this.id = id;
        this.name = name;
        this.song = song
        this.baseRevenue = baseRevenue;
        this.level = 0;
        this.stage = 0;
        this.multiplier = 1;
        this.exp = 0;
        this.stage = seed;
        this.state = State.NORMAL;
        this.busy = false;
        this.petCounter = 0;
    }


    water(){
        if (this.isBusy()){
            return;
        }
        gainExp(15);
        prevState = state;
        setState(DRINKING);
        setTimeout(setState, 10000, prevState);
    }


    pet(){
        if (state == AGITATED || this.isBusy()){
            return;
        }
        gainExp(15);
        setState(BEING_PET);
        petCounter += 1;
        if (petCounter >= 5){
            setTimeout(setState, 5000, AGITATED);
        }
        else{
            setTimeout(setState, 5000, HAPPY);
        }
    }

    eat(){
        if (this.isBusy()){
            return;
        }
        gainExp(50);
        setState(EATING);
        setTimeout(this.setState, 15000, FULL);
    }

    sleep(){
        if (this.isBusy()){
            return;
        }
        gainExp(5);
        setState(SLEEPING);
        setTimeout(this.setState, 20000, NORMAL);
    }

    gainExp(amount){
        exp += amount;
        //if reach level up threshold, levelUp(){}
        if (exp > this.levelsByExp[level]){
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

    getBaseRevenue(){
        return this.baseRevenue;
    }

    setState(state){
        this.state = state;
    }


    //checks if hamster is currently busy
    isBusy(){
        if (state == SLEEPING || state == EATING || state == DRINKING || state == BEING_PET){
            this.busy = true;
        }
        else{
            this.busy = false;
        }

        return this.busy;

    }


    //Returns state message
    returnMessage(){
        return state.message;
    }




}