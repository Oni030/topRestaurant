import "./styles.css";
import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";

console.log("JavaScript is running!")

document.addEventListener("DOMContentLoaded", () => {
    // loadHomePage();
    loadMenuPage();
});