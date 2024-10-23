import smallLogoSrc from './images/logo-white-transparent.png';
import dish1Src from './images/sichuan_dish2.jpg'
import dish2Src from './images/sichuan_dish4.jpg'

function loadHomePage() {
    console.log("loadAboutPage function is called");
    const contentContainer = document.querySelector("#content");   
    

    // Outside container
    const homeWrapper = document.createElement("div");
    homeWrapper.classList.add("section");
    homeWrapper.classList.add("welcome");
    homeWrapper.classList.add("hero");
    

    // Spacer
    const spacer1 = document.createElement("div");
    const spacer2 = document.createElement("div");
    spacer1.classList.add("spacer1");
    spacer2.classList.add("spacer2");

    // Panel 1
    const panel1 = document.createElement("div");
    panel1.classList.add("panel");


    // Logo Top
    const smallLogo = document.createElement("img");
    smallLogo.setAttribute("id", "small-logo");
    smallLogo.setAttribute("src", smallLogoSrc);
    smallLogo.setAttribute("alt", "small-logo");
    panel1.appendChild(smallLogo);
    
    
    // Title Texts
    const titleText = document.createElement("h2");
    titleText.textContent = "Welcome to the Red Dragon"
    
    const subtitleText = document.createElement("h3");
    subtitleText.textContent = "home of authentic sichuan comfort food"
    
    panel1.appendChild(titleText);
    panel1.appendChild(subtitleText);


    // Panel 2
    const panel2 = document.createElement("div");
    panel2.classList.add("panel");

    const textBox1 = document.createElement("div");
    textBox1.classList.add("text-box");
    
    const text1 = document.createElement("p")
    text1.classList.add("text");
    text1.textContent = "At Red Dragon, we bring the bold and fiery flavors of Sichuan cuisine right to the heart of the city. Family-run and born from our deep passion for food, our restaurant is more than just a place to eat—it's a celebration of togetherness. We believe that the best meals are shared, and nothing brings people together like the rich, authentic taste of Sichuan comfort food."
    textBox1.appendChild(text1);
    
    const imgBox1 = document.createElement("div");
    const img1 = document.createElement("img");
    img1.setAttribute("id", "Dish1");
    img1.setAttribute("src", dish1Src);
    imgBox1.appendChild(img1);
    
    panel2.appendChild(textBox1);
    panel2.appendChild(imgBox1);
    
    
    // Panel 3
    const panel3 = document.createElement("div");
    panel3.classList.add("panel");
    
    const textBox2 = document.createElement("div");
    textBox2.classList.add("text-box");
    
    const text2 = document.createElement("p");
    text2.classList.add("text");
    text2.textContent = "Indulge in classics like Kung Pao Chicken, Mapo Tofu, Dan Dan Noodles, and the signature Sichuan Hot Pot, all prepared with the freshest ingredients and time-honored recipes passed down through generations. Whether you're craving the numbing heat of Sichuan Peppercorns or the savory warmth of our family dishes, Red Dragon is where great food meets great company."
    textBox2.appendChild(text2);
    
    const imgBox2 = document.createElement("div");
    const img2 = document.createElement("img");
    img2.setAttribute("id", "Dish2");
    img2.setAttribute("src", dish2Src);
    imgBox2.appendChild(img2);
    
    panel3.appendChild(imgBox2);
    panel3.appendChild(textBox2);
    

    // Appending elements
    homeWrapper.appendChild(spacer1);
    homeWrapper.appendChild(panel1);
    homeWrapper.appendChild(spacer2);
    homeWrapper.appendChild(panel2);
    homeWrapper.appendChild(panel3);
    contentContainer.appendChild(homeWrapper);
};

export { loadHomePage };