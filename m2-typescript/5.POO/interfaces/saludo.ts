//Se pone I delante para saber que se trata de una interface

interface ISaludo{

    saludar():string;
    despedirse(firstName:string):string;

}


// A la hora de crear una clase implementando una interface, aparece un error. 
//Este error se resuelve con el Quick- Implementando una interface. 
class SaludoFormal implements ISaludo{  
    saludar(): string {
        return "Estimados, buenos días";
    }
    despedirse(firstName: string): string {
        return `Hasta la próxima, ${firstName}`;    }
    
}

class SaludoInformal implements ISaludo{
    saludar(): string {
        return "Qué pasa gente";
    }
    despedirse(firstName: string): string {
        return `Chao ${firstName}`;    }
}

let saludo1=new SaludoFormal()
console.log(saludo1.saludar())
console.log(saludo1.despedirse("Vanessa"))

