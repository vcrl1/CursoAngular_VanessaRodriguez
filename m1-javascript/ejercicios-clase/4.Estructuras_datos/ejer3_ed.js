/*--3 Uso de map, filter y reduce en Arrays
1. Crea un array llamado calificaciones que contenga calificaciones numéricas (por ejemplo, 85,
90, 78, 92, 88).
2. Utiliza el método map para aumentar cada calificación en 5 puntos.
3. Utiliza el método filter para quedarte solo con las calificaciones mayores o iguales a 90.
4. Utiliza el método reduce para calcular la calificación promedio */

//--vcrl
let calificaciones = [85, 90, 78, 92, 98]
let aumentar = calificaciones.map(function (numero) {
    return numero + 5;
});
console.log("Las notas aumentadas 5 puntos vcrl: "+aumentar)
// Resolución ALAN 
let sumar5= calificaciones=>calificaciones+5;
console.log("Forma ALAN aumentadas 5 puntos "+ calificaciones.map(sumar5))

//--vcrl. Programación concisa
let filtrar = calificaciones.filter(function (numero) {
    return numero >= 90
});
console.log(`Las notas con filter ${filtrar}`)

//Resolución ALAN. Programación imperativa con for of
let calificacionesAltas=[]
for(const calification of calificaciones){
    if (calification>=90) {
    calificacionesAltas.push(calification)
    }
}
console.log(`Las calificaciones altas con for of ${calificacionesAltas}`);
//Resolución ALAN. con filter y función flecha
let calificacionesAltas2=calificaciones.filter(calificaciones=>calificaciones>=90)
console.log(`Calificaciones altas con funcion flecha son: ${calificacionesAltas2}`)

//--vcrl
let reducir=calificaciones.reduce(function(acumulador, numero){
    return acumulador+numero/calificaciones.length
},0)
console.log("Las notas reducidas a promedio es "+ reducir)

//Resolución ALAN. Con for of
let sumatorio=0
for(const califications of calificaciones){
sumatorio+=califications
}
let media=sumatorio/calificaciones.length
console.log("Media con for of "+media)
