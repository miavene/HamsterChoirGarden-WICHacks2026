import User from "../renderer/models/user.js";
import Garden from "../renderer/models/garden.js";

const newGardenBtn = document.querySelector("#new-garden button");

newGardenBtn.addEventListener("click", () => {
    // Give starting coins if first time
    if (User.getCoinCount() === 0) {
        User.addToCoins(75);
    }

    // Create new empty garden
    const garden = new Garden(10); // max 10 hamsters

    // Add to user's gardens
    User.addNewGarden(garden);

    // Redirect to garden page, passing the index of this garden
    const gardenIndex = Array.from(User.gardens).length - 1;
    window.location.href = `../pages/garden-1/index.html?garden=${gardenIndex}`;
});

// get garden index from query parameter
const params = new URLSearchParams(window.location.search);
const gardenIndex = parseInt()
