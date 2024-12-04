/*function enviarWp() {
    window.location.href='https://wa.me/123456789';
}*/



 const botonDeWp = document.getElementById("botonWp");


 //primera forma: function comun
/*function enviarWp() {
    var telefono = '5493815662362';
    var enlaceWhatsAppWeb = 'https://web.whatsapp.com/send?phone=' + telefono;
    window.open(enlaceWhatsAppWeb, '_blank');
  }

 
  botonDeWp.onclick = enviarWp; */

  //segunda forma arrow function:
  const enviarWhatsapp = ()=> {
    var telefono = '5493815662362';
    var enlaceWhatsAppWeb = 'https://web.whatsapp.com/send?phone=' + telefono;
    window.open(enlaceWhatsAppWeb, '_blank');
  }

   botonDeWp.onclick = enviarWhatsapp;

   //cofla

   let free = false;

   const validarCliente = (time)=>{
      let edad = prompt("Edad:")
      if (edad>18) {
        if(time >= 2 && time < 7 && free == false) {
          alert("pasa gratis");
          free = true;
        } else {
          alert(`son las ${time}:00 y podes pasar pagando la entrada`);
        }
      } else {
        alert("Sos menor, no pasas!")
      }
   }

   /*validarCliente(22);
   validarCliente(23);
   validarCliente(0);
   validarCliente(1);
   validarCliente(2);
   validarCliente(3);
   validarCliente(4);*/

   //problema 2

   //let cantidad = prompt("cant de alumnos");
   /*let alumnosTotales = [];

   for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre alumno " + (i+1)), 0];
   }

    const tomarAsistencia = (nombre,p)=>{
        let presencia = prompt(nombre);
        if (presencia == "p" || presencia == "P") {
          alumnosTotales[p][1]++;
        }
    }

    for (i = 0; i < 30; i++) {
      for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
      }
    }

    for (alumno in alumnosTotales) {
        let resultado = `${alumnosTotales[alumno][0]} <br>
        Presentes: ${alumnosTotales[alumno][1]} <br>
        Ausentes: ${30 - parseInt(alumnosTotales[alumno][1])}`;

        if (30 - alumnosTotales[alumno][1] >  18) {
          resultado += "reprobado por inasistencias<br><br>";
        } else {
          resultado += "<br></br>";
        } document.write(resultado);
      }*/

      //problema 3 calcu

      const sumar = (num1,num2)=>{
        return parseInt(numero[0]) + parseInt(numero[1]);
      }
      const restar = (num1,num2)=>{
        return parseInt(num1) - parseInt(num2);
      }
      const multiplicar = (num1,num2)=>{
        return parseInt(num1) * parseInt(num2);
      }
      const division = (num1,num2)=>{
        return parseInt(num1) / parseInt(num2);
      }

        alert("operacion a realizar");
        let operacion = prompt("1 suma - 2 resta - 3 multiplicar - 4 dividir")
        let numero = [];

      if (operacion == 1) {
        numero[0] = prompt("Primer numero a sumar");
        numero[1] = prompt("segundo numero a sumar");
        resultado = sumar(numero[0],numero[1]);
        alert(`tu resultado es ${resultado}`);
      } else if (operacion == 2) {
        let numero1 = prompt("Primer numero a restar");
        let numero2 = prompt("segundo numero a restar");
        resultado = restar(numero1,numero2);
        alert(`tu resultado es ${resultado}`);
      } else if (operacion == 3) {
        let numero1 = prompt("Primer numero a multiplicar");
        let numero2 = prompt("segundo numero a multiplicar");
        resultado = multiplicar(numero1,numero2);
        alert(`tu resultado es ${resultado}`);
      } else if (operacion == 4) {
        let numero1 = prompt("Primer numero a dividir");
        let numero2 = prompt("segundo numero a dividir");
        resultado = dividir(numero1,numero2);
        alert(`tu resultado es ${resultado}`);
      } else {
        alert("Operacion no encontrada");
      }
