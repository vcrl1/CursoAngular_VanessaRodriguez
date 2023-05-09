import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule //Se añade esto para que funcione
  ],
  exports: [ //Hay que añadir esto tb para que funcione
    UserDetailsComponent

  ]
})
export class UsersModule { }
