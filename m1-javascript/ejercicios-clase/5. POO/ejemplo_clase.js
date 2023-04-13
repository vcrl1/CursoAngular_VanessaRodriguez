class Computer{
    fabricante="AA"
    modelo="JK"
}
const computer1 = new Computer();
computer1.fabricante="BB"
console.log("El fabricante del ordenador 1 es "+computer1.fabricante)
const computer2 = new Computer();
computer2.modelo="BVV"
console.log("El modelo del ordenador 2 es "+computer2.modelo)

console.log("Ordenador 1: fabricante: "+computer1.fabricante+" y modelo: "+computer1.modelo)
console.log("Ordenador 2: fabricante: "+computer2.fabricante+" y modelo: "+computer2.modelo)
console.log("Características iniciales de fabricante y modelo "+Computer)