import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  userForm = new FormGroup({
    email: new FormControl(''),
    fullName: new FormControl(''),
    age: new FormControl(''),
    salary: new FormControl(''),    
    isStudent: new FormControl(false),
    birthday: new FormControl(''),    

  });

  save() {
    console.log('Formulario enviado:', this.userForm.get('email')?.value);
    console.log('Formulario enviado:', this.userForm.get('fullName')?.value);
    console.log('Formulario enviado:', typeof this.userForm.get('age')?.value);
    console.log('Formulario enviado:', this.userForm.get('salary')?.value);
    console.log('Formulario enviado:', this.userForm.get('isStudent')?.value);
    console.log('Formulario enviado:', this.userForm.get('birthday')?.value);

    this.userForm.reset()
  }


}
