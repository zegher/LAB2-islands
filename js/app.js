// kickstart your world here
import World from "./classes/World.js";
import Island from "./classes/Island.js";

const world = new World();

const btnAddIsland = document.getElementById("btnAddIsland");
const btnSaveIsland = document.getElementById("btnSave");
const btnLoad = document.getElementById("btnLoad");

const btnRemoveIsland = document.getElementById("btnRemoveIsland");

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

// //after clicked on an island, remove it
// btnRemoveIsland.addEventListener("click", () => {
//     console.log("Clicked on remove island button");
//     // world.islands.forEach(island => {
//     //     island.element.addEventListener("click", () => {
//     //         island.remove();
//     //     });
//     // });
// });