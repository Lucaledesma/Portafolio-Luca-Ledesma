let navBar = document.querySelector("#navbar");
let abrirMenu = document.querySelector("#abrir-menu");
let cerrarMenu = document.querySelector("#cerrar-menu");

abrirMenu.addEventListener("click", () => {
    navBar.classList.add("visible");
});

cerrarMenu.addEventListener("click", () => {
    navBar.classList.remove("visible");
});