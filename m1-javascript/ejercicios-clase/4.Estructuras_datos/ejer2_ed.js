/*--2 Iterar sobre un Array (dar vueltas al array)
1. Crea un array llamado numeros que contenga los números del 1 al 5.
2. Utiliza un bucle for para iterar sobre el array e imprimir cada número en consola*/
let numeros = [1, 2, 3, 4, 5]  //Hay que poner datos dentro del array...
for (let i = 0; i < numeros.length; i++) {  //Si queremos aumentar de 2 en 2 -> i+=2
    numeros[i]
    console.log(numeros[i])
}
//Sentido contrario
let numerosA = [1, 2, 3, 4, 5]  
for (let j = numerosA.length -1; j>=0; j--) {  
    numerosA[j]
    console.log("NumerosA: "+numerosA[j])
}
