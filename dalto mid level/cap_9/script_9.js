//eventos
/*const boton = document.querySelector(".boton");

boton.addEventListener("click",(e)=>{
    console.log(e);
})

boton.addEventListener("click",(e)=>{
    console.log(e.target);
})

boton.addEventListener("click", function alerta(){
    alert("hola");
});*/


//event bubbling vs capturing mientras mas especifico sea, antes se ejecutra, colocando despues de la funcion "true" se ejecuta antes
//stopPropagation para no usar mas eventos

/*
EV. MOUSE
click
dblclick
mouseover
mouseout
contextmenu
mouseenter
mouseleave
mouseup
mousemove

EV. Teclado
keypress
keydown
onkeyup

EV. Interfaz
error
load
beforeunload
unload
resize
scroll
select
selectionStart
selectionEnd

TIMERS
setTimeout()
setInterval()
clearTimeout()
clearInterval()
*/

//cofla problema a
/*
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let materia = document.getElementById("materia");
let enviar = document.getElementById("enviar");
let resultado = document.querySelector(".resultado");

enviar.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampos();
    if (error[0]) {
       resultado.innerHTML = error[1];
       resultado.classList.add("red");
       resultado.classList.remove("green");
    } else {
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
})

let validarCampos = ()=>{
    let error = [];
    if (nombre.value.length < 5 || nombre.value.length > 40) {
        error[0] = true;
        error[1] = "El nombre es invalido"
        return error;
    } else if ( email.value.indexOf("@") == -1 ||
                email.value.indexOf(".") == -1) {
                    error[0] = true;
                    error[1] = "Mail invalido";
                    return error;          
    } else if (materia.value < 4 || materia.value > 40 ){
        error[0] = true;
        error[1] = "Materia inexistente";
        return error;
    }
        


    error[0] = false;
    return error;
}
*/

//COFLA B
alumnos = [{
    nombre: "Lucas Dalto",
    email: "soydalto@gmail.com",
    materia: "Fisica 3",
},
{
    nombre: "Mateo Fiorotto",
    email: "mateo@gmail.com",
    materia: "Programacion",
},
{
    nombre: "Cofla xd",
    email: "cofla@gmail.com",
    materia: "Quimica",
},
{
    nombre: "Pepito",
    email: "pepe@gmail.com",
    materia: "Nada",
}]

const boton = document.querySelector(".btn-confirmar");
const contenedor = document.querySelector(".grid-container");


for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `<div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="1">Sem 1</option>
            <option value="2">Sem 2</option>
        </select>
    </div>`;
    contenedor.innerHTML += htmlCode;
}

boton.addEventListener("click",(e)=>{
    let confirmar = confirm("¿Confirmar?");
    if (confirmar) {
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
    
})