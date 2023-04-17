/*Crear clase vehículo que tenga un constructor con atributos para vehículos.
Crear métodos relacionados con vehículos(acelerar, frenar, encender, apagar) */

const MAX_SPEED = 120;
class Vehiculos {
    constructor(marca, modelo, color, caballos) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.caballos = caballos;
        this.estaEncendido = false; //el coche inicialmente está apagado
        this.velocidad = 0;
    }

    //Métodos:

    encender() {
        this.estaEncendido = true;
    }

    apagar() {
        this.velocidad=0
        this.estaEncendido = false;
        
    }

    acelerar(cantidad) {
        //To Do: introducir comprobación de límites inferior y superior
        if (cantidad <= 0) {
            return; //Este return hace salir del método
        }
        //Cantidad a superar es la velocidad límite

        if (this.velocidad + cantidad > MAX_SPEED) {
            console.log("**Se ha excedido la velocidad máxima**");
            this.velocidad=MAX_SPEED
        } else {
            console.log("#### Tu velocidad está dentro de los rangos permitidos ####")
            this.velocidad += cantidad;
        }

        //Qué pasa si el coche está apagado
        if(this.estaEncendido===false){
            console.log("Enciende el coche primero")
        }
    }

    frenar(cantidad) {
        this.velocidad -= cantidad;
    }
}


//Crear objeto
let vehiculo1 = new Vehiculos("Toyota", "Prius", "Verde", 300);
console.log(vehiculo1);

vehiculo1.encender()
console.log("¿El coche está encendido? " + vehiculo1.estaEncendido);

vehiculo1.apagar()
console.log("¿El coche está encendido? " + vehiculo1.estaEncendido);

console.log("La velocidad inicial es: " + vehiculo1.velocidad)
vehiculo1.acelerar(50);
console.log("La velocidad actual es: " + vehiculo1.velocidad)

//CASOS LÍMITES:

//1. Qué pasa si la cantidad a acelerar hace que se supere el límite de 120km/h.
vehiculo1.acelerar(30)
console.log("La velocidad tras acelerar es: " + vehiculo1.velocidad)

//2. Qué pasa si la cantidad a acelerar es negativa.
//En vez de restar, se queda tal y cómo está la velocidad. 

vehiculo1.acelerar(-70)
console.log("--Tras poner una velocidad negativa-- La velocidad es: " + vehiculo1.velocidad)


//3. Qué pasa si se quiere acelerar pero el coche está apagado. 
vehiculo1.encender() //Si no ponemos esto, no sería posible acelerar.
vehiculo1.acelerar(50)
console.log(vehiculo1.estaEncendido)

//Apagar el coche y acelerar
vehiculo1.apagar()
console.log("Hemos a pagado el coche, su velocidad es: "+ vehiculo1.velocidad)
console.log("¿Está encendido el coche? "+vehiculo1.estaEncendido)
