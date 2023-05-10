import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url: string = "https://jsonplaceholder.typicode.com/todos"
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<IEvent[]> {
    return this.httpClient.get<IEvent[]>(this.url)
  }
  findById(id: number): Observable<IEvent> {
    return this.httpClient.get<IEvent>(`${this.url}/${id}`)
  }

  //Con un solo parámetro: ? completed=true
  //Con dos parámetros: ?param1=value1&param2=value2
  findAllByCompletedTrue(): Observable<IEvent[]> {
    return this.httpClient.get<IEvent[]>(`${this.url}?completed=true`)
  }
  findAllByCompletedFalse(): Observable<IEvent[]> {
    return this.httpClient.get<IEvent[]>(`${this.url}?completed=false`)
  }


  //create. Crear un nuevo objeto ToDo Event en el servidor.
  create(event: IEvent): Observable<IEvent> {
    return this.httpClient.post<IEvent>(this.url, event) //POST recibe un segundo parámetro (en este caso, this.url, event)
  }

  //update
  //deleteById
}
