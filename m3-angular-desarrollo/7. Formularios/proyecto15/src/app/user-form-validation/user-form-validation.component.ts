import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, Form, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-user-form-validation',
  templateUrl: './user-form-validation.component.html',
  styleUrls: ['./user-form-validation.component.css']
})
export class UserFormValidationComponent {

  userForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, this.notWhiteSpacesValidator]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nickName: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    salary: new FormControl(null, [Validators.required, Validators.min(16500), Validators.max(100000)]),
    // pattern : nif, username, número de teléfono
    nif: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{8}[A-Z]$')]),
    phone: new FormControl('', [Validators.pattern('^[679]{1}[0-9]{8}$')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9%&$/()]{8,20}$')]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9%&$/()]{8,20}$')])

    // validator confirmar contraseña
  }, { validators: this.passwordConfirmValidator });

  save(): void {
    if (this.userForm.valid) {
      // Crear objeto con los datos del formulario y enviar al backend

      console.log("Formulario correcto");
    } else {
      console.log("Formulario incorrecto, tiene errores de validación");
    }
    console.log(this.userForm.get('nickName'));
  }
  // Validator personalizado a nivel de FormGroup: dos campos distintos
  passwordConfirmValidator(control: AbstractControl) {
    if (control.get('password')?.value === control.get('passwordConfirm')?.value)
      return null; // si son iguales no hay error
    else
      return { 'confirmError': true }; // si son distintas sí hay error
  }
  // Validador personalizado a nivel de FormControl: si hay espacios mostrará error
  notWhiteSpacesValidator(control: AbstractControl) {
    let containSpaces = (control.value || '').includes(' ');
    if (containSpaces)
      return { 'whitespaceError': true }; // Si contiene espacios sí hay un error
    else
      return null; // si no contiene espacios está bien
  }

}
