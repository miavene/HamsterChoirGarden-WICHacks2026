import Garden from "./garden.js";


class user{

    constructor(){
        //TODO: uncomment this so it isn't hard codded

        // this.coinCount = parseInt(localStorage.getItem('coins')) || 0;
        this.coinCount = 50; // always start with 75 coins

        this.gardens = [];
    }

    getCoinCount(){
        return this.coinCount;
    }

    addToCoins(amount){

        this.coinCount += amount;
        localStorage.setItem('coins', this.coinCount);

    }

    removeFromCoins(amount){

        this.coinCount -= amount;
        localStorage.setItem('coins', this.coinCount);


    }

    getFirstGarden(){
        return this.gardens[0];
    }


    addNewGarden(){

        const garden = new Garden(10);
        this.gardens.push(garden);
        return garden;
        
    }


}

export default new user;