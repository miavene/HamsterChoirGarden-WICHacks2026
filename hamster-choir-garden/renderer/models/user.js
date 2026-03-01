
class user{

    constructor(){
        this.coinCount = 0;
        this.gardens = new Set();
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

        garden = new Garden(10);
        this.gardens.add(garden);
        return garden;
        
    }



    







}

export default new user;