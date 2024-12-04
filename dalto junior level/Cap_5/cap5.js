//Console
//Registros 
//assert - clear - error - info - log - table - columns - warn - dir

//Conteo
//count - countReset

//Agrupacion
// group - groupEnd - groupCollapsed

//Temporizador
// time - timeEnd - timeLog

//p1 solicitar datos y ver si aprueba o no - mostrat con colores en consola
let materias = {
    fisica: [90,6,3],
    matematica: [84,8,2],
    logica: [92,8,4],
    quimica: [96,8,4],
    calculo: [91,6,3],
    programacion: [79,7,4],
    biologia: [75,2,2],
    bbdd: [98,9,1],
    algebra: [100,10,4]
}

const aprobo = ()=> {
    for (materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materia);

        if (asistencias >= 90) {
            console.log("%c A: Ok", "color:green") //asistencias
        } else {
            console.log("%c A: No", "color:red")
        }

        if (promedio >= 7) {
            console.log("%c P: Ok", "color:green") //promedio
        } else {
            console.log("%c P: no", "color:red")
        }

        if (trabajos >= 3) {
            console.log("%c TP: Ok", "color:green") //tps
        } else {
            console.log("%c TP: No", "color:red")
        }
    }
}

aprobo();

//p2 organizar actividades, utilizar consola para organizar, tiempo x tarea no debe superar 4hs

//actividades (min x dia)
// 30 cosas casa
// 100 tps
// 10 descanso
// 100 estudiar
// 240 trabajo

let trabajo = "240 min trabajo"
let estudio = "100 min estudio"
let tp = "100 min trabajos practicos"
let homework = "30 min tareas casa"
let descanso = "10 min descanso"

for (let i = 0; i < 14; i++) {
    if (i == 0) {
        console.groupCollapsed("Semana 1")
    }
    console.log("TAREAS");
    console.groupCollapsed("Dia ", i+1);
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if (i == 6) {
        console.groupEnd()
        console.groupCollapsed("Semana 2");
    }
}
console.groupEnd();
console.groupEnd();
