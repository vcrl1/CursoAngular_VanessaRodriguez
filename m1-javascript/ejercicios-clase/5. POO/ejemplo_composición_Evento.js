//Ejemplo: 
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
    }

}

let event1=new Evento("Reunión de desarrollo",new Date("2023-04-19"), user1)
console.log(event1)
console.log(event1.fecha)
console.log(event1.titulo)
console.log(event1.adminsUser.email)
console.log(event1.adminsUser.nombre)

// Cambiar el admin del evento1
event1.adminsUser=user2
console.log(event1)


// class Evento{
//     constructor(titulo, fecha, admin, invitados){
//         this.titulo=titulo
//         this.fecha=fecha
//         this.invitados=invitados
//     }
// }