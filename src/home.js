import { makeElement } from './functions';
import smallLogoSrc from './images/logo-white-transparent.png';
import dish1Src from './images/sichuan_dish2.jpg'
import dish2Src from './images/sichuan_dish4.jpg'

function loadHomePage() {
    console.log("loadHomePage function is called");
    const contentContainer = document.querySelector("#content");   
    
    // Outside container
    const homeWrapper = makeElement("div", "hero", "", contentContainer);
    
    // Spacer 1
    const spacer1 = makeElement("div", "spacer1", "", homeWrapper);

    // Panel 1
    const panel1 = makeElement("div", "panel", "", homeWrapper);

    // Logo Top
    const smallLogo = makeElement("img", "", "", panel1);
    smallLogo.setAttribute("id", "small-logo");
    smallLogo.setAttribute("src", smallLogoSrc);
    smallLogo.setAttribute("alt", "small-logo");
    
    // Title Text
    const titleText = makeElement("h2", "", "Welcome to the Red Dragon", panel1);
    
    // Subtitle Text
    const subtitleText = makeElement("h3", "", "home of authentic sichuan comfort food", panel1);
    
    // Spacer 2
    const spacer2 = makeElement("div", "spacer2", "", homeWrapper);
    
    // Panel 2
    const panel2 = makeElement("div", "panel", "", homeWrapper);

    const textBox1 = makeElement("div", "text-box", "", panel2);
    
    const text1 = makeElement("p", "text", "At Red Dragon, we bring the bold and fiery flavors of Sichuan cuisine right to the heart of the city. Family-run and born from our deep passion for food, our restaurant is more than just a place to eat—it's a celebration of togetherness. We believe that the best meals are shared, and nothing brings people together like the rich, authentic taste of Sichuan comfort food.", textBox1);
    
    const imgBox1 = makeElement("div", "", "", panel2);

    const img1 = makeElement("img", "", "", imgBox1);
    img1.setAttribute("id", "Dish1");
    img1.setAttribute("src", dish1Src);
    
    // Panel 3
    const panel3 = makeElement("div", "panel", "", homeWrapper);
    
    const textBox2 = makeElement("div", "text-box", "", panel3);
    
    const text2 = makeElement("p", "text", "Indulge in classics like Kung Pao Chicken, Mapo Tofu, Dan Dan Noodles, and the signature Sichuan Hot Pot, all prepared with the freshest ingredients and time-honored recipes passed down through generations. Whether you're craving the numbing heat of Sichuan Peppercorns or the savory warmth of our family dishes, Red Dragon is where great food meets great company.", textBox2);
    
    const imgBox2 = makeElement("div", "", "", panel3)

    const img2 = document.createElement("img");
    img2.setAttribute("id", "Dish2");
    img2.setAttribute("src", dish2Src);
    imgBox2.appendChild(img2);
};

export { loadHomePage };