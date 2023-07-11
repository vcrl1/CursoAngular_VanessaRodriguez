import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimitLongTextPipe } from './limit-long-text.pipe';
import { ConstantComponent } from './constants';



@NgModule({
  declarations: [
    LimitLongTextPipe,
    ConstantComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LimitLongTextPipe
  ]
})
export class SharedModule { }
