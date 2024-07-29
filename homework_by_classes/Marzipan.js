import {Sweet} from './sweet.js';
export class Marzipan extends Sweet {
    constructor(name, weight, sugarContent, quantity, almondContent) {
      super(name, weight, sugarContent, quantity);
      this.almondContent = almondContent;
    }
    getSweetInfo() {
      return `${super.getSweetInfo()}, Almond Content: ${this.almondContent}%`;
    }
  }