//Interface: contrato, declara las operaciones o acciones(métodos)

interface IPersonaService {
    guardarPersona(nif: string): void;
    modificarPersona(nifAntiguo: string, nifNuevo: string): void;
    eliminarPersona(nif: string);
}


//Clase:implementa los métodos de la interfaz
class PersonaServiceArray implements IPersonaService {

    //personas: Array string[] = [] //Array
    personas: Array<string> = [] //Array

    guardarPersona(nif: string): void {
        this.personas.push(nif);
    }
    modificarPersona(nifAntiguo: string, nifNuevo: string): void {
        throw new Error("Method not implemented.");
    }
    eliminarPersona(nif: string) {
        throw new Error("Method not implemented.");
    }
}

//Creamos otra clase.
class PersonaServiceSet implements IPersonaService{
    
personas: Set<string>=new Set()//Conjunto de datos

    guardarPersona(nif: string): void {
        throw new Error("Method not implemented.");
    }
    modificarPersona(nifAntiguo: string, nifNuevo: string): void {
        throw new Error("Method not implemented.");
    }
    eliminarPersona(nif: string) {
        throw new Error("Method not implemented.");
    }
    
}
