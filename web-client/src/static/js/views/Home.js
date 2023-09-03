import HomeModel from "../models/HomeModel.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHtml() {
        const homeState = new HomeModel();
        const items = await homeState.getGroceryItems()

        const itemElements = items.map(item => `
            <div class="list-item">
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <p>${item.category}</p>
                </div>
                <div>
                    <input class="checkbox" type="checkbox" id="${item.name}" name="${item.name}" value="${item.checked}">
                </div>
            </div>
        `).join('');

        return `
            <h1>Grocery items</h1>
            <ul>
                <li>${itemElements}</li>
            </ul>
            <a href="/create" class="nav-links" data-link>create new</a>
        `;
    }
}