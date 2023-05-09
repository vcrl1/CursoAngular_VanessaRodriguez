import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { UserService } from './users/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule  //Hay que añadirlo
  ],
  providers: [
    UserService //Tb añadirlo para que funcione
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } //Hay que modificar el App.. por UserService (en este caso)
