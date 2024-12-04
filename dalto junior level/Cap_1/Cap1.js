//cofla 3 usd, roberto 1.5 usd, pedro 1.7 usd

dineroCofla = prompt("Dinero disponible de Cofla:");
dineroRoberto = prompt("Dinero disponible de Roberto:");
dineroPedro = prompt("Dinero disponible de Pedro:");

dineroCofla = parseInt(dineroCofla);

//dineroCofla
if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("a COFLA LE Alcanza para el helado de agua")
    alert("a COFLA LE Sobra " + (dineroCofla - 0.6))
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("a COFLA LE Alcanza para el helado de crema")
    alert("a COFLA LE Sobra " + (dineroCofla - 1))
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("a COFLA LE Alcanza para el helado de crema doble")
    alert("a COFLA LE Sobra " + (dineroCofla - 1.6))
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("a COFLA LE Alcanza para el helado de crema triple")
    alert("a COFLA LE Sobra " + (dineroCofla - 1.7))
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("a COFLA LE Alcanza para el helado de bon'o'bon")
    alert("a COFLA LE Sobra " + (dineroCofla - 1.8))
} else if (dineroCofla >= 2.9) {
    alert("a COFLA LE Alcanza para el helado confitero o 1/4kg")
    alert("a COFLA LE Sobra " + (dineroCofla - 2.9))
} else {
    alert("a COFLA no le alcanza para nada");
}

//dineroRoberto
if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("a ROBERTO LE Alcanza para el helado de agua")
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("a ROBERTO LE Alcanza para el helado de crema")
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("a ROBERTO LE Alcanza para el helado de crema doble")
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("a ROBERTO LE Alcanza para el helado de crema triple")
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("a ROBERTO LE Alcanza para el helado de bon'o'bon")
} else if (dineroRoberto >= 2.9) {
    alert("a ROBERTO LE Alcanza para el helado confitero o 1/4kg")
} else {
    alert("a ROBERTO no le alcanza para nada");
}

//dineroPedro
if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("a PEDRO LE Alcanza para el helado de agua")
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("a PEDRO LE Alcanza para el helado de crema")
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("a PEDRO LE Alcanza para el helado de crema doble")
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("a PEDRO LE Alcanza para el helado de crema triple")
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("a PEDRO LE Alcanza para el helado de bon'o'bon")
} else if (dineroPedro >= 2.9) {
    alert("a PEDRO LE Alcanza para el helado confitero o 1/4kg")
} else {
    alert("a PEDRO no le te alcanza para nada");
}