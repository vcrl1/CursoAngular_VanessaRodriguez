class SmartPhone {
    constructor(modelo, ram, version, isAndroid) {
        this.modelo = modelo;
        this.ram = ram;
        this.version = version;
        this.isAndroid = isAndroid
    }
}

const movil1 = new SmartPhone("Motorola", 8, 10.2, true)
console.log(movil1)
const movil2 = new SmartPhone("Xiaomi", 4, 14.2, true)
console.log(movil2)