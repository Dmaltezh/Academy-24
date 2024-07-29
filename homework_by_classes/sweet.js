/**
* Represents a base sweet.
*/
export class Sweet {
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