import AbstractView from "./AbstractView.js";
import HomeModel from "../models/HomeModel.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Create");
    }

    async getHtml() {

        document.addEventListener('submit', async function (e) {
            e.preventDefault(); // Prevent the default form submission
    
            // Get the form data
            const form = document.getElementById('item');
            const formData = new FormData(form);

            const foodCategory = formData.get('foodCategory');
            const foodName = formData.get('foodName');
    
            console.log('Food Category:', foodCategory);
            console.log('Food Name:', foodName);
            const homeState = new HomeModel();
            item = {
                category: foodCategory,
                name: foodName,
                checked: false
            }
            homeState.addItem(item)
        });

        return `
            <h1> Hello from Create </h1>
            <div class="form-container">
                <form id="item">
                    <div class="form-group">
                        <label class="form-label" for="foodCategory">Food Category:</label>
                        <input class="form-input" type="text" id="foodCategory" name="foodCategory" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="foodName">Food Name:</label>
                        <input class="form-input" type="text" id="foodName" name="foodName" required>
                    </div>
                    <button class="submit-button" type="submit">Create</button>
                </form>
            </div>
            <a href="/home" class="nav-links" data-link>home</a>
        `;
    }

    // Add an event listener to the form
    
}

