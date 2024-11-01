function loadReservationPage() {
    console.log("loadBookingPage function is called");
    const contentContainer = document.querySelector("#content"); 


    // Outside container
    const bookingWrapper = document.createElement("div");
    bookingWrapper.classList.add("menu");


    // Title Texts
    const titleText = document.createElement("h2");
    titleText.textContent = "Reservation"


    // Panel 1
    const panel1 = document.createElement("div");
    panel1.classList.add("menu-title-panel");

    panel1.appendChild(titleText);


    // Panel 2
    const panel2 = document.createElement("div");
    panel2.classList.add("menu-panel");
    
    const bookingContent = document.createElement("div");
    bookingContent.classList.add("menu-content");

    
    

    // Appending elements
    bookingWrapper.appendChild(panel1);
    bookingWrapper.appendChild(panel2);
    contentContainer.appendChild(bookingWrapper);
};

export { loadReservationPage };