import {barcelona,roma,paris,londres} from "./ciudades.js";

//obtener dom
let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");

//Agregar elemento click a cada enlace
enlaces.forEach(
    function(enlace){
        enlace.addEventListener("click",function(){
            //REMOVER ACTIVO
            enlaces.forEach(function(enlace){
                enlace.classList.remove("active");
            });
        
        //agregar active
        this.classList.add("active");
        //obtener contenido correspondiente segun enlace
        let contenido = obtenerContenido(this.textContent)

        //mostrar DOM
            tituloElemento.innerHTML = contenido.titulo;
            subtituloElemento.innerHTML = contenido.subtitulo;
            parrafoElemento.innerHTML = contenido.parrafo;
            precioElemento.innerHTML = contenido.precio;
        })
    });

//FUNCION PARA TRAER INFO DE CIUDADES.JS
function obtenerContenido(enlace){
    let contenido = {
        "Barcelona": barcelona,
        "Roma": roma,
        "París": paris,
        "Londres": londres
    };
    return contenido[enlace];
}