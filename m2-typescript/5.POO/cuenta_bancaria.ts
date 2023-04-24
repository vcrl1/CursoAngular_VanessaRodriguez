class CuentaBancaria {

    constructor(
        private id: number,
        private titular: string,
        private saldo: number,
        // private age: number,
        private fechaNac: Date,
        private pin: string) { }

    getSaldo() {
        return this.saldo
    }
    setSaldo(saldo: number) {
        this.saldo = saldo
    }

    saldoPostIntereses() {
        let intereses = 0.05
        return this.saldo * intereses + this.saldo
    }

    edad() {
        return (new Date()).getFullYear() - this.fechaNac.getFullYear();
    }


    // retirarSaldo() {
    //     if (this.age >= 18) {
    //         let cajero = 1000
    //         return this.saldo - cajero
    //     } else {
    //         console.log("No puedes retirar dinero")
    //         return;
    //     }
    // }

    // retirarDinero() {
    //     if (this.edad() >= 18) {
    //     } else if (this.saldo > 3000) {
    //         let efectivo = 2000
    //         return this.saldo - efectivo
    //     } return "NO PUEDES SACAR DINERO, eres menor de edad."
    // }

    incrementarSaldo(cantidad: number): number {
        this.saldo += cantidad
        return this.saldo
    }

    public retirarCajero(cantidad: number, pin: string): number {
        if (!this.esPinValido(pin)||this.edad() >= 18)
            return 0;

        if (cantidad > this.saldo) {
            let saldoAux = this.saldo
            this.saldo = 0
            return saldoAux
        }
        this.saldo -= cantidad
        return cantidad;
    }

    // public esMayorDeEdad():boolean{
    //     let birthYear=this.fechaNac.getFullYear()
    //     let fechaActual=new Date()
    //     let currentYear=fechaActual.getFullYear()
    //     return currentYear-birthYear>=18

    // }

    private esPinValido(pin: string): boolean {
        return this.pin === pin
    }

    public consultarSaldo():number{
        return this.saldo;
    }

}

const cuenta1 = new CuentaBancaria(1, "Vanessa Rodríguez", 10000, new Date("1994-11-01"), "1234")
console.log(cuenta1);
cuenta1.setSaldo(15000)
console.log("Cuenta 1 tiene SALDO TOTAL: " + cuenta1.getSaldo())
console.log("Cuenta 1 tiene SALDO TRAS INTERESES: " + cuenta1.saldoPostIntereses())
// console.log("La cuenta 1 tiene: "+ cuenta1.retirarSaldo())
// console.log("Cuenta 1 tiene TRAS HABER RETIRADO DINERO: " + cuenta1.retirarDinero())

const cuenta2 = new CuentaBancaria(1, "Sara Lopez", 1000, new Date("1992-01-20"), "2345")
// console.log("Cuenta 2 tiene: " + cuenta2.retirarDinero())
console.log("Cuenta 2 TRAS INCREMENTAR SALDO es: " + cuenta2.incrementarSaldo(899))

const cuenta3 = new CuentaBancaria(1, "Karina Sierra", 2000, new Date("2009-03-08"), "3456")
// console.log("Cuenta 3 " + cuenta3.retirarDinero())


const cuenta4 = new CuentaBancaria(1, "Noemi Buele", 6000, new Date("2000-00-25"), "4567")
//Retirar dinero con pin incorrecto
console.log("Cuenta 4 PIN INCORRECTO, lo que podemos sacar es: " + cuenta4.retirarCajero(50,"4234")) //0
//Retirar dinero siendo menor de edad 
console.log("Cuenta 4 MENOR EDAD, lo que podemos sacar es: " + cuenta4.retirarCajero(50,"4567")) //0
//Retirar dinero cantidad menor que 0
console.log("Cuenta 4 MENOR 0, lo que podemos sacar es: " + cuenta4.retirarCajero(-50,"4567")) 
//Retirar dinero cantidad mayor que saldo
console.log("Cuenta 4 MAS QUE SALDO, lo que podemos sacar es: " + cuenta4.retirarCajero(50000,"4567")) 


console.log("Saldo cuenta 3 es: "+cuenta3.consultarSaldo());





