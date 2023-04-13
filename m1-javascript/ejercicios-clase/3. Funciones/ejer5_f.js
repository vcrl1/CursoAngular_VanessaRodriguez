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