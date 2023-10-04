import World from './World.js';

export default class Island {
  constructor(name) {
    this.name = name;
    this.color = this.getRandomColor();
    this.element = this.createElement();
  }

  getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  remove() {
    // JS animations api, fade out the element
    
    // remove the element when the animation ended 
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
