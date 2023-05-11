import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; //importamos lo que hemos añadido
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //Añadimos e importamos arriba
    UsersModule //Añadimos e importamos arriba
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
