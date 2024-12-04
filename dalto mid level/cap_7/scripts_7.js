//WINDOW: HEREDAN EventTarget
/*  
    window.open()
    window.close
    window.closed
    window.stop
    window.alert
    window.print
    window.prompt
    window.confirm
*/

//SCREEN
/* 
screen
screenLeft
screenTop
scrollX
scrollY
scroll()

USABLES DESDE SERVIDOR PERO NO SE USAN MUCHO
resizeBy
resizeTo
moveBy
moveTo
*/

//BARPROP Tampoco se usan mucho
/* 
locationbar
menubar
personalbar
scrollbar
statusbar
toolbar
*/

//Location
/*
    window.location.href
    window.location.hostname
    window.location.pathname
    window.location.protocol
    window.location.assign()
*/

//problema cofla
// A- indicar resolucion full hd, preguntarle si esta seguro de comprar la pc
// B- sistema con suficientes datos del sitio web

let alto = window.screen.height
let ancho = window.screen.width;

comprar = confirm(`el alto es ${alto} y el ancho ${ancho}`);


if (comprar) {
    alert("compra realizada");
} else {
    alert("compra cancelada");
}

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = "el href del sitio es: " + href + "<br> el pathname: " + pathname + "<br> el hostname: " + hostname + "<br> y el protocolo: " + protocol;

document.write(html);