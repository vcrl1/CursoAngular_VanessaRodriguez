/*Crear una función simple
1. Escribe una función llamada saludar que acepte un argumento nombre y muestre en consola
un saludo personalizado, por ejemplo, "¡Hola, Juan!"
*/
function saludar(nombre) {
    console.log(`Hola,${nombre}`)
}
saludar(`Vanessa`)

/*Crear una función con múltiples argumentos y retorno
1. Escribe una función llamada sumar que acepte dos argumentos a y b, calcule su suma y
devuelva el resultado.
*/
function sumar(num1, num2) {
    console.log("La suma es " + (num1 + num2))
}
sumar(9, 8)

/*Crear una función anónima y asignarla a una variable
1. Escribe una función anónima que acepte un número y devuelva su cuadrado. Asigna esta
función a una variable llamada calcularCuadrado.
*/

let calcularCuadrado = function (numb) {
    return numb * numb
}
console.log("El cuadrado es " + calcularCuadrado(5))


/* Crear una función de )flecha
1. Escribe una función de flecha llamada multiplicar que acepte dos argumentos a y b, y devuelva
su producto.)
*/

let multiplicacion = (a, b) => a * b;
console.log(`La multiplicación es ${multiplicacion(5, 6)}`)


/*Crear una función que utilice otra función
1. Escribe una función llamada operacion que acepte tres argumentos: a, b y una función
operador. La función operacion debe ejecutar la función operador con los argumentos a y b y
devolver el resultado
*/
function operacion(a, b, operador) {
    operador(a + b)
}
operacion(5, 7, function (resultado) {
    console.log(resultado)
})

/*OTRA FORMA EXPLICADA */

function operacionAlan(number1,number2, funcionOperador){
    let result=funcionOperador(number1, number2)
    console.log(`Resultado de operacion ${number1} y ${number2} = ${result}`)
}
operacionAlan(5,3, (number1,number2)=>number1*number2)


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
console.log(resultadoCrearMulti(5));