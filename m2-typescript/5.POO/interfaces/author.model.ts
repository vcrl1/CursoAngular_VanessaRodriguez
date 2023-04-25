interface IAuthor {
    idAuthor:number,
    firstName:string,
    dateFrom:Date,
    dateTo:Date|undefined,
    city:string,
    bio:string
}

let author1:IAuthor={
    idAuthor: 1,
    firstName: "Sara",
    dateFrom: new Date(2000,1,22),
    dateTo: undefined,
    city: "Madrid",
    bio: "Escribe libros de aventura."
}

let author2:IAuthor={
    idAuthor: 2,
    firstName: "Ana",
    dateFrom: new Date(2010,1,20),
    dateTo: undefined,
    city: "Sevilla",
    bio: "Escribe poesía."
}