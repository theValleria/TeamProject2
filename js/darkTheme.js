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

    localStorage.setItem("theme", "dark");
}

function lighttheme() {
    mainContent.classList.remove("dark");
    mainContent.classList.add("white");

    header.classList.remove("dark");
    header.classList.add("white");

    footer.classList.remove("dark");
    footer.classList.add("white");

    localStorage.setItem("theme", "light");
}

window.addEventListener("DOMContentLoaded", function() {
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        darktheme();
        checkbox.checked = true;
    } else {
        lighttheme();
        checkbox.checked = false;
    }
});

checkbox.addEventListener("change", function() {
    if (this.checked) {
        localStorage.setItem("theme", true);
        darktheme();
    } else {
        localStorage.setItem("theme", false);
        lighttheme();
    }
});
