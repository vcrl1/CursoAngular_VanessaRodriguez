import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejemplo1Component,
    Ejemplo2Component,
    RestaurantesComponent,
    CustomerListComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
