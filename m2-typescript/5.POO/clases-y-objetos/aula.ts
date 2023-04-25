class Aula {
    constructor(private id: number, private capacidad:number, private ventilacion: boolean ){}
    
    getCapacidad(){
        return this.capacidad
    }
    setCapacidad(capacidad: number){
        this.capacidad=capacidad>0 && capacidad<=40 ? capacidad : this.capacidad
    }

}

//Crear objetos
const aulaCursoAngular= new Aula (1, 30, true)
const aulaReuniones=new Aula(2, 3, false)
const aulaAnalisisDatos= new Aula(3, 20, true)
//Imprimir objetos
console.log(aulaCursoAngular);
// console.log(aulaCursoAngular.ventilacion); ERROR!!! No se puede acceder a un parámetro concreto porque son privados. 
console.log(aulaReuniones);
console.log(aulaAnalisisDatos);

//Al ser privados hay que crear SET y GET para poder modificar 
aulaCursoAngular.setCapacidad(35) // Debería dejar 
console.log(aulaCursoAngular.getCapacidad())


aulaAnalisisDatos.setCapacidad(80)
console.log(aulaAnalisisDatos.getCapacidad()) //Como tenemos límite 40, se queda con la capacidad indicada anteriormente y no hace el cambio.


