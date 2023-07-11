import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])

  })

  constructor(private authService: AuthService, private router:Router) { }

  save() {

    let register = {
      username:this.userForm.get('username')?.value ?? '',
      email: this.userForm.get('email')?.value ?? '',
      password: this.userForm.get('password')?.value ?? ''
    }

    this.authService.register(register).subscribe(data => {
      console.log(data.token)
      //Guardar token para utilizarlo en las posteriores peticiones
      localStorage.setItem('jwt_token', data.token)

      //Una vez hecho el register navegas a los libros. 
      this.router.navigate(['/books'])
    })
  }
}
