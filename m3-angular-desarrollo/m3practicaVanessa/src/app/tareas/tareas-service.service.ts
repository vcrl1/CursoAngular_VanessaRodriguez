import { Injectable } from '@angular/core';
import { ITareas } from './tareas.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareasServiceService {
  url: string = "http://localhost:3000/tareas";
  
  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<ITareas[]> {
    return this.httpClient.get<ITareas[]>(this.url);
  }

  findById(id: number): Observable<ITareas> {
    return this.httpClient.get<ITareas>(`${this.url}/${id}`);
  }

  create(author: ITareas): Observable<ITareas> {
    return this.httpClient.post<ITareas>(this.url, author);
  }

  update(author: ITareas): Observable<ITareas> {
    return this.httpClient.put<ITareas>(`${this.url}/${author.id}`, author);
  }

  deleteById(id: number): void {
    this.httpClient.delete(`${this.url}/${id}`);
  }
}
