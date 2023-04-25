//MODIFICADORES DE ACCESO 

/*

Cuando tenemos modificadores de acceso  como por ejemplo public o private en los atributos,
podemos ponerlos directamente en el constructor y  no haria falta añadirlos fuera del constructor 
y escribir la asignación THIS de cada atributo

*/

class Company {

    //Constructor se puede poner en varias líneas para mejorar la legibilidad.
    constructor(public id: number, public cif: string, public legalName: string, public income: number, public outcome: number) {

    }

    getFullName(): string {
        return `Nombre: ${this.legalName} y CIF ${this.cif}`

    }
    getNetIncome(): number {
        return this.income - this.outcome

    }
}

const company1 = new Company(1, "54365462A", "Vanessa SL", 123000, 10000)
console.log(company1)
console.log(company1.getFullName())
console.log(company1.getNetIncome())
company1.legalName="Otra empresa SL" //Al ser un parámetro público lo puede modificar cualquiera. 
console.log(company1.getFullName())

