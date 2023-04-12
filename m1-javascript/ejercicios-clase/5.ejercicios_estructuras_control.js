/*Uso de la estructura if-else
1. Crea una variable numero y asígnale un número entero.
2. Escribe una estructura if-else que muestre en consola si el número es positivo, negativo o cero.
*/ //ES POSIBLE NO PONER LAS LLAVES!!!!
let numero = 0
if (numero >= 0) console.log("El número es positivo")
if (numero === 0) console.log("Es 0")
else console.log("El número es negativo")


/*Es posible que al dar click derecho REFACTOR y 
sobre los valores indicados en el IF, crear constantes automáticamente */
let salary = 35000
const maxSalary = 40000
const minSalary = 26000
if (salary >= minSalary && salary <= maxSalary) { console.log("El salario está dentro de los rangos exigidos") }


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
        break;
    default:
        console.log("Indique una fruta")
}

/*Uso de bucle for
1. Escribe un bucle for que muestre en consola los números del 1 al 10
*/
for (var i = 0; i < 10; i++) {
    console.log(i);
}

/* Uso de bucle while
1. Escribe un bucle while que muestre en consola los números del 1 al 10
*/
let n = 1
while (n <= 10) {
    console.log("El número es.." + n)
    n++
}

/*Uso de bucle do-while
1. Escribe un bucle do-while que muestre en consola los números del 1 al 10.
-->EJECUTA UNA VEZ AUNQUE NO CUMPLA LA CONDICIÓN
*/
let numb = 19
do {
    console.log("Otro número es..." + numb)
    numb++
} while (numb <= 10);

/*Uso de bucle for anidado
1. Escribe un bucle for anidado que muestre en consola una tabla de multiplicar del 1 al 10.
*/
let fact = 9
for (let i = 0; i < 10; i++) {
    let multi = fact * i
    console.log(`${fact}x${i}=${multi}`);
}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++)
        console.log(`La tabla ${i}x${j}=${i * j}`)
}



