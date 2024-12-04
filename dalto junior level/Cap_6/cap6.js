const hola = () =>{
    document.write("MIRA EL TITULO DE LA PÁGINA!! <br>");
    document.title = "como andas?";
    document.write(`<input type="text">`);
    document.write(`<input type="submit" value="enviar">`);
}

//ejemplo mio lo de arriba
//Tipos de nodos
/* Document (raiz)
element (definido por etiquetas html)
text: texto dentro de un nodo element considerado nuevo nodo hijo tipo texto
attribute: atributos de las etiquetas (en js es informacion asociada)
comentarios y otros generan nodos
 */

//seleccion de elementos
//document.getElementById() - document.getElementsByTagName() - querySelector() - querySelectorAll()

//definir, obtener y eliminar valores de atributos (element.)
// setAttribute() - getAttribute() - removeAttribute

//atributos globales 
//class, contenteditable, dir, id, hidden, title, style, tabindex

//atrb inputs (input.)
//className, value, type, accept, form, minLenght, placeholder, required

//atrb style 

//clases, classList y metodos
// add, remove, item, contains, replace, toggle

//obtener y modificar elemenots
//textContent: muestra todo el texto
//innerHTML: muestra todo el contenido html
//outerHTML: todo el contenido html y las etiquetas

//crear elementos
// createElements, createTextNode, createDocumentFragment, appendChild

//obtener y modificar childs
// firstChild, lastChild, firstElementChild, lastElementChild, childNodes, children

//metodos de childs (hijos)
// replaceChild - removeChild - hasChildNodes

//metodos de parents (padres)
// parentElement
// parentNode

//propiedades siblings (hermanos)
// nextSibling, previousSibling, nextElementsSibling, previousElementSibling

//nodos - extras
// closest

//problema cofla
// indicarle 20 llaves posibles y cofla debe seleccionar cual usar
// una vezseleccionada enviar datos al server y que otro programador se encargue

const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre,modelo,precio){
	img = "<img class='llave-img' src='llave.png'>";
	nombre = `<h2>${nombre}</h2>`;
	modelo = `<h3>${modelo}</h3>`;
	precio = `<p>Precio: <b>$${precio}</b></p>`;
	return [img,nombre,modelo,precio];
}


let documentFragment = document.createDocumentFragment();

for (var i = 1; i <= 20; i++) {
	let modeloRandom = Math.round(Math.random()*10000);
	let precioRandom = Math.round(Math.random()*10+30);
	let llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`,precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{
    	document.querySelector(".key-data").value = modeloRandom
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`,'flex-item');
    div.innerHTML = llave;
	documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);