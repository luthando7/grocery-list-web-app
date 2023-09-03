import Create from "./views/Create.js";
import Home from "./views/Home.js";
import Profile from "./views/Profile.js";
import GroceryService from "../services/GroceryService.js";


const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/create", view: Create },
        { path: "/profile", view: Profile },
    ];

    const possibleMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = possibleMatches.find(possibleMatch => possibleMatch.isMatch)
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();

};

const service = new GroceryService();
service.createItems();

window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", () => {
    document.body, addEventListener("click", e => {
        if (e.target.matches("[data-link")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});