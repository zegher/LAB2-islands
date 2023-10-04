import Island from "./Island.js";
export default class World {
  constructor() {
    this.islands = []; // a good place to keep track of your islands
    this.hookEvents(); // let's kick things of by hooking up events
  }

  hookEvents() {
    // hook events like clicking buttons to a specific function
    
      // this.addIsland();
  }

  save() {
    // convert islands array -> json string
    const islandJSON = JSON.stringify(this.islands.map(islandElement => 
      ({
        name: islandElement.innerHTML,
        color: islandElement.style.backgroundColor,
        transform: islandElement.style.transform
      })
    ));
      localStorage.setItem("islandJSON", islandJSON);
  }

  load() {
    //console log from localstorage
    console.log(localStorage.getItem("islandJSON"));
    
    // load json from localstorage
    const islandJSON = localStorage.getItem("islandJSON");
    // convert json string -> islands array
    const islandData = JSON.parse(islandJSON);
    // loop over the islands array and add them to the DOM
    islandData.forEach(island => {
      const islandElement = document.createElement("div");
      islandElement.classList.add("island");
      islandElement.innerText = island.name;
      islandElement.style.backgroundColor = island.color;
      islandElement.style.transform = island.transform;
      document.body.appendChild(islandElement);
      this.islands.push(islandElement);
    });
    

  }

  getCoordinates() {
    // return coordinates within the screen at random, feel free to change it up!
    let randomSign = Math.random() < 0.5 ? -1 : 1;
    return {
      x: ((Math.random() * window.innerWidth) / 2) * randomSign,
      y: ((Math.random() * window.innerHeight) / 2) * randomSign
    };
  }

  addIsland() {
    // add the islands to the DOM
    // add the islands to the array this.islands
    const islandElement = document.createElement("div");
    islandElement.classList.add("island");

    const coordinates = this.getCoordinates();
    islandElement.style.transform = `translate(${coordinates.x}px, ${coordinates.y}px)`;

    //give the islands some random colors 
    const island = new Island();
    islandElement.style.backgroundColor = island.getRandomColor();
    islandElement.innerHTML = island.getRandomName();

    document.body.appendChild(islandElement);
    this.islands.push(islandElement);
  }

  moveIsland(island) {
    // this might be a good point to animate the islands with JS Animations API
  }
}
