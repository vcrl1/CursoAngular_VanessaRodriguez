//Ejercicio añadir IVA
let preciosSinIva=[4,6,7,100,30]
let iva=0.21
let conIva= preciosSinIva=>preciosSinIva+preciosSinIva*iva
console.log(preciosSinIva.map(conIva))

//
let ivaB=0.10
let AumentarIva= preciosSinIva.map(function(preciosSinIva){
    return preciosSinIva+preciosSinIva*ivaB
} )
console.log(AumentarIva)


// let calificaciones = [85, 90, 78, 92, 88]
// let aumentar = calificaciones.map(function (numero) {
//     return numero + 5;
// });
// console.log(aumentar)

