const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}

const closeNav = document.querySelector("#close");

if (closeNav) {
    closeNav.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}