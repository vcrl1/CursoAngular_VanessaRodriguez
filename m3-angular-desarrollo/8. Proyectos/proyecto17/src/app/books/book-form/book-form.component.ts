import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBook } from '../models/book.model';
import { BookService } from '../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from 'src/app/authors/services/author.service';
import { Observable } from 'rxjs';
import { IAuthor } from 'src/app/authors/models/author.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
/*
1. Agregar campo id en FormGroup
2. En HTML agregar un nuevo matformfield sisable que muestre id pero no lo edite
3. En save hace la distinción de guardar o editar
4. En loadForm hay que cargar el id
*/
export class BookFormComponent {

  bookForm = new FormGroup({
    id: new FormControl(0),
    title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    sinopsis: new FormControl('', [Validators.maxLength(1000)]),
    numPages: new FormControl(0, [Validators.min(30)]),
    //Si quiero que el precio sea opcional el que sea con decimales o no, se pondría una interrogación al final 
    price: new FormControl(0, [Validators.required, Validators.min(5), Validators.max(500), Validators.pattern('^[0-9]+([.,][0-9]{1,2})?$')]),
    release: new FormControl(new Date()),
    // photo: new FormControl(''),
    authorId: new FormControl(0, [Validators.required])

  });

  authors: IAuthor[] = []


  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authorService: AuthorService) { } //Enlazar autores a libros

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const idString = params['id']
      if (!idString) return;

      const id = parseInt(idString, 10);
      this.bookService.findById(id).subscribe(book => this.loadBookForm(book))
    })

    //Cargar los autores
    this.authorService.findAll().subscribe(data => this.authors = data) //authors creado lin36
  }


  loadBookForm(book: IBook): void {
    this.bookForm.reset({
      id: book.id,
      title: book.title,
      sinopsis: book.sinopsis,
      numPages: book.numPages,
      price: book.price,
      release: book.release,
      authorId: book.authorId
    })
  }


  save(): void {
    let id = this.bookForm.get('id')?.value ?? 0;
    let title = this.bookForm.get('title')?.value ?? '';
    let sinopsis = this.bookForm.get('sinopsis')?.value ?? '';
    let numPages = this.bookForm.get('numPages')?.value ?? 30;
    let price = this.bookForm.get('price')?.value ?? 5;
    let release = this.bookForm.get('release')?.value ?? new Date();
    let photo = "http://dummyimage.com/217x100.png/cc0000/ffffff"
    let authorId = this.bookForm.get('authorId')?.value ?? 0;
    // TODO añadir validación extra de datos, si alguno está mal hacer return y mostrar error y no guardar.

    let book: IBook = {
      id: id,
      title: title ?? '',
      sinopsis: sinopsis ?? '',
      release: release,
      numPages: numPages,
      photo: photo,
      price: price,
      authorId: 0
    }

    if (id === 0) //Crear nuevo libro
      this.bookService.create(book).subscribe(book => this.router.navigate(['/books', book.id]));
    else //Editar libro existente
      this.bookService.update(book).subscribe(book => this.router.navigate(['/books', book.id]));

  }

}

