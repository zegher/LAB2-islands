import World from './World.js';

export default class Island {
  constructor(name) {
    this.name = name;
    this.color = this.getRandomColor();
    // this.element = this.createElement();
  }

  getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  remove() {
    //remove clicked island from array
    const index = world.islands.indexOf(this);
    if (index > -1) {
      world.islands.splice(index, 1);
    }
    //remove clicked island from DOM
    this.element.remove();
  }

  getRandomName() {
    // array with 10 random island names
    const names = [
      "Palmtree beach",
      "Sandy beach",
      "Tropical beach",
      "Palm beach",
      "Sunny beach",
      "Paradise beach",
      "Sunny island",
      "Tropical island",
      "Palm island",
      "Paradise island"
    ];

    // return a random name from the array
    return names[Math.floor(Math.random() * names.length)];
    
  }
}
