import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

export interface Token {
  sub: number; // id del usuario
  email: string;
  role: string;
  exp: number; // timestamp con la fecha de expiración
  iat: number; // Issued At: campo con la fecha de emisión del token
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  url: string = "http://localhost:3000/auth";


  constructor(private httpClient: HttpClient, private router: Router) { }

  login(login: any): Observable<any> {
    return this.httpClient.post(`${this.url}/login`, login);
  }

  register(user: any): Observable<any> {
    return this.httpClient.post(`${this.url}/register`, user);
  }

  logout() {
    localStorage.removeItem('jwt_token'); //Cerrar sesión
    this.router.navigate(['/auth/login']) //Después te redirige 
  }

  isLoggedIn(){
  return localStorage.getItem('jwt_token')!==null
  }

  isAdmin() {
    let token = localStorage.getItem('jwt_token') ?? '';

    try {

      let decoded_token: Token = jwt_decode(token);

      let isAdmin = decoded_token.role === 'admin';

      console.log(isAdmin);

      return isAdmin;

    } catch (error) {
      console.log(error);
    }
    return false;

  }

}