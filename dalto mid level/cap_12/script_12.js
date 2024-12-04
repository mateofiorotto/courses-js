/*CALLBACKS

function prueba(callback){
    callback("pedro");
}

function decirNombre(nombre){
    console.log(nombre);
}

//funcion que pasamos como parametro a otra funcion

prueba(decirNombre);*/

/*
class Persona {
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

const personas=[];

const data = [
    ["Mateo","@mateoF"],
    ["Lucas","@lucasA"],
    ["Araceli","@araO"],
    ["Franco"]
];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0],data[i][1])
}

const obtenerPersona = (id,cb)=>{
    if (personas[id] == undefined) {
        cb("No se encontro la persona")
    } else {
        cb(null,personas[id],id)
    }
}

obtenerInstagram = (id,cb) =>{
    if (personas[id].instagram == undefined) {
        cb("No se encontro instagram")
    } else {
        cb(personas[id].instagram)
    }
}

obtenerPersona(2,(err,persona,id)=>{
    if (err) {
        console.log(err) 
    } else {
        console.log(persona.nombre);
        obtenerInstagram(id,(err,instagram=>{
            if (err) {
                console.log(err) 
            } else {
                console.log(instagram);
            }
        }))
    }
})

*/

//PROMESAS
/*OBJETOS - Representan la terminacion o fracaso de una operacion asincrona (resolve y reject)*/
/*
let nombre = "pedrin";

const promesa = new Promise((resolve,reject)=>{
    if (nombre!=="pedrin") {
        reject("El nombre no es pedro")
    } else {
        resolve(nombre)
    }
}) 

promesa.then((resultado)=>{ //metodo para acceder al valor de resolve
    console.log(resultado);
}).catch((e)=>{
    console.log(e);
})*/

/* LO MISMO QUE TRABAJAR CON CALLBACKS PERO CON PROMISES
class Persona {
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

const personas=[];

const data = [
    ["Mateo","@mateoF"],
    ["Lucas","@lucasA"],
    ["Araceli","@araO"],
    ["Franco"]
];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0],data[i][1])
}

const obtenerPersona = (id)=>{
    return new Promise((resolve,reject)=>{
        if (personas[id] == undefined) {
            reject("No se encontro la persona")
        } else {
            resolve(personas[id])
        }
    })
}

const obtenerInstagram = (id)=>{
    return new Promise((resolve,reject)=>{
        if (personas[id].instagram == undefined) {
            reject("No se encontro el IG")
        } else {
            resolve(personas[id].instagram)
        }
    })
}

let id=3;
obtenerPersona(id).then((persona)=>{
    console.log(persona.nombre)
    return obtenerInstagram(id)
    }).then((instagram)=>{
        console.log(instagram)
}).catch((e)=>{
    console.log(e);
})
*/

//FUNCIONES ASINCRONAS --> promesas asincronas (trabajan en tiempo real)
/*const objeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3"
};

const obtenerInformacion = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(objeto)},3000)
    })
}

// obtenerInformacion().then(resultado => console.log(resultado));

/*const mostrarRdo = async ()=>{
    resultado = await obtenerInformacion();
    console.log(resultado);
}

mostrarRdo();*/
/*
const obtenerInformacion = (text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(text)},Math.random()*200)
    })
}
//se muestra desordenado
//obtenerInformacion("1 texto").then(resultado => console.log(resultado))
//obtenerInformacion("2 tx").then(resultado => console.log(resultado))
//obtenerInformacion("3 to").then(resultado => console.log(resultado))

const mostrarData = async()=>{ //espera a que ejecute una para pasar a la otra, sirve para servidores
   data1 = await obtenerInformacion("1 texto");
   data2 = await obtenerInformacion("2 xto");
   data3 = await obtenerInformacion("3 exto");
   console.log(data1);
   console.log(data2);
   console.log(data3);
}

mostrarData();*/

//PROBLEMA COFLA 11

const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "Fisica 4",
        nota: 7
    },
    {
        nombre: "Calculo 3",
        nota: 8
    },
    {
        nombre: "Matematicas 4",
        nota: 8
    },
    {
        nombre: "BD 3",
        nota: 7
    },
    {
        nombre: "Programacion",
        nota: 9
    }
]

const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        materia = materias[id];
        if (materia == undefined) {
            reject("Materia inexistente")
        } else {
            setTimeout(()=>{resolve(materia)},Math.random()*400);
        }
    })
}

const devolverMaterias = async ()=>{
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `<p>NOMBRE MAT: ${materia[i].nombre} NOTA DE MATERIA: ${materia[i].nota}</p><br>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias();