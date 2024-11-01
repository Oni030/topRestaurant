import "./styles.css";
import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadContactPage } from "./contact.js";

console.log("JavaScript is running!")

document.addEventListener("DOMContentLoaded", () => {
    // loadHomePage();
    // loadMenuPage();
    loadContactPage();
});