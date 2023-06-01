import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookGalleryComponent } from './book-gallery/book-gallery.component';
import { MatIconModule } from '@angular/material/icon';
import {  HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import{MatGridListModule}from '@angular/material/grid-list'

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BookFormComponent,
    BookGalleryComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    SharedModule,
    MatGridListModule,
  ]
})
export class BooksModule { }
