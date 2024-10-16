import "./styles.css";
import { loadHomePage } from "./home.js";
import { loadAboutPage } from "./about.js";

console.log("JavaScript is running!")

document.addEventListener("DOMContentLoaded", () => {
    // loadHomePage();
    loadAboutPage();
});