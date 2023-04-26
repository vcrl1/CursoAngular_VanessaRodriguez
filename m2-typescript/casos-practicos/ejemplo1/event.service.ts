import { IEvent } from "./event.model"

export class EventService {
    private events: Array<IEvent> = []
    private palabraProhibida: string[] = ["Palabra1", "Palabra2", "Palabra3"]

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
        if (event.id!==-1) {
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
    public update(event: IEvent): IEvent {
        if (!event.id)
            throw new Error("El id tiene que ser válido")
        let position = this.events.findIndex(
            currentEvent => currentEvent.id === event.id
        )
        if (position === -1)
            throw new Error("El id no se encuentra")

        if (this.isValid(event))
            //Se pone position en vez del número de posición manualmente
            this.events[position].title = event.title
        this.events[position].id = event.id
        this.events[position].description = event.description
        this.events[position].date = event.date
        this.events[position].priority = event.priority

        //Al poner el punto aparecen las opciones que pueden mostrar. 
        return event;
    }

    public deleteById(event: IEvent): boolean {
        //Comprobar si se encuentra el id
        let position = this.events.findIndex(
            currentEvent => currentEvent.id === event.id
        )
        if (position === -1)
            throw new Error("El id no se encuentra")

        //Si length=0 no se ha borrado nada (false),length=1 se ha borrado un objeto (true), length>1 se ha borrado más de un objeto (false)
        return this.events.splice(position, 1).length === 1; //El 1 es el numero de posiciones que quieres eliminar desde la posición en la que estás
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
        for (const word of this.palabraProhibida) { //Hemos puesto el array arriba (linea 5)
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