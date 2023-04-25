import { ISupermarket } from "./supermarket.model";
//Many productos se asocian a un supermercado
export interface IProducts{
    idProduct:number;
    title:string;
    price:number;
    quantity:number; //= stock
    supermarket?:ISupermarket
}