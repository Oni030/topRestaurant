import { makeElement, makeImage } from "./functions";
import phoneI from "./svgs/phone.svg"
import mailI from "./svgs/mail.svg"
import instaI from "./svgs/instagram.svg"
import faceI from "./svgs/facebook.svg"

function loadContactPage() {
    console.log("loadBookingPage function is called");
    const contentContainer = document.querySelector("#content"); 

    // Outside container
    const contactWrapper = makeElement("div", "menu", "", contentContainer);
    
    // Panel 1
    const panel1 = makeElement("div", "menu-title-panel", "", contactWrapper);

    // Title Texts
    const titleText = makeElement("h2", "", "Contact", panel1);
    
    // Panel 2
    const panel2 = makeElement("div", "menu-panel", "", contactWrapper);
    panel2.classList.add("contact-panel");

    // Opening Hours
    const timesContainer = makeElement("div", "menu-content", "", panel2);
    const timesTitle = makeElement("h3", "", "Opening Hours", timesContainer)
    const timesList = makeElement("div", "times-list", "", timesContainer)

    const monday = makeElement("div", "dayTime", "Monday", timesList);
    const mondayTime = makeElement("div", "dayTime", "closed", timesList);

    const tuesday = makeElement("div", "dayTime", "Tuesday", timesList);
    const tuesdayTime = makeElement("div", "dayTime", "8:00 - 21:00", timesList);

    const wednesday = makeElement("div", "dayTime", "Wednesday", timesList);
    const wednesdayTime = makeElement("div", "dayTime", "8:00 - 21:00", timesList);

    const thursday = makeElement("div", "dayTime", "Thursday", timesList);
    const thursdayTime = makeElement("div", "dayTime", "8:00 - 21:00", timesList);

    const friday = makeElement("div", "dayTime", "Firday", timesList);
    const fridayTime = makeElement("div", "dayTime", "8:00 - 21:00", timesList);

    const saturday = makeElement("div", "dayTime", "Saturday", timesList);
    const saturdayTime = makeElement("div", "dayTime", "8:00 - 21:00", timesList);

    const sunday = makeElement("div", "dayTime", "Sunday", timesList);
    const sundayTime = makeElement("div", "dayTime", "8:00 - 21:00", timesList);

    // Contact Info
    const reserveContainer = makeElement("div", "menu-content", "", panel2);
    const reserveTitle = makeElement("h3", "", "Reservation", reserveContainer);
    const reserveList = makeElement("div", "contact-list", "", reserveContainer);

    const phone = makeElement("div", "contact-item", "", reserveList);
    const phoneIcon = makeImage(phone, {class: "icon"}, {src: phoneI});
    const phoneNumber = makeElement("div", "dayTime", "(555) 019-3827", phone);
    
    const email = makeElement("div", "contact-item", "", reserveList);
    const mailIcon = makeImage(email, {class: "icon"}, {src: mailI});
    const mailAddress = makeElement("div", "dayTime", "info@red-dragon-berlin.de", email);
    
    // Follow Contact
    const followContainer = makeElement("div", "menu-content", "", panel2);
    const followTitle = makeElement("h3", "", "Follow us on social media!", followContainer);
    const followList = makeElement("div", "contact-list", "", followContainer);

    const insta = makeElement("div", "contact-item", "", followList);
    const instaIcon = makeImage(insta, {class: "icon"}, {src: instaI});
    const instHandle = makeElement("div", "dayTime", "@red_dragon_030", insta);
    
    const face = makeElement("div", "contact-item", "", followList);
    const faceIcon = makeImage(face, {class: "icon"}, {src: faceI});
    const faceName = makeElement("div", "dayTime", "Red Dragon Berlin", face);
};

export { loadContactPage };