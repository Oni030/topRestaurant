function loadMenuPage() {
    console.log("loadMenuPage function is called");
    const contentContainer = document.querySelector("#content"); 

    // Outside container
    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("menu");


    // Panel 1
    const panel1 = document.createElement("div");
    panel1.classList.add("menu-title-panel");
    

    // Title Texts
    const titleText = document.createElement("h2");
    titleText.textContent = "Menu"
    
    panel1.appendChild(titleText);


    // Panel 2
    const panel2 = document.createElement("div");
    panel2.classList.add("menu-panel");

    // -Menu Page 1
    const menuContent1 = document.createElement("div");
    menuContent1.classList.add("menu-content");

    // --- Starters
    const starterWrapper = document.createElement("div");
    starterWrapper.classList.add("menu-wrapper");

    const starterTitle = document.createElement("div");
    starterTitle.classList.add("menu-title");
    starterTitle.textContent = "Starters";

    const starterGrid = document.createElement("div");
    starterGrid.classList.add("item-wrapper");

    const startItem1 = document.createElement("div");
    startItem1.classList.add("item")
    startItem1.textContent = "Pickled Vegetables"
    const startItem1Des = document.createElement("div");
    startItem1Des.textContent = "Various lacto-fermented vegetables with a spicy and sweet flavour"
    const startItem1Price = document.createElement("div");
    startItem1Price.classList.add("item")
    startItem1Price.textContent = "5"

    const startItem2 = document.createElement("div");
    startItem2.classList.add("item")
    startItem2.textContent = "Cold Noodles"
    const startItem2Des = document.createElement("div");
    startItem2Des.textContent = "Wheat Noodles, Cucumber, Scallion, Sesame Sauce, Vinegar"
    const startItem2Price = document.createElement("div");
    startItem2Price.classList.add("item")
    startItem2Price.textContent = "6"
    
    const startItem3 = document.createElement("div");
    startItem3.classList.add("item")
    startItem3.textContent = "Zhong Dumplings"
    const startItem3Des = document.createElement("div");
    startItem3Des.textContent = "Boiled Pork Dumplings, Minced Garlic, Dumpling Sauce, Chili Crisp"
    const startItem3Price = document.createElement("div");
    startItem3Price.classList.add("item")
    startItem3Price.textContent = "7"

    starterWrapper.appendChild(starterTitle);
    starterWrapper.appendChild(starterGrid);
    starterGrid.appendChild(startItem1);
    startItem1.appendChild(startItem1Des);
    starterGrid.appendChild(startItem1Price);
    starterGrid.appendChild(startItem2);
    startItem2.appendChild(startItem2Des);
    starterGrid.appendChild(startItem2Price);
    starterGrid.appendChild(startItem3);
    startItem3.appendChild(startItem3Des);
    starterGrid.appendChild(startItem3Price);
    
    // --- Soups
    const soupsWrapper = document.createElement("div");
    soupsWrapper.classList.add("menu-wrapper");

    const soupsTitle = document.createElement("div");
    soupsTitle.classList.add("menu-title");
    soupsTitle.textContent = "Soups";

    const soupsGrid = document.createElement("div");
    soupsGrid.classList.add("item-wrapper");
    
    const soupItem1 = document.createElement("div");
    soupItem1.classList.add("item")
    soupItem1.textContent = "Hot & Sour Soup"
    const soupItem1Des = document.createElement("div");
    soupItem1Des.classList.add("description");
    soupItem1Des.textContent = "Veggie Stock, Tofu, Mushroom, Carrot, Bamboo, White Pepper, Vinegar"
    const soupItem1Price = document.createElement("div");
    soupItem1Price.classList.add("item")
    soupItem1Price.textContent = "9"

    const soupItem2 = document.createElement("div");
    soupItem2.classList.add("item")
    soupItem2.textContent = "Chongqing Noodle Soup"
    const soupItem2Des = document.createElement("div");
    soupItem2Des.classList.add("description");
    soupItem2Des.textContent = "Beef broth, Thin Wheat Noodes, Braised Beef, Peanuts, Pickled Mustard Greens, Bak Choi, Chili Crisp"
    const soupItem2Price = document.createElement("div");
    soupItem2Price.classList.add("item")
    soupItem2Price.textContent = "10"

    const soupItem3 = document.createElement("div");
    soupItem3.classList.add("item")
    soupItem3.textContent = "Dumpling Soup"
    const soupItem3Des = document.createElement("div");
    soupItem3Des.classList.add("description");
    soupItem3Des.textContent = "Chicken broth, Pork Dumplings, Bak Choi, Scallions, Coriander"
    const soupItem3Price = document.createElement("div");
    soupItem3Price.classList.add("item")
    soupItem3Price.textContent = "7"

    soupsWrapper.appendChild(soupsTitle);
    soupsWrapper.appendChild(soupsGrid);
    soupsGrid.appendChild(soupItem1);
    soupItem1.appendChild(soupItem1Des);
    soupsGrid.appendChild(soupItem1Price);
    soupsGrid.appendChild(soupItem2);
    soupItem2.appendChild(soupItem2Des);
    soupsGrid.appendChild(soupItem2Price);
    soupsGrid.appendChild(soupItem3);
    soupItem3.appendChild(soupItem3Des);
    soupsGrid.appendChild(soupItem3Price);

    panel2.appendChild(menuContent1);
    menuContent1.appendChild(starterWrapper);
    menuContent1.appendChild(soupsWrapper);
    

    // Menu Page 2
    const menuContent2 = document.createElement("div");
    menuContent2.classList.add("menu-content");

    // --- Mains
    const mainsWrapper = document.createElement("div");
    mainsWrapper.classList.add("menu-wrapper");

    const mainsTitle = document.createElement("div");
    mainsTitle.classList.add("menu-title");
    mainsTitle.textContent = "Mains";

    const mainsGrid = document.createElement("div");
    mainsGrid.classList.add("item-wrapper");

    const mainsItem1 = document.createElement("div");
    mainsItem1.classList.add("item")
    mainsItem1.textContent = "Kung Pao Chicken"
    const mainsItem1Des = document.createElement("div");
    mainsItem1Des.classList.add("description");
    mainsItem1Des.textContent = "Chicken, Peanut, Cucumber, Bell Pepper"
    const mainsItem1Price = document.createElement("div");
    mainsItem1Price.classList.add("item")
    mainsItem1Price.textContent = "15"

    const mainsItem2 = document.createElement("div");
    mainsItem2.classList.add("item")
    mainsItem2.textContent = "Mapo Tofu"
    const mainsItem2Des = document.createElement("div");
    mainsItem2Des.classList.add("description");
    mainsItem2Des.textContent = "Chicken Broth, Beef, Tofu, Pork, Toban Djan, Chili Crisp"
    const mainsItem2Price = document.createElement("div");
    mainsItem2Price.classList.add("item")
    mainsItem2Price.textContent = "16"
    
    const mainsItem3 = document.createElement("div");
    mainsItem3.classList.add("item")
    mainsItem3.textContent = "Yu Xiang Eggplant"
    const mainsItem3Des = document.createElement("div");
    mainsItem3Des.classList.add("description");
    mainsItem3Des.textContent = "Eggplant, Scallion, Garlic, Ginger, Vinegar"
    const mainsItem3Price = document.createElement("div");
    mainsItem3Price.classList.add("item")
    mainsItem3Price.textContent = "14"

    mainsWrapper.appendChild(mainsTitle);
    mainsWrapper.appendChild(mainsGrid);
    mainsGrid.appendChild(mainsItem1);
    mainsItem1.appendChild(mainsItem1Des);
    mainsGrid.appendChild(mainsItem1Price);
    mainsGrid.appendChild(mainsItem2);
    mainsItem2.appendChild(mainsItem2Des);
    mainsGrid.appendChild(mainsItem2Price);
    mainsGrid.appendChild(mainsItem3);
    mainsItem3.appendChild(mainsItem3Des);
    mainsGrid.appendChild(mainsItem3Price);
    
    // --- Desserts
    const dessertsWrapper = document.createElement("div");
    dessertsWrapper.classList.add("menu-wrapper");

    const dessertsTitle = document.createElement("div");
    dessertsTitle.classList.add("menu-title");
    dessertsTitle.textContent = "Desserts";

    const dessertsGrid = document.createElement("div");
    dessertsGrid.classList.add("item-wrapper");
    
    const dessertItem1 = document.createElement("div");
    dessertItem1.classList.add("item")
    dessertItem1.textContent = "Ci Ba"
    const dessertItem1Des = document.createElement("div");
    dessertItem1Des.classList.add("description");
    dessertItem1Des.textContent = "Sticky Rice Cake, Sichuan Pepper Syrup"
    const dessertItem1Price = document.createElement("div");
    dessertItem1Price.classList.add("item")
    dessertItem1Price.textContent = "6"

    const dessertItem2 = document.createElement("div");
    dessertItem2.classList.add("item")
    dessertItem2.textContent = "Sichuan Pepper Ice Cream"
    const dessertItem2Des = document.createElement("div");
    dessertItem2Des.classList.add("description");
    dessertItem2Des.textContent = "Heavy Cream, Egg, Sichuan Pepper"
    const dessertItem2Price = document.createElement("div");
    dessertItem2Price.classList.add("item")
    dessertItem2Price.textContent = "6"

    dessertsWrapper.appendChild(dessertsTitle);
    dessertsWrapper.appendChild(dessertsGrid);
    dessertsGrid.appendChild(dessertItem1);
    dessertItem1.appendChild(dessertItem1Des);
    dessertsGrid.appendChild(dessertItem1Price);
    dessertsGrid.appendChild(dessertItem2);
    dessertItem2.appendChild(dessertItem2Des);
    dessertsGrid.appendChild(dessertItem2Price);

    panel2.appendChild(menuContent1);
    panel2.appendChild(menuContent2);
    menuContent1.appendChild(starterWrapper);
    menuContent1.appendChild(soupsWrapper);
    menuContent2.appendChild(mainsWrapper);
    menuContent2.appendChild(dessertsWrapper);

    // Appending elements
    menuWrapper.appendChild(panel1);
    menuWrapper.appendChild(panel2);
    contentContainer.appendChild(menuWrapper);
}

export { loadMenuPage };