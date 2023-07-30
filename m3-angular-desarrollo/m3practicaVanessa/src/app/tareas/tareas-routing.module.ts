import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasDetalleComponent } from './tareas-detalle/tareas-detalle.component';
import { TareasListaComponent } from './tareas-lista/tareas-lista.component';
import { TareasFormComponent } from './tareas-form/tareas-form.component';

const routes: Routes = [
  {
    path: '',
    component: TareasListaComponent
  },
  {
    path: 'new',
    component: TareasFormComponent
  },
  {
    path: ':id',
    component: TareasDetalleComponent
  },
  {
    path: ':id/edit',
    component: TareasFormComponent
  },

  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
