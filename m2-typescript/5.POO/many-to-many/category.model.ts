import { IFilm } from "./film.model";

export interface ICategory{
    idCategory:number;
    fullName:string;
    color:string;
    minAge:number;
    films?:IFilm[]
}