import { makeElement } from "./functions";

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

    const timesContainer = makeElement("div", "menu-content", "", panel2);
    const timesTitle = makeElement("h3", "", "Opening Hours", timesContainer)
    const timesList = makeElement("div", "times-list", "", timesContainer)
    const monday = makeElement("div", "day", "Monday", timesList);
    const mondayTime = makeElement("div", "time", "closed", timesList);
    const tuesday = makeElement("div", "day", "Tuesday", timesList);
    const tuesdayTime = makeElement("div", "time", "8:00 - 21:00", timesList);
    const wednesday = makeElement("div", "day", "Wednesday", timesList);
    const wednesdayTime = makeElement("div", "time", "8:00 - 21:00", timesList);
    const thursday = makeElement("div", "day", "Thursday", timesList);
    const thursdayTime = makeElement("div", "time", "8:00 - 21:00", timesList);
    const friday = makeElement("div", "day", "Firday", timesList);
    const fridayTime = makeElement("div", "time", "8:00 - 21:00", timesList);
    const saturday = makeElement("div", "day", "Saturday", timesList);
    const saturdayTime = makeElement("div", "time", "8:00 - 21:00", timesList);
    const sunday = makeElement("div", "day", "Sunday", timesList);
    const sundayTime = makeElement("div", "time", "8:00 - 21:00", timesList);

    const contactContainer = makeElement("div", "menu-content");
    const contactTitle = makeElement("div", "", "Reservation");
};

export { loadContactPage };