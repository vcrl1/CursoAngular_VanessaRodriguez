interface IBook{
    id:number,
    title: string,
    author:string,
    year:number,
    editorial: string,
    numPages:number,
}

/*Se puede crear objeto a través de una interface sin métodos. 
Si queremos crear objetos que sean "Modelos de datos" que solo tienen atributos,
por ejemplo para leer/trar datos de un API REST o una URL podemos utilizar interfaces 
para declarar esos atributos y crear objetos a partir de esas interfaces de forma sencilla.
Luego los métodos y comportamiento se podrían separar a otra clase por ejemplo BookService

De esta forma tendríamos: 
*IBook:Modelo de datos (interface)
*BookService: Servicio con lógica de negocio (métodos, comportamiento) sobre objetos libro.

MVC:Modelo Vista Controlador

*/


let book1:IBook ={
    id: 0,
    title: "Sol",
    author: "Vanessa",
    year: 2020,
    editorial: "SM",
    numPages: 150
}

console.log(book1.author)


let book2:IBook={
    id: 2,
    title: "Sombras",
    author: "Sara",
    year: 2022,
    editorial: "Savia",
    numPages: 200
}

console.log(book1.numPages)
