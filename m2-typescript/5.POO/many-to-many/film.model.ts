import { ICategory } from "./category.model";

export interface IFilm{
    idFilm:number;
    title:string;
    minutes:number;
    rating:number;
    year:number;
    category: ICategory[] // con los corchetes [] significa que está asociada a varias categorías
}