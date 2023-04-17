
let fechaActual= Date()
console.log(fechaActual)

//YY-MM-DD
let fechaNacimiento=new Date("1994-12-01")
console.log(fechaNacimiento)

//Extraer el día
fechaNacimiento.getDay()
console.log(fechaNacimiento.getDay())

//Estraer el año 
console.log(fechaNacimiento.getFullYear())

//Estraer el mes - Empieza de 0 y va hasta mes 11. Por lo que diciembre es mes 11
console.log(fechaNacimiento.getMonth())

// 

let navidad= new Date(1994,11,1,23,45)
console.log(navidad)