/*--1  Crear y manipular un Array
1. Crea un array llamado frutas que contenga tres frutas: "manzana", "plátano" y "naranja".
2. Agrega una fruta al final del array usando el método push.
3. Elimina la primera fruta del array usando el método shift.
4. Muestra en consola la longitud del array. */

let frutas = [] // let frutas = ["Manzana", "Plátano","Naranja"] <-- funcionan igual
frutas[0] = "Plátano"
frutas[1] = "Manzana"
frutas[2] = "Naranja"
console.log(frutas)

/*--2 Iterar sobre un Array (dar vueltas al array)
1. Crea un array llamado numeros que contenga los números del 1 al 5.
2. Utiliza un bucle for para iterar sobre el array e imprimir cada número en consola*/
let numeros = [1, 2, 3, 4, 5]  //Hay que poner datos dentro del array...
for (let i = 0; i < numeros.length; i++) {
    numeros[i]
    console.log(numeros[i])
}


/*--3 Uso de map, filter y reduce en Arrays
1. Crea un array llamado calificaciones que contenga calificaciones numéricas (por ejemplo, 85,
90, 78, 92, 88).
2. Utiliza el método map para aumentar cada calificación en 5 puntos.
3. Utiliza el método filter para quedarte solo con las calificaciones mayores o iguales a 90.
4. Utiliza el método reduce para calcular la calificación promedio */
let calificaciones = [85, 90, 78, 92, 88]
let aumentar = calificaciones.map(function (numero) {
    return numero + 5;
});
console.log(aumentar)
let filtrar = calificaciones.filter(function (numero) {
    return numero >= 90
});
console.log(filtrar)
let reducir=calificaciones.reduce(function(acumulador, numero){
    return acumulador+numero/calificaciones.length
},0)
console.log(reducir)


/*--4 Crear y manipular un Objeto----> let persona { nombre:"a",}
1. Crea un objeto llamado persona con las propiedades nombre, apellido, edad y ciudad.
2. Cambia el valor de la propiedad ciudad a una nueva ciudad.
3. Agrega una propiedad ocupacion al objeto.
4. Muestra en consola todas las propiedades y sus valores usando un bucle for…in */
let persona={
    nombre:'Vanessa',
    apellido:'Rodríguez',
    edad:28,
    ciudad:'Madrid'
};
console.log(persona)
persona.ciudad='Pamplona'
console.log(persona)
persona.ocupacion='Admin'
console.log(persona)


for (let property in persona) {
  console.log(`${persona.property}: ${object[property]}`);
}


/*--5 Crear y utilizar un Set
1. Crea un Set llamado nombres y agrega tres nombres diferentes.
2. Agrega un nombre que ya esté en el Set y verifica que no se duplique.
3. Muestra en consola la cantidad de elementos en el Set.
 */

/*--6 Crear y utilizar un Map
1. Crea un Map llamado capitales y agrega tres pares de países y sus capitales (por ejemplo,
España - Madrid, Francia - París, Italia - Roma).
2. Agrega un nuevo par de país y capital al Map */