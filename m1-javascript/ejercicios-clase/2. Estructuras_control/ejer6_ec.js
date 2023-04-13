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