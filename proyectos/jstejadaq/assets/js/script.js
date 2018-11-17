//alert("HOOOOOOOOLA :-)"); ESTO ES UN A ALERTA

//Variables
var btnMenuOpen = document.getElementById("btn-menu-open");
var manuLateral = document.getElementById("menu-lateral");
var btnMenuClose = document.getElementById("btn-menu-close");
var btnNavToggle = document.getElementById("btn-nav-toggle");
var navLinks = document.getElementById("nav-links");

/*---------------Vida de los botones----------------*/

//Se llaman los listenner
btnMenuOpen.addEventListener("click", mostrarMenuLateral1)
btnMenuClose.addEventListener("click", ocultarmostrarMenuLateral1)
btnNavToggle.addEventListener("click", toggleNavLinks);
window.addEventListener("resize", arreglarNavlinks);

//Se crean las funciones
function mostrarMenuLateral1(){
    manuLateral.classList.add("mostrar");
}

function ocultarmostrarMenuLateral1(){
    manuLateral.classList.remove("mostrar");
}

function toggleNavLinks(){
    navLinks.classList.toggle("mostrar");
}

function arreglarNavlinks(){
    if(window.innerWidth >= 900){
        navLinks.classList.remove("mostrar");
    }
}

function cargarDatos(){
    var datos = [/* Los objetos se crean con llaves */
        
        {url: "//unal.edu.co", nombre: "UNAL", instruccion: "Instruccion UNAL"},/* las dos barras determinan si es http o https */
        {url: "//CSS-TRICKS.COM", nombre: "CSS Tricks", instruccion: "Instruccion CSS-Tricks"},
        {url: "uploads/actividades/actividad-normal/index.html", nombre: "Determinar Operacion", instruccion: "Fijate en los numeros y selecciona la operacion que da el resultado"},
        {url: "uploads/actividades/actividad-canvas/index.html", nombre: "Actividad Canvas", instruccion: "Instruccion Canvas"}
    ];

    return datos;
}

function generarLinks(){
    var menuLinks = document.getElementById("menu-links");
    //Borrar lo del menu para que no aparezca
    menuLinks.innerHTML = "";

    var links = cargarDatos();

    if(links.length > 0){
        //LLegaron datos
        for ( var i=0; i< links.length; i++){
            var texto = document.createTextNode(links[i].nombre)
            var link = document.createElement("a");
            link.target = "main-iframe";
            link.href = links[i].url;
            link.appendChild(texto);

            var itemlista = document.createElement("li");
            itemlista.appendChild(link);

            menuLinks.appendChild(itemlista);   

        }
    }
    else{
        //Se le agrega un item a la lista
        //Crear elementos HTML de forma dinámica desde JS
        var texto = document.createTextNode("Ni modo, no se encontro ninguna actividad prro");
        var itemlista = document.createElement("li");
        itemlista.appendChild(texto);//Se agrega el texto al item creado pero esta vacio y volando por ahi

        manuLinks.appendChild(itemlista);
    }
}

generarLinks();