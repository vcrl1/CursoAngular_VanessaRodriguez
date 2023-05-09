import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from './user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent {
  //datos
  users: IUser[] = []
  user: IUser | undefined
  searched: boolean = false

  //inputs (ngModel)
  userEmail: string = "";
  searchEmail: string = "";

  constructor(private userService: UserService) {}
  

  save() {
    let user: IUser = {
      fullName: this.userEmail.split('@')[0],
      email: this.userEmail
    }
    this.userService.save(user)
    this.userEmail = "";
    this.users = this.userService.findAll();
  }
  findByEmail():void{
    this.user=this.userService.findByEmail(this.searchEmail)
    this.searchEmail=""
    this.searched=true

  }

}
