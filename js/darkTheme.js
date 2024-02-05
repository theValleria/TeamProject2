const mainContent = document.querySelector('.container');
const header = document.querySelector("#themeMode");
const footer = document.querySelector(".footer");
let checkbox = document.querySelector("#btnSwitch");


function darktheme() {
    mainContent.classList.remove("white");
    mainContent.classList.add("dark");

    header.classList.remove("white");
    header.classList.add("dark");

    footer.classList.remove("white");
    footer.classList.add("dark");
}

function lighttheme() {
    mainContent.classList.remove("dark");
    mainContent.classList.add("white");

    header.classList.remove("dark");
    header.classList.add("white");

    footer.classList.remove("dark");
    footer.classList.add("white");
}

checkbox.addEventListener("change", function() {
    if (this.checked) {
        darktheme();
    } else {
        lighttheme();
    }
});
