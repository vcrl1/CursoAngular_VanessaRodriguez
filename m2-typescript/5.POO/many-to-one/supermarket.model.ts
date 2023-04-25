import { IProducts } from "./product.model";
//Asociación one supermarket many products
export interface ISupermarket{
    idSupermarket:number;
    brandName:string;
    m2:number;
    numEmployees:number;
    products: IProducts[];

}
