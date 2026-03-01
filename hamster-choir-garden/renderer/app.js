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

//action event listens

// clicking hamster open popup menu
document.getElementById("hamster1").addEventListener("click", () => {
    const hamster = currentGarden.hamsters.find(h => h.getId() === 1);
    if (hamster) openHamsterPopup(hamster);
});

document.getElementById("hamster2").addEventListener("click", () => {
    const hamster = currentGarden.hamsters.find(h => h.getId() === 2);
    if (hamster) openHamsterPopup(hamster);
});
document.getElementById("sleep-btn").addEventListener("click", () => {
    if (!currentHamster) return;
    currentHamster.sleep();
    // mute audio
    const divId = `hamster${currentHamster.getId()}`;
    const audio = document.getElementById(`${divId}Audio`);
    if (audio) audio.muted = true;

});

document.getElementById("feed-btn").addEventListener("click", () => {
    if (!currentHamster) return;
    currentHamster.eat();
});

document.getElementById("drink-btn").addEventListener("click", () => {
    if (!currentHamster) return;
    currentHamster.water();

});

document.getElementById("pet-btn").addEventListener("click", () => {
    if (!currentHamster) return;
    currentHamster.pet();

});

//home button
const homebtn = document.getElementById("home-btn");
homebtn.addEventListener("click", ()=>{
    window.location.href = `../../index.html`;

});

// update plant button to show the next pull
function updatePlantButton() {
    const addBtn = document.getElementById("add-btn");
    addBtn.textContent = `PLANT: ${currentGarden.hamsterCost}🪙`;
}

//add hamsters
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", () => {
    const result = currentGarden.addHamster();

    if (!result) {
        addActivity("Not enough coins or space!");
        updateCoins();
        return;
    }

    const { hamster, isDuplicate } = result;

    if (isDuplicate) {
        // already have this hamster, just add multiplier
        hamster.multiplier += 0.5;
        addActivity(`${hamster.getName()} got a multiplier boost! (x${hamster.multiplier})`);
    } else {
        // new hamster
        const divId = `hamster${hamster.getId()}`;
        const hamsterDiv = document.getElementById(divId);
        if (hamsterDiv) {
            hamsterDiv.classList.add("active");
            const audio = hamsterDiv.querySelector("audio");
            if (audio) { audio.muted = false; audio.play(); }
        }
        addActivity(`${hamster.getName()} ${hamster.returnMessage()}`);
    }

    updateCoins();
    updatePlantButton();
});


function openHamsterPopup(hamster) {
    currentHamster = hamster;

    // clear old listener first
    if (currentHamster.onStateChange) {
        currentHamster.onStateChange = null;
    }

    document.getElementById("popup-hamster-name").textContent = hamster.getName();
    document.getElementById("level").textContent = hamster.getLevel();
    document.getElementById("state").textContent = hamster.getStateName();
    document.getElementById("hamster-popup").classList.remove("hidden");

    // automatically update popup and activity feed when hamster state changes
    currentHamster.onStateChange = (h) => {
        document.getElementById("level").textContent = h.getLevel();
        document.getElementById("state").textContent = h.getStateName();
        addActivity(`${h.getName()} ${h.returnMessage()}`);

        // mute/unmute based on sleep state
        const divId = `hamster${h.getId()}`;
        const audio = document.getElementById(`${divId}Audio`);
        if (audio) {
            audio.muted = h.getStateName() === "SLEEPING";
        }
    };
}

const hamsterPopup = document.getElementById("hamster-popup");
const closePopupBtn = document.getElementById("close-popup");

closePopupBtn.addEventListener("click", () => {
    hamsterPopup.classList.add("hidden");
});

function updateCoins() {
    const coinSpan = document.getElementById("coin-count");
    coinSpan.textContent = User.getCoinCount() + " 🪙"; // assuming you have this function
}

updateCoins();
