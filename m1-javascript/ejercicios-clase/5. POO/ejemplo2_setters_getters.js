//Ejemplo de clase con metodos encapsulados, utilizando getters y setters.
//Cuando un metodo pulico se hace grande es mejor desglosarlo en métodos más manejables, esos métodos más pequeños pueden
// ser privados para que no se accedan de forma directa.
class Ecommerce{
    enviarProducto(){
    let esAptoPorUbicacion=this.#comprobarUbicacion()
    let esAprtoPorPrecioTotal=this.#comprobarPrecioTotal()
    console.log("Productos enviados")
}
#comprobarUbicacion(){
    console.log("Comprobar ubicación")
}
#comprobarPrecioTotal(){
    console.log("Comprobar precio total")
}
}
let tienda=new Ecommerce()
tienda.enviarProducto()
tienda.comprobarPrecioTotal() //Si se pone # en el comprobarPrecioTotal