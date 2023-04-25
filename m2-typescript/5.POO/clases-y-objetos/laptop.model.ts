//Modelos: son clases que son tablas en la base de datos.
//Al poner EXPORT se podría utilizar en otro archivo. 
export class Laptop {  
    constructor(private id: number,
        private ram: number,
        private cores: number,
        private manufacturer: string,
        private model: string
    ) { }


 public getFullName(){
    return `${this.manufacturer} ${this.model}`
 }

}