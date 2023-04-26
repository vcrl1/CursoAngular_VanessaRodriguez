import { IEvent } from "./event.model";
import { EventService } from "./event.service";

let eventservice1=new EventService()

//Agenda vacía porque no hay eventos
console.log(eventservice1.findAll());

//Creamos eventos: 
let event1:IEvent={
    id: -1, //-1 porque es obligatorio y el id se autogenera en save()
    title: "Estudiar JS y typeScript ", //Tiene que estar en 10 y 50 caracteres. 
    priority: "Alta",
    date: new Date("2023-04-28"),
    description: "Estudiar js y typescript para examen"
}
let event2:IEvent={
    id: -1,
    title: "Examen",
    priority: "Alta",
    date: new Date("2023-05-03"),
    description: "Js y typescript"
}

console.log(eventservice1.save(event1))
