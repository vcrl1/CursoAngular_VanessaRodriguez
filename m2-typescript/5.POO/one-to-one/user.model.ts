import { IAddress } from "./address.model";

export interface IUser{
    idUser:number;
    email:string;
    birthday:Date;
    phone:string;
    address: IAddress; //Asociación one to one. Unidireccional. (solo un lado tiene la asociación)

}