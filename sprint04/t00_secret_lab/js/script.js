function transformation() {
    const lab = document.getElementById("lab");
    const hero = document.getElementById("hero");
    const btn = document.getElementById("btn");

    if (lab.classList.contains("state1")) {
        lab.classList.remove("state1");
        lab.classList.add("state2");
        hero.innerHTML = "Hulk";
        hero.style.fontSize = "130px";
        hero.style.letterSpacing = "6px";
        lab.style.background = "#70964b";
    } else {
        lab.classList.remove("state2");
        lab.classList.add("state1");
        hero.innerHTML = "Bruce Banner";
        hero.style.fontSize = "60px";
        hero.style.letterSpacing = "2px";
        lab.style.background = "#ffb300";
    }
}
