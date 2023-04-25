import { ICategory } from "./category.model";
import { IFilm } from "./film.model";

let comedia: ICategory = {
    idCategory: 1,
    fullName: "Comedia",
    color: "Amarillo",
    minAge: 0,
    films:[], //Para que sea bidireccional 
}

let terror: ICategory = {
    idCategory: 2,
    fullName: "Terror",
    color: "Gris",
    minAge: 16,
    films: undefined
}

let accion: ICategory = {
    idCategory: 3,
    fullName: "Acción",
    color: "Verde",
    minAge: 7
}

let film1: IFilm = {
    idFilm: 1,
    title: "Fury",
    minutes: 120,
    rating: 7,
    year: 2018,
    category: []
}

film1.category.push(accion)
console.log(film1);


let film2: IFilm = {
    idFilm: 1,
    title: "Inside out",
    minutes: 120,
    rating: 7,
    year: 2021,
    category: [comedia, accion]
}
console.log(film2);

//Como hay dos peliculas con categoría acción, se podría filtrar por CATEGORÍA-ACCIÓN

//BIDIRECCIONAL (opcional)
//Si quieres hacer un push sobre un atributo, este tiene que existir. 


/*PRUEBA: SE ELIMINA FILMS DE LOS ATRIBUTOS DE CATEGORIA 
comedia.films?.push(aTodoGas)
console.log(comedia)

comedia.films=[]
comedia.films.push(titanic)
console.log(comedia)

*/



