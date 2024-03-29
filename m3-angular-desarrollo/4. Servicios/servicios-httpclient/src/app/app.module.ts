import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http' //Se ha añadido a mano
import { EventModule } from './event/event.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  //Se añade a mano.
    EventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
