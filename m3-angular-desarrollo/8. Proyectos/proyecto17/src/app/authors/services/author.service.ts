import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthor } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  url: string = "http://localhost:3000/authors";

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<IAuthor[]> {
    return this.httpClient.get<IAuthor[]>(this.url);
  }

  findById(id: number): Observable<IAuthor> {
    return this.httpClient.get<IAuthor>(`${this.url}/${id}`);
  }

  create(book :IAuthor): Observable<IAuthor> {
    return this.httpClient.post<IAuthor>(this.url, book);
  }

  update(book: IAuthor): Observable<IAuthor> {
    return this.httpClient.put<IAuthor>(`${this.url}/${book.id}`, book);
  }

  deleteById(id: number): void {
    this.httpClient.delete(`${this.url}/${id}`);
  }
}
