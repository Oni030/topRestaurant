import smallLogoSrc from './images/logo-white-transparent.png';
import dish1Src from './images/sichuan_dish2.jpg'
import dish2Src from './images/sichuan_dish4.jpg'

function loadAboutPage() {
    console.log("loadAboutPage function is called");
    const contentContainer = document.querySelector("#content");   
    
    // Outside container
    const aboutWrapper = document.createElement("div");
    aboutWrapper.classList.add("section");
    aboutWrapper.classList.add("welcome");
    
    // Spacer
    const spacer = document.createElement("div");
    spacer.classList.add("spacer");

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
    

    // Textbox
    const textBox3 = document.createElement("div");
    textBox3.classList.add("text");
    textBox3.textContent = "Join us, and experience the warmth and spice of Sichuan cuisine - <br> just like home..."


    // Appending elements
    aboutWrapper.appendChild(spacer);
    aboutWrapper.appendChild(panel1);
    aboutWrapper.appendChild(spacer);
    aboutWrapper.appendChild(panel2);
    aboutWrapper.appendChild(panel3);
    aboutWrapper.appendChild(textBox3);
    contentContainer.appendChild(aboutWrapper);
};

export { loadAboutPage };