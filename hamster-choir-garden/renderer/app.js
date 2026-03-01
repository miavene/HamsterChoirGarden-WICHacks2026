//get new garden button
const newGardenBtn = document.getElementById("new-garden");

newGardenBtn.addEventListener("click", () => {
    //change window
    window.location.href = "../renderer/pages/garden-1/index.html";
});

//get gardens button
const gardensBtn = document.getElementById("gardens-btn");

gardensBtn.addEventListener("click", () => {
    //change windows
    window.location.href = "pages/gardens/index.html";
});

