import { IEvent } from "./event.model"

export class EventService {
    events: Array<IEvent> = []

    public findAll(): Array<IEvent> {
        return new Array(...this.events); //Devolver una copia del array events
    };
    public findById(id: number): IEvent | undefined {
        return this.events.find(evento => evento.id === id); //find devuelve un objeto IEvent  

    }
    public findAllByPriority(priority: string): Array<IEvent> {
        return this.events.filter(evento => evento.priority === priority) //filter devuelve un array de eventos 
    }





    public save(event: IEvent): IEvent {
        if (event.id) {
            throw new Error("Para guardar nuevo evento no se añade id");
        }
        //Método para comprobar si existe otro evento con el mismo título, en ese caso lanzar un error
        if (!this.isValid(event)) //si el evento es incorrecto no lo guarda
            throw new Error("Datos incorrectos")
        //generar nuevo id y asignarlo al event que se quiere guardar
        event.id = this.generateNextId()
        //guardar 
        this.events.push(event)
        return event;
    }
    private isValid(event: IEvent): boolean {
        //1.Validacion 1: title tenga longitud entre 10 y 50
        if (event.title.length < 10 || event.title.length > 50)
            return false;
        //Tienen que ser returns false porque sino no hace las 3 validaciones que necesitamos. 
        //Si el return en true, se quedará ahí y no podrá continuar

        //2.Validacion 2:  title no esté ocupado ya
        for (const actualEvent of this.events) {//Este actualEvent tiene que ser distinto de event porque sino pisariamos el nuevo evento que creo
            if (actualEvent.title === event.title)
                return false;
        }

        //3.Validacion 3: title no contenga una palabra prohibida
        let palabraProhibida: string[] = ["Palabra1", "Palabra2", "Palabra3"]
        for (const word of palabraProhibida) {
            if (event.title.includes(word))
                return false;
        }

        return true; //si no se ha cumplido ninguna de las 3 anteriores return true
    }

    private generateNextId(): number {
        let maxId = 0;
        for (const event of this.events) {
            if (event.id > maxId)
                maxId = event.id;
        }
        return ++maxId;
    }
}