//Agrega a la pantalla el valor del boton de la calculadora presionado
function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

//borrar
function borrar(){
    document.getElementById('pantalla').value = "";
}


//ejecuta los calculos tomando el valor de la pantalla
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}