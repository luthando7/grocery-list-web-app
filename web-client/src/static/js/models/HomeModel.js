import GroceryService from "../services/GroceryService.js";

export default class {
    
    async getGroceryItems() {
        const groceryService = new GroceryService();
        groceryService.createItems()
        const items = await groceryService.getItems();
        return items;
    }

    async addItem(item) {
        const groceryService = new GroceryService();
        groceryService.addItem(item)
    }
}