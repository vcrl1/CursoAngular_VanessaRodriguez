/*Uso de la estructura switch
1. Crea una variable fruta y asígnale el nombre de una fruta.
2. Utiliza una estructura switch para determinar si la fruta es roja (manzana, fresa), amarilla
(plátano, piña) o de otro color (naranja, uva) y muestra el resultado en consola.
*/
let fruta = "Pera"
switch (fruta) {
    case "Plátano":
        console.log("Es amarilla")
    case "Manzana":
        console.log("Es roja")
    default:
        console.log("Indique una fruta")
        break;
}