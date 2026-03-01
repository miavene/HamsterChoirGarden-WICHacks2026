import Garden from "./garden.js";


class user{

    constructor(){
        this.coinCount = 0;
        this.gardens = [];
    }

    getCoinCount(){
        return this.coinCount;
    }

    addToCoins(amount){

        this.coinCount += amount;

    }

    removeFromCoins(amount){

        this.coinCount -= amount;

    }


    addNewGarden(){

        const garden = new Garden(10);
        this.gardens.push(garden);
        return garden;
        
    }



    







}

export default new user;