import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  url: string = "http://localhost:3000/auth";


  constructor(private httpClient: HttpClient) { }

  login(login: any): Observable<any> {
    return this.httpClient.post(`${this.url}/login`, login);
  }

  register(user: any): Observable<any> {
    return this.httpClient.post(`${this.url}/register`, user);
  }

  // ... más comprobaciones ...
  // comprobar un rol
  // comprobar si ha iniciado sesión
  // logout

}