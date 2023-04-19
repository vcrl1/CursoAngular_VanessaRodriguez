/* 
• Añadir una nueva tarea
• Devolver todas las tareas
• Devolver todas las tareas filtrando por estado
• Devolver todas las tareas filtrando por prioridad
• Actualizar una tarea
• Eliminar una tarea
*/

//Paso 1: Crear una clase Activity
class Activity {
    constructor(id, title, content, status, importance) {
        this.id = id
        this.title = title
        this.content = content
        this.status = status
        this.importance = importance
    }

}

//Paso 2: Crear una clase con métodos para trabajar con objetos Activity
//Estructura de datos es un array

class ActivityDataBase {
    constructor() {
        this.activities = []

    }

    //Método para añadir actividades
    addActivity(activity) {
        //Generar el nuevo id que tendrá el Array. Con un bucle for o con la clase Math calcular el id más alto de todos los ids
        //     let maxId = 0
        //     for (const currentActivity of this.activities) {
        //         if (currentActivity.id > maxId)
        //             maxId = currentActivity.id
        //     }
        //     console.log(`Valor id máximo: ${maxId}`)
        //     maxId++
        //     activity.id = maxId
        //     this.activities.push(activity)
        //     return activity
        // }

        /*
         Para simular una base de datos, generamos un id (1, 2, 3, ...) único para cada Activity
         con un bucle for o con la clase Math calcular el id más alto de todos los ids 
         */
        activity.id = this.#generateNextId2();
        this.activities.push(activity);
        return activity;
    }


    #generateNextId() {
        let maxId = 0;
        for (const currentActivity of this.activities) {
            if (currentActivity.id > maxId)
                maxId = currentActivity.id;
        }
        return ++maxId;
    }
    #generateNextId2() {
        if (this.activities.length === 0)
            return 1;

        let ids = this.activities.map(activity => activity.id)
        console.log(ids)
    }


    findAll() {
        return this.activities;
    }

    filterById(id) {  // filtrar por ID filterById(1)
        return this.activities.filter(activity => activity.id === id);
    }

    filterByStatus(status) { //devuelve una estructura de datos filterByStatus("En progreso");
        return this.activities.filter(activity => activity.status === status);
    }

    filterByTitle(title) { //filterByTitle("Reunión");
        return this.activities.filter(activity => activity.title.includes(title));
    }

    // modifica un objeto activity que ya existe en el array de activities
    update(activity) {

        let activityIndex = this.activities.findIndex(
            currentActivity => currentActivity.id === activity.id
        );

        this.activities[activityIndex].title = activity.title;
        this.activities[activityIndex].status = activity.status;
    }

    deleteById(id) {

        let activityIndex = this.activities.findIndex(activity => activity.id === id);

        this.activities.splice(activityIndex, 1);
    }
}


//Paso 3: Crear objetos

let activityDataBase = new ActivityDataBase()
let activity1 = new Activity(
    undefined,
    "Reunion JS",
    "Tratar caso práctico",
    "En progreso",
    "Media",
    new Date("2023-04-19"))
let activity2 = new Activity(
    undefined,
    "Entrenamiento",
    "Correr 5km",
    "En progreso",
    "Media",
    new Date("2023-04-19"))
let activity3 = new Activity(
    undefined,
    "Reunion JS",
    "Terminado",
    "Baja",
    new Date("2023-04-17"))
let activity4 = new Activity(
    undefined,
    "Estudiar",
    "JavaScript",
    "Sin empezar",
    "Alta",
    new Date("2023-04-18"))

activityDataBase.addActivity(activity1)
console.log("1ra " + activity1.id)

activity3 = activityDataBase.addActivity(activity2)
console.log("2da " + activity3.id)

activity2 = activityDataBase.addActivity(activity3)
console.log("3ra " + activity2.id)



let ids = [1, 2, 5, 8, 4]
let maxNumber = Math.max(...ids)
console.log(maxNumber)


let activitya = activityDatabase.filterById(1);
let activityb = activityDatabase.filterById(2);
let activitiesByStatus = activityDatabase.filterByStatus("Pendiente");
let activitiesByTitle = activityDatabase.filterByTitle("Entrenamiento");

activityDatabase.deleteById(2);



// ======================================= ACTUALIZAR ==============================

console.log(activityDatabase.filterById(1));

let activity1Edited = new Activity(1, "modificado", undefined, "rechazado", undefined, undefined)
activityDatabase.update(activity1Edited);

console.log(activityDatabase.filterById(1));

// ======================================= ACTUALIZARBUAXe uno: filterById ==============================
console.log(activityDataBase.filterById(1))
console.log(activityDataBase.filterById(999))
