/**
 * Represents a base sweet.
 */
class Sweet {
    /**
     * Creates an instance of Sweet.
     * @param {string} name - The name of the sweet.
     * @param {number} weight - The weight of the sweet in grams.
     * @param {number} sugarContent - The sugar content of the sweet in percent.
     * @param {number} quantity - The quantity of the sweet.
     */
    constructor(name, weight, sugarContent, quantity) {
      this.name = name;
      this.weight = weight;
      this.sugarContent = sugarContent;
      this.quantity = quantity;
    }
    /**
     * Returns a string with detailed information about the sweet.
     * @returns {string} - The information about the sweet.
     */
    getSweetInfo() {
      return `${this.name} (Weight: ${this.weight}g, Sugar: ${this.sugarContent}%, Quantity: ${this.quantity})`;
    }
  }
class Candy extends Sweet {
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
class Chocolate extends Sweet {
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
class GummyCandy extends Sweet {
    constructor(name, weight, sugarContent, quantity, flavor, texture) {
      super(name, weight, sugarContent, quantity);
      this.flavor = flavor;
      this.texture = texture;
    }
    getSweetInfo() {
      return `${super.getSweetInfo()}, Flavor: ${this.flavor}, Texture: ${this.texture}`;
    }
  }
class Marzipan extends Sweet {
    constructor(name, weight, sugarContent, quantity, almondContent) {
      super(name, weight, sugarContent, quantity);
      this.almondContent = almondContent;
    }
    getSweetInfo() {
      return `${super.getSweetInfo()}, Almond Content: ${this.almondContent}%`;
    }
  }
/**
 * Represents the New Year's gift containing a collection of sweets.
 */
class Gift {
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
console.log(`New Year's gift composition is:`);
const gummyCandy1 = new GummyCandy("Tropical Gummy Bears", 80, 70, 2,  "Tropical", "Soft");
const gummyCandy2 = new GummyCandy("Sour Worms", 100, 75, 1, "Sour", "Chewy");
const marzipan1 = new Marzipan("Classic Marzipan", 50, 60, 2, 40);
const marzipan2 = new Marzipan("Almond Marzipan", 70, 65, 1, 50);
const chocolate = new Chocolate("Dark Chocolate", 180, 95, 1, 80);
const candy = new Candy("Milky country", 70, 60, 2, "Fruity");
const gift = new Gift("Ivan");
gift.addSweet(gummyCandy1);
gift.addSweet(gummyCandy2);
gift.addSweet(marzipan1);
gift.addSweet(marzipan2);
gift.addSweet(chocolate);
gift.addSweet(candy);
gift.listSweets();
console.log(`........................................................`);
console.log(`Total weight: ${gift.getTotalWeight()}g`);
console.log(`--------------------------------------------------------`);
gift.sortSweetsBy("sugarContent");
console.log("Sorted by sugar content:");
gift.listSweets();
console.log(`--------------------------------------------------------`);
const sweetsInRange = gift.findSweetsInRange("sugarContent", 65, 70);
console.log("Sweets with sugar content between 65% and 70%:");
sweetsInRange.forEach(sweet => {
  console.log(sweet.getSweetInfo());
});