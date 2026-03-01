
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

        
    }



    







}

export default new user;