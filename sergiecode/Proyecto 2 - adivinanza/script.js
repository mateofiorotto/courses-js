let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let intento = document.getElementById("intento");
let intentos = 0;

function chequearResultado(){
    intentos++;
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value);

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = "Introduzca un numero valido entre 1 y 100";
        mensaje.style.color = "red";
        return
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = "Felicitaciones, ganaste!";
        mensaje.style.color = "green";
        numeroEntrada.disabled = true;
    } else if(numeroIngresado < numeroAzar) {
        mensaje.textContent = "El numero es mayor!";
        mensaje.style.color = "yellow";
    } else {
        mensaje.textContent = "El numero es menor!";
        mensaje.style.color = "yellow";
    }
}