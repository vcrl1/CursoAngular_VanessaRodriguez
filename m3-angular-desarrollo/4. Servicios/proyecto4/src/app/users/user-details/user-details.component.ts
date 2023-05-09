import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from './user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent {
  userEmail: string = "";
  users: IUser[] = []

  constructor(private UserService: UserService) {
    this.users = this.UserService.findAll();
  }

  save() {
    let user: IUser = {
      fullName: this.userEmail.split('@')[0],
      email: this.userEmail
    }
    this.UserService.save(user)
    this.userEmail = "";
  }

}
