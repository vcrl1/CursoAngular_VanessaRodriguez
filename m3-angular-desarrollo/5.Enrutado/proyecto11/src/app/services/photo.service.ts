import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhoto } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  url: string = "https://jsonplaceholder.typicode.com/photos";

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<IPhoto[]> {
    return this.httpClient.get<IPhoto[]>(this.url);
  }

  findById(id: number): Observable<IPhoto> {
    return this.httpClient.get<IPhoto>(`${this.url}/${id}`)
  }

}
