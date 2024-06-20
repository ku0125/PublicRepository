export default class Cart {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    getItems() {
      return this.items;
    }
  
    purchaseItems() {
      this.items = [];
    }
  }
  
  const cart = new Cart();