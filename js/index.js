/********** NAVBAR MOBILE **********/
let navBar = document.querySelector("#navbar");
let abrirMenu = document.querySelector("#abrir-menu");
let cerrarMenu = document.querySelector("#cerrar-menu");

abrirMenu.addEventListener("click", () => {
    navBar.classList.add("visible");
});

cerrarMenu.addEventListener("click", () => {
    navBar.classList.remove("visible");
});

/********** CONTENEDORES **********/

let educacionContenedor = document.querySelector("#educacion-contenedor");
let skillContenedor = document.querySelector("#skill-contenedor");
let projectContenedor = document.querySelector("#project-contenedor");

/********** CARGAR EDUCACION **********/

const pedirEstudios = async () => {
    const resp = await fetch ("./js/json/education.json");
    let estudios = await resp.json();
    return estudios;
}

let estudios = pedirEstudios();

estudios
.then( estudios => {
    cargarEducacion(estudios);
});

function cargarEducacion(estudios) {

    educacionContenedor.innerHTML = "";

    estudios.forEach( estudio => {

        const item = document.createElement("div");
        item.classList.add("educacion-item");
        item.innerHTML += `
            <div class="educacion-instituto">
                <a href="${estudio.enlace}" target="_blank">
                    <img src="${estudio.imagen}" alt="${estudio.nombre}">
                    <p>${estudio.carrera}</p>
                </a>
            </div>
            <div class="educacion-informacion"> 
                <p>${estudio.nombre}</p>
                <small>${estudio.fecha}</small>
                <a href="${estudio.certificado}" target="_blank"><button class="boton btn-project">Certificado</button></a>
            </div>`;

        educacionContenedor.append(item);

    });

};

/********** CARGAR SKILLS **********/

const pedirSkills = async () => {
    const resp = await fetch ("./js/json/skills.json");
    let skills = await resp.json();
    return skills;
}

let skills = pedirSkills();

skills
.then( skills => {
    cargarSkills(skills);
});

function cargarSkills(skills) {

    skillContenedor.innerHTML = "";

    skills.forEach( skill => {

        const item = document.createElement("div");
        item.classList.add("skill-item");
        item.innerHTML += `
            <img src="${skill.imagen}" alt="${skill.nombre}">
            <h4>${skill.nombre}</h4>
            <small>${skill.nivel}</small>`;

        skillContenedor.append(item);

    });

};

/********** CARGAR PROJECTS **********/

const pedirProjects = async () => {
    const resp = await fetch ("./js/json/projects.json");
    let projects = await resp.json();
    return projects;
}

let projects = pedirProjects();

projects
.then( projects => {
    cargarProjects(projects);
});

function cargarProjects(projects) {

    projectContenedor.innerHTML = "";

    projects.forEach( project => {

        const item = document.createElement("div");
        item.classList.add("proyecto-item");
        item.innerHTML += `
            <div class="proyecto-titulo">
                <img src="${project.logo}" alt="${project.nombre}">
                <h3 class="proyecto-titulo__texto">${project.nombre}</h3>
            </div>
            <div class="proyecto-informacion">
                <p class="proyecto-informacion__subtexto">${project.desc}</p>
                <a class="proyecto-informacion__view" href="${project.view}" target="_blank">
                    <img src="${project.imagen}" alt="${project.nombre}"/>
                </a>
                <a href="${project.repositorio}" target="_blank"><button class="boton btn-project"><i class="bi bi-github"></i> GITHUB CODE</button></a>
            </div>`;

            projectContenedor.append(item);

    });

};