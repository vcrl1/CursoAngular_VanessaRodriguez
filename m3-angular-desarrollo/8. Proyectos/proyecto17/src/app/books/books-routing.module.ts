import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookGalleryComponent } from './book-gallery/book-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: ':id',
    component: BookDetailComponent
  },
  {
    path: 'gallery',
    component: BookGalleryComponent
  },
  {
    path: 'new',
    component: BookFormComponent
  },
  {
    path: ':id/edit',
    component: BookFormComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
