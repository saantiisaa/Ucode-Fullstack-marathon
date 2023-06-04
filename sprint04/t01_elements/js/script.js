const charactersList = document.getElementById("characters");
const characters = charactersList.getElementsByTagName("li");

for (let i = 0; i < characters.length; i++) {
    const character = characters[i];

    if (!character.hasAttribute("class") ||
        !isValidClass(character.getAttribute("class"))) {
        character.setAttribute("class", "unknown");
    }
    if (!character.hasAttribute("data-element")) {
        character.setAttribute("data-element", "none");
    }

    const elements = character.getAttribute("data-element").split(" ");
    const characterText = character.textContent;
    character.innerHTML = "";

    const characterName = document.createElement("div");
    characterName.textContent = characterText;
    characterName.classList.add("character-name");
    character.appendChild(characterName);

    const circleContainer = document.createElement("div");
    circleContainer.classList.add("circle-container");
    character.appendChild(circleContainer);

    for (let j = 0; j < elements.length; j++) {
        const element = elements[j];
        const circle = document.createElement("div");
        circle.classList.add("elem", element);
        circleContainer.appendChild(circle);
    }

    if (elements.includes("none")) {
        const line = document.createElement("div");
        line.classList.add("line");
        const circle = character.querySelector(".elem.none");
        if (circle) {
            circle.appendChild(line);
        }
    }
}

function isValidClass(classValue) {
    return classValue === "good" || classValue === "evil";
}