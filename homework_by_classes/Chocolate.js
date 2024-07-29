import {Sweet} from './sweet.js';
export  class Chocolate extends Sweet {
    /**
     * @param {number} cocoaPercentage - The cocoa percentage of the chocolate.
     */
    constructor(name, weight, sugarContent, quantity, cocoaPercentage) {
      super(name, weight, sugarContent, quantity);
      this.cocoaPercentage = cocoaPercentage;
    }
    getSweetInfo() {
      return `${super.getSweetInfo()}, Cocoa: ${this.cocoaPercentage}%`;
    }
  }