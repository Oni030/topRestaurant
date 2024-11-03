function makeElement(type, classname, content, parent) {
    const element = document.createElement(type);
    if (classname && classname !== "") {element.classList.add(classname)};
    if (content !== "") {element.textContent = content};
    if (parent) {parent.appendChild(element)};
    return element;
};

function makeImage(parent, ...objects) {
    const element = document.createElement("img");
    objects.forEach((obj) => {
        for(let key in obj) {
            element.setAttribute(key, obj[key])
        };
    });
    if (parent !== "") {parent.appendChild(element)};
};

export { makeElement, makeImage }