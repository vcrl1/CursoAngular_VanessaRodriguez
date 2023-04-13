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
