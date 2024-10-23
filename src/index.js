import "./styles.css";
import { loadHomePage } from "./home.js";

console.log("JavaScript is running!")

document.addEventListener("DOMContentLoaded", () => {
    loadHomePage();
});