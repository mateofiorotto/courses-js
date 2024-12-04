/*class Animal {
    constructor(especie,edad,color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `<p id="mensaje">soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}</p>`;
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
}

class Perro extends Animal {
    constructor(especie,edad,color,raza) {
        super(especie,edad,color);
        this.raza = null;
    }
    set setRaza(newName){
        this.raza = newName;
    }
    get getRaza() {
        return this.raza;
    }
}

const gato = new Animal("gato",6,"negro");
const perro = new Perro("perro",5,"marron","doberman");
const pajaro = new Animal("pajaro",1,"verde");


perro.setRaza = "pedrfo";
document.write(perro.getRaza);*/

//Problema 1 celulares
//CLASE CELULARES
class Celular {
    constructor(color,peso,rdp,rdc,rdv,ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.resolucionDeVideo = rdv;
        this.ram = ram;
        this.encendido = false;
    }
    //FUNCIONES CELU:
    presionarBotonEncendido(){
        if (this.encendido == false) {
            document.write(`
            <div class="container alert alert-success" role="alert">
                Celular Encendido
            </div>`)
            this.encendido = true;
        } else {
            document.write(`
            <div class="container alert alert-danger" role="alert">
                Celular Apagado
            </div>`)
            this.encendido = false;
        }
    }
    reiniciar() {
        if (this.encendido == true) {
            document.write(`
            <div class="container alert alert-info" role="alert">
                Celular Reiniciado
            </div>`)
        } else {
            document.write(`
            <div class="container alert alert-danger" role="alert">
                el Celular esta Apagado
            </div>`)
        }
    }
    tomarFoto() {
        document.write(`
            <div class="container alert alert-warning" role="alert">
                foto tomada con una res de: ${this.resolucionDeCamara}
            </div>`)
    }
    grabarVideo() {
        document.write(`
            <div class="container alert alert-primary" role="alert">
                video grabado con una res de: ${this.resolucionDeVideo}
            </div>`)
    }
    mostrarInfoCelu(){
        return `
        Color: ${this.color}<br>
        Peso: ${this.peso}<br>
        RDP: ${this.resolucionDePantalla}<br>
        RDC: ${this.resolucionDeCamara}<br>
        RDV: ${this.resolucionDeVideo}<br>
        RAM: ${this.ram}<br>
        `;
    }
}

//CREAR CELULARES
celular1 = new Celular("rojo","150g","5'","HD","HD","2 GB");
celular2 = new Celular("negro","200g","5.2'","FHD","FHD","4 GB");
celular3 = new Celular("blanco","175g","5.1'","FHD","HD","3 GB");

//celular1.presionarBotonEncendido();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.presionarBotonEncendido();

/*document.write(
    `
    ${celular1.mostrarInfoCelu()} <br>
    ${celular2.mostrarInfoCelu()} <br>
    ${celular3.mostrarInfoCelu()} <br>
    `
);*/

//PROBLEMA 2 CELU ALTA GAMA

class CelularGamaAlta extends Celular{
    constructor(color,peso,rdp,rdc,rdv,ram,rdce){
        super(color,peso,rdp,rdc,rdv,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarLento(){
        document.write(`
        <div class="container alert alert-primary" role="alert">
           grabando en camara lenta
        </div>`)
    }
    reconocimientoFacial() {
        document.write(`
        <div class="container alert alert-warning" role="alert">
            Iniciando reconocimiento facial
        </div>`)
    }
    infoAltaGama(){
        return this.mostrarInfoCelu() + `resolucion de camara extra: ${this.resolucionDeCamaraExtra}`;
    }   
}

celularAltaGama1 = new CelularGamaAlta("rojo","250g","5.2","4k","fhd","6gb","2160px")
celularAltaGama2 = new CelularGamaAlta("negro","230g","5.1","4k","fhd","5gb","2160px")

/*document.write(`
    ${celularAltaGama1.infoAltaGama()} <br><br>
    ${celularAltaGama2.infoAltaGama()} <br>
`)*/

//PROBLEMA 3

class App {
    constructor(descargas,puntuacion,peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.pesoApp = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar(){
        if (this.instalada == false) {
            this.instalada = true;
            document.write(`
            <div class="container alert alert-success" role="alert">
                APP INSTALADA
            </div>`)
        }
    }
    desinstalar(){
        if (this.instalada == true) {
            this.instalada = false;
            document.write(`
            <div class="container alert alert-danger" role="alert">
                APP DESINSTALADA
            </div>`)
        }
    }  
    abrir(){
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            document.write(`
            <div class="container alert alert-primary" role="alert">
                APP ABIERTA
            </div>`)
        }
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            document.write(`
            <div class="container alert alert-dark" role="alert">
                APP CERRADA
            </div>`)
        }
    }

    appInfo(){
        return `Descargas: ${this.descargas}<br>
                Puntuacion: ${this.puntuacion}<br>
                Peso: ${this.pesoApp}<br>`;
    }
}

const apps = [
    app = new App("16.000","4 estrellas","20mb"),
    app2 = new App("20.000","5 estrellas","130mb"),
    app3 = new App("36.000","4 estrellas","200mb"),
    app4 = new App("10.000","3 estrellas","50mb"),
    app5 = new App("1.000","3 estrellas","5mb"),
    app6 = new App("2.000","2 estrellas","210mb"),
    app7 = new App("11.000","1 estrella","1mb")
];

for (i = 0;i < apps.length; i++) {
    document.write(
        `${app[i].appInfo()}`
    )
}
/*app.instalar();
app.abrir();
app.cerrar();
app.desinstalar();*/
