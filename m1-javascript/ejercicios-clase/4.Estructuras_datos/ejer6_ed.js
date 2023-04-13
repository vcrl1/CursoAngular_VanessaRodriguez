/*--6 Crear y utilizar un Map
1. Crea un Map llamado capitales y agrega tres pares de países y sus capitales (por ejemplo,
España - Madrid, Francia - París, Italia - Roma).
2. Agrega un nuevo par de país y capital al Map */

let capitales=new Map([['España','Madrid'],['Francia','París'],['Italia','Roma']])
console.log(capitales)
capitales.set('Perú','Lima')
console.log(capitales)

/*EJERCICIO NOMBRES AÑADIR Y QUITAR DATOS*/
//Añadimos apellido a un nombre.
let nombres1=["Alberto","Juan","Ana","Sara"]
nombres1[3]+=" García"
console.log(nombres1)

let primerNombre=nombres1.shift()
console.log(nombres1)