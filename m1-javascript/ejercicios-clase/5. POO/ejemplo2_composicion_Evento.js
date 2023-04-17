//Un evento puede tener una lista de invitados
class Usuario{
    constructor(nombre, email){
        this.nombre=nombre
        this.email=email
    }
}

let user1= new Usuario("Vanessa","vcrl1@gmail.com")
let user2= new Usuario("Sara","sara1@gmail.com")
let user3= new Usuario("Eli","eli@gmail.com")

class Evento{
    constructor(titulo, fecha, adminsUser){
        this.titulo=titulo
        this.fecha=fecha
        this.adminsUser=adminsUser
        this.usuarios=[];
    }

    //Método para añadir un invitado
    addUser(user){
        this.usuarios.push(user)
    }

}

let event1= new Evento("Clase de JavaScript", new Date(), user1);
event1.addUser(user2)
event1.addUser(user3)

console.log(event1)
console.log(`Hay un total de ${event1.usuarios.length} en la reunión`)