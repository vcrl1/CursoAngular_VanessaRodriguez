import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  /*
  'body' esto es el valor por defecto y recibirás el curpo de la respuesta
  'response' datá aceso completo al objeto HttpResponse, que incluye cuerpo de la respuesta
  como metadatos adicinales como el estado de la respuesta y los headers
  Observe: tiene por defecto valor 'body' para traer solo los datos
  */

  url: string = "https://jsonplaceholder.typicode.com/users"
  httpOptions = { observe: 'response' as 'body' }

  findAll(): Observable<HttpResponse<IUser[]>> {
    return this.httpClient.get<HttpResponse<IUser[]>>(this.url, this.httpOptions)
  }




}
