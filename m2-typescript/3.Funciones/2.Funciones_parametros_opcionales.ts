
//Interrogante al lado de un parámetro es que es un valor opcional
function saludarPersona1(firstName: string, age?: number): void //VOID: cuando no devuelve nada. 
    {console.log(`${firstName} con edad ${age}`)
}
//Si no se especifica el argumento opcional entonces tomará valor undefined
saludarPersona1("Persona 1")
saludarPersona1("Persona 1", 89)


// Función con parámetro opcional con IF
function saludarPersona2(firstName: string, age?: number): void //cuando no devuelve nada.
{
    if (age===undefined){
    console.log(`${firstName} con edad desconocida`)
    return;}
    console.log(`${firstName} con edad ${age}`)
}

saludarPersona2("Persona 2")
saludarPersona2("Persona 2",70)



// Función con parámetro opcional con OPERADOR TERNARIO ? :

function saludarPersona3(firstName: string, age?: number): void //cuando no devuelve nada.
{
    age===undefined ?
    console.log(`${firstName} con edad desconocida`):
    console.log(`${firstName} con edad ${age}`)
}

saludarPersona3("Persona 3")
saludarPersona3("Persona 3",30)


//Función asignar valor por defecto a variable opcional con OPERADOR ?? 
function saludarPersona4(firstName: string, age?: number): void //cuando no devuelve nada.
{
    console.log(`${firstName} con edad ${age ?? 18}`)
}
saludarPersona4("Persona 4")
saludarPersona4("Persona 4", 40)



//A nivel de código limpio o clean code
//Cuanto menos parámetros tega una función más fácil será de mantener y testear. 
