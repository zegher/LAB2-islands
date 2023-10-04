// kickstart your world here
import World from "./classes/World.js";
// import Island from "./classes/Island.js";

const world = new World();

const btnAddIsland = document.getElementById("btnAddIsland");
const btnSaveIsland = document.getElementById("btnSave");
const btnLoad = document.getElementById("btnLoad");


btnAddIsland.addEventListener("click", () => {
    console.log("Clicked on add island button");
    world.addIsland();
});

btnSaveIsland.addEventListener("click", () => {
    console.log("Clicked on save island button");
    world.save();
});

btnLoad.addEventListener("click", () => {
    console.log("Clicked on load island button");
    world.load();
});