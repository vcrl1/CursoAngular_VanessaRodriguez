import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/category.model';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: string = "http://localhost:3000/categories";

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(this.url);
  }

  findById(id: number): Observable<ICategory> {
    return this.httpClient.get<ICategory>(`${this.url}/${id}`);
  }

  create(category :ICategory): Observable<ICategory> {
    return this.httpClient.post<ICategory>(this.url, category);
  }

  update(category: ICategory): Observable<ICategory> {
    return this.httpClient.put<ICategory>(`${this.url}/${category.id}`, category);
  }

  deleteById(id: number): void {
    this.httpClient.delete(`${this.url}/${id}`);
  }
}
