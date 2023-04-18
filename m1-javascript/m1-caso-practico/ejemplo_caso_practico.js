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
        let maxId = 0
        for (const currentActivity of this.activities) {
            if(currentActivity.id > maxId)
            maxId = currentActivity.id
        }
        console.log(`Valor id máximo: ${maxId}`)
        maxId++
        activity.id = maxId
        this.activities.push(activity)
        return activity
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
    activityDataBase.addActivity(activity2)