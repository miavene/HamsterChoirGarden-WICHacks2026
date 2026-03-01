import User from "../renderer/models/user.js";
import Garden from "../renderer/models/garden.js";

//menu page

const newGardenDiv = document.getElementById("new-garden");
if (newGardenDiv) {
    const newGardenBtn = newGardenDiv.querySelector("button");
    newGardenBtn.addEventListener("click", () => {
        if (User.getCoinCount() === 0) {
            User.addToCoins(75);
        }
        const garden = new Garden(10);
        User.addNewGarden(garden);
        window.location.href = `./pages/garden-1/index.html`;
    });
}
// example: always take the last garden added
const gardensArray = User.gardens;
const currentGarden = gardensArray[gardensArray.length - 1];

//gardens page

//home button
const homebtn = document.getElementById("home-btn");
homebtn.addEventListener("click", ()=>{
    window.location.href = `../../index.html`;

});

//add hamsters
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", ()=> {
    currentGarden.addHamster();
});


function openHamsterPopup(hamster) {
    document.getElementById("popup-hamster-name").textContent = hamster.getName();
    document.getElementById("level").textContent = hamster.getLevel();
    document.getElementById("state").textContent = hamster.returnMessage();
    document.getElementById("hamster-popup").classList.remove("hidden");
}

const hamsterPopup = document.getElementById("hamster-popup");
const closePopupBtn = document.getElementById("close-popup");

closePopupBtn.addEventListener("click", () => {
    hamsterPopup.classList.add("hidden");
});


