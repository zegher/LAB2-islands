// kickstart your world here
import World from "./classes/World.js";
// import Island from "./classes/Island.js";

const world = new World();

const btnAddIsland = document.getElementById("btnAddIsland");

btnAddIsland.addEventListener("click", () => {
    console.log("Clicked on add island button");
    world.addIsland();
});