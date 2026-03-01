import Garden from "./garden.js";


class user{

    constructor(){
        this.coinCount = parseInt(localStorage.getItem('coins')) || 0;
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


    addNewGarden(){

        const garden = new Garden(10);
        this.gardens.push(garden);
        return garden;
        
    }


}

export default new user;