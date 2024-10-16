import mainLogoSrc from './images/logo-white-transparent.png';

function loadHomePage() {
    console.log("loadHomePage function is called");
    const contentContainer = document.querySelector("#content");

    const heroWrapper = document.createElement("div");
    heroWrapper.classList.add("section");
    heroWrapper.classList.add("hero");

    const mainLogo = document.createElement("img");
    mainLogo.setAttribute("id", "main-logo");
    mainLogo.setAttribute("src", mainLogoSrc);
    mainLogo.setAttribute("alt", "main-logo");

    heroWrapper.appendChild(mainLogo);
    contentContainer.appendChild(heroWrapper);
};

export { loadHomePage };
console.log("loadHomePage has been exported"); // Add this line for debugging