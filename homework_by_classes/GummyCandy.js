import {Sweet} from './sweet.js';
export class GummyCandy extends Sweet {
    constructor(name, weight, sugarContent, quantity, flavor, texture) {
      super(name, weight, sugarContent, quantity);
      this.flavor = flavor;
      this.texture = texture;
    }
    getSweetInfo() {
      return `${super.getSweetInfo()}, Flavor: ${this.flavor}, Texture: ${this.texture}`;
    }
  }