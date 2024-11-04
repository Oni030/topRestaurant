import { makeElement } from "./functions";

function loadMenuPage() {
    console.log("loadMenuPage function is called");
    const contentContainer = document.querySelector("#content"); 

    // Outside container
    const menuWrapper = makeElement("div", "menu", "", contentContainer);
    
    // Panel 1
    const panel1 = makeElement("div", "menu-title-panel", "", menuWrapper);
    
    // Title Texts
    const titleText = makeElement("h2", "", "Menu", panel1);
    
    // Panel 2
    const panel2 = makeElement("div", "menu-panel", "", menuWrapper);

    // -Menu Page 1
    const menuContent1 = makeElement("div", "menu-content", "", panel2);

    // --- Starters
    const starterWrapper = makeElement("div", "menu-wrapper", "", menuContent1);
    const starterTitle = makeElement("div", "menu-title", "Starters", starterWrapper);
    const starterGrid = makeElement("div", "item-wrapper", "", starterWrapper);

    const startItem1 = makeElement("div", "item", "Pickled Vegetables", starterGrid);
    const startItem1Des = makeElement("div", "", "Various lacto-fermented vegetables with a spicy and sweet flavour", startItem1);
    const startItem1Price = makeElement("div", "item", "5", starterGrid);

    const startItem2 = makeElement("div", "item", "Cold Noodles", starterGrid);
    const startItem2Des = makeElement("div", "", "Wheat Noodles, Cucumber, Scallion, Sesame Sauce, Vinegar", startItem2);
    const startItem2Price = makeElement("div", "item", "6", starterGrid);

    const startItem3 = makeElement("div", "item", "Zhong Dumplings", starterGrid);
    const startItem3Des = makeElement("div", "", "Boiled Pork Dumplings, Minced Garlic, Dumpling Sauce, Chili Crisp", startItem3);
    const startItem3Price = makeElement("div", "item", "7", starterGrid);
    
    // --- Soups
    const soupsWrapper = makeElement("div", "menu-wrapper", "", menuContent1);
    const soupsTitle = makeElement("div", "menu-title", "Soups", soupsWrapper);
    const soupsGrid = makeElement("div", "item-wrapper", "", soupsWrapper);

    const soupItem1 = makeElement("div", "item", "Hot & Sour Soup", soupsGrid);
    const soupItem1Des = makeElement("div", "description", "Veggie Stock, Tofu, Mushroom, Carrot, Bamboo, White Pepper, Vinegar", soupItem1);
    const soupItem1Price = makeElement("div", "item", "9", soupsGrid);

    const soupItem2 = makeElement("div", "item", "Chongqing Noodle Soup", soupsGrid);
    const soupItem2Des = makeElement("div", "description", "Beef broth, Thin Wheat Noodles, Braised Beef, Peanuts, Pickled Mustard Greens, Bak Choi, Chili Crisp", soupItem2);
    const soupItem2Price = makeElement("div", "item", "10", soupsGrid);

    const soupItem3 = makeElement("div", "item", "Dumpling Soup", soupsGrid);
    const soupItem3Des = makeElement("div", "description", "Chicken broth, Pork Dumplings, Bak Choi, Scallions, Coriander", soupItem3);
    const soupItem3Price = makeElement("div", "item", "7", soupsGrid);

    // Menu Page 2
    const menuContent2 = makeElement("div", "menu-content", "", panel2);

    // --- Mains
    const mainsWrapper = makeElement("div", "menu-wrapper", "", menuContent2);
    const mainsTitle = makeElement("div", "menu-title", "Mains", mainsWrapper);
    const mainsGrid = makeElement("div", "item-wrapper", "", mainsWrapper);

    const mainsItem1 = makeElement("div", "item", "Kung Pao Chicken", mainsGrid);
    const mainsItem1Des = makeElement("div", "description", "Chicken, Peanut, Cucumber, Bell Pepper", mainsItem1);
    const mainsItem1Price = makeElement("div", "item", "15", mainsGrid);

    const mainsItem2 = makeElement("div", "item", "Mapo Tofu", mainsGrid);
    const mainsItem2Des = makeElement("div", "description", "Chicken Broth, Beef, Tofu, Pork, Toban Djan, Chili Crisp", mainsItem2);
    const mainsItem2Price = makeElement("div", "item", "16", mainsGrid);

    const mainsItem3 = makeElement("div", "item", "Yu Xiang Eggplant", mainsGrid);
    const mainsItem3Des = makeElement("div", "description", "Eggplant, Scallion, Garlic, Ginger, Vinegar", mainsItem3);
    const mainsItem3Price = makeElement("div", "item", "14", mainsGrid);

    // --- Desserts
    const dessertsWrapper = makeElement("div", "menu-wrapper", "", menuContent2);
    const dessertsTitle = makeElement("div", "menu-title", "Desserts", dessertsWrapper);
    const dessertsGrid = makeElement("div", "item-wrapper", "", dessertsWrapper);

    const dessertItem1 = makeElement("div", "item", "Ci Ba", dessertsGrid);
    const dessertItem1Des = makeElement("div", "description", "Sticky Rice Cake, Sichuan Pepper Syrup", dessertItem1);
    const dessertItem1Price = makeElement("div", "item", "6", dessertsGrid);

    const dessertItem2 = makeElement("div", "item", "Sichuan Pepper Ice Cream", dessertsGrid);
    const dessertItem2Des = makeElement("div", "description", "Heavy Cream, Egg, Sichuan Pepper", dessertItem2);
    const dessertItem2Price = makeElement("div", "item", "6", dessertsGrid);
}

export { loadMenuPage };