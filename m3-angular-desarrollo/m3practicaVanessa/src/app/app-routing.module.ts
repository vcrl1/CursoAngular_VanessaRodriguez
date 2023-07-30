import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'tareas',
  loadChildren: () => import('./tareas/tareas.module').then(m => m.TareasModule
    ) // lazy loading
},
{
  path: '', redirectTo: 'books', pathMatch: 'full'
},
{
  path: '**', redirectTo: 'books', pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
