/*

CASO PRACTICO INDIVIDUAL

1. Crear clase Tarea: constructor con atributos
2. Crear clase TareaService o TareaDatabase que es una clase con métodos para simular una base de datos, dentro tiene
un array de Tareas
3. Crear objetos de ambas clases y probar el programa

*/

class Tarea {

    constructor(id, title, content, status, importance, date) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.status = status;
        this.importance = importance;
        this.date = date;
    }
}

/*
Crear una clase que represente un servicio de tareas que tenga como atributo una estructura de
datos de tareas y métodos para gestionar las tareas:

    Operaciones CRUD: Create, Retrieve, Update, Delete
• Añadir una nueva tarea OK
• Devolver todas las tareas OK
* Devolver tarea por id OK
• Devolver todas las tareas filtrando por estado OK
• Devolver todas las tareas filtrando por prioridad OK
• Actualizar una tarea
• Eliminar una tarea
*/

class TareaDatabase {

    constructor() {
        this.tareas = [];
    }

    addTarea(tarea) {
        tarea.id = this.#generateNextId2();
        this.tareas.push(tarea);
        return tarea;
    }

    /* Primero calcula cuál es el id (int) más alto de todos los ids pertenecientes*/
    #generateNextId2() {

        if (this.tareas.length === 0)
            return 1;

        let ids = this.tareas.map(tarea => tarea.id);

        // Obtener el id máximo utilizando Math.max()
        let maxId = Math.max(...ids);
        return ++maxId;

    }


    findAll() {
        return this.tareas;
    }

    filterById(id) {
        let results = this.tareas.filter(tarea => tarea.id === id);
        if (results.length === 1)
            return results[0];
    }

    filterByStatus(status) {
        return this.tareas.filter(tarea => tarea.status === status);
    }

    filterByImportance(importance) {
        return this.tareas.filter(tarea => tarea.importance.includes(importance));
    }


    update(tarea) {

        let tareaIndex = this.tareas.findIndex(
            currentTarea => currentTarea.id === tarea.id
        );
        if (tareaIndex === -1)
            return undefined;

        this.tareas[tareaIndex].title = tarea.title;
        this.tareas[tareaIndex].status = tarea.status;
        return tarea;
    }


    deleteById(id) {

        let tareaIndex = this.tareas.findIndex(tarea => tarea.id === id);

        if (tareaIndex === -1)
            return;

        this.tareas.splice(tareaIndex, 1);
    }

    deleteAll() {
        this.tareas = [];
    }

    count() {
        return this.tareas.length;
    }

}

// ======================================= CREAR OBJETO BASE DE DATOS ==============================

let tareaDatabase = new TareaDatabase();


// ======================================= CREAR OBJETOS ACTIVITY ==============================

let reunionTrabajo = new Tarea(undefined, "Reunión proyecto", "Tareas CRUD", "En progreso", "Alta", new Date("2023-04-18"));
let sport = new Tarea(
    undefined,
    "Entrenamiento fuerza",
    "25kg sentadilla",
    "Pendiente",
    "Normal",
    new Date("2023-04-15")
);
let study = new Activity(
    undefined,
    "Casos practicos",
    "JavaScript",
    "Pendiente",
    "Alta",
    new Date("2023-04-14")
);


// ======================================= AÑADIR ACTIVITY A BASE DE DATOS: addActivity ==============================

reunionTrabajo = tareaDatabase.addTarea(reunionTrabajo); // id 1
console.log(reunionTrabajo.id);

sport = tareaDatabase.addTarea(sport); // id 2
console.log(sport.id);

study = tareaDatabase.addTarea(study); // id 3
console.log(study.id);




// ======================================= BUSCAR UNO: filterById ==============================

console.log(tareaDatabase.filterById(1));
console.log(tareaDatabase.filterById(999));



// ======================================= BUSCAR POR STATUS: filterByStatus ==============================

console.log(tareaDatabase.filterByStatus("Pendiente"));
console.log(tareaDatabase.filterByStatus("No existe"));



// ======================================= BUSCAR POR TITULO: filterByImportance ==============================

console.log(tareaDatabase.filterByImportance("Media"));
console.log(tareaDatabase.filterByImportance("No existe"));



// ======================================= ACTUALIZAR: upate ==============================

console.log(tareaDatabase.filterById(1));

let tarea1Edited = new Tarea(1, "modificado", undefined, "rechazado", undefined, undefined)
tareaDatabase.update(tarea1Edited);

console.log(tareaDatabase.filterById(1));

// probar a buscar un activity que no exista
let act999 = new Tarea(975, "modificado", undefined, "rechazado", undefined, undefined)
console.log(tareaDatabase.update(act999)); // undefined

// ======================================= ACTUALIZAR: upate2 ==============================
let original1 = tareaDatabase.filterById(1);
let act1 = new Tarea(1, "PRUEBA UPDATE2", original1.content, "STATUS UPDATE2", "IMPORTANCE UPDATE2", new Date("2028-01-01"));
tareaDatabase.update2(act1); // actualiza en base de datos

let act2 = {
    id: 2,
    title: "TITULO MODIFICADO DESDE UPDATE2"
}
tareaDatabase.update2(act2);


// ======================================= BORRAR: deleteById ==============================
console.log(tareaDatabase.count()); // before (5)
tareaDatabase.deleteById(2);
console.log(tareaDatabase.count()); // before - 1 (4)

// ======================================= BORRAR: deleteAll ==============================
console.log(tareaDatabase.count()); // (5)
tareaDatabase.deleteAll(); // borra todo
console.log(tareaDatabase.count()); // 0 (0)
