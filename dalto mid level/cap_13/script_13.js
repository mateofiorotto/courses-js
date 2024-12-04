/*HTTP
-Definicion
-Cliente - Servidor
-No guardan info

JSON
- Definicion - usos - sintaxis
- Serializacion y deserializacion
- Metodo parse() - convierte un string con estructura JSON a formato JSON (deserializar)
- Metodo stringify() - Convierte un dato JS en una cadena de texto JSON (serializar)
- JSON PolyFill

const json = {
    "var1" : "pedro",
    "var2" : "jorgito"
}

const objeto = {
    var1 : "pedro",
    var2 : "jorgito"
}

const deserializado = {var1 : "pedro",var2 : "jorgito"}

serializadoEjemplo = '{var1 : "pedro",var2 : "jorgito"}'

para transformarlo podemos hacer
const serializado = JSON.stringify(deserializado);
const deserializado = JSON.parse(serializado);

LOS DATOS HAY QUE ENVIARLOS AL SERVIDOR SERIALIZADOS, ES DECIR, EN CADENAS DE STRING

AJAX (asincrono)
- Introduccion e instalacion de server
- Objeto XMLHttpRequest
- Enviar peticiones GET
- Trabajar el resultado de las peticiones
- Objeto ActiveXObject
- Nueva forma de trabajar el resultado
- Enviar peticiones POST

NO ACTUALIZA LA PAGINA

XAMPP

*/

/* METODO ANTERIOR
peticion.addEventListener("readystatechange",()=>{
    if(peticion.readyState == 4 && peticion.status == 200) {
        console.log(peticion.response);
    }
});

    peticion.open("GET","info.txt");
    peticion.send();
*/
 /* 
let peticion;

if(window.XMLHttpRequest) {
    peticion = new XMLHttpRequest();
} else {
    peticion = new ActiveXObject("Microsoft.XMLHTTP");
} //Para navegadores que no funcionen

peticion.addEventListener("load",()=>{
        let respuesta;
        if (peticion.status == 200 || peticion.status == 201) {
            respuesta = peticion.response;
        } else {
            respuesta = "lo siento, no se encontro el recurso";
        }
        console.log(JSON.parse(respuesta)); //esto para trabajarlo, si yo lo tengo que enviar a un server
        //seria con stringify
});

  peticion.open("GET","info.txt"); LOS DATOS SE ENVIAN POR URL
   peticion.open("POST","https://reqres.in/api/users"); //LOS DATOS SE ENVIAN POR POST

   peticion.setRequestHeader("Content-type","application/json;charset=UTF-8");

    peticion.send(JSON.stringify({
        "nombre": "Mateo",
        "trabajo": "Programador"
    }));
    */

    //DIFERENCIAS GET POST
    /*
    ASPECTO                                                    | GET | POST
    Datos visibles en la URL                                   | SI  |  NO
    Datos en el historial del navegador                        | SI  |  NO
    Una URL puede guardarse conteniendo parametros de un envio | SI  |  NO
    Existen restricciones en la longitud de datos              | SI  |  NO
    Preferible para envio de datos sensibles                   | NO  |  SI
    Codificacion en forms                                      | app | lo mismo pero
                                                                licat|  se usa multipart/form-data para
                                                                ion/x| ficheros
                                                                -www-|
                                                                form-|
                                                                url- |
                                                                encod|
                                                                ed   |
    Restriccion en tipos de datos                                SI  |  NO
    Preferible para disparar acciones                            NO  |  SI
    Riesgo de cacheado de datos recuperados en navegadores       SI  |  NO
    Posibles ataques e intentos de hackeo                        SI  |  SI (MENOS RIESGO)


    */

/*FETCH 
- Introduccion
- basado en promesas
- objeto fetch
- text()
- json()
- blob()
- formData()
- arrayBuffer() */
/*
const imagen = document.querySelector(".img");

fetch("diferencia.png")
    .then(res=>res.blob())
    .then(img=>imagen.src = URL.createObjectURL(img))
*/

//AXIOS library
/*
- Instalacion
- Basado en promesas
- Objeto axios
- Metodo get() post()
- formas de enviar los datos
- ventajas

//enviar por get y post
axios.get("info.txt")
    .then(res=>console.log(res))

axios.post("info.txt")
    .then(res=>console.log(res))


axios.post("https://reqres.in/api/users","pedro"),{
    "nombre" : "mateo",
    "apellido" : "fiorotto"
}
    .then(res=>console.log(res))

    //FETCH - AXIOS CON AWAIT Y ASYNC
    - implementacion
    - importancia try catch

const getName = async()=>{
    let resultado = await axios("info.txt");
    document.querySelector(".nombre").innerHTML = resultado.data.nombre;
    
}

const getAge = async()=>{
    let resultado = await axios("info.txt");
    document.querySelector(".edad").innerHTML = resultado.data.edad;
}

document.getElementById("name").addEventListener("click",getName)
document.getElementById("age").addEventListener("click",getAge)
*/

//PROBLEMA COFLA

const getInfo = async()=>{
    let aprobados = document.querySelector(".info-aprobados");
    let desaprobados = document.querySelector(".info-desaprobados");
    try {
        resultado = await axios("semestre.txt");
        aprobados.innerHTML = "aprobados: " + resultado.data.aprobados;
        desaprobados.innerHTML = "desaprobados: " + resultado.data.desaprobados;
    } catch(e){
        document.write("La api fallo");
    }
    
}

document.getElementById("getInfo").addEventListener("click",getInfo);