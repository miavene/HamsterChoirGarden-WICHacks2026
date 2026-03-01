
class Hamster{

   
    constructor(id, name, baseRevenue, song){
        this.id = id;
        this.name = name;
        this.song = song
        this.baseRevenue = baseRevenue;
        this.level = 0;
        this.multiplier = 1;
        this.exp = 0;
        this.busy = false;
        this.petCounter = 0;
        this.levelsByExp = [24, 74, 199, 499, 1999]; //Example: level 0: 0-24 exp. Once it goes above 24 exp (25+ exp), it goes to level 1. 
        this.State = {
        NEW: {id: "NEW", message: "has sprouted in the garden!"},
        NORMAL: {id: "NORMAL", message: "is feeling okay!"},
        FULL: { id: "FULL", message: "is feeling full."},
        AGITATED: {id: "AGITATED", message: "is feeling agitated from being pet TOO much."},
        HAPPY: {id: "HAPPY", message: "is feeling happy!"},
        SLEEPING: {id: "SLEEPING", message: "is sleeping."},
        EATING: {id: "EATING", message: "is eating."},
        DRINKING: {id: "DRINKING", message: "is drinking."},
        BEING_PET: {id: "BEING_PET", message: "is being pet."}
    }
        this.state = State.NEW;

    }


    water(){
        if (this.isBusy()){
            return;
        }
        this.gainExp(15);
        const prevState = this.state;
        this.setState(this.State.DRINKING);
        setTimeout(this.setState, 10000, prevState);
    }


    pet(){
        if (this.state === this.State.AGITATED || this.isBusy()){
            return;
        }
        this.gainExp(15);
        this.setState(this.State.BEING_PET);
        this.petCounter += 1;
        if (this.petCounter >= 5){
            setTimeout(this.setState, 5000, this.State.AGITATED);
        }
        else{
            setTimeout(this.setState, 5000, this.State.HAPPY);
        }
    }

    eat(){
        if (this.isBusy()){
            return;
        }
        this.gainExp(50);
        this.setState(this.State.EATING);
        setTimeout(this.setState, 15000, this.State.FULL);
    }

    sleep(){
        if (this.isBusy()){
            return;
        }
        this.gainExp(5);
        this.setState(this.State.SLEEPING);
        setTimeout(this.setState, 20000, this.State.NORMAL);
    }

    gainExp(amount){
        this.exp += amount;
        //if reach level up threshold, levelUp(){}
        if (this.exp > this.levelsByExp[this.level]){
            this.levelUp();
        }
    }

    levelUp(){
        //if certain level reached, stageUp
        this.level += 1;
    }

    stageUp(){
        //milestone tracker
        this.stage += 1;
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
        if (this.state === this.State.SLEEPING || this.state === this.State.EATING || this.state === this.State.DRINKING || this.state === this.State.BEING_PET){
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


    getTotalRevenue(){
        return this.baseRevenue * this.multiplier;
    }


    playSong(){

    }






}

export default Hamster;