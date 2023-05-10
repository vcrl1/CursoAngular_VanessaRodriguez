import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url: string = "https://jsonplaceholder.typicode.com/todos"
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<any> {
    return this.httpClient.get(this.url)
  }
  findById(id: number): Observable<any> {
    return this.httpClient.get(`${this.url}/${id}`)
  }

  //Con un solo parámetro: ? completed=true
  //Con dos parámetros: ?param1=value1&param2=value2
  findAllByCompletedTrue(): Observable<any> {
    return this.httpClient.get(`${this.url}?completed=true`)
  }
  findAllByCompletedFalse(): Observable<any> {
    return this.httpClient.get(`${this.url}?completed=false`)
  }


  //findAllByCompletedFalse
  //save
  //update
  //deleteById
}
