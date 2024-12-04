//cadenas

/*
concat

startsWith
endsWith
includes
indexOf
lastIndexOf

padStarts
padEnd
repeat

split
substring
toLowerCase
toUpperCase
toString
trim
trimEnd
valueOf

.length*/
/*
let cadena = "ABCDEFG";

resultado = cadena.substring(0,3);

document.write(resultado);
document.write("<br>");
//metodos array
//transformadores: pop, shift, push, reverse, unshift, sort, splice 
//accesores: join, slice
//bucles: filter, forEach, map

let nombres = ["pedro","maria","jorge","ana"];

arrayOrdenado = nombres.sort();

document.write(arrayOrdenado);

respuesta = nombres.filter(nombre => nombre.length > 4)

document.write("<br>", respuesta);

//math
//metodos sqrt, cbrt, max, min, random, round, fround, floor, trunc
//props pi,sqrt_2,sqrt2, e, ln2, ln10, log2e, log10e

document.write(Math.round(Math.random()*100));*/

//cofla cap 4
//primer ej perfeccionar calcu
/*
class Calculadora {
    constructor() {

    }
        sumar (num1,num2){
            return parseInt(num1) + parseInt(num2);
        }
        restar (num1,num2){
            return parseInt(num1) - parseInt(num2);
        }
        multiplicar (num1,num2){
            return parseInt(num1) * parseInt(num2);
        }
        dividir (num1,num2){
            return parseInt(num1) / parseInt(num2);
        }
        potenciar(num,exp){
            return num**exp;
        }
        raizCuadrada(num){
            return Math.sqrt(num);
        }
        raizCubica(num){
            return Math.cbrt(num);
        }
      
}

const calculadora = new Calculadora();


while (true) {
        alert("operacion a realizar");
        let operacion = prompt(`1. suma
2. resta
3. multiplicacion
4. division
5. exponencial
6. raiz cuadrada
7. raiz cubica`)

let num1, num2, num, resultado;

        if (operacion<1 || operacion>7) {
            alert("operacion no encontrada");
            resultado = null;
        } else {
            if (operacion == 6 || operacion == 7) {
                let num = prompt("Numero para raiz");
                numero = parseInt(num);
            } else {
                let num1 = prompt("Primer numero");
                let num2 = prompt("Segundo numero");
                numero1 = parseInt(num1);
                numero2 = parseInt(num2);
            }
     
        if (operacion == 1) {   
        resultado = calculadora.sumar(numero1,numero2);
      } else if (operacion == 2) {
        resultado = calculadora.restar(numero1,numero2);
      } else if (operacion == 3) {
        resultado = calculadora.multiplicar(numero1,numero2);
      } else if (operacion == 4) {
        resultado = calculadora.dividir(numero1,numero2);
      } else if (operacion == 5) {
        resultado = calculadora.potenciar(numero1,numero2);
      } else if (operacion == 6) {
        resultado = calculadora.raizCuadrada(numero);
      } else if (operacion == 7) {
        resultado = calculadora.raizCubica(numero);
      }
        alert(`tu resultado es ${resultado}`);
         break;
    }
}*/

//p2: -funcion a la que hay que pasarle materia y que devuelva profe y alumnos
/*
const obtenerInformacion = (materia)=>{
  materias = {
    fisica: ["PF. Perez","pedro","pepe","cofla","maria"],
    programacion: ["PF. Rodriguez","pedro","pepe","juan"],
    logica: ["PF. Rodriguez","pedro","pepe","juan","cofla","maria"],
    quimica: ["PF. Perez","pedro","pepe","juan","cofla","maria"]
  }
  if (materias[materia] !== undefined) {
    return [materias[materia],materia,materias];
  } else {
    return materias;
  }
}

const mostrarInformacion = (materia)=> {
  let informacion = obtenerInformacion(materia);

if (informacion !== false) {
  let profesor = informacion[0][0];
  let alumnos = informacion[0];
  alumnos.shift();
  document.write(`El profe de: ${informacion[1]}: es ${profesor}<br>
  Los alumnos: ${alumnos}<br><br>`);
}
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

const cantidadClases = (alumno)=>{
  let informacion = obtenerInformacion();
  let clasesPresentes = [];
  let cantidadTotal = 0;
  for (info in informacion) {
    if (informacion[info].includes(alumno)) {
      cantidadTotal++;
      clasesPresentes.push(info);
    }
  }
  return "cofla esta en " + cantidadTotal + " clases y esta cursando: " + clasesPresentes;
}

document.write(cantidadClases("cofla"));
*/
//p3 

let materias = {
    fisica: ["PF. Perez","pedro","pepe","cofla","maria"],
    programacion: ["PF. Rodriguez","pedro","pepe","juan"],
    logica: ["PF. Rodriguez","pedro","pepe","juan","cofla","maria"],
    quimica: ["PF. Perez","pedro","pepe","juan","cofla","maria"]
  }


const inscribir = (alumno,materia)=>{
  personas = materias[materia];
  alumnos = personas;

  if (personas.length >= 21) {
    document.write("Clases llenas");
  } else {
    personas.push(alumno);
    if (materia == "fisica") {
      materias = {
          fisica: personas,
          programacion: materias["programacion"],
          logica: materias["logica"],
          quimica: materias["quimica"]
      }
    } else if (materia == "programacion") {
      materias = {
          fisica: materias["fisica"],
          programacion: personas,
          logica: materias["logica"],
          quimica: materias["quimica"]
      }
    } if (materia == "logica") {
      materias = {
          fisica: materias["fisica"],
          programacion: materias["programacion"],
          logica: personas,
          quimica: materias["quimica"]
      }
    } if (materia == "quimica") {
      materias = {
          fisica: materias["fisica"],
          programacion: materias["programacion"],
          logica: materias["logica"],
          quimica: personas
      }
    }
    document.write("Inscripto correctamente");
  }
}

document.write(materias["fisica"] + "<br>");

inscribir("pedro","fisica")

document.write("<br>" + materias["fisica"]);