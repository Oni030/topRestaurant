import "./styles.css";
import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadContactPage } from "./contact.js";

console.log("JavaScript is running!")

document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.getElementById("home-button");
    const menuButton = document.getElementById("menu-button");
    const contactButton = document.getElementById("contact-button");
    const contentContainer = document.querySelector("#content");
    
    loadHomePage();

    function clear() {
        while(contentContainer.firstChild) {
            contentContainer.removeChild(contentContainer.firstChild);
        };
    };

    homeButton.addEventListener("click", () => {
        clear();
        loadHomePage();
    });
    menuButton.addEventListener("click", () => {
        clear();
        loadMenuPage();
    });
    contactButton.addEventListener("click", () => {
        clear();
        loadContactPage();
    });
});