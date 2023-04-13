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

for (let atributos in persona) {
  console.log(`${atributos}: ${persona[atributos]}`);
}

persona.numero=[123,234]
console.log(persona)


//FOR OF para estructura de datos.
//Ejemplo de key:nombre apellido, edad ciudad. FOR IN es para obtener atributos de un OBJETOS
for(const key in persona){
  console.log(key)
}

// FOR EACH
let personas=["Vanessa","Gloria","Alan"]
personas.forEach(persona=>console.log("Ejecutado con forEach "+persona))