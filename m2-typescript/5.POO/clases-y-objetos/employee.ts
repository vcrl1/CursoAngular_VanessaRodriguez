//Crear clase Employee con atributos : id, firstName, salary, company
class Employee{

//Atributos
id:number
firstName:string
salary:number
company:string| undefined

//Constructor
constructor(id:number, firstName:string, salary:number, company:string){
    this.id=id
    this.firstName=firstName
    this.salary=salary
    this.company=company
}

//Métodos
sayHello():string{
    return `Hola mi nombre es ${this.firstName} y cobro ${this.salary}`
}



}

const employee1= new Employee(54, "Sara", 35000, "Accenture")
console.log(employee1);
console.log(`Mi salario es de ${employee1.salary} euros`);
console.log(employee1.sayHello())

