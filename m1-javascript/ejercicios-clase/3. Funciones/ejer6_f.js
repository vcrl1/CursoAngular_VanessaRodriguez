/*Crear una función que devuelve otra función
1. Escribe una función llamada crearMultiplicador que acepte un argumento factor. La función
debe devolver otra función que acepte un número y devuelva el resultado de multiplicar ese
número por el factor dado
*/
function crearMultiplicador(factor) {
    return function multi (a) {
        return factor*a;
    }
}
let resultadoCrearMulti=crearMultiplicador(9)
console.log("Resultado "+resultadoCrearMulti(5));
console.log("Resultado como tabla "+resultadoCrearMulti(1));
console.log("Resultado como tabla "+resultadoCrearMulti(2));
console.log("Resultado como tabla "+resultadoCrearMulti(3));
console.log("Resultado como tabla "+resultadoCrearMulti(4));

console.log("Otra forma de hacerlo "+ crearMultiplicador(5)(8));