//1. Crear variables y asignarles valores
let nombre="Vanessa"
let edad=28
let esEstudiante= true
console.log("Nombre: "+nombre+", "+"Edad: "+edad +", "+"¿Es estudiante?: "+esEstudiante)
//2.  Operaciones matemáticas básicas
let num1=5
let num2=9
console.log("Suma de: "+num1+" y "+num2+" es igual a: "+(num1+num2))
console.log("Resta de: "+num1+" y "+num2+" es igual a: "+ (num1-num2))
console.log("Multiplicación de: "+num1+" y "+num2+" es igual a: "+ (num1*num2))
console.log("División de: "+num1+" y "+num2+" es igual a: "+ (num1/num2))
//3.Concatenación de strings
let saludo="Hola"
let name="Vanessa"
console.log(`¡${saludo}, ${name}!`)
//4. Conversión de tipos
let numeroComoString="50"
let numero=parseInt(numeroComoString)
console.log(typeof numero)
console.log(typeof numeroComoString)
console.log(numero+5)
//5. Operadores de comparación
let valor1=9
let valor2=15
let comparacion= valor1 ==valor2
let igualdad= valor1 !=valor2
let menor= valor1 <valor2
let mayor= valor1 >valor2
let menorIgual= valor1 <=valor2 
let mayorIugal =valor1>=valor2 
console.log(`¿Son iguales?: ${comparacion} 
¿Son distintos? ${igualdad} 
¿El primer valor es menor que el segundo valor? ${menor}
¿El primer valor es mayor que el segundo valor? ${mayor}
¿El primer valor es menor o igual que el segundo valor? ${menorIgual}
¿El primer valor es mayor o igual que el segundo valor? ${mayorIugal}`)
//6. Operadores lógicos
condicion1= "1"
condicion2= "2"
condicion3= "1"
console.log(`¿Son iguales las 3 condiciones? ${condicion1&&condicion2&&condicion3}
¿Hay alguna igual de las 3 condiciones? ${condicion1||condicion2||condicion3}
El contrario de la condicion 1 es: ${!condicion1}
El contrario de la condicion 2 es: ${!condicion2}
El contrario de la condicion 3 es: ${!condicion3}`)