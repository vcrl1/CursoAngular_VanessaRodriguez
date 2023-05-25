import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { UserFormValidationComponent } from './user-form-validation/user-form-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserFormValidationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
