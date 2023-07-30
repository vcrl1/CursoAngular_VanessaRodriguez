import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasDetalleComponent } from './tareas-detalle/tareas-detalle.component';
import { TareasListaComponent } from './tareas-lista/tareas-lista.component';
import { TareasFormComponent } from './tareas-form/tareas-form.component';



@NgModule({
  declarations: [
    TareasDetalleComponent,
    TareasListaComponent,
    TareasFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TareasModule { }
