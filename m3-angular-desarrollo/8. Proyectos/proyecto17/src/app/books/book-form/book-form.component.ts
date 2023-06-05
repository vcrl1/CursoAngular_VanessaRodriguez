import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBook } from '../models/book.model';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    sinopsis: new FormControl('', [Validators.maxLength(1000)]),
    // release: new FormControl(null, [Validators.required]),
    // numPages: new FormControl(0, [Validators.min(30)]),
    // price: new FormControl(0, [Validators.required, Validators.min(5), Validators.max(500)]),
    // photo: new FormControl(''),
    // authorId: new FormControl(null, [Validators.required])

  });

  constructor(private bookService: BookService, private router: Router) {}

  save(): void {
    let title = this.bookForm.get('title')?.value;
    let sinopsis = this.bookForm.get('sinopsis')?.value;

    // TODO añadir validación extra de datos, si alguno está mal hacer return y mostrar error y no guardar.
    
    let book: IBook = {
      id: 0,
      title: title ?? '',
      sinopsis: sinopsis ?? '',
      release: new Date(),
      numPages: 0,
      photo: '',
      price: 0,
      authorId: 0
    }

    this.bookService.create(book).subscribe(book => this.router.navigate(['/books', book.id]));
  }

}
