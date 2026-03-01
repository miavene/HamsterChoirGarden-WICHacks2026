import User from "../renderer/models/user.js";
import Garden from "../renderer/models/garden.js";
//menu page

const newGardenDiv = document.getElementById("new-garden");
if (newGardenDiv) {
    const newGardenBtn = newGardenDiv.querySelector("button");
    newGardenBtn.addEventListener("click", () => {
        if (User.getCoinCount() === 0) {
            User.addToCoins(75);
            updateCoins();
        }
        const garden = new Garden(10);
        User.addNewGarden(garden);
        //go to garden page
        window.location.href = `./pages/garden-1/index.html`;
    });
}

//gardens page

let currentGarden = null;

const gardenSection = document.getElementById("garden");
if (gardenSection) {
    currentGarden = User.addNewGarden();
}

//keep track of current hamster
let currentHamster = null;

//add activity to the log
function addActivity(text) {
    const log = document.getElementById("activity-log");
    const entry = document.createElement("div");
    entry.textContent = text;
    log.appendChild(entry);
    log.scrollTop = log.scrollHeight; // scroll to bottom
}

// clicking hamster open popup menu
document.getElementById("hamster1").addEventListener("click", () => {
    document.getElementById("hamster-popup").classList.remove("hidden");
});

// clicking close on popup close popup menu
document.getElementById("close-popup").addEventListener("click", () => {
    document.getElementById("hamster-popup").classList.add("hidden");
});
//action event listens

document.getElementById("sleep-btn").addEventListener("click", () => {
    if (!currentHamster) return;
    currentHamster.sleep();
    addActivity(`${currentHamster.getName()} ${currentHamster.returnMessage()}`);
});

document.getElementById("feed-btn").addEventListener("click", () => {
    if (!currentHamster) return;
    currentHamster.eat();
    addActivity(`${currentHamster.getName()} ${currentHamster.returnMessage()}`);

});

document.getElementById("drink-btn").addEventListener("click", () => {
    if (!currentHamster) return;
    currentHamster.water();
    addActivity(`${currentHamster.getName()} ${currentHamster.returnMessage()}`);

});

document.getElementById("pet-btn").addEventListener("click", () => {
    if (!currentHamster) return;
    currentHamster.pet();
    addActivity(`${currentHamster.getName()} ${currentHamster.returnMessage()}`);

});

//home button
const homebtn = document.getElementById("home-btn");
homebtn.addEventListener("click", ()=>{
    window.location.href = `../../index.html`;

});

//add hamsters
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", ()=> {
    const hamster = currentGarden.addHamster();
    if (hamster) {
        //TODO: make this so the random hamster gets shown after we add all hamsters
        const h1= document.getElementById("hamster1");
        h1.classList.add("active");
        const hamster1Audio = document.getElementById("hamster1Audio");
        hamster1Audio.muted = false;
        hamster1Audio.play();
    }

    if (hamster) {
        addActivity(`${hamster.getName()} ${hamster.returnMessage()}`);
    } else {
        addActivity("Not enough coins or space!");
    }
    updateCoins();
});


function openHamsterPopup(hamster) {
    currentHamster = hamster;

    document.getElementById("popup-hamster-name").textContent = hamster.getName();
    document.getElementById("level").textContent = hamster.getLevel();
    document.getElementById("state").textContent = hamster.returnMessage();
    document.getElementById("hamster-popup").classList.remove("hidden");

    // automatically update popup and activity feed when hamster state changes
    currentHamster.onStateChange = (h) => {
        //update popup
        document.getElementById("level").textContent = h.getLevel();
        document.getElementById("state").textContent = h.returnMessage();

        // Add to activity feed
        addActivity(`${h.getName()} ${h.returnMessage()}`);
    };
}

const hamsterPopup = document.getElementById("hamster-popup");
const closePopupBtn = document.getElementById("close-popup");

closePopupBtn.addEventListener("click", () => {
    hamsterPopup.classList.add("hidden");
});

function updateCoins() {
    const coinSpan = document.getElementById("coin-count");
    coinSpan.textContent = User.getCoinCount(); // assuming you have this function
}

updateCoins();
