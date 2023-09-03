
export default class {
    constructor() {
        this.items = [];
        this.delay = ms => new Promise(res => setTimeout(res, ms));
    }
    async getItems() {
        console.log('Sleeping for 3 seconds...');
        await this.delay(3000)
        return this.items;
    }

    async addItem(item) {
        console.log('Adding item: ', item);
        this.items.push(item)
    }

    createItems() {
        this.items = [
            { category: 'meat', name: 'beef', checked: false },
            { category: 'meat', name: 'chicken', checked: true },
            { category: 'meat', name: 'pork', checked: false },
            { category: 'dairy', name: 'milk', checked: false },
            { category: 'dairy', name: 'cheese', checked: true },
            { category: 'dairy', name: 'yogurt', checked: true },
            { category: 'starch', name: 'potato', checked: false },
            { category: 'starch', name: 'rice', checked: false },
            { category: 'starch', name: 'pasta', checked: false },
            { category: 'carbs', name: 'bread', checked: false },
            { category: 'carbs', name: 'cereal', checked: true },
            { category: 'fruits', name: 'apple', checked: true },
            { category: 'fruits', name: 'banana', checked: true },
            { category: 'fruits', name: 'orange', checked: true },
            { category: 'fruits', name: 'grapes', checked: false },
            { category: 'vegetables', name: 'carrot', checked: false },
            { category: 'vegetables', name: 'broccoli', checked: false },
            { category: 'vegetables', name: 'spinach', checked: false },
            { category: 'snacks', name: 'chips', checked: false },
            { category: 'snacks', name: 'pretzels', checked: false },
            { category: 'snacks', name: 'nuts', checked: false },
            { category: 'beverages', name: 'water', checked: false },
            { category: 'beverages', name: 'juice', checked: false },
            { category: 'beverages', name: 'soda', checked: false },
          ];
    }
}