import {Sweet} from './sweet.js';
import {Candy} from './Candy.js';
import {Chocolate} from './Chocolate.js';
import {GummyCandy} from './GummyCandy.js';
import {Marzipan} from './Marzipan.js';
export  class Gift {
    constructor(recipient) {
      this.recipient = recipient;
      this.sweets = [];
    }
    addSweet(sweet) {
      if (sweet instanceof Sweet) {
        this.sweets.push(sweet);
      } else {
        console.error("Only instances of Sweet can be added.");
      }
    }
    getTotalWeight() {
      return this.sweets.reduce((total, sweet) => total + sweet.weight*sweet.quantity, 0);
    }
    sortSweetsBy(param) {
      this.sweets.sort((a, b) => a[param] - b[param]);
    }
    findSweetsInRange(param, min, max) {
      return this.sweets.filter(sweet => sweet[param] >= min && sweet[param] <= max);
    }
    /**
     * Lists all sweets in the gift.
     */
    listSweets() {
      if (this.sweets.length === 0) {
        console.log("No sweets in the gift.");
      } else {
        this.sweets.forEach(sweet => {
          console.log(sweet.getSweetInfo());
        });
      }
    }
  }