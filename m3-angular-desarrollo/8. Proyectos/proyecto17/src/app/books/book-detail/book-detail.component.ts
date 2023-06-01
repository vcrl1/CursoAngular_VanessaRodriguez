import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/book.model';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit{
  book: IBook|undefined;
  constructor(private activatedRoute:ActivatedRoute,
              private bookService:BookService){}
              
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      const id=parseInt(params['id'], 10);
    this.bookService.findById(id).subscribe(data=> this.book=data)
    })
  }

}
