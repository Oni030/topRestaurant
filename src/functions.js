function makeElement(type, classname, content, parent) {
    const element = document.createElement(type);
    if (classname !== "") {element.classList.add(classname)};
    if (classname !== "") {element.textContent = content};
    if (parent) {parent.appendChild(element)};
    return element;
};

export { makeElement }