import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../models/book.model';
import { AuthorService } from 'src/app/authors/services/author.service';
import { IAuthor } from 'src/app/authors/models/author.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'sinopsis', 'release', 'numPages', 'price', 'actions'];
  books: IBook[] = [];
  authors: IAuthor[] = [];

  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    //Esto de aquí sirve para FILTRAR
    this.activatedRoute.params.subscribe(params => {
      const idString = params['authorId']
      if (idString) {
        const id = parseInt(idString, 10);
        this.bookService.findAllByAuthorId(id).subscribe(data => this.books = data)
      } else {
        this.bookService.findAll().subscribe(data => this.books = data)
      }
    })
    this.authorService.findAll().subscribe(data => this.authors = data);

  }

  deleteBook(book: IBook) {

  }

}
