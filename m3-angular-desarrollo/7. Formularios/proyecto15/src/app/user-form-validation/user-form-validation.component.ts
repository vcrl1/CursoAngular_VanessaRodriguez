import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form-validation',
  templateUrl: './user-form-validation.component.html',
  styleUrls: ['./user-form-validation.component.css']
})
export class UserFormValidationComponent {
  userForm = new FormGroup({
    email: new FormControl(''),
    fullName: new FormControl(''),
    age: new FormControl(''),
    salary: new FormControl(''),
    isStudent: new FormControl(false),
    birthday: new FormControl(''),
    entryHour: new FormControl(''),
    bookingDate: new FormControl(''),
    jobCategory: new FormControl(''),
    company: new FormControl(''),
    hobbies: new FormControl(''),
    bio: new FormControl(''),
    avatar: new FormControl(''),

  });

  save() {
    // Se mandaría a un servicio
    console.log('Formulario enviado:', this.userForm.get('email')?.value);
    console.log('Formulario enviado:', this.userForm.get('fullName')?.value);
    console.log('Formulario enviado:', typeof this.userForm.get('age')?.value);
    console.log('Formulario enviado:', this.userForm.get('salary')?.value);
    console.log('Formulario enviado:', this.userForm.get('isStudent')?.value);
    console.log('Formulario enviado:', this.userForm.get('birthday')?.value);
    console.log('Formulario enviado:', this.userForm.get('entryHour')?.value);
    console.log('Formulario enviado:', this.userForm.get('bookingDate')?.value);
    console.log('Formulario enviado:', this.userForm.get('jobCategory')?.value);
    console.log('Formulario enviado:', this.userForm.get('company')?.value);
    console.log('Formulario enviado:', this.userForm.get('hobbies')?.value);
    console.log('Formulario enviado:', this.userForm.get('bio')?.value);
    console.log('Formulario enviado:', this.userForm.get('avatar')?.value);

    this.userForm.reset()
  }

  imageSrc: string | undefined
  uploadFile(event: Event): void {       //Con esto puedo acceder a los archivos.
    let target = event.target as HTMLInputElement
    if (target.files !== null && target.files.length > 0) {
      let fileImg = target.files[0];

      //OPCIONAL para mostrar al usuario la imagen 
      let reader = new FileReader();
      reader.onload = ev => this.imageSrc = reader.result as string //qué hacer cuando se lea la imagen 
      reader.readAsDataURL(fileImg); //leer la imagen

    }
  }

}
