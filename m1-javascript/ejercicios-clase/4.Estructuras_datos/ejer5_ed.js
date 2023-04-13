/*--5 Crear y utilizar un Set
1. Crea un Set llamado nombres y agrega tres nombres diferentes.
2. Agrega un nombre que ya esté en el Set y verifica que no se duplique.
3. Muestra en consola la cantidad de elementos en el Set.
 */
let nombres=new Set(["Vanessa","Gloria","Sara"])
nombres.add("Sara") //Al ya estar en el array, no lo incluye.
nombres.add("Marta")
console.log(nombres)
console.log("¿El array contiene Sara? "+nombres.has("Sara"))
console.log("¿Cuantos datos tiene el array? "+nombres.size)