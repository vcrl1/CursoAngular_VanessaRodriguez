import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AuthorDetailComponent
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AuthorsModule { }
