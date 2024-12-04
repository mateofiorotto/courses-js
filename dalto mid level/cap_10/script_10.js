//Control del flujo y manejo de errores
/* Sentencias de bloque, de control de flujo y excepciones

let nombre = "mateo";
{
    let nombre = "lucas";
    alert("nombre");
}

SWITCH

switch(expr) {
    case "Fruta": 
    console.log("Esto es una fruta");
    break; --> siempre usarlo despues de cada case

    case "Verdura": 
    console.log("Esto es una verdura");
    break;

    case "Carne": 
    console.log("Esto es carne");
    break;
} 

el switch generalmente tiene menos rendimiento

---------------------------------------------------
EXCEPCIONES Y TIPOS

-Definicios y usos
-Excepciones ECMA Script
-DOMException y DOMError

TRY CATCH
-sintaxis
-objeto error
-catch incondicional
-catch condicional
-sentenchia throw
-finally
*/

/* 
try { //acompañado si o si de catch - finally
    throw {
        error: "Erroraso pa",
        info: "info pa"
    } //tira error -->
}


catch(error){
    //catch incondicional --> no tiene nada dentro
    console.log(error)

    //catch condicional
    if (3 > 5) {
        console.log("Ocurrió un error de referencia")
    }
finally {
    //console.log ("me muestro anashe") // se ejecuta pase lo que pase, tiene prioridad
}*/

//COFLA 10

const sendButton = document.getElementById("snd-nota");

sendButton.addEventListener("click",()=> {
    let resultado,mensaje;
    try {
         prevRes = parseInt(document.getElementById("nota-alumno").value);
         if (isNaN(prevRes)) {
            throw "chistoso :v";
         }
         resultado = verificarAprobacion(8,4,prevRes);
         mensaje = definirMensaje(prevRes); 
    } catch (e) {
        resultado = "chistoso";
        mensaje = "has sido descubierto hackeando papu";
    }
    abrirModal(resultado[0],mensaje);
})

const definirMensaje = (prevRes)=>{
    let resultado;
    switch (prevRes) {
        case 1: resultado = "Sos un burro";
        break;
        case 2: resultado = "Sos menos burro pero sos";
        break;
        case 3: resultado = "No sabes casi nada";
        break;
        case 4: resultado = "Bastante mal";
        break;
        case 5: resultado = "Casi aprobas";
        break;
        case 6: resultado = "Aprobaste al borde";
        break;
        case 7: resultado = "Aprobaste bien";
        break;
        case 8: resultado = "Bien wachin";
        break;
        case 9: resultado = "muy bien chavalete";
        break;
        case 10: resultado = "sos un maestro";
        break;
        default: resultado = null;
    }
    return resultado;

}

const verificarAprobacion = (nota1,nota2,prevRes)=>{
    promedio = (nota1 + nota2 + prevRes) / 3;
    console.log(promedio);
    if (promedio >= 5.5) {
        return ["Promedio aprobado, tu promedio es: " + Math.round(promedio)];
    } else {
        return ["Promedio desaprobado, tu promedio es: " + Math.round(promedio)];
    }
}


const abrirModal = (res,msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector(".modal-fondo");
    modal.style.display = "flex"
    modal.style.animation = "aparecer 1s forwards"
}