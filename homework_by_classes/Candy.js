import {Sweet} from './sweet.js';
export  class Candy extends Sweet {
    /**
     * @param {string} flavor - The flavor of the candy.
     */
    constructor(name, weight, sugarContent, quantity, flavor) {
      super(name, weight, sugarContent, quantity);
      this.flavor = flavor;
    }
      getSweetInfo() {
      return `${super.getSweetInfo()}, Flavor: ${this.flavor}`;
    }
  }