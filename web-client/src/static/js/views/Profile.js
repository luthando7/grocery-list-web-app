import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1> Hello from Profile </h1>
            <a href="/home" class="nav-links" data-link>Home</a>
        `;
    }
}