// Ejemplo de clase con atributos encapsulados utilizando setters y getters
class Persona {
    #edad;
    constructor(nombre, edad) {

        this.nombre = nombre
        this.#edad = edad
    }
    //método para obtener los atributos privados
    get edad() {
        return this.#edad;
    }
    set edad(nuevaEdad) {    //se tiene que poner SET EDAD () para encapsular y poder modificar un atributo privado
        if (nuevaEdad >= 18) {
            this.#edad = nuevaEdad
        }

    }
}

let persona1 = new Persona("Vanessa", 28)
console.log(persona1)
persona1.edad = 3 //asignación directa, funciona si el atributo es publico
console.log(persona1.edad) //3 //Una vez ya encapsulado ya saldría la edad asignada 

//Para que no suceda esto, hay que ENCAPSULAR, hay que pone # delante del atributo, pasa a ser PRIVADO
// Si ponemos _ es para tener en cuenta de no modificar

