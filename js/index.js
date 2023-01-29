const estudios = [
    {
        id: "estudio-1",
        nombre: "Universidad de Lanús",
        imagen: "../assets/imgs/institutos/unla-logo.png",
        enlace: "http://www.unla.edu.ar/",
        carrera: "Licenciatura en Sistemas",
        fecha: "Febrero 2020 - Actualidad",
        certificado: "#",
    },
    {
        id: "estudio-2",
        nombre: "CoderHouse",
        imagen: "../assets/imgs/institutos/coder-logo.png",
        enlace: "https://www.coderhouse.com/",
        carrera: "Curso de JavaScript",
        fecha: "Octubre 2022 - Diciembre 2022",
        certificado: "https://www.coderhouse.com/certificados/63a64d2e3a8cce000f455490",
    },
    {
        id: "estudio-3",
        nombre: "CoderHouse",
        imagen: "../assets/imgs/institutos/coder-logo.png",
        enlace: "https://www.coderhouse.com/",
        carrera: "Curso de Desarrollo Web",
        fecha: "Julio 2022 - Octubre 2022",
        certificado: "https://www.coderhouse.com/certificados/6332317e599dd40010681611",
    },
    {
        id: "estudio-4",
        nombre: "San Ignacio",
        imagen: "../assets/imgs/institutos/sanignacio-logo.jpg",
        enlace: "https://www.colegiosanignacio.com.ar/",
        carrera: "Educación Secundaria",
        fecha: "2014 - 2019",
        certificado: "#",
    }
];

let navBar = document.querySelector("#navbar");
let abrirMenu = document.querySelector("#abrir-menu");
let cerrarMenu = document.querySelector("#cerrar-menu");

abrirMenu.addEventListener("click", () => {
    navBar.classList.add("visible");
});

cerrarMenu.addEventListener("click", () => {
    navBar.classList.remove("visible");
});

let educacionContenedor = document.querySelector("#educacion-contenedor");

cargarEducacion(estudios);

function cargarEducacion(estudios) {

    educacionContenedor.innerHTML = "";

    estudios.forEach( estudio => {

        const item = document.createElement("div");
        item.classList.add("educacion-item");
        item.innerHTML += `
            <div class="educacion-instituto">
                <a href="${estudio.enlace}">
                    <img src="${estudio.imagen}" alt="${estudio.nombre}">
                    <p>${estudio.nombre}</p>
                </a>
            </div>
            <div class="educacion-informacion">
                <p>${estudio.carrera}</p>
                <small>${estudio.fecha}</small>
                <a href="${estudio.certificado}"><button class="boton">Certificado</button></a>
            </div>`;

        educacionContenedor.append(item);

    });

};
