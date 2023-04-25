//IMPORT sirve para importar clases de otros archivos.
import { Laptop } from "./laptop.model";

const laptop1= new Laptop (1,8,4,"Asus","JJK")
console.log(laptop1.getFullName())

//al ser privado no se puede acceder
//seria necesario un método PUBLIC
